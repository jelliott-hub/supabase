import { useState, useRef, useEffect, useCallback, useMemo } from "react";
import { SCHEMA_DATA, FOREIGN_KEYS, LOGICAL_CONNECTIONS, TABLE_COMMENTS, TABLE_TYPES, SCHEMA_COLORS } from "./schemaData.js";

// Filter out views — views are derived from tables, not needed
const TABLES_ONLY = {};
Object.entries(SCHEMA_DATA).forEach(([key, val]) => {
  const type = TABLE_TYPES[key] || "table";
  if (type === "view" || type === "materialized_view") return;
  TABLES_ONLY[key] = val;
});

const SCHEMAS = {};
Object.entries(TABLES_ONLY).forEach(([key, val]) => {
  const schema = val.schema;
  if (!SCHEMAS[schema]) SCHEMAS[schema] = {};
  SCHEMAS[schema][val.name] = val;
});

const SCHEMA_ORDER = ["canonical", "public", "sandbox", "validated", "call_data", "finance", "kb"];

// Calculate card height based on column count
function cardHeight(colCount) {
  return Math.min(colCount * 22 + 50, 500);
}

// Lay out tables in a horizontal grid, grouped by schema in rows
function computeLayout() {
  const pos = {};
  const CARD_W = 320;
  const GAP_X = 30;
  const GAP_Y = 30;
  const SCHEMA_GAP = 50;
  let globalY = 40;

  SCHEMA_ORDER.forEach((schema) => {
    const tbl = SCHEMAS[schema] || {};
    const names = Object.keys(tbl).sort();
    if (names.length === 0) return;

    // Lay out tables in rows, wrapping at ~5 per row
    const COLS = 5;
    let rowX = 40;
    let rowY = globalY;
    let maxRowH = 0;
    let col = 0;

    names.forEach((t) => {
      const cc = tbl[t].columns.length;
      const h = cardHeight(cc);
      pos[`${schema}.${t}`] = { x: rowX, y: rowY };
      maxRowH = Math.max(maxRowH, h);
      col++;
      if (col >= COLS) {
        col = 0;
        rowX = 40;
        rowY += maxRowH + GAP_Y;
        maxRowH = 0;
      } else {
        rowX += CARD_W + GAP_X;
      }
    });

    globalY = rowY + maxRowH + SCHEMA_GAP;
  });

  return pos;
}

function TableCard({ schema, tableName, table, position, onMouseDown, isSelected, onColumnClick, selectedColumn, drawingFrom, drawMode, annotations, onAnnotate }) {
  const color = SCHEMA_COLORS[schema] || "#888";
  const [editingCol, setEditingCol] = useState(null);
  const [annotationText, setAnnotationText] = useState("");
  const tableKey = `${schema}.${tableName}`;
  const comment = TABLE_COMMENTS[tableKey] || "";

  return (
    <div
      className="absolute select-none"
      style={{ left: position.x, top: position.y, zIndex: isSelected ? 50 : 10 }}
      onMouseDown={(e) => onMouseDown(e, tableKey)}
    >
      <div
        className="rounded-lg overflow-hidden shadow-lg border"
        style={{
          width: 300,
          background: "#1a1a2e",
          borderColor: isSelected ? color : "#2a2a3e",
          borderWidth: isSelected ? 2 : 1,
        }}
      >
        {/* Header */}
        <div className="px-3 py-1.5 flex items-center gap-2" style={{ background: color + "18", borderBottom: `2px solid ${color}55` }}>
          <span className="font-mono px-1.5 py-0.5 rounded flex-shrink-0" style={{ background: color + "25", color, fontSize: 9 }}>{schema}</span>
          <span className="font-bold text-gray-100 truncate" style={{ fontSize: 11 }}>{tableName}</span>
          <span className="text-gray-600 ml-auto flex-shrink-0" style={{ fontSize: 9 }}>{table.columns.length}c</span>
        </div>
        {comment && (
          <div className="px-3 py-1 border-b border-gray-800/50 leading-tight" style={{ fontSize: 9, color: "#888" }}>
            {comment.length > 100 ? comment.slice(0, 100) + "…" : comment}
          </div>
        )}
        {/* Columns */}
        <div className="py-0.5" style={{ maxHeight: 420, overflowY: "auto" }}>
          {table.columns.map((col) => {
            const colKey = `${schema}.${tableName}.${col.name}`;
            const isSource = drawingFrom === colKey;
            const isColSelected = selectedColumn === colKey || isSource;
            const annotation = annotations[colKey];
            const isConnectTarget = drawMode && drawingFrom && drawingFrom !== colKey;
            return (
              <div key={col.name}>
                <div
                  className="px-2.5 py-1 flex items-center gap-1.5 transition-colors"
                  style={{
                    background: isSource ? color + "30" : isColSelected ? color + "18" : "transparent",
                    cursor: drawMode ? "crosshair" : "pointer",
                    borderLeft: isSource ? `3px solid ${color}` : "3px solid transparent",
                  }}
                  onClick={(e) => { e.stopPropagation(); onColumnClick(colKey); }}
                  onDoubleClick={(e) => { e.stopPropagation(); setEditingCol(colKey); setAnnotationText(annotation || col.comment || ""); }}
                  onMouseEnter={(e) => { if (isConnectTarget) e.currentTarget.style.background = color + "25"; }}
                  onMouseLeave={(e) => { if (isConnectTarget && !isColSelected) e.currentTarget.style.background = "transparent"; }}
                >
                  <span className="flex-shrink-0 w-3 text-center" style={{ fontSize: 9 }}>
                    {col.is_pk ? "🔑" : col.nullable === false ? "●" : "○"}
                  </span>
                  <span className="font-mono text-gray-200 truncate" style={{ fontSize: 11, fontWeight: isColSelected ? 700 : 400 }}>{col.name}</span>
                  <span className="text-gray-600 ml-auto flex-shrink-0" style={{ fontSize: 9 }}>{col.type}</span>
                  <div
                    className="rounded-full border flex-shrink-0 transition-all"
                    style={{
                      width: drawMode ? 12 : 8,
                      height: drawMode ? 12 : 8,
                      borderColor: isColSelected ? color : drawMode ? color + "66" : "#444",
                      background: isSource ? color : isColSelected ? color + "88" : drawMode ? color + "22" : "transparent",
                    }}
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
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function ConnectionsSVG({ connections, positions, tables }) {
  return (
    <svg className="absolute" style={{ width: "8000px", height: "8000px", pointerEvents: "none" }}>
      {connections.map((conn, i) => {
        const fp = conn.from.split(".");
        const tp = conn.to.split(".");
        const fk = `${fp[0]}.${fp[1]}`;
        const tk = `${tp[0]}.${tp[1]}`;
        const fPos = positions[fk];
        const tPos = positions[tk];
        if (!fPos || !tPos) return null;
        const fTable = tables[fk];
        const tTable = tables[tk];
        if (!fTable || !tTable) return null;
        const fIdx = fTable.columns.findIndex(c => c.name === fp[2]);
        const tIdx = tTable.columns.findIndex(c => c.name === tp[2]);
        if (fIdx < 0 || tIdx < 0) return null;

        const cH1 = TABLE_COMMENTS[fk] ? 22 : 0;
        const cH2 = TABLE_COMMENTS[tk] ? 22 : 0;
        const hH = 30;
        const rH = 22;
        const CARD_W = 300;
        const x1 = fPos.x + CARD_W;
        const y1 = fPos.y + hH + cH1 + 10 + fIdx * rH;
        const x2 = tPos.x;
        const y2 = tPos.y + hH + cH2 + 10 + tIdx * rH;
        const isFk = conn.type === "fk";
        const isUser = conn.type === "user";
        const color = isFk ? "#6366f1" : isUser ? "#22c55e" : "#f59e0b";
        const mx = (x1 + x2) / 2;

        return (
          <g key={`${conn.from}-${conn.to}-${i}`}>
            <path d={`M ${x1} ${y1} C ${mx} ${y1}, ${mx} ${y2}, ${x2} ${y2}`} stroke={color} strokeWidth={isFk ? 2.5 : 2} strokeDasharray={isFk ? "none" : "6 4"} fill="none" opacity={0.6} />
            <circle cx={x1} cy={y1} r={4} fill={color} opacity={0.8} />
            <circle cx={x2} cy={y2} r={4} fill={color} opacity={0.8} />
            {conn.label && <text x={mx} y={(y1 + y2) / 2 - 6} fill={color} fontSize={9} textAnchor="middle" fontFamily="monospace" opacity={0.75} fontWeight="bold">{conn.label}</text>}
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
  const [showFKs, setShowFKs] = useState(true);
  const [showLogical, setShowLogical] = useState(false);
  const [showUserConns, setShowUserConns] = useState(true);
  const [drawMode, setDrawMode] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeSchema, setActiveSchema] = useState("all");
  const [zoom, setZoom] = useState(0.6); // Start zoomed out to see everything
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [isPanning, setIsPanning] = useState(false);
  const [panStart, setPanStart] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  // Compute initial layout
  useEffect(() => {
    setPositions(computeLayout());
  }, []);

  // Zoom with mouse wheel
  const handleWheel = useCallback((e) => {
    e.preventDefault();
    const delta = e.deltaY > 0 ? -0.05 : 0.05;
    setZoom(z => Math.max(0.15, Math.min(2, z + delta)));
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    if (el) {
      el.addEventListener("wheel", handleWheel, { passive: false });
      return () => el.removeEventListener("wheel", handleWheel);
    }
  }, [handleWheel]);

  const handleMouseDown = useCallback((e, tableKey) => {
    if (e.button === 2) return;
    e.stopPropagation();
    setSelectedTable(tableKey);
    if (!drawMode) {
      const p = positions[tableKey] || { x: 0, y: 0 };
      setDragging(tableKey);
      setDragOffset({ x: (e.clientX - pan.x) / zoom - p.x, y: (e.clientY - pan.y) / zoom - p.y });
    }
  }, [positions, drawMode, zoom, pan]);

  const handleCanvasMouseDown = useCallback((e) => {
    if (e.target === containerRef.current || e.target.tagName === "svg" || e.target.classList.contains("canvas-bg")) {
      setSelectedTable(null); setSelectedColumn(null); setDrawingFrom(null);
      setIsPanning(true);
      setPanStart({ x: e.clientX - pan.x, y: e.clientY - pan.y });
    }
  }, [pan]);

  const handleMouseMove = useCallback((e) => {
    if (dragging) {
      const x = (e.clientX - pan.x) / zoom - dragOffset.x;
      const y = (e.clientY - pan.y) / zoom - dragOffset.y;
      setPositions(p => ({ ...p, [dragging]: { x, y } }));
    }
    if (isPanning) {
      setPan({ x: e.clientX - panStart.x, y: e.clientY - panStart.y });
    }
  }, [dragging, dragOffset, isPanning, panStart, zoom, pan]);

  const handleMouseUp = useCallback(() => { setDragging(null); setIsPanning(false); }, []);

  const handleColumnClick = useCallback((colKey) => {
    if (drawMode) {
      if (!drawingFrom) {
        setDrawingFrom(colKey);
        setSelectedColumn(colKey);
      } else if (drawingFrom !== colKey) {
        const fromCol = drawingFrom.split(".").pop();
        const toCol = colKey.split(".").pop();
        const label = fromCol === toCol ? fromCol : `${fromCol} → ${toCol}`;
        setUserConnections(p => [...p, { from: drawingFrom, to: colKey, label }]);
        setDrawingFrom(null);
        setSelectedColumn(null);
      } else {
        setDrawingFrom(null);
        setSelectedColumn(null);
      }
    } else {
      setSelectedColumn(selectedColumn === colKey ? null : colKey);
    }
  }, [drawMode, drawingFrom, selectedColumn]);

  const handleAnnotate = useCallback((k, t) => {
    setAnnotations(p => { const n = { ...p }; if (t) n[k] = t; else delete n[k]; return n; });
  }, []);

  const exportData = useCallback(() => {
    const data = {
      _meta: {
        exported_at: new Date().toISOString(),
        total_tables: Object.keys(TABLES_ONLY).length,
        total_columns: Object.values(TABLES_ONLY).reduce((a, t) => a + t.columns.length, 0),
        schemas: SCHEMA_ORDER,
        note: "Views excluded — tables only"
      },
      connections: { foreign_keys: FOREIGN_KEYS, logical: LOGICAL_CONNECTIONS, user_defined: userConnections },
      annotations,
      schema: TABLES_ONLY,
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
        if (searchQuery) {
          const q = searchQuery.toLowerCase();
          if (!name.toLowerCase().includes(q) && !schema.toLowerCase().includes(q) && !table.columns.some(c => c.name.toLowerCase().includes(q))) return;
        }
        result.push({ schema, name, table, key });
      });
    });
    return result;
  }, [activeSchema, searchQuery]);

  const allConnections = useMemo(() => {
    let c = [];
    if (showFKs) c = c.concat(FOREIGN_KEYS.map(x => ({ ...x, type: "fk", label: "FK" })));
    if (showLogical) c = c.concat(LOGICAL_CONNECTIONS.map(x => ({ ...x, type: "logical" })));
    if (showUserConns) c = c.concat(userConnections.map(x => ({ ...x, type: "user" })));
    return c;
  }, [showFKs, showLogical, showUserConns, userConnections]);

  const tableCount = Object.keys(TABLES_ONLY).length;
  const colCount = Object.values(TABLES_ONLY).reduce((a, t) => a + t.columns.length, 0);

  return (
    <div className="w-full h-screen flex flex-col" style={{ background: "#0a0a18", fontFamily: "'JetBrains Mono', 'Fira Code', ui-monospace, monospace" }}>
      {/* Toolbar */}
      <div className="flex items-center gap-2 px-3 py-1.5 border-b border-gray-800/80 flex-shrink-0 flex-wrap" style={{ background: "#0e0e20" }}>
        <span style={{ color: "#6366f1", fontSize: 14 }}>⬡</span>
        <span className="font-bold text-gray-100" style={{ fontSize: 11 }}>B4ALL Schema</span>
        <span className="text-gray-600" style={{ fontSize: 9 }}>{tableCount} tables · {colCount} cols</span>

        <div className="flex items-center gap-0.5 ml-3">
          <button className="px-2 py-0.5 rounded" style={{ fontSize: 9, background: activeSchema === "all" ? "#333" : "transparent", color: activeSchema === "all" ? "#fff" : "#666" }} onClick={() => setActiveSchema("all")}>ALL</button>
          {SCHEMA_ORDER.map(s => (
            <button key={s} className="px-2 py-0.5 rounded" style={{ fontSize: 9, background: activeSchema === s ? (SCHEMA_COLORS[s] || "#888") + "33" : "transparent", color: activeSchema === s ? (SCHEMA_COLORS[s] || "#888") : "#555" }} onClick={() => setActiveSchema(activeSchema === s ? "all" : s)}>{s}</button>
          ))}
        </div>

        <input className="bg-gray-800/50 text-gray-200 rounded px-2.5 py-1 ml-2 outline-none border border-gray-700/50 focus:border-indigo-500/50" style={{ fontSize: 10, width: 170 }} placeholder="Search tables/columns..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />

        <div className="flex items-center gap-2 ml-auto">
          {/* Zoom controls */}
          <button className="px-1.5 py-0.5 rounded" style={{ fontSize: 11, background: "#252535", color: "#999" }} onClick={() => setZoom(z => Math.max(0.15, z - 0.1))}>−</button>
          <span style={{ fontSize: 9, color: "#666", minWidth: 32, textAlign: "center" }}>{Math.round(zoom * 100)}%</span>
          <button className="px-1.5 py-0.5 rounded" style={{ fontSize: 11, background: "#252535", color: "#999" }} onClick={() => setZoom(z => Math.min(2, z + 0.1))}>+</button>
          <button className="px-1.5 py-0.5 rounded" style={{ fontSize: 9, background: "#252535", color: "#666" }} onClick={() => { setZoom(0.6); setPan({ x: 0, y: 0 }); }}>Reset</button>

          <span style={{ color: "#333" }}>|</span>

          {[["FK", showFKs, setShowFKs, "#6366f1"], ["Logical", showLogical, setShowLogical, "#f59e0b"], ["Custom", showUserConns, setShowUserConns, "#22c55e"]].map(([l, v, sv, c]) => (
            <label key={l} className="flex items-center gap-1 cursor-pointer" style={{ fontSize: 9, color: c }}>
              <input type="checkbox" checked={v} onChange={(e) => sv(e.target.checked)} style={{ width: 10, height: 10 }} />{l}
            </label>
          ))}

          <button
            className="px-3 py-1 rounded font-bold transition-all"
            style={{
              fontSize: 10,
              background: drawMode ? "#22c55e" : "#252535",
              color: drawMode ? "#fff" : "#999",
              boxShadow: drawMode ? "0 0 8px #22c55e44" : "none"
            }}
            onClick={() => { setDrawMode(!drawMode); setDrawingFrom(null); setSelectedColumn(null); }}
          >
            {drawMode ? "🔗 CONNECT" : "✋ MOVE"}
          </button>
          {userConnections.length > 0 && (
            <button className="px-1.5 py-1 rounded" style={{ fontSize: 9, color: "#f87171" }} onClick={() => setUserConnections(p => p.slice(0, -1))}>
              Undo ({userConnections.length})
            </button>
          )}
          <button className="px-2.5 py-1 rounded font-bold" style={{ fontSize: 10, background: "#6366f122", color: "#818cf8" }} onClick={exportData}>⬇ Export</button>
        </div>
      </div>

      {/* Connection mode banner */}
      {drawMode && (
        <div className="flex items-center justify-center py-1.5 gap-3" style={{ background: drawingFrom ? "#22c55e18" : "#22c55e08", fontSize: 11 }}>
          {drawingFrom ? (
            <span style={{ color: "#4ade80" }}>
              🔗 From <strong style={{ color: "#fff" }}>{drawingFrom}</strong> — click destination column
              <button className="ml-3 px-2 py-0.5 rounded" style={{ background: "#ef444433", color: "#fca5a5", fontSize: 9 }} onClick={() => { setDrawingFrom(null); setSelectedColumn(null); }}>Cancel</button>
            </span>
          ) : (
            <span style={{ color: "#86efac" }}>Click any column to start a connection · Scroll to zoom · Toggle to MOVE to drag tables</span>
          )}
        </div>
      )}

      {/* Canvas */}
      <div
        ref={containerRef}
        className="flex-1 relative overflow-hidden canvas-bg"
        style={{ cursor: drawMode ? (drawingFrom ? "crosshair" : "default") : (isPanning ? "grabbing" : "grab") }}
        onMouseDown={handleCanvasMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <div style={{
          transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`,
          transformOrigin: "0 0",
          position: "absolute",
          width: "8000px",
          height: "8000px",
        }}>
          <ConnectionsSVG connections={allConnections} positions={positions} tables={TABLES_ONLY} />
          {visibleTables.map(({ schema, name, table, key }) => (
            <TableCard key={key} schema={schema} tableName={name} table={table} position={positions[key] || { x: 0, y: 0 }} onMouseDown={handleMouseDown} isSelected={selectedTable === key} onColumnClick={handleColumnClick} selectedColumn={selectedColumn} drawingFrom={drawingFrom} drawMode={drawMode} annotations={annotations} onAnnotate={handleAnnotate} />
          ))}
        </div>
      </div>

      {/* Status bar */}
      <div className="flex items-center gap-4 px-3 py-1 border-t border-gray-800/50" style={{ background: "#0e0e20", fontSize: 9, color: "#555" }}>
        <span>{visibleTables.length}/{tableCount} tables</span>
        <span>{userConnections.length} connections drawn</span>
        <span>{Object.keys(annotations).length} annotations</span>
        <span>Zoom: {Math.round(zoom * 100)}%</span>
        <span className="ml-auto">{drawMode ? "CONNECT: click columns to link · scroll to zoom" : "MOVE: drag tables · click+drag canvas to pan"}</span>
      </div>
    </div>
  );
}
