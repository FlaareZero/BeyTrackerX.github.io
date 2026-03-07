// ════════════════════════════════════════════════════════════════
// BeyTracker X — Database
// ════════════════════════════════════════════════════════════════

// ── BLADE LISTS ──────────────────────────────────────────────
const BX_BLADES = [
  "Dran Sword","Hells Scythe","Wizard Arrow","Knight Shield","Knight Lance",
  "Shark Edge","Leon Claw","Viper Tail","Rhino Horn","Dran Dagger",
  "Hells Chain","Phoenix Wing","Wyvern Gale","Unicorn Sting","Sphinx Cowl",
  "Tyranno Beat","Weiss Tiger","Cobalt Dragoon","Black Shell","Whale Wave",
  "Bear Scratch","Crimson Garuda","Shelter Drake","Tricera Press","Samurai Calibur",
  "Goat Tackle","Cobalt Drake","Phoenix Feather","Mammoth Tusk","Croc Crunch",
  "Samurai Steel","Shinobi Knife","Tyranno Roar",
];

const UX_BLADES = [
  "Dran Buster","Hells Hammer","Wizard Rod","Shinobi Shadow","Leon Crest",
  "Phoenix Rudder","Silver Wolf","Samurai Saber","Knight Mail","Ptera Swing",
  "Impact Drake","Ghost Circle","Golem Rock","Scorpio Spear","Shark Scale",
  "Clock Mirage","Meteor Dragoon","Mummy Curse","Aero Pegasus","Wyvern Hover",
  "Orochi Cluster",
];

const CX_BLADES = [
  "Courage Dran","Wizard Arc","Perseus Dark","Hells Reaper","Rhino Reaper",
  "Fox Brush","Pegasus Blast","Cerberus Flame","Whale Flame","Sol Eclipse",
  "Wolf Hunt","Emperor Might","Phoenix Flare","Bahamut Blitz","Knight Fortress",
  "Ragna Rage","Kraken Wriggle","Valkyrie Volt","Leon Fang","Antler Stag",
];

// ── CX SUB-PARTS ─────────────────────────────────────────────
const CX_LOCK_CHIPS = [
  "Dran","Wizard","Perseus","Valkyrie","Pegasus","Emperor","Sol","Wolf",
  "Phoenix","Knight","Hells","Leon","Shark","Rhino","Cobalt","Cerberus",
  "Fox","Whale","Bahamut","Ragna","Kraken",
];

const CX_MAIN_BLADES = [
  "Brave","Arc","Dark","Reaper","Blast","Flame","Eclipse","Hunt",
  "Might","Flare","Blitz","Fortress","Rage","Wriggle","Volt","Fang","Brush","Fort",
];

const CX_ASSIST_BLADES = [
  "Slash","Heavy","Free","Assault","Zillion","Dual","Turn","Massive",
  "Wheel","Jaggy","Knuckle","Round","Vertical","Erase","Charge","Bumper",
];

// ── RATCHETS ─────────────────────────────────────────────────
const RATCHETS = [
  "1-60","2-60","3-60","4-60","5-60","7-60","9-60",
  "1-70","3-70","4-70","5-70","7-70","9-70","0-70",
  "0-80","1-80","2-80","3-80","4-80","5-80","6-80","7-80","9-80",
  "D5-70","S6-60","F0-60","ATr",
];

// ── BITS ─────────────────────────────────────────────────────
// [ name, type, speed, stamina, defense, burst, notes ]
const _B = (n,t,sp,st,df,bu,notes) => ({ name:n, type:t, speed:sp, stamina:st, defense:df, burst:bu, notes });

const BITS_DATA = [
  // Attack
  _B("Flat",        "Attack",  9,3,2,4, "Pattern a fiore aggressivo, alto potenziale KO"),
  _B("Under Flat",  "Attack", 10,2,2,7, "Low flat estrema, aggancia rapidamente sulla rail. Quasi assente stamina LAD"),
  _B("Low Flat",    "Attack",  9,3,2,4, "Profilo basso, ancora più aggressivo del Flat"),
  _B("Gear Flat",   "Attack",  8,4,2,5, "Denti ingranaggio boost velocità Xtreme dash"),
  _B("Rush",        "Attack",  8,5,3,6, "Auto-KO ridotto, movimento consistente e sicuro"),
  _B("Low Rush",    "Attack",  9,4,2,5, "Profilo ultra-basso, massimizza contatti ratchet"),
  _B("Point",       "Attack",  7,6,3,5, "Bilanciato attacco/stamina, flower pattern di movimento"),
  _B("Taper",       "Attack",  6,7,3,6, "Attacco con backup stamina, forte nel finale sui CX top-heavy"),
  _B("Jolt",        "Attack",  9,7,3,4, "Aggressiva, punto ridotto allo stadio, molto veloce sulla rail"),
  _B("Trans Point", "Attack",  6,5,4,5, "Ampiezza ridotta, tocca la rail abbassando il bey. Instabile"),
  _B("Trans Kick",  "Attack",  7,6,4,5, "Simile a Kick, abbassa il bey a contatto. Non molto consistente"),
  _B("High Taper",  "Attack",  6,6,3,6, "Versione alta del Taper, più stabile"),
  _B("RubberAccel", "Attack", 10,5,2,4, "Unisce aggressività iniziale a stamina nella LAD"),
  // Stamina
  _B("Ball",        "Stamina", 3,9,5,7, "Top competitivo, alto LAD, perfetto su Wizard Rod"),
  _B("Low Orb",     "Stamina", 2,8,5,7, "Orb compatta, ideale su Clock Mirage o build stamina basse"),
  _B("Orb",         "Stamina", 2,8,4,8, "Tenuta centrale passiva, ottima resistenza al burst"),
  _B("High Needle", "Stamina", 2,8,4,7, "Punta stretta, ideale per build bilanciate"),
  _B("Disk Ball",   "Stamina", 3,9,6,7, "Disco grande, LAD eccellente e stabilità superiore"),
  _B("Free Ball",   "Stamina", 3,8,6,8, "Ball girevole, ibrido stamina/difesa, burst ridotto"),
  _B("Level",       "Stamina", 9,6,5,4, "3 livelli di velocità in base al contatto. La rail fa accelerare il bey"),
  _B("Elevate",     "Stamina", 4,7,5,5, "Specialista spin equalization, chiave per Cobalt Dragoon"),
  _B("Hexa",        "Stamina", 3,7,6,7, "6 lati di stabilità, solida difesa contro attaccanti"),
  // Defense
  _B("Needle",      "Defense", 2,5,8,6, "Punta aguzzo assorbe colpi, si muove al contatto"),
  _B("Spike",       "Defense", 2,4,8,5, "Molto stretto, evasione LAD massimizzata"),
  _B("Dot",         "Defense", 1,5,8,7, "Contatto minimo, eccellente evasione sotto pressione"),
  _B("Gear Needle", "Defense", 3,5,7,6, "Difesa boost ingranaggio, si muove al contatto"),
  _B("Wedge",       "Defense", 3,4,7,4, "Resiste bene ai colpi grazie al piccolo punto di contatto"),
  _B("Wall Wedge",  "Defense", 4,4,6,3, "Come Wedge ma più stabile grazie alle protuzioni laterali"),
  // Balance
  _B("Operate",     "Balance", 5,6,5,6, "Comportamento variabile in base all'angolo di lancio"),
  _B("Glide",       "Balance", 4,6,6,7, "Base rotonda, movimento bilanciato consistente"),
  _B("Wall Ball",   "Balance", 4,5,7,5, "Anello wall stabilizza contro il pavimento dello stadio"),
  _B("Kick",        "Balance", 8,5,3,4, "Incrocio Hexa/Taper: aggressività e LAD alta"),
  _B("Unite",       "Balance", 9,7,3,4, "Unione Taper/Ball/Point. Alta velocità, poco controllo, buona LAD"),
];

// Lookup rapidi derivati
const BITS_MAP  = Object.fromEntries(BITS_DATA.map(b => [b.name, b]));
const BIT_NAMES = BITS_DATA.map(b => b.name);
const BIT_TYPES = ["All", "Attack", "Stamina", "Defense", "Balance"];

// ── META PRESET ───────────────────────────────────────────────
const META_PRESETS = [
  { label:"Wizard Rod 1-60 Hexa",        system:"UX", blade:"Wizard Rod",     ratchet:"1-60", bit:"Hexa"    },
  { label:"Cobalt Dragoon 5-60 Elevate", system:"BX", blade:"Cobalt Dragoon", ratchet:"5-60", bit:"Elevate" },
  { label:"Shark Scale 1-70 Low Rush",   system:"UX", blade:"Shark Scale",    ratchet:"1-70", bit:"Low Rush" },
];

// ── COSTANTI UI ───────────────────────────────────────────────
const FINISH_TYPES = ["KO", "Xtreme Finish", "Burst", "OS (Outspin)", "Pareggio"];
const SYS_COL  = { BX:"#00b4ff", UX:"#a855f7", CX:"#f59e0b" };
const TYPE_COL = { Attack:"#ef4444", Stamina:"#22c55e", Defense:"#3b82f6", Balance:"#f59e0b" };
const STAT_BARS = [["VEL","speed","#ef4444"],["STA","stamina","#22c55e"],["DIF","defense","#3b82f6"],["BST","burst","#f59e0b"]];
