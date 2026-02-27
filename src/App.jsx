import { useState, useRef, useEffect, useCallback, useMemo } from "react";
import { SCHEMA_DATA, FOREIGN_KEYS, LOGICAL_CONNECTIONS, TABLE_COMMENTS, TABLE_TYPES, SCHEMA_COLORS } from "./schemaData.js";

// ── Filter to tables only ──
const TABLES_ONLY = {};
Object.entries(SCHEMA_DATA).forEach(([key, val]) => {
  const type = TABLE_TYPES[key] || "table";
  if (type === "view" || type === "materialized_view") return;
  TABLES_ONLY[key] = val;
});

const SCHEMAS = {};
Object.entries(TABLES_ONLY).forEach(([key, val]) => {
  if (!SCHEMAS[val.schema]) SCHEMAS[val.schema] = {};
  SCHEMAS[val.schema][val.name] = val;
});

const SCHEMA_ORDER = Object.keys(SCHEMAS).sort();

// Columns to SKIP for auto-connections (PKs and metadata — not real joins)
const AUTO_SKIP = new Set([
  "id", "created_at", "updated_at", "loaded_at", "inserted_at",
  "source", "description", "notes", "comment", "name", "type", "status",
]);

// ── Compute auto-connections: same column name across different tables ──
function computeAutoConnections() {
  const colMap = {}; // column_name → [tableKey, ...]
  Object.entries(TABLES_ONLY).forEach(([tableKey, table]) => {
    table.columns.forEach(col => {
      if (AUTO_SKIP.has(col.name)) return;
      if (!colMap[col.name]) colMap[col.name] = [];
      colMap[col.name].push(tableKey);
    });
  });

  const conns = [];
  Object.entries(colMap).forEach(([colName, tables]) => {
    if (tables.length < 2 || tables.length > 15) return; // skip ubiquitous or unique
    for (let i = 0; i < tables.length; i++) {
      for (let j = i + 1; j < tables.length; j++) {
        conns.push({
          from: `${tables[i]}.${colName}`,
          to: `${tables[j]}.${colName}`,
          label: colName,
          type: "auto",
        });
      }
    }
  });
  return conns;
}

// ── Color hash for auto-connection column names ──
const CONN_COLORS = [
  "#22d3ee", "#a78bfa", "#f472b6", "#34d399", "#fbbf24",
  "#fb923c", "#60a5fa", "#e879f9", "#4ade80", "#f87171",
  "#2dd4bf", "#c084fc", "#38bdf8", "#facc15", "#fb7185",
];
function colorForColumn(name) {
  let h = 0;
  for (let i = 0; i < name.length; i++) h = ((h << 5) - h + name.charCodeAt(i)) | 0;
  return CONN_COLORS[Math.abs(h) % CONN_COLORS.length];
}

// ── Layout: horizontal grid, grouped by schema ──
function computeLayout() {
  const pos = {};
  const CARD_W = 310;
  const GAP_X = 40;
  const GAP_Y = 35;
  const SCHEMA_LABEL_H = 35;
  const COLS = 5;
  let globalY = 30;

  SCHEMA_ORDER.forEach((schema) => {
    const tbl = SCHEMAS[schema] || {};
    const names = Object.keys(tbl).sort();
    if (!names.length) return;

    globalY += SCHEMA_LABEL_H;
    let rowX = 40;
    let rowY = globalY;
    let maxRowH = 0;
    let col = 0;

    names.forEach((t) => {
      const h = Math.min(tbl[t].columns.length * 26 + 52, 550);
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
    globalY = rowY + maxRowH + GAP_Y + 10;
  });
  return pos;
}

// ── Schema label banners ──
function SchemaLabels({ positions }) {
  const labels = {};
  SCHEMA_ORDER.forEach(schema => {
    const tables = Object.keys(positions).filter(k => k.startsWith(schema + "."));
    if (!tables.length) return;
    const minY = Math.min(...tables.map(k => positions[k].y));
    labels[schema] = minY - 28;
  });
  return (
    <>
      {Object.entries(labels).map(([schema, y]) => (
        <div key={schema} className="absolute" style={{ left: 40, top: y, zIndex: 5 }}>
          <span className="font-bold px-3 py-1 rounded" style={{
            fontSize: 13,
            color: SCHEMA_COLORS[schema] || "#888",
            background: (SCHEMA_COLORS[schema] || "#888") + "15",
            border: `1px solid ${(SCHEMA_COLORS[schema] || "#888")}33`,
          }}>
            {schema}
          </span>
        </div>
      ))}
    </>
  );
}

// ── Table Card ──
const CARD_W = 300;
const ROW_H = 26;
const HEADER_H = 38;

function TableCard({ tableKey, table, position, onHeaderMouseDown, onDotMouseDown, onDotMouseUp, isSelected, highlightCols, dragOverCol, annotations }) {
  const schema = table.schema;
  const color = SCHEMA_COLORS[schema] || "#888";
  const comment = TABLE_COMMENTS[tableKey] || "";
  const commentH = comment ? 20 : 0;

  return (
    <div
      className="absolute select-none"
      style={{ left: position.x, top: position.y, zIndex: isSelected ? 50 : 10, width: CARD_W }}
    >
      <div className="rounded-lg overflow-hidden shadow-xl border" style={{ background: "#1a1a2e", borderColor: isSelected ? color : "#2a2a3e", borderWidth: isSelected ? 2 : 1 }}>
        {/* Header — drag to move */}
        <div
          className="px-3 py-2 flex items-center gap-2 cursor-grab active:cursor-grabbing"
          style={{ background: color + "18", borderBottom: `2px solid ${color}55` }}
          onMouseDown={(e) => { e.stopPropagation(); onHeaderMouseDown(e, tableKey); }}
        >
          <span className="font-mono px-1.5 py-0.5 rounded flex-shrink-0" style={{ background: color + "30", color, fontSize: 9 }}>{schema}</span>
          <span className="font-bold text-gray-100 truncate" style={{ fontSize: 12 }}>{table.name}</span>
          <span className="text-gray-500 ml-auto flex-shrink-0" style={{ fontSize: 9 }}>{table.columns.length}</span>
        </div>
        {comment && (
          <div className="px-3 py-1 border-b border-gray-800/40" style={{ fontSize: 8, color: "#666" }}>
            {comment.length > 90 ? comment.slice(0, 90) + "…" : comment}
          </div>
        )}
        {/* Columns */}
        <div style={{ maxHeight: 480, overflowY: "auto" }}>
          {table.columns.map((col, idx) => {
            const colKey = `${tableKey}.${col.name}`;
            const hl = highlightCols.has(col.name);
            const hlColor = hl ? colorForColumn(col.name) : null;
            const isDragOver = dragOverCol === colKey;
            const annotation = annotations[colKey];
            return (
              <div key={col.name}>
                <div
                  className="flex items-center gap-1.5 pr-1"
                  style={{
                    height: ROW_H,
                    background: isDragOver ? (hlColor || color) + "30" : hl ? hlColor + "08" : "transparent",
                    borderLeft: hl ? `3px solid ${hlColor}44` : "3px solid transparent",
                    transition: "background 0.1s",
                  }}
                >
                  {/* Left dot — drag source */}
                  <div
                    className="flex-shrink-0 flex items-center justify-center"
                    style={{ width: 24, height: ROW_H, cursor: "crosshair" }}
                    onMouseDown={(e) => { e.stopPropagation(); e.preventDefault(); onDotMouseDown(e, colKey, tableKey, idx); }}
                  >
                    <div style={{
                      width: isDragOver ? 14 : hl ? 10 : 8,
                      height: isDragOver ? 14 : hl ? 10 : 8,
                      borderRadius: "50%",
                      background: isDragOver ? (hlColor || color) : hl ? hlColor + "88" : "#333",
                      border: `2px solid ${isDragOver ? (hlColor || color) : hl ? hlColor : "#444"}`,
                      transition: "all 0.15s",
                    }} />
                  </div>

                  <span className="flex-shrink-0 w-3 text-center" style={{ fontSize: 8 }}>
                    {col.is_pk ? "🔑" : ""}
                  </span>
                  <span className="font-mono text-gray-200 truncate" style={{ fontSize: 11, color: hl ? hlColor : "#e5e7eb" }}>{col.name}</span>
                  <span className="text-gray-600 ml-auto flex-shrink-0 pr-1" style={{ fontSize: 9 }}>{col.type}</span>

                  {/* Right dot — drag target */}
                  <div
                    className="flex-shrink-0 flex items-center justify-center"
                    style={{ width: 24, height: ROW_H, cursor: "crosshair" }}
                    onMouseDown={(e) => { e.stopPropagation(); e.preventDefault(); onDotMouseDown(e, colKey, tableKey, idx); }}
                    onMouseUp={(e) => { e.stopPropagation(); onDotMouseUp(colKey); }}
                  >
                    <div style={{
                      width: isDragOver ? 14 : hl ? 10 : 8,
                      height: isDragOver ? 14 : hl ? 10 : 8,
                      borderRadius: "50%",
                      background: isDragOver ? (hlColor || color) : hl ? hlColor + "88" : "#333",
                      border: `2px solid ${isDragOver ? (hlColor || color) : hl ? hlColor : "#444"}`,
                      transition: "all 0.15s",
                    }} />
                  </div>
                </div>
                {annotation && (
                  <div className="px-8 pb-0.5">
                    <span className="italic px-1.5 py-0.5 rounded" style={{ color: hlColor || color, background: (hlColor || color) + "10", fontSize: 9 }}>{annotation}</span>
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

// ── SVG Connections ──
function ConnectionsSVG({ connections, positions, dragLine }) {
  const getXY = (connKey, side) => {
    const parts = connKey.split(".");
    const tableKey = `${parts[0]}.${parts[1]}`;
    const colName = parts[2];
    const pos = positions[tableKey];
    const table = TABLES_ONLY[tableKey];
    if (!pos || !table) return null;
    const idx = table.columns.findIndex(c => c.name === colName);
    if (idx < 0) return null;
    const comment = TABLE_COMMENTS[tableKey] || "";
    const commentH = comment ? 20 : 0;
    const x = side === "right" ? pos.x + CARD_W : pos.x;
    const y = pos.y + HEADER_H + commentH + idx * ROW_H + ROW_H / 2;
    return { x, y };
  };

  return (
    <svg style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", pointerEvents: "none", overflow: "visible" }}>
      {connections.map((conn, i) => {
        const from = getXY(conn.from, "right");
        const to = getXY(conn.to, "left");
        if (!from || !to) return null;
        const isAuto = conn.type === "auto";
        const isUser = conn.type === "user";
        const lineColor = isUser ? "#22c55e" : colorForColumn(conn.label || "");
        const dx = Math.abs(to.x - from.x) * 0.4;

        return (
          <g key={`${conn.from}-${conn.to}-${i}`} opacity={isAuto ? 0.35 : 0.7}>
            <path
              d={`M ${from.x} ${from.y} C ${from.x + dx} ${from.y}, ${to.x - dx} ${to.y}, ${to.x} ${to.y}`}
              stroke={lineColor}
              strokeWidth={isUser ? 2.5 : 1.5}
              strokeDasharray={isAuto ? "4 3" : "none"}
              fill="none"
            />
            <circle cx={from.x} cy={from.y} r={3} fill={lineColor} />
            <circle cx={to.x} cy={to.y} r={3} fill={lineColor} />
          </g>
        );
      })}
      {/* Live drag line */}
      {dragLine && (
        <g>
          <line x1={dragLine.x1} y1={dragLine.y1} x2={dragLine.x2} y2={dragLine.y2} stroke="#22c55e" strokeWidth={2} strokeDasharray="6 3" opacity={0.8} />
          <circle cx={dragLine.x1} cy={dragLine.y1} r={5} fill="#22c55e" opacity={0.9} />
          <circle cx={dragLine.x2} cy={dragLine.y2} r={4} fill="#22c55e" opacity={0.6} />
        </g>
      )}
    </svg>
  );
}

// ── Main App ──
export default function SchemaExplorer() {
  const [positions, setPositions] = useState({});
  const [userConnections, setUserConnections] = useState([]);
  const [brokenAutos, setBrokenAutos] = useState(new Set()); // auto-connections user removed
  const [annotations, setAnnotations] = useState({});
  const [zoom, setZoom] = useState(0.45);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [showAuto, setShowAuto] = useState(true);
  const [showUser, setShowUser] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTable, setSelectedTable] = useState(null);
  // Drag-to-move
  const [movingTable, setMovingTable] = useState(null);
  const [moveOffset, setMoveOffset] = useState({ x: 0, y: 0 });
  // Drag-to-connect
  const [connectFrom, setConnectFrom] = useState(null); // { colKey, tableKey, idx }
  const [dragLine, setDragLine] = useState(null);
  const [dragOverCol, setDragOverCol] = useState(null);
  // Pan
  const [isPanning, setIsPanning] = useState(false);
  const [panStart, setPanStart] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);
  const canvasRef = useRef(null);

  // Init layout
  useEffect(() => { setPositions(computeLayout()); }, []);

  // Auto-connections
  const autoConnections = useMemo(() => {
    const all = computeAutoConnections();
    return all.filter(c => !brokenAutos.has(`${c.from}|${c.to}`));
  }, [brokenAutos]);

  // All connections
  const allConnections = useMemo(() => {
    let c = [];
    if (showAuto) c = c.concat(autoConnections);
    if (showUser) c = c.concat(userConnections);
    return c;
  }, [showAuto, showUser, autoConnections, userConnections]);

  // Which column names are "shared" across tables (for highlighting)
  const sharedColumns = useMemo(() => {
    const counts = {};
    Object.values(TABLES_ONLY).forEach(t => {
      t.columns.forEach(c => {
        if (!AUTO_SKIP.has(c.name)) counts[c.name] = (counts[c.name] || 0) + 1;
      });
    });
    return new Set(Object.entries(counts).filter(([, n]) => n >= 2).map(([k]) => k));
  }, []);

  // Visible tables
  const visibleTables = useMemo(() => {
    const result = [];
    Object.entries(TABLES_ONLY).forEach(([key, table]) => {
      if (searchQuery) {
        const q = searchQuery.toLowerCase();
        if (!table.name.toLowerCase().includes(q) && !table.schema.toLowerCase().includes(q) && !table.columns.some(c => c.name.toLowerCase().includes(q))) return;
      }
      result.push({ key, table });
    });
    return result;
  }, [searchQuery]);

  // ── Zoom ──
  const handleWheel = useCallback((e) => {
    e.preventDefault();
    const d = e.deltaY > 0 ? -0.04 : 0.04;
    setZoom(z => Math.max(0.1, Math.min(2, z + d)));
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    if (el) {
      el.addEventListener("wheel", handleWheel, { passive: false });
      return () => el.removeEventListener("wheel", handleWheel);
    }
  }, [handleWheel]);

  // ── Mouse handlers ──
  const handleHeaderMouseDown = useCallback((e, tableKey) => {
    setSelectedTable(tableKey);
    const p = positions[tableKey] || { x: 0, y: 0 };
    setMovingTable(tableKey);
    setMoveOffset({ x: (e.clientX - pan.x) / zoom - p.x, y: (e.clientY - pan.y) / zoom - p.y });
  }, [positions, zoom, pan]);

  const handleDotMouseDown = useCallback((e, colKey, tableKey, colIdx) => {
    const pos = positions[tableKey];
    if (!pos) return;
    const table = TABLES_ONLY[tableKey];
    const comment = TABLE_COMMENTS[tableKey] || "";
    const commentH = comment ? 20 : 0;
    const x = pos.x + CARD_W;
    const y = pos.y + HEADER_H + commentH + colIdx * ROW_H + ROW_H / 2;
    setConnectFrom({ colKey, x, y });
    setDragLine({ x1: x, y1: y, x2: x, y2: y });
  }, [positions]);

  const handleDotMouseUp = useCallback((colKey) => {
    if (connectFrom && connectFrom.colKey !== colKey) {
      const fromCol = connectFrom.colKey.split(".").pop();
      const toCol = colKey.split(".").pop();
      const label = fromCol === toCol ? fromCol : `${fromCol}→${toCol}`;
      setUserConnections(p => [...p, { from: connectFrom.colKey, to: colKey, label, type: "user" }]);
    }
    setConnectFrom(null);
    setDragLine(null);
    setDragOverCol(null);
  }, [connectFrom]);

  const handleCanvasMouseDown = useCallback((e) => {
    if (e.target === containerRef.current || e.target === canvasRef.current || e.target.tagName === "svg") {
      setSelectedTable(null);
      setIsPanning(true);
      setPanStart({ x: e.clientX - pan.x, y: e.clientY - pan.y });
    }
  }, [pan]);

  const handleMouseMove = useCallback((e) => {
    // Move table
    if (movingTable) {
      const x = (e.clientX - pan.x) / zoom - moveOffset.x;
      const y = (e.clientY - pan.y) / zoom - moveOffset.y;
      setPositions(p => ({ ...p, [movingTable]: { x, y } }));
      return;
    }
    // Drag connection line
    if (connectFrom) {
      const rect = canvasRef.current?.getBoundingClientRect();
      if (rect) {
        const x = (e.clientX - rect.left) / zoom;
        const y = (e.clientY - rect.top) / zoom;
        setDragLine(prev => prev ? { ...prev, x2: x, y2: y } : null);
      }
      return;
    }
    // Pan canvas
    if (isPanning) {
      setPan({ x: e.clientX - panStart.x, y: e.clientY - panStart.y });
    }
  }, [movingTable, moveOffset, connectFrom, isPanning, panStart, zoom, pan]);

  const handleMouseUp = useCallback(() => {
    setMovingTable(null);
    if (connectFrom) { setConnectFrom(null); setDragLine(null); setDragOverCol(null); }
    setIsPanning(false);
  }, [connectFrom]);

  // Stats
  const tableCount = Object.keys(TABLES_ONLY).length;
  const colCount = Object.values(TABLES_ONLY).reduce((a, t) => a + t.columns.length, 0);

  return (
    <div className="w-full h-screen flex flex-col" style={{ background: "#0a0a18", fontFamily: "'JetBrains Mono', 'Fira Code', ui-monospace, monospace" }}>
      {/* ── Toolbar ── */}
      <div className="flex items-center gap-3 px-3 py-1.5 border-b border-gray-800/80 flex-shrink-0" style={{ background: "#0e0e20" }}>
        <span style={{ color: "#6366f1", fontSize: 14 }}>⬡</span>
        <span className="font-bold text-gray-100" style={{ fontSize: 12 }}>B4ALL Schema</span>
        <span className="text-gray-600" style={{ fontSize: 9 }}>{tableCount} tables · {colCount} cols</span>

        <input
          className="bg-gray-800/50 text-gray-200 rounded px-2.5 py-1 ml-2 outline-none border border-gray-700/50 focus:border-indigo-500/50"
          style={{ fontSize: 10, width: 180 }}
          placeholder="Search tables/columns..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        <div className="flex items-center gap-2 ml-auto">
          {/* Zoom */}
          <button className="px-1.5 py-0.5 rounded" style={{ fontSize: 12, background: "#252535", color: "#999" }} onClick={() => setZoom(z => Math.max(0.1, z - 0.1))}>−</button>
          <span style={{ fontSize: 9, color: "#666", minWidth: 36, textAlign: "center" }}>{Math.round(zoom * 100)}%</span>
          <button className="px-1.5 py-0.5 rounded" style={{ fontSize: 12, background: "#252535", color: "#999" }} onClick={() => setZoom(z => Math.min(2, z + 0.1))}>+</button>
          <button className="px-2 py-0.5 rounded" style={{ fontSize: 9, background: "#252535", color: "#666" }} onClick={() => { setZoom(0.45); setPan({ x: 0, y: 0 }); }}>Fit</button>

          <span style={{ color: "#333", margin: "0 4px" }}>|</span>

          {/* Connection toggles */}
          <label className="flex items-center gap-1 cursor-pointer" style={{ fontSize: 9 }}>
            <input type="checkbox" checked={showAuto} onChange={e => setShowAuto(e.target.checked)} style={{ width: 10, height: 10 }} />
            <span style={{ color: "#60a5fa" }}>Auto ({autoConnections.length})</span>
          </label>
          <label className="flex items-center gap-1 cursor-pointer" style={{ fontSize: 9 }}>
            <input type="checkbox" checked={showUser} onChange={e => setShowUser(e.target.checked)} style={{ width: 10, height: 10 }} />
            <span style={{ color: "#22c55e" }}>Manual ({userConnections.length})</span>
          </label>

          {userConnections.length > 0 && (
            <button className="px-2 py-0.5 rounded" style={{ fontSize: 9, color: "#f87171", background: "#f8717111" }} onClick={() => setUserConnections(p => p.slice(0, -1))}>
              Undo
            </button>
          )}
        </div>
      </div>

      {/* ── Legend ── */}
      <div className="flex items-center gap-4 px-3 py-1 border-b border-gray-800/40" style={{ background: "#0c0c1a", fontSize: 9 }}>
        <span style={{ color: "#666" }}>Drag header = move table</span>
        <span style={{ color: "#666" }}>·</span>
        <span style={{ color: "#666" }}>Drag dot → dot = connect columns</span>
        <span style={{ color: "#666" }}>·</span>
        <span style={{ color: "#666" }}>Scroll = zoom</span>
        <span style={{ color: "#666" }}>·</span>
        <span style={{ color: "#666" }}>Drag canvas = pan</span>
        <div className="flex items-center gap-3 ml-auto">
          <span className="flex items-center gap-1"><span style={{ width: 12, height: 2, background: "#60a5fa", display: "inline-block", borderRadius: 1, opacity: 0.5 }} /> <span style={{ color: "#60a5fa" }}>auto (same name)</span></span>
          <span className="flex items-center gap-1"><span style={{ width: 12, height: 2, background: "#22c55e", display: "inline-block", borderRadius: 1 }} /> <span style={{ color: "#22c55e" }}>manual</span></span>
          <span className="flex items-center gap-1"><span style={{ width: 8, height: 8, borderRadius: "50%", border: "2px solid #fbbf24", display: "inline-block" }} /> <span style={{ color: "#fbbf24" }}>shared column</span></span>
        </div>
      </div>

      {/* ── Canvas ── */}
      <div
        ref={containerRef}
        className="flex-1 relative overflow-hidden"
        style={{ cursor: isPanning ? "grabbing" : connectFrom ? "crosshair" : "grab" }}
        onMouseDown={handleCanvasMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <div
          ref={canvasRef}
          style={{
            transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`,
            transformOrigin: "0 0",
            position: "absolute",
            width: "10000px",
            height: "10000px",
          }}
        >
          <SchemaLabels positions={positions} />
          <ConnectionsSVG connections={allConnections} positions={positions} dragLine={dragLine} />
          {visibleTables.map(({ key, table }) => (
            <TableCard
              key={key}
              tableKey={key}
              table={table}
              position={positions[key] || { x: 0, y: 0 }}
              onHeaderMouseDown={handleHeaderMouseDown}
              onDotMouseDown={handleDotMouseDown}
              onDotMouseUp={handleDotMouseUp}
              isSelected={selectedTable === key}
              highlightCols={sharedColumns}
              dragOverCol={dragOverCol}
              annotations={annotations}
            />
          ))}
        </div>
      </div>

      {/* ── Status bar ── */}
      <div className="flex items-center gap-4 px-3 py-1 border-t border-gray-800/50" style={{ background: "#0e0e20", fontSize: 9, color: "#555" }}>
        <span>{visibleTables.length} tables</span>
        <span>{autoConnections.length} auto + {userConnections.length} manual connections</span>
        <span>Zoom {Math.round(zoom * 100)}%</span>
      </div>
    </div>
  );
}
