// ════════════════════════════════════════════════════════════════
// BeyTracker X — Icons & UI Constants
// Icone emoji, tab di navigazione, componente ResultIcon.
// Modificare qui per cambiare label/icone dell'interfaccia.
// ════════════════════════════════════════════════════════════════

// ── NAVIGATION TABS ──────────────────────────────────────────
const BNAV_TABS = [
  { v: "tracker", icon: "⚔",  label: "Tracker" },
  { v: "deck",    icon: "🃏", label: "Deck"    },
  { v: "stats",   icon: "📊", label: "Stats"   },
  { v: "bits",    icon: "🔩", label: "Bits"    },
  { v: "backup",  icon: "💾", label: "Backup"  },
];

// ── SIDEBAR ITEMS (desktop) ───────────────────────────────────
const SIDEBAR_ITEMS = [
  { v: "tracker", icon: "⚔",  label: "tracker" },
  { v: "deck",    icon: "🃏", label: "deck"    },
  { v: "stats",   icon: "📊", label: "stats"   },
  { v: "bits",    icon: "🔩", label: "bits"    },
];

// ── RESULT ICON component ─────────────────────────────────────
// Richiede React disponibile globalmente (caricato prima di questo file)
function ResultIcon({ result }) {
  const map = {
    win:  ["▲ WIN",  "#22c55e"],
    loss: ["▼ LOSS", "#ef4444"],
    draw: ["= PARI", "#f59e0b"],
  };
  const [label, color] = map[result] || ["?", "#888"];
  return (
    <span style={{ color, fontWeight: 800, fontSize: 11 }}>{label}</span>
  );
}

// ── THEME TOGGLE ICONS ────────────────────────────────────────
const THEME_ICONS = { dark: "☀️", light: "🌙" };
const THEME_LABELS = { dark: "tema chiaro", light: "tema scuro" };
