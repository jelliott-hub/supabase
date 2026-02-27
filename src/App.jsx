import { useState, useRef, useEffect, useCallback, useMemo } from "react";
import { SCHEMA_DATA, FOREIGN_KEYS, LOGICAL_CONNECTIONS, TABLE_COMMENTS, TABLE_TYPES, SCHEMA_COLORS } from "./schemaData.js";

const SCHEMAS = {};
Object.entries(SCHEMA_DATA).forEach(([key, val]) => {
  const schema = val.schema;
  if (!SCHEMAS[schema]) SCHEMAS[schema] = {};
  SCHEMAS[schema][val.name] = val;
});

const SCHEMA_ORDER = ["public", "sandbox", "validated", "canonical", "call_data", "meta", "finance", "kb"];

function TableCard({ schema, tableName, table, position, onMouseDown, isSelected, onColumnClick, selectedColumn, drawingFrom, annotations, onAnnotate }) {
  const color = SCHEMA_COLORS[schema] || "#888";
  const [editingCol, setEditingCol] = useState(null);
  const [annotationText, setAnnotationText] = useState("");
  const tableKey = `${schema}.${tableName}`;
  const comment = TABLE_COMMENTS[tableKey] || "";
  const objType = TABLE_TYPES[tableKey] || "table";
  const isView = objType === "view" || objType === "materialized_view";

  return (
    <div
      className="absolute select-none"
      style={{ left: position.x, top: position.y, zIndex: isSelected ? 50 : 10 }}
      onMouseDown={(e) => onMouseDown(e, tableKey)}
    >
      <div
        className="rounded-lg overflow-hidden shadow-lg border"
        style={{
          minWidth: 270, maxWidth: 340,
          background: "#1a1a2e",
          borderColor: isSelected ? color : "#2a2a3e",
          borderWidth: isSelected ? 2 : 1,
          opacity: isView ? 0.85 : 1,
        }}
      >
        <div className="px-3 py-1.5 flex items-center gap-2" style={{ background: color + "18", borderBottom: `2px solid ${color}55` }}>
          <span className="font-mono px-1.5 py-0.5 rounded flex-shrink-0" style={{ background: color + "25", color, fontSize: 9 }}>{schema}</span>
          {isView && <span className="px-1 py-0.5 rounded" style={{ background: "#ffffff11", color: "#999", fontSize: 8 }}>{objType === "materialized_view" ? "MVIEW" : "VIEW"}</span>}
          <span className="font-bold text-gray-100 truncate" style={{ fontSize: 11 }}>{tableName}</span>
          <span className="text-gray-600 ml-auto flex-shrink-0" style={{ fontSize: 9 }}>{table.columns.length}c</span>
        </div>
        {comment && (
          <div className="px-3 py-1 border-b border-gray-800/50 leading-tight" style={{ fontSize: 9, color: "#888" }}>
            {comment.length > 120 ? comment.slice(0, 120) + "…" : comment}
          </div>
        )}
        <div className="py-0.5" style={{ maxHeight: 420, overflowY: "auto" }}>
          {table.columns.map((col) => {
            const colKey = `${schema}.${tableName}.${col.name}`;
            const isColSelected = selectedColumn === colKey || drawingFrom === colKey;
            const annotation = annotations[colKey];
            return (
              <div key={col.name}>
                <div
                  className="px-2.5 py-0.5 flex items-center gap-1.5 cursor-pointer transition-colors hover:bg-white/5"
                  style={{ background: isColSelected ? color + "18" : "transparent" }}
                  onClick={(e) => { e.stopPropagation(); onColumnClick(colKey); }}
                  onDoubleClick={(e) => { e.stopPropagation(); setEditingCol(colKey); setAnnotationText(annotation || col.comment || ""); }}
                >
                  <span className="flex-shrink-0 w-3 text-center" style={{ fontSize: 8 }}>
                    {col.is_pk ? "🔑" : col.nullable === false ? "●" : ""}
                  </span>
                  <span className="font-mono text-gray-200 truncate" style={{ fontSize: 10.5 }}>{col.name}</span>
                  <span className="text-gray-600 ml-auto flex-shrink-0" style={{ fontSize: 9 }}>{col.type}</span>
                  <div
                    className="w-2 h-2 rounded-full border flex-shrink-0 transition-colors"
                    style={{ borderColor: isColSelected ? color : "#444", background: isColSelected ? color : "transparent" }}
                  />
                </div>
                {editingCol === colKey && (
                  <div className="px-2.5 py-1 flex gap-1">
                    <input
                      autoFocus
                      className="bg-gray-800 text-gray-200 rounded px-2 py-0.5 flex-1 outline-none border border-gray-600 focus:border-blue-400"
                      style={{ fontSize: 10 }}
                      value={annotationText}
                      onChange={(e) => setAnnotationText(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") { onAnnotate(colKey, annotationText); setEditingCol(null); }
                        if (e.key === "Escape") setEditingCol(null);
                      }}
                      placeholder="Add definition..."
                    />
                    <button style={{ fontSize: 11, color: "#4ade80" }} onClick={() => { onAnnotate(colKey, annotationText); setEditingCol(null); }}>✓</button>
                  </div>
                )}
                {annotation && editingCol !== colKey && (
                  <div className="px-2.5 pb-0.5 ml-5">
                    <span className="italic px-1.5 py-0.5 rounded" style={{ color, background: color + "10", fontSize: 9 }}>{annotation}</span>
                  </div>
                )}
                {!annotation && col.comment && editingCol !== colKey && (
                  <div className="px-2.5 pb-0.5 ml-5">
                    <span className="px-1.5 py-0.5 rounded" style={{ color: "#555", fontSize: 8 }}>{col.comment.length > 80 ? col.comment.slice(0, 80) + "…" : col.comment}</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function ConnectionsSVG({ connections, positions, canvasOffset }) {
  return (
    <svg className="absolute inset-0 pointer-events-none" style={{ width: "400%", height: "400%", transform: `translate(${-canvasOffset.x}px, ${-canvasOffset.y}px)` }}>
      {connections.map((conn, i) => {
        const fp = conn.from.split(".");
        const tp = conn.to.split(".");
        const fk = `${fp[0]}.${fp[1]}`;
        const tk = `${tp[0]}.${tp[1]}`;
        const fPos = positions[fk];
        const tPos = positions[tk];
        if (!fPos || !tPos) return null;
        const fTable = SCHEMA_DATA[fk];
        const tTable = SCHEMA_DATA[tk];
        if (!fTable || !tTable) return null;
        const fIdx = fTable.columns.findIndex(c => c.name === fp[2]);
        const tIdx = tTable.columns.findIndex(c => c.name === tp[2]);
        if (fIdx < 0 || tIdx < 0) return null;

        const cH1 = TABLE_COMMENTS[fk] ? 22 : 0;
        const cH2 = TABLE_COMMENTS[tk] ? 22 : 0;
        const hH = 30;
        const rH = 19;
        const x1 = fPos.x + 310;
        const y1 = fPos.y + hH + cH1 + 10 + fIdx * rH;
        const x2 = tPos.x;
        const y2 = tPos.y + hH + cH2 + 10 + tIdx * rH;
        const isFk = conn.type === "fk";
        const isUser = conn.type === "user";
        const color = isFk ? "#6366f1" : isUser ? "#22c55e" : "#f59e0b";
        const mx = (x1 + x2) / 2;

        return (
          <g key={`${conn.from}-${conn.to}-${i}`}>
            <path d={`M ${x1} ${y1} C ${mx} ${y1}, ${mx} ${y2}, ${x2} ${y2}`} stroke={color} strokeWidth={isFk ? 2 : 1.5} strokeDasharray={isFk ? "none" : "5 3"} fill="none" opacity={0.55} />
            <circle cx={x1} cy={y1} r={2.5} fill={color} opacity={0.7} />
            <circle cx={x2} cy={y2} r={2.5} fill={color} opacity={0.7} />
            {conn.label && <text x={mx} y={(y1 + y2) / 2 - 5} fill={color} fontSize={8} textAnchor="middle" fontFamily="monospace" opacity={0.65}>{conn.label}</text>}
          </g>
        );
      })}
    </svg>
  );
}

export default function SchemaExplorer() {
  const [positions, setPositions] = useState({});
  const [dragging, setDragging] = useState(null);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [selectedTable, setSelectedTable] = useState(null);
  const [selectedColumn, setSelectedColumn] = useState(null);
  const [drawingFrom, setDrawingFrom] = useState(null);
  const [userConnections, setUserConnections] = useState([]);
  const [annotations, setAnnotations] = useState({});
  const [canvasOffset, setCanvasOffset] = useState({ x: 0, y: 0 });
  const [canvasDragging, setCanvasDragging] = useState(false);
  const [canvasDragStart, setCanvasDragStart] = useState({ x: 0, y: 0 });
  const [showFKs, setShowFKs] = useState(true);
  const [showLogical, setShowLogical] = useState(false);
  const [showUserConns, setShowUserConns] = useState(true);
  const [drawMode, setDrawMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeSchema, setActiveSchema] = useState("all");
  const [showViews, setShowViews] = useState(true);
  const containerRef = useRef(null);

  useEffect(() => {
    const pos = {};
    const colWidth = 380;
    SCHEMA_ORDER.forEach((schema, si) => {
      const tbl = SCHEMAS[schema] || {};
      const names = Object.keys(tbl).sort((a, b) => {
        const av = a.startsWith("v_") ? 1 : 0;
        const bv = b.startsWith("v_") ? 1 : 0;
        return av !== bv ? av - bv : a.localeCompare(b);
      });
      let yOff = 50;
      names.forEach((t) => {
        const cc = tbl[t].columns.length;
        const h = Math.min(cc * 19 + 70, 480);
        pos[`${schema}.${t}`] = { x: 50 + si * colWidth, y: yOff };
        yOff += h + 20;
      });
    });
    setPositions(pos);
  }, []);

  const handleMouseDown = useCallback((e, tableKey) => {
    if (e.button === 2) return;
    e.stopPropagation();
    setSelectedTable(tableKey);
    if (!drawMode) {
      const p = positions[tableKey] || { x: 0, y: 0 };
      setDragging(tableKey);
      setDragOffset({ x: e.clientX - p.x + canvasOffset.x, y: e.clientY - p.y + canvasOffset.y });
    }
  }, [positions, drawMode, canvasOffset]);

  const handleCanvasMouseDown = useCallback((e) => {
    if (e.target === containerRef.current || e.target.tagName === "svg") {
      setSelectedTable(null); setSelectedColumn(null); setDrawingFrom(null);
      setCanvasDragging(true);
      setCanvasDragStart({ x: e.clientX + canvasOffset.x, y: e.clientY + canvasOffset.y });
    }
  }, [canvasOffset]);

  const handleMouseMove = useCallback((e) => {
    if (dragging) {
      setPositions(p => ({ ...p, [dragging]: { x: e.clientX - dragOffset.x + canvasOffset.x, y: e.clientY - dragOffset.y + canvasOffset.y } }));
    }
    if (canvasDragging) {
      setCanvasOffset({ x: canvasDragStart.x - e.clientX, y: canvasDragStart.y - e.clientY });
    }
  }, [dragging, dragOffset, canvasDragging, canvasDragStart]);

  const handleMouseUp = useCallback(() => { setDragging(null); setCanvasDragging(false); }, []);

  const handleColumnClick = useCallback((colKey) => {
    if (drawMode) {
      if (!drawingFrom) { setDrawingFrom(colKey); setSelectedColumn(colKey); }
      else if (drawingFrom !== colKey) {
        const label = prompt("Connection label:", "");
        if (label !== null) setUserConnections(p => [...p, { from: drawingFrom, to: colKey, label: label || "user-defined" }]);
        setDrawingFrom(null); setSelectedColumn(null);
      } else { setDrawingFrom(null); setSelectedColumn(null); }
    } else { setSelectedColumn(selectedColumn === colKey ? null : colKey); }
  }, [drawMode, drawingFrom, selectedColumn]);

  const handleAnnotate = useCallback((k, t) => {
    setAnnotations(p => { const n = { ...p }; if (t) n[k] = t; else delete n[k]; return n; });
  }, []);

  const exportData = useCallback(() => {
    const data = {
      _meta: { exported_at: new Date().toISOString(), total_objects: Object.keys(SCHEMA_DATA).length, total_columns: Object.values(SCHEMA_DATA).reduce((a, t) => a + t.columns.length, 0), schemas: SCHEMA_ORDER },
      connections: { foreign_keys: FOREIGN_KEYS, logical: LOGICAL_CONNECTIONS, user_defined: userConnections },
      annotations,
      table_comments: TABLE_COMMENTS,
      schema: SCHEMA_DATA,
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a"); a.href = url; a.download = "b4all-schema-map.json"; a.click();
    URL.revokeObjectURL(url);
  }, [userConnections, annotations]);

  const visibleTables = useMemo(() => {
    const fs = activeSchema === "all" ? SCHEMA_ORDER : [activeSchema];
    const result = [];
    fs.forEach(schema => {
      Object.entries(SCHEMAS[schema] || {}).forEach(([name, table]) => {
        const key = `${schema}.${name}`;
        const type = TABLE_TYPES[key] || "table";
        if (!showViews && (type === "view" || type === "materialized_view")) return;
        if (searchQuery) {
          const q = searchQuery.toLowerCase();
          if (!name.toLowerCase().includes(q) && !schema.toLowerCase().includes(q) && !table.columns.some(c => c.name.toLowerCase().includes(q)) && !(TABLE_COMMENTS[key] || "").toLowerCase().includes(q)) return;
        }
        result.push({ schema, name, table, key });
      });
    });
    return result;
  }, [activeSchema, searchQuery, showViews]);

  const allConnections = useMemo(() => {
    let c = [];
    if (showFKs) c = c.concat(FOREIGN_KEYS.map(x => ({ ...x, type: "fk", label: "FK" })));
    if (showLogical) c = c.concat(LOGICAL_CONNECTIONS.map(x => ({ ...x, type: "logical" })));
    if (showUserConns) c = c.concat(userConnections.map(x => ({ ...x, type: "user" })));
    return c;
  }, [showFKs, showLogical, showUserConns, userConnections]);

  const stats = useMemo(() => ({
    total: Object.keys(SCHEMA_DATA).length,
    cols: Object.values(SCHEMA_DATA).reduce((a, t) => a + t.columns.length, 0),
  }), []);

  return (
    <div className="w-full h-screen flex flex-col" style={{ background: "#0a0a18", fontFamily: "'JetBrains Mono', 'Fira Code', ui-monospace, monospace" }}>
      <div className="flex items-center gap-2 px-3 py-1.5 border-b border-gray-800/80 flex-shrink-0 flex-wrap" style={{ background: "#0e0e20" }}>
        <span style={{ color: "#6366f1", fontSize: 14 }}>⬡</span>
        <span className="font-bold text-gray-100" style={{ fontSize: 11 }}>B4ALL Schema</span>
        <span className="text-gray-600" style={{ fontSize: 9 }}>{stats.total} obj · {stats.cols} col</span>

        <div className="flex items-center gap-0.5 ml-3">
          <button className="px-2 py-0.5 rounded" style={{ fontSize: 9, background: activeSchema === "all" ? "#333" : "transparent", color: activeSchema === "all" ? "#fff" : "#666" }} onClick={() => setActiveSchema("all")}>ALL</button>
          {SCHEMA_ORDER.map(s => (
            <button key={s} className="px-2 py-0.5 rounded" style={{ fontSize: 9, background: activeSchema === s ? SCHEMA_COLORS[s] + "33" : "transparent", color: activeSchema === s ? SCHEMA_COLORS[s] : "#555" }} onClick={() => setActiveSchema(activeSchema === s ? "all" : s)}>{s}</button>
          ))}
        </div>

        <input className="bg-gray-800/50 text-gray-200 rounded px-2.5 py-1 ml-2 outline-none border border-gray-700/50 focus:border-indigo-500/50" style={{ fontSize: 10, width: 170 }} placeholder="Search..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />

        <div className="flex items-center gap-2 ml-auto">
          {[["views", showViews, setShowViews, "#888"], ["FK", showFKs, setShowFKs, "#6366f1"], ["Logical", showLogical, setShowLogical, "#f59e0b"], ["Custom", showUserConns, setShowUserConns, "#22c55e"]].map(([l, v, sv, c]) => (
            <label key={l} className="flex items-center gap-1 cursor-pointer" style={{ fontSize: 9, color: c }}>
              <input type="checkbox" checked={v} onChange={(e) => sv(e.target.checked)} style={{ width: 10, height: 10 }} />{l}
            </label>
          ))}
          <button className="px-2 py-1 rounded font-bold" style={{ fontSize: 10, background: drawMode ? "#ef4444" : "#252535", color: drawMode ? "#fff" : "#999" }} onClick={() => { setDrawMode(!drawMode); setDrawingFrom(null); setSelectedColumn(null); }}>✏️ {drawMode ? "Drawing" : "Draw"}</button>
          {userConnections.length > 0 && <button className="px-1.5 py-1 rounded" style={{ fontSize: 9, color: "#f87171" }} onClick={() => setUserConnections(p => p.slice(0, -1))}>Undo</button>}
          <button className="px-2.5 py-1 rounded font-bold" style={{ fontSize: 10, background: "#6366f122", color: "#818cf8" }} onClick={exportData}>⬇ Export</button>
        </div>
      </div>

      {drawMode && (
        <div className="flex items-center justify-center py-1" style={{ background: "#ef444418", fontSize: 10, color: "#fca5a5" }}>
          {drawingFrom ? <span>🔗 From <strong>{drawingFrom}</strong> — click destination</span> : <span>Click column dots to connect · Double-click to annotate</span>}
        </div>
      )}

      <div ref={containerRef} className="flex-1 relative overflow-hidden" style={{ cursor: canvasDragging ? "grabbing" : "grab" }} onMouseDown={handleCanvasMouseDown} onMouseMove={handleMouseMove} onMouseUp={handleMouseUp} onMouseLeave={handleMouseUp}>
        <ConnectionsSVG connections={allConnections} positions={positions} canvasOffset={canvasOffset} />
        <div style={{ transform: `translate(${-canvasOffset.x}px, ${-canvasOffset.y}px)` }}>
          {visibleTables.map(({ schema, name, table, key }) => (
            <TableCard key={key} schema={schema} tableName={name} table={table} position={positions[key] || { x: 0, y: 0 }} onMouseDown={handleMouseDown} isSelected={selectedTable === key} onColumnClick={handleColumnClick} selectedColumn={selectedColumn} drawingFrom={drawingFrom} annotations={annotations} onAnnotate={handleAnnotate} />
          ))}
        </div>
      </div>

      <div className="flex items-center gap-4 px-3 py-1 border-t border-gray-800/50" style={{ background: "#0e0e20", fontSize: 9, color: "#555" }}>
        <span>{visibleTables.length}/{stats.total} objects</span>
        <span>{FOREIGN_KEYS.length} FKs · {LOGICAL_CONNECTIONS.length} logical · {userConnections.length} custom</span>
        <span>{Object.keys(annotations).length} annotations</span>
        <span className="ml-auto">Drag tables · Pan canvas · Double-click to annotate · Draw mode to connect</span>
      </div>
    </div>
  );
}
