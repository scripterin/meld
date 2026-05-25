// ============================================================
// ALL ELEMENTS — starter + discoverable
// ============================================================
const ALL_ELEMENTS = [
  // BASIC (4 starters)
  { id: 'fire',        name: 'Foc',          emoji: '🔥', tier: 'basic',   desc: 'Flacăra primordială' },
  { id: 'water',       name: 'Apă',          emoji: '💧', tier: 'basic',   desc: 'Apa vie' },
  { id: 'earth',       name: 'Pământ',       emoji: '🌍', tier: 'basic',   desc: 'Solul străvechi' },
  { id: 'air',         name: 'Aer',          emoji: '💨', tier: 'basic',   desc: 'Vântul liber' },
  // TIER 1
  { id: 'steam',       name: 'Abur',         emoji: '♨️',  tier: 'nature',  desc: 'Apă transformată de foc' },
  { id: 'mud',         name: 'Noroi',        emoji: '🟤', tier: 'nature',  desc: 'Pământ și apă amestecate' },
  { id: 'lava',        name: 'Lavă',         emoji: '🌋', tier: 'nature',  desc: 'Pământ topit de foc' },
  { id: 'dust',        name: 'Praf',         emoji: '🌫️', tier: 'nature',  desc: 'Praf fin și uscat' },
  { id: 'cloud',       name: 'Nor',          emoji: '☁️',  tier: 'nature',  desc: 'Abur purtat de vânt' },
  { id: 'stone',       name: 'Piatră',       emoji: '🪨', tier: 'nature',  desc: 'Pământ comprimat' },
  { id: 'energy',      name: 'Energie',      emoji: '⚡', tier: 'cosmic',  desc: 'Energie pură eliberată' },
  { id: 'ice',         name: 'Gheață',       emoji: '❄️',  tier: 'nature',  desc: 'Apă înghețată' },
  // TIER 2
  { id: 'rain',        name: 'Ploaie',       emoji: '🌧️', tier: 'nature',  desc: 'Nori plini de apă' },
  { id: 'snow',        name: 'Zăpadă',       emoji: '🌨️', tier: 'nature',  desc: 'Fulgi de gheață din nori' },
  { id: 'sand',        name: 'Nisip',        emoji: '🏖️', tier: 'nature',  desc: 'Piatră sfărâmată de vânt' },
  { id: 'volcano',     name: 'Vulcan',       emoji: '🌄', tier: 'nature',  desc: 'Piatră și lava sub presiune' },
  { id: 'plant',       name: 'Plantă',       emoji: '🌿', tier: 'nature',  desc: 'Viața încolțită din noroi' },
  { id: 'swamp',       name: 'Mlaștină',     emoji: '🐊', tier: 'nature',  desc: 'Apă și pământ stagnante' },
  { id: 'smoke',       name: 'Fum',          emoji: '💭', tier: 'nature',  desc: 'Produsul arderii incomplete' },
  { id: 'mist',        name: 'Ceață',        emoji: '🌁', tier: 'nature',  desc: 'Nori la nivelul pământului' },
  { id: 'lightning',   name: 'Fulger',       emoji: '🌩️', tier: 'cosmic',  desc: 'Energie descărcată din nori' },
  { id: 'tornado',     name: 'Tornadă',      emoji: '🌪️', tier: 'nature',  desc: 'Aer turbulent și violent' },
  { id: 'geyser',      name: 'Gheizer',      emoji: '💦', tier: 'nature',  desc: 'Apă și lavă în erupție' },
  { id: 'obsidian',    name: 'Obsidian',     emoji: '⬛', tier: 'nature',  desc: 'Lavă răcită brusc de apă' },
  // TIER 3
  { id: 'tree',        name: 'Copac',        emoji: '🌳', tier: 'nature',  desc: 'Planta crescuta mare' },
  { id: 'seed',        name: 'Sămânță',      emoji: '🌰', tier: 'nature',  desc: 'Pământ și planta fuzionate' },
  { id: 'grass',       name: 'Iarbă',        emoji: '🌱', tier: 'nature',  desc: 'Plante mici ce acoperă pământul' },
  { id: 'forest',      name: 'Pădure',       emoji: '🌲', tier: 'nature',  desc: 'O colecție de copaci' },
  { id: 'coal',        name: 'Cărbune',      emoji: '🪨', tier: 'earth',   desc: 'Lemn fosilizat și ars' },
  { id: 'ash',         name: 'Cenușă',       emoji: '🌫️', tier: 'nature',  desc: 'Rămășița arderii' },
  { id: 'metal',       name: 'Metal',        emoji: '⚙️', tier: 'earth',   desc: 'Piatră topită și purificată' },
  { id: 'gold',        name: 'Aur',          emoji: '🥇', tier: 'earth',   desc: 'Metal rar și prețios' },
  { id: 'iron',        name: 'Fier',         emoji: '🔩', tier: 'earth',   desc: 'Metal comun extras din rocă' },
  { id: 'bronze',      name: 'Bronz',        emoji: '🏆', tier: 'earth',   desc: 'Aliaj de cupru și cositor' },
  { id: 'magma',       name: 'Magmă',        emoji: '🌋', tier: 'earth',   desc: 'Roca topita sub scoarta' },
  // TIER 4 — life
  { id: 'life',        name: 'Viață',        emoji: '🧬', tier: 'life',    desc: 'Prima scânteie a vieții' },
  { id: 'bacteria',    name: 'Bacterie',     emoji: '🦠', tier: 'life',    desc: 'Cea mai simplă formă de viață' },
  { id: 'algae',       name: 'Algă',         emoji: '🍀', tier: 'life',    desc: 'Plante acvatice primitive' },
  { id: 'fish',        name: 'Pește',        emoji: '🐟', tier: 'life',    desc: 'Prima vertebrată acvatică' },
  { id: 'amphibian',   name: 'Amfibian',     emoji: '🐸', tier: 'life',    desc: 'Pești ce au ieșit pe uscat' },
  { id: 'reptile',     name: 'Reptilă',      emoji: '🦎', tier: 'life',    desc: 'Animal cu solzi și sânge rece' },
  { id: 'bird',        name: 'Pasăre',       emoji: '🐦', tier: 'life',    desc: 'Reptilă cu pene și aripi' },
  { id: 'mammal',      name: 'Mamifer',      emoji: '🐾', tier: 'life',    desc: 'Animal cu blană și lapte' },
  { id: 'human',       name: 'Om',           emoji: '🧑', tier: 'life',    desc: 'Mamiferul cu rațiune' },
  { id: 'dinosaur',    name: 'Dinozaur',     emoji: '🦕', tier: 'life',    desc: 'Reptile uriașe preistorice' },
  { id: 'dragon',      name: 'Dragon',       emoji: '🐉', tier: 'legend',  desc: 'Dinozaur cu energie cosmică' },
  // TIER 5 — human creations
  { id: 'tool',        name: 'Unealtă',      emoji: '🔧', tier: 'human',   desc: 'Metal prelucrat de om' },
  { id: 'fire_tool',   name: 'Cremene',      emoji: '🪓', tier: 'human',   desc: 'Unealtă de piatră pentru foc' },
  { id: 'weapon',      name: 'Armă',         emoji: '⚔️',  tier: 'human',   desc: 'Unealtă pentru vânătoare' },
  { id: 'house',       name: 'Casă',         emoji: '🏠', tier: 'human',   desc: 'Adăpost construit de om' },
  { id: 'village',     name: 'Sat',          emoji: '🏡', tier: 'human',   desc: 'Mai multe case la un loc' },
  { id: 'city',        name: 'Oraș',         emoji: '🏙️', tier: 'human',   desc: 'Un sat crescut mare' },
  { id: 'civilization',name: 'Civilizație',  emoji: '🏛️', tier: 'human',   desc: 'Mai multe orașe organizate' },
  { id: 'science',     name: 'Știință',      emoji: '🔬', tier: 'human',   desc: 'Cunoaștere sistematizată' },
  { id: 'technology',  name: 'Tehnologie',   emoji: '💻', tier: 'human',   desc: 'Știință aplicată' },
  { id: 'internet',    name: 'Internet',     emoji: '🌐', tier: 'human',   desc: 'Rețeaua globală de calculatoare' },
  { id: 'ai',          name: 'IA',           emoji: '🤖', tier: 'cosmic',  desc: 'Inteligența artificială' },
  // TIER 6 — cosmos
  { id: 'ocean',       name: 'Ocean',        emoji: '🌊', tier: 'nature',  desc: 'Un lac uriaș de apă sărată' },
  { id: 'lake',        name: 'Lac',          emoji: '💦', tier: 'nature',  desc: 'Apă și pământ adâncite' },
  { id: 'river',       name: 'Râu',          emoji: '🏞️', tier: 'nature',  desc: 'Apă curgătoare' },
  { id: 'mountain',    name: 'Munte',        emoji: '⛰️', tier: 'nature',  desc: 'Piatră îngrămădită de tectonica' },
  { id: 'desert',      name: 'Deșert',       emoji: '🏜️', tier: 'nature',  desc: 'Nisip întins cât vezi cu ochii' },
  { id: 'island',      name: 'Insulă',       emoji: '🏝️', tier: 'nature',  desc: 'Pământ înconjurat de ocean' },
  { id: 'planet',      name: 'Planetă',      emoji: '🪐', tier: 'cosmic',  desc: 'Un glob uriaș în spațiu' },
  { id: 'star',        name: 'Stea',         emoji: '⭐', tier: 'cosmic',  desc: 'O minge de energie cosmică' },
  { id: 'moon',        name: 'Lună',         emoji: '🌕', tier: 'cosmic',  desc: 'Satelitul natural al Pământului' },
  { id: 'sun',         name: 'Soare',        emoji: '☀️',  tier: 'cosmic',  desc: 'Steaua sistemului nostru solar' },
  { id: 'black_hole',  name: 'Gaură Neagră', emoji: '🕳️', tier: 'cosmic',  desc: 'O stea prăbușită în sine' },
  { id: 'galaxy',      name: 'Galaxie',      emoji: '🌌', tier: 'cosmic',  desc: 'Miliarde de stele laolaltă' },
  { id: 'universe',    name: 'Univers',      emoji: '🔭', tier: 'cosmic',  desc: 'Tot ce există' },
  { id: 'time',        name: 'Timp',         emoji: '⏳', tier: 'cosmic',  desc: 'A patra dimensiune' },
  { id: 'space',       name: 'Spațiu',       emoji: '🚀', tier: 'cosmic',  desc: 'Vidul dintre stele' },
  // EXTRA fun
  { id: 'music',       name: 'Muzică',       emoji: '🎵', tier: 'human',   desc: 'Sunet organizat de om' },
  { id: 'art',         name: 'Artă',         emoji: '🎨', tier: 'human',   desc: 'Frumusețe creată de om' },
  { id: 'philosophy',  name: 'Filozofie',    emoji: '📜', tier: 'human',   desc: 'Omul care reflectează' },
  { id: 'magic',       name: 'Magie',        emoji: '🪄', tier: 'legend',  desc: 'Energie cosmică controlată de om' },
  { id: 'myth',        name: 'Mit',          emoji: '📖', tier: 'legend',  desc: 'Povești cu zei și eroi' },
  { id: 'deity',       name: 'Zeitate',      emoji: '✨', tier: 'legend',  desc: 'Ființă supremă transcendentă' },
  { id: 'sport',    name: 'Sport',   emoji: '🏅', tier: 'human', desc: 'Competiție organizată' },
  { id: 'flower',   name: 'Floare',  emoji: '🌸', tier: 'nature', desc: 'Planta înflorită' }, 
  // PERSONAJE SECRETE
{ id: 'real_madrid', name: 'Real Madrid', emoji: '⚽', tier: 'human', desc: 'Clubul regal' },
{ id: 'football', name: 'Fotbal', emoji: '⚽', tier: 'human', desc: 'Sportul rege' },
{ id: 'injury', name: 'Accidentare', emoji: '🩹', tier: 'human', desc: 'Ghinionul sportivului' },
{ id: 'pheasant', name: 'Fazan', emoji: '🐦', tier: 'life', desc: 'Pasăre de vânat' },
{ id: 'bees', name: 'Albine', emoji: '🐝', tier: 'nature', desc: 'Producătoarele de miere' },
{ id: 'wormwood', name: 'Pelin', emoji: '🌿', tier: 'nature', desc: 'Plantă amară' },
{ id: 'motor', name: 'Motor', emoji: '🏍️', tier: 'human', desc: 'Putere mecanică' },
{ id: 'car', name: 'Mașină', emoji: '🚗', tier: 'human', desc: 'Viteză pe roți' },
{ id: 'damian', name: 'Damian', emoji: '⚽', tier: 'legend', desc: 'Fotbalistul pasionat' },
{ id: 'luca',   name: 'Luca',   emoji: '🐝', tier: 'legend', desc: 'Prietenul cu fazanii și albinele' },
{ id: 'vali',   name: 'Vali',   emoji: '🏍️', tier: 'legend', desc: 'Omul cu motorul' },
];

// ============================================================
// RECIPES (~80 combinations)
// ============================================================
const RECIPES = [
  // Tier 1
  ['fire','water','steam'],
  ['earth','water','mud'],
  ['fire','earth','lava'],
  ['air','earth','dust'],
  ['air','water','cloud'],
  ['earth','earth','stone'],
  ['fire','fire','energy'],
  ['water','water','lake'],
  ['water','ice','ice'],
  ['air','fire','smoke'],
  ['fire','smoke','ash'],
  // Tier 2
  ['cloud','water','rain'],
  ['cloud','air','mist'],
  ['cloud','energy','lightning'],
  ['air','air','tornado'],
  ['stone','air','sand'],
  ['lava','water','obsidian'],
  ['lava','earth','volcano'],
  ['lava','stone','magma'],
  ['water','fire','geyser'],
  ['mud','plant','swamp'],
  ['mud','water','swamp'],
  ['air','cloud','snow'],
  // Plants & Nature
  ['mud','rain','plant'],
  ['plant','plant','tree'],
  ['tree','tree','forest'],
  ['earth','seed','grass'],
  ['plant','earth','seed'],
  ['plant','fire','ash'],
  ['tree','fire','coal'],
  // Metals
  ['stone','fire','metal'],
  ['metal','metal','iron'],
  ['iron','fire','steel'],
  ['metal','energy','gold'],
  ['iron','stone','bronze'],
  // Ocean & Water
  ['lake','lake','ocean'],
  ['ocean','earth','island'],
  ['river','earth','lake'],
  ['rain','earth','river'],
  ['sand','ocean','desert'],
  ['earth','stone','mountain'],
  ['mountain','water','river'],
  // Life
  ['ocean','energy','life'],
  ['life','water','bacteria'],
  ['bacteria','water','algae'],
  ['algae','energy','fish'],
  ['fish','earth','amphibian'],
  ['amphibian','earth','reptile'],
  ['reptile','air','bird'],
  ['reptile','energy','dinosaur'],
  ['dinosaur','energy','dragon'],
  ['mammal','earth','human'],
  ['reptile','plant','mammal'],
  // Human creations
  ['human','stone','tool'],
  ['human','fire','fire_tool'],
  ['tool','metal','weapon'],
  ['human','tree','house'],
  ['house','house','village'],
  ['village','village','city'],
  ['city','city','civilization'],
  ['human','science','technology'],
  ['human','energy','science'],
  ['technology','internet','ai'],
  ['technology','technology','internet'],
  // Cosmos
  ['energy','energy','star'],
  ['star','star','galaxy'],
  ['galaxy','galaxy','universe'],
  ['planet','planet','star'],
  ['star','stone','planet'],
  ['planet','energy','sun'],
  ['earth','stone','moon'],
  ['star','black_hole','black_hole'],
  ['black_hole','star','galaxy'],
  ['universe','time','time'],
  ['space','energy','planet'],
  ['fire','energy','sun'],
  // Human arts
  ['human','music','art'],
  ['human','air','music'],
  ['human','philosophy','myth'],
  ['human','myth','deity'],
  ['energy','myth','magic'],
  ['human','deity','philosophy'],
  ['magic','human','wizard'],
// Ingrediente pentru personaje custom
['human', 'plant', 'wormwood'],
['bird', 'forest', 'pheasant'],
['flower', 'tree', 'wormwood'],
['plant', 'water', 'wormwood'],
['stone', 'metal', 'motor'],
['metal', 'energy', 'motor'],
['motor', 'metal', 'car'],
['motor', 'stone', 'car'],
['human', 'sport', 'football'],
['human', 'energy', 'football'],
['city', 'sport', 'real_madrid'],
['football', 'star', 'real_madrid'],
['human', 'weapon', 'injury'],
['sport', 'weapon', 'injury'],
['football', 'human', 'injury'],
['plant', 'rain', 'flower'],
['plant', 'sun', 'flower'],
['human', 'grass', 'sport'],
['human', 'city', 'sport'],
// Personaje
['human', 'football', 'damian'],
['human', 'real_madrid', 'damian'],
['football', 'injury', 'damian'],
['bees', 'pheasant', 'luca'],
['wormwood', 'bees', 'luca'],
['pheasant', 'wormwood', 'luca'],
['human', 'motor', 'vali'],
['human', 'car', 'vali'],
]; 

// Build lookup
const RECIPE_MAP = {};
RECIPES.forEach(([a, b, result]) => {
  const key = [a, b].sort().join('+');
  if (!RECIPE_MAP[key]) RECIPE_MAP[key] = result;
});

// ============================================================
// SECRET ELEMENTS (nu apar in ALL_ELEMENTS, descoperite doar prin combinatii rare)
// ============================================================
const SECRET_ELEMENTS = [
  { id: 'phoenix',     name: 'Phoenix',      emoji: '🦅', tier: 'legend', desc: 'Pasărea care renaște din cenușă' },
  { id: 'philosopher_stone', name: 'Piatra Filozofală', emoji: '💎', tier: 'legend', desc: 'Secretul suprem al alchimiștilor' },
  { id: 'void',        name: 'Vid',          emoji: '🌑', tier: 'legend', desc: 'Spațiul dinaintea existenței' },
  { id: 'soul',        name: 'Suflet',       emoji: '👻', tier: 'legend', desc: 'Esența invizibilă a vieții' },
  { id: 'dream',       name: 'Vis',          emoji: '💭', tier: 'legend', desc: 'Realitate creată de minte' },
  { id: 'chaos',       name: 'Haos',         emoji: '🌀', tier: 'legend', desc: 'Starea dinaintea ordinii' },
  { id: 'order',       name: 'Ordine',       emoji: '⚖️',  tier: 'legend', desc: 'Principiul care guvernează universul' },
  { id: 'love',        name: 'Iubire',       emoji: '❤️',  tier: 'legend', desc: 'Cea mai puternică forță' },
  { id: 'death',       name: 'Moarte',       emoji: '💀', tier: 'legend', desc: 'Reversul vieții' },
  { id: 'god',         name: 'Dumnezeu',     emoji: '☯️',  tier: 'legend', desc: 'Creatorul suprem al tuturor' },
];

const SECRET_RECIPES = [
  ['ash',   'bird',       'phoenix'],
  ['ash',   'energy',     'phoenix'],
  ['gold',  'philosophy', 'philosopher_stone'],
  ['universe', 'black_hole', 'void'],
  ['human', 'dream',      'soul'],
  ['human', 'sleep',      'dream'],
  ['air',   'void',       'dream'],
  ['order', 'chaos',      'void'],
  ['deity', 'chaos',      'order'],
  ['deity', 'void',       'chaos'],
  ['human', 'deity',      'love'],
  ['life',  'void',       'death'],
  ['death', 'life',       'soul'],
  ['deity', 'universe',   'god'],
  ['order', 'universe',   'god'],
];

// Adaugă secretele în lookup
SECRET_RECIPES.forEach(([a, b, result]) => {
  const key = [a, b].sort().join('+');
  if (!RECIPE_MAP[key]) RECIPE_MAP[key] = result;
});

function getSecretElement(id) {
  return SECRET_ELEMENTS.find(e => e.id === id);
}
function getElement(id) {
  return ALL_ELEMENTS.find(e => e.id === id) || getSecretElement(id);
}

// ============================================================
// ACHIEVEMENTS
// ============================================================
const ACHIEVEMENTS = [
  { id: 'first_combo',   name: 'Primul Pas',       emoji: '👣', desc: 'Prima combinație reușită',            check: (s) => s.combos >= 1 },
  { id: 'combo_10',      name: 'Alchimist',         emoji: '⚗️', desc: '10 combinații reușite',               check: (s) => s.combos >= 10 },
  { id: 'combo_50',      name: 'Maestru',           emoji: '🎓', desc: '50 de combinații reușite',            check: (s) => s.combos >= 50 },
  { id: 'discover_10',   name: 'Explorator',        emoji: '🗺️', desc: '10 elemente descoperite',             check: (s) => s.discovered.size >= 10 },
  { id: 'discover_25',   name: 'Cercetaș',          emoji: '🔭', desc: '25 de elemente descoperite',          check: (s) => s.discovered.size >= 25 },
  { id: 'discover_50',   name: 'Savant',            emoji: '🧪', desc: '50 de elemente descoperite',          check: (s) => s.discovered.size >= 50 },
  { id: 'found_human',   name: 'Creator de Lume',   emoji: '🧑', desc: 'Ai creat Omul',                       check: (s) => s.discovered.has('human') },
  { id: 'found_dragon',  name: 'Dresorul de Dragoni',emoji: '🐉', desc: 'Ai descoperit Dragonul',             check: (s) => s.discovered.has('dragon') },
  { id: 'found_ai',      name: 'Futurist',          emoji: '🤖', desc: 'Ai creat Inteligența Artificială',   check: (s) => s.discovered.has('ai') },
  { id: 'found_universe',name: 'Cosmosul e al tău', emoji: '🌌', desc: 'Ai descoperit Universul',             check: (s) => s.discovered.has('universe') },
  { id: 'found_secret',  name: 'Secretul Suprem',   emoji: '💎', desc: 'Ai descoperit un element secret',    check: (s) => SECRET_ELEMENTS.some(se => s.discovered.has(se.id)) },
  { id: 'found_god',     name: 'Demiurg',           emoji: '☯️',  desc: 'Ai descoperit pe Dumnezeu',          check: (s) => s.discovered.has('god') },
  { id: 'chain_3',       name: 'În Flăcări',        emoji: '🔥', desc: 'Combo chain x3',                     check: (s) => (s.maxChain || 0) >= 3 },
  { id: 'chain_5',       name: 'Furtuna',           emoji: '⚡', desc: 'Combo chain x5',                     check: (s) => (s.maxChain || 0) >= 5 },
];

// ============================================================
// STATE
// ============================================================
const SAVE_KEY = 'meld_save_v6';

let state = {
  discovered:  new Set(['fire', 'water', 'earth', 'air']),
  combos:      0,
  achievements: new Set(),
  maxChain:    0,
};

let isProcessing = false;
let dragTarget   = null;

// Combo chain tracking
let comboChain     = 0;
let comboChainTimer = null;
const CHAIN_WINDOW  = 8000; // ms între combinații ca să conteze chain

// ============================================================
// SAVE / LOAD
// ============================================================
function saveState() {
  try {
    localStorage.setItem(SAVE_KEY, JSON.stringify({
      discovered:   [...state.discovered],
      combos:       state.combos,
      achievements: [...state.achievements],
      maxChain:     state.maxChain,
    }));
  } catch(e) {}
}

function loadState() {
  try {
    const raw = localStorage.getItem(SAVE_KEY);
    if (!raw) return;
    const data = JSON.parse(raw);
    state.discovered   = new Set(data.discovered   || ['fire','water','earth','air']);
    state.combos       = data.combos       || 0;
    state.achievements = new Set(data.achievements || []);
    state.maxChain     = data.maxChain     || 0;
  } catch(e) {}
}

// ============================================================
// WEB AUDIO — sunete procedurale (fara fisiere externe)
// ============================================================
let audioCtx = null;

function getAudioCtx() {
  if (!audioCtx) {
    try { audioCtx = new (window.AudioContext || window.webkitAudioContext)(); } catch(e) {}
  }
  return audioCtx;
}

function playSound(type) {
  const ctx = getAudioCtx();
  if (!ctx) return;

  // Resume daca e suspendat (browser policy)
  if (ctx.state === 'suspended') ctx.resume();

  const now = ctx.currentTime;

  if (type === 'combo') {
    // Plink placut — doua note scurte
    [0, 0.08].forEach((delay, i) => {
      const osc  = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain); gain.connect(ctx.destination);
      osc.frequency.setValueAtTime(i === 0 ? 520 : 680, now + delay);
      osc.frequency.exponentialRampToValueAtTime(i === 0 ? 480 : 640, now + delay + 0.12);
      gain.gain.setValueAtTime(0.18, now + delay);
      gain.gain.exponentialRampToValueAtTime(0.001, now + delay + 0.18);
      osc.type = 'sine';
      osc.start(now + delay);
      osc.stop(now + delay + 0.2);
    });
  }

  else if (type === 'new_element') {
    // Whoosh ascendent — element descoperit
    const freqs = [300, 420, 560, 740, 960];
    freqs.forEach((f, i) => {
      const osc  = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain); gain.connect(ctx.destination);
      osc.frequency.setValueAtTime(f, now + i * 0.07);
      osc.frequency.exponentialRampToValueAtTime(f * 1.4, now + i * 0.07 + 0.15);
      gain.gain.setValueAtTime(0.12, now + i * 0.07);
      gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.07 + 0.2);
      osc.type = 'triangle';
      osc.start(now + i * 0.07);
      osc.stop(now + i * 0.07 + 0.25);
    });
  }

  else if (type === 'legendary') {
    // Boom epic — element secret/legendar
    // Sub-bass hit
    const bass  = ctx.createOscillator();
    const bGain = ctx.createGain();
    bass.connect(bGain); bGain.connect(ctx.destination);
    bass.frequency.setValueAtTime(80, now);
    bass.frequency.exponentialRampToValueAtTime(30, now + 0.5);
    bGain.gain.setValueAtTime(0.5, now);
    bGain.gain.exponentialRampToValueAtTime(0.001, now + 0.5);
    bass.type = 'sine';
    bass.start(now); bass.stop(now + 0.5);

    // Shimmer soprana
    [880, 1100, 1320, 1760].forEach((f, i) => {
      const osc  = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain); gain.connect(ctx.destination);
      osc.frequency.setValueAtTime(f, now + 0.05 + i * 0.08);
      gain.gain.setValueAtTime(0.1, now + 0.05 + i * 0.08);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05 + i * 0.08 + 0.4);
      osc.type = 'sine';
      osc.start(now + 0.05 + i * 0.08);
      osc.stop(now + 0.05 + i * 0.08 + 0.45);
    });
  }

  else if (type === 'clear') {
    // Swoosh descendent
    const osc  = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain); gain.connect(ctx.destination);
    osc.frequency.setValueAtTime(600, now);
    osc.frequency.exponentialRampToValueAtTime(150, now + 0.25);
    gain.gain.setValueAtTime(0.15, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.28);
    osc.type = 'sawtooth';
    osc.start(now); osc.stop(now + 0.3);
  }

  else if (type === 'achievement') {
    // Fanfara mica
    const melody = [523, 659, 784, 1046];
    melody.forEach((f, i) => {
      const osc  = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain); gain.connect(ctx.destination);
      osc.frequency.setValueAtTime(f, now + i * 0.12);
      gain.gain.setValueAtTime(0.2, now + i * 0.12);
      gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.12 + 0.15);
      osc.type = 'square';
      osc.start(now + i * 0.12);
      osc.stop(now + i * 0.12 + 0.18);
    });
  }

  else if (type === 'chain') {
    // Tick accelerat pentru chain
    const osc  = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain); gain.connect(ctx.destination);
    osc.frequency.setValueAtTime(440 + comboChain * 80, now);
    gain.gain.setValueAtTime(0.15, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
    osc.type = 'square';
    osc.start(now); osc.stop(now + 0.1);
  }
}

// ============================================================
// COMBO CHAIN
// ============================================================
function incrementChain() {
  // Resetează timer-ul
  if (comboChainTimer) clearTimeout(comboChainTimer);

  comboChain++;

  if (comboChain >= 3) {
    showChainBanner(comboChain);
    playSound('chain');
  }

  if (comboChain > state.maxChain) {
    state.maxChain = comboChain;
  }

  // Dacă nu mai combini în CHAIN_WINDOW ms, resetezi chain-ul
  comboChainTimer = setTimeout(() => {
    comboChain = 0;
  }, CHAIN_WINDOW);
}

function showChainBanner(n) {
  // Șterge banner vechi dacă există
  document.getElementById('chain-banner')?.remove();

  const banner = document.createElement('div');
  banner.id = 'chain-banner';
  banner.className = 'chain-banner';

  const colors = { 3: '#ff9800', 4: '#f44336', 5: '#9c27b0', 6: '#e91e63' };
  const color  = colors[Math.min(n, 6)] || '#e91e63';
  const labels = { 3: 'ÎN FLĂCĂRI', 4: 'FURTUNA', 5: 'DEVASTATOR', 6: 'LEGENDAR' };
  const label  = labels[Math.min(n, 6)] || 'ABSOLUT';

  banner.innerHTML = `
    <span class="chain-emoji">${n >= 5 ? '🌪️' : n >= 4 ? '⚡' : '🔥'}</span>
    <span class="chain-text">x${n} ${label}!</span>
  `;
  banner.style.setProperty('--chain-color', color);

  document.body.appendChild(banner);

  // Animatie: apare, sta, dispare
  requestAnimationFrame(() => {
    banner.classList.add('chain-visible');
    setTimeout(() => {
      banner.classList.remove('chain-visible');
      setTimeout(() => banner.remove(), 400);
    }, 1600);
  });
}

// ============================================================
// ACHIEVEMENTS CHECK
// ============================================================
function checkAchievements() {
  ACHIEVEMENTS.forEach(ach => {
    if (state.achievements.has(ach.id)) return; // deja deblocat
    if (ach.check(state)) {
      state.achievements.add(ach.id);
      saveState();
      showAchievementToast(ach);
      playSound('achievement');
    }
  });
}

function showAchievementToast(ach) {
  const el = document.createElement('div');
  el.className = 'achievement-toast';
  el.innerHTML = `
    <div class="ach-icon">${ach.emoji}</div>
    <div class="ach-body">
      <div class="ach-title">Achievement Deblocat!</div>
      <div class="ach-name">${ach.name}</div>
      <div class="ach-desc">${ach.desc}</div>
    </div>
  `;
  document.body.appendChild(el);
  requestAnimationFrame(() => {
    el.classList.add('ach-visible');
    setTimeout(() => {
      el.classList.remove('ach-visible');
      setTimeout(() => el.remove(), 400);
    }, 3200);
  });
}

// ============================================================
// HELPERS
// ============================================================
function getRecipe(a, b) { return RECIPE_MAP[[a, b].sort().join('+')] || null; }
function getWorkspace()  { return document.getElementById('workspace'); }

// ============================================================
// SIDEBAR
// ============================================================
function renderSidebar() {
  const container = document.getElementById('elements-list');
  if (!container) return;

  const query = (document.getElementById('search-input')?.value || '').toLowerCase().trim();

  // Toate elementele descoperite (normale + secrete)
  const allKnown = [
    ...ALL_ELEMENTS.filter(e => state.discovered.has(e.id)),
    ...SECRET_ELEMENTS.filter(e => state.discovered.has(e.id)),
  ];

  const filtered = query
    ? allKnown.filter(e => e.name.toLowerCase().includes(query))
    : allKnown;

  container.innerHTML = '';

  if (filtered.length === 0) {
    container.innerHTML = `<div class="no-results">Niciun rezultat</div>`;
    updateProgress();
    return;
  }

  filtered.forEach(element => {
    const btn = document.createElement('button');
    btn.className = `element-btn${element.tier === 'legend' ? ' element-btn--legend' : ''}`;
    btn.title = element.name;
    btn.innerHTML = `
      <span class="el-emoji">${element.emoji}</span>
      <span class="el-name">${element.name}</span>
      <span class="el-tier tier-${element.tier}"></span>
    `;
    btn.addEventListener('click', () => spawnElement(element.id));
    container.appendChild(btn);
  });

  updateProgress();
}

// ============================================================
// SPAWN
// ============================================================
function spawnElement(id, x = null, y = null) {
  const ws      = getWorkspace();
  const element = getElement(id);
  if (!element || !ws) return;

  const wsW = ws.offsetWidth;
  const wsH = ws.offsetHeight;
  const ex  = (x !== null) ? x : 20 + Math.random() * (wsW - 80);
  const ey  = (y !== null) ? y : 20 + Math.random() * (wsH - 80);

  const div = document.createElement('div');
  div.className = `canvas-element popping${element.tier === 'legend' ? ' canvas-element--legend' : ''}`;
  div.dataset.elementId = element.id;
  div.dataset.name      = element.name;
  div.style.left = `${ex}px`;
  div.style.top  = `${ey}px`;
  div.title = element.name;
  div.innerHTML = `<span class="canvas-emoji">${element.emoji}</span>`;

  div.addEventListener('animationend', () => div.classList.remove('popping'), { once: true });

  enableDragging(div);
  ws.appendChild(div);
  hideHint();
  return div;
}

// ============================================================
// DRAG SYSTEM
// ============================================================
function enableDragging(el) {
  let active   = false;
  let ox = 0, oy = 0;
  let hasMoved = false;

  function start(cx, cy) {
    active   = true;
    hasMoved = false;
    dragTarget = el;
    const rect = el.getBoundingClientRect();
    ox = cx - rect.left;
    oy = cy - rect.top;
    el.style.zIndex = '999';
    el.classList.add('dragging');
  }

  function move(cx, cy) {
    if (!active || dragTarget !== el) return;
    hasMoved = true;
    const ws = getWorkspace();
    const wr = ws.getBoundingClientRect();
    const nx = cx - wr.left - ox;
    const ny = cy - wr.top  - oy;
    el.style.left = `${Math.max(0, Math.min(nx, ws.offsetWidth  - el.offsetWidth))}px`;
    el.style.top  = `${Math.max(0, Math.min(ny, ws.offsetHeight - el.offsetHeight))}px`;
  }

  function end() {
    if (!active || dragTarget !== el) return;
    active     = false;
    dragTarget = null;
    el.style.zIndex = '10';
    el.classList.remove('dragging');
    if (hasMoved && !isProcessing) checkCombinations(el);
  }

  el.addEventListener('mousedown', e => { if (e.button === 0) { e.preventDefault(); start(e.clientX, e.clientY); } });
  const mm = e => move(e.clientX, e.clientY);
  const mu = () => end();
  window.addEventListener('mousemove', mm);
  window.addEventListener('mouseup',   mu);

  el.addEventListener('touchstart', e => { e.preventDefault(); start(e.touches[0].clientX, e.touches[0].clientY); }, { passive: false });
const tm = e => {
    if (!active || dragTarget !== el) return; // nu bloca daca nu tragem
    e.preventDefault();
    move(e.touches[0].clientX, e.touches[0].clientY);
};  const te = () => end();
  window.addEventListener('touchmove', tm, { passive: false, capture: false });
  window.addEventListener('touchend',  te);

  el._cleanup = () => {
    window.removeEventListener('mousemove', mm);
    window.removeEventListener('mouseup',   mu);
    window.removeEventListener('touchmove', tm);
    window.removeEventListener('touchend',  te);
  };
}

// ============================================================
// COMBINATION CHECK
// ============================================================
function getCenter(el) {
  return {
    x: parseFloat(el.style.left) + el.offsetWidth  / 2,
    y: parseFloat(el.style.top)  + el.offsetHeight / 2,
  };
}

function checkCombinations(activeEl) {
  if (isProcessing) return;
  const ws  = getWorkspace();
  const all = [...ws.querySelectorAll('.canvas-element')];
  const ac  = getCenter(activeEl);

  for (const other of all) {
    if (other === activeEl) continue;
    const oc   = getCenter(other);
    const dist = Math.hypot(ac.x - oc.x, ac.y - oc.y);
    if (dist > 62) continue;

    const a = activeEl.dataset.elementId;
    const b = other.dataset.elementId;
    const resultId = getRecipe(a, b);

    if (resultId) {
      combineElements(activeEl, other, resultId);
      return;
    }
  }
}

// ============================================================
// COMBINE — cu animatie de sliding
// ============================================================
function combineElements(elA, elB, resultId) {
  const result = getElement(resultId);
  if (!result || isProcessing) return;

  isProcessing = true;

  const cA = getCenter(elA);
  const cB = getCenter(elB);

  // Punct de intalnire = mijlocul dintre cele doua
  const meetX = (cA.x + cB.x) / 2 - 27; // 27 = jumatate din latimea elementului
  const meetY = (cA.y + cB.y) / 2 - 27;

  const isNew    = !state.discovered.has(resultId);
  const isSecret = !!getSecretElement(resultId);
  const isLegend = result.tier === 'legend';

  // ── SLIDING ANIMATION ──
  // Seteaza tranzitie CSS si muta ambele catre punctul de intalnire
  elA.style.transition = 'left 0.22s cubic-bezier(0.4,0,0.2,1), top 0.22s cubic-bezier(0.4,0,0.2,1)';
  elB.style.transition = 'left 0.22s cubic-bezier(0.4,0,0.2,1), top 0.22s cubic-bezier(0.4,0,0.2,1)';
  elA.style.left = `${meetX}px`;
  elA.style.top  = `${meetY}px`;
  elB.style.left = `${meetX}px`;
  elB.style.top  = `${meetY}px`;

  setTimeout(() => {
    // Flash in punctul de intalnire
    elA.classList.add('shaking');
    elB.classList.add('shaking');

    setTimeout(() => {
      elA._cleanup?.(); elA.remove();
      elB._cleanup?.(); elB.remove();

      const newEl = spawnElement(result.id, meetX, meetY);

      // Particule — mai multe pentru legendar/secret
      createParticles(meetX + 27, meetY + 27, isLegend || isSecret ? 18 : 10);

      // Sunete
      if (isSecret || isLegend) {
        playSound('legendary');
      } else if (isNew) {
        playSound('new_element');
      } else {
        playSound('combo');
      }

      if (isNew) {
        state.discovered.add(resultId);
        saveState();
        renderSidebar();
        showDiscoveryOverlay(result, isSecret);
      }

      state.combos++;
      incrementChain();
      checkAchievements();
      saveState();
      updateProgress();

      isProcessing = false;
    }, 180);
  }, 230);
}

// ============================================================
// PARTICLES
// ============================================================
const SPARKS        = ['✨','⭐','💫','🌟','✦','◈','❋'];
const SPARKS_LEGEND = ['💎','🔥','⚡','🌟','✨','🌀','👑','💥'];

function createParticles(x, y, count = 10) {
  const ws     = getWorkspace();
  const pool   = (count > 12) ? SPARKS_LEGEND : SPARKS;
  for (let i = 0; i < count; i++) {
    const p = document.createElement('div');
    p.className = 'ws-particle';
    p.textContent = pool[Math.floor(Math.random() * pool.length)];
    const angle = (i / count) * Math.PI * 2;
    const dist  = 30 + Math.random() * 60;
    p.style.setProperty('--dx', `${Math.cos(angle) * dist}px`);
    p.style.setProperty('--dy', `${Math.sin(angle) * dist}px`);
    p.style.left = `${x}px`;
    p.style.top  = `${y}px`;
    if (count > 12) p.style.fontSize = '18px';
    ws.appendChild(p);
    setTimeout(() => p.remove(), 900);
  }
}

// ============================================================
// DISCOVERY OVERLAY
// ============================================================
function showDiscoveryOverlay(element, isSecret = false) {
  const overlay = document.getElementById('discovery-overlay');
  if (!overlay) return;

  document.getElementById('disc-emoji').textContent = element.emoji;
  document.getElementById('disc-name').textContent  = element.name;
  document.getElementById('disc-desc').textContent  = element.desc || 'O transmutație reușită.';

  // Badge diferit pentru secrete
  const badge = overlay.querySelector('.disc-badge');
  if (badge) {
    badge.textContent = isSecret
      ? '🔮 Element Secret Descoperit 🔮'
      : '✦ Element Nou Descoperit ✦';
    badge.style.color = isSecret ? '#9c27b0' : '#1a1a2e';
  }

  spawnConfetti(overlay.querySelector('.disc-card'), isSecret);
  overlay.classList.add('open');
}

function spawnConfetti(container, isSecret = false) {
  const sparks = isSecret
    ? ['💎','🔮','✨','🌟','💜','⚡','🌀','👑']
    : ['✨','🌟','⚡','🔥','💧','💨','🌍','❄️','⭐','🌿','🌋'];

  container.querySelectorAll('.confetti-p').forEach(p => p.remove());

  for (let i = 0; i < (isSecret ? 30 : 22); i++) {
    const p = document.createElement('div');
    p.className = 'confetti-p';
    p.textContent = sparks[i % sparks.length];
    const angle = Math.random() * Math.PI * 2;
    const dist  = 80 + Math.random() * (isSecret ? 160 : 130);
    p.style.setProperty('--dx', `${Math.cos(angle) * dist}px`);
    p.style.setProperty('--dy', `${Math.sin(angle) * dist - 70}px`);
    p.style.left = `${30 + Math.random() * 40}%`;
    p.style.top  = `${35 + Math.random() * 30}%`;
    p.style.animationDuration = `${0.5 + Math.random() * 0.8}s`;
    p.style.animationDelay    = `${Math.random() * 0.25}s`;
    container.appendChild(p);
    setTimeout(() => p.remove(), 1600);
  }
}

// ============================================================
// ENCYCLOPEDIA
// ============================================================
function openEncyclopedia(tab = 'home') {
  renderEncyclopedia(tab);
  document.getElementById('encyclopedia-modal').classList.add('open');
}

function closeEncyclopedia() {
  document.getElementById('encyclopedia-modal').classList.remove('open');
}

function renderEncyclopedia(activeTab) {
  // Tab buttons
  document.querySelectorAll('[data-enc-tab]').forEach(t => {
    t.classList.toggle('active', t.dataset.encTab === activeTab);
  });

  const body = document.getElementById('enc-body');
  if (!body) return;
  body.innerHTML = '';

  if (activeTab === 'home') renderEncHome(body);
  else                       renderEncItems(body);
}

function renderEncHome(body) {
  const totalNormal = ALL_ELEMENTS.length;
  const totalSecret = SECRET_ELEMENTS.length;
  const total       = totalNormal + totalSecret;
  const found       = [...state.discovered].length;
  const pct         = Math.round((found / total) * 100);

  // Achievements section
  const unlockedAchs = ACHIEVEMENTS.filter(a => state.achievements.has(a.id));
  const lockedAchs   = ACHIEVEMENTS.filter(a => !state.achievements.has(a.id));

  body.innerHTML = `
    <div class="enc-home-wrap">
      <div class="enc-home-icon">
        <span class="material-symbols-outlined">analytics</span>
      </div>
      <div>
        <div class="enc-big-stat">${found} / ${total}</div>
        <div class="enc-stat-sub">ELEMENTE DESCOPERITE</div>
      </div>
      <div>
        <div class="enc-prog-track">
          <div class="enc-prog-fill" style="width:${pct}%"></div>
        </div>
        <div class="enc-prog-label">${pct}% Finalizat</div>
      </div>
      <div style="width:100%;margin-top:8px">
        <div class="enc-section-title">REALIZĂRI (${unlockedAchs.length}/${ACHIEVEMENTS.length})</div>
        <div class="enc-ach-grid">
          ${ACHIEVEMENTS.map(ach => {
            const unlocked = state.achievements.has(ach.id);
            return `
              <div class="enc-ach-card ${unlocked ? 'ach-unlocked' : 'ach-locked'}" title="${ach.desc}">
                <div class="enc-ach-emoji">${unlocked ? ach.emoji : '🔒'}</div>
                <div class="enc-ach-name">${unlocked ? ach.name : '???'}</div>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    </div>
  `;
}

function renderEncItems(body) {
  const allNormal = ALL_ELEMENTS;
  const allSecret = SECRET_ELEMENTS;

  body.innerHTML = `
    <div class="enc-section-title">ELEMENTE NORMALE (${ALL_ELEMENTS.filter(e=>state.discovered.has(e.id)).length}/${ALL_ELEMENTS.length})</div>
    <div class="enc-items-grid" id="enc-normal-grid"></div>
    <div class="enc-section-title" style="margin-top:16px">⚗️ ELEMENTE SECRETE (${SECRET_ELEMENTS.filter(e=>state.discovered.has(e.id)).length}/${SECRET_ELEMENTS.length})</div>
    <div class="enc-items-grid" id="enc-secret-grid"></div>
  `;

  function fillGrid(gridId, elements) {
    const grid = document.getElementById(gridId);
    elements.forEach(el => {
      const found = state.discovered.has(el.id);
      const card  = document.createElement('div');
      card.className = `enc-item-card ${found ? 'found' : 'locked'}`;
      card.innerHTML = `
        <div class="enc-item-emoji">${found ? el.emoji : '🔒'}</div>
        <div class="enc-item-name">${found ? el.name : '???'}</div>
        ${found ? `<div class="enc-item-desc">${el.desc}</div>` : ''}
      `;
      if (found) {
        card.addEventListener('click', () => { spawnElement(el.id); closeEncyclopedia(); });
        card.title = 'Click pentru a adăuga pe tablă';
      }
      grid.appendChild(card);
    });
  }

  fillGrid('enc-normal-grid', allNormal);
  fillGrid('enc-secret-grid', allSecret);
}

// ============================================================
// PROGRESS
// ============================================================
function updateProgress() {
  const found = state.discovered.size;
  const total = ALL_ELEMENTS.length + SECRET_ELEMENTS.length;
  const pct   = Math.round((found / total) * 100);

  const lbl = document.getElementById('progress-label');
  const bar = document.getElementById('progress-bar');
  const ctr = document.getElementById('discovered-counter');
  const cmb = document.getElementById('combo-counter');

  if (lbl) lbl.textContent = `${pct}%`;
  if (bar) bar.style.width = `${pct}%`;
  if (ctr) ctr.textContent = `${found} / ${total}`;
  if (cmb) cmb.textContent = `${state.combos} combinații`;
}

function hideHint() {
  document.getElementById('workspace-hint')?.classList.add('hidden');
}

function showToast(msg) {
  const t = document.getElementById('toast');
  if (!t) return;
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2400);
}

// ============================================================
// INIT
// ============================================================
function initSearch() {
  const input = document.getElementById('search-input');
  if (!input) return;
  input.addEventListener('input',  () => renderSidebar());
  input.addEventListener('change', () => renderSidebar());
}

function initClearBoard() {
  document.getElementById('clear-btn')?.addEventListener('click', () => {
    const ws = getWorkspace();
    if (!ws) return;
    [...ws.querySelectorAll('.canvas-element')].forEach(el => { el._cleanup?.(); el.remove(); });
    document.getElementById('workspace-hint')?.classList.remove('hidden');
    playSound('clear');
    showToast('Tabla curățată ✓');
  });
}

function initEncyclopedia() {
  document.getElementById('enc-btn')?.addEventListener('click', () => openEncyclopedia('home'));
  document.getElementById('enc-close-btn')?.addEventListener('click', closeEncyclopedia);
  document.getElementById('encyclopedia-modal')?.addEventListener('click', e => {
    if (e.target.id === 'encyclopedia-modal') closeEncyclopedia();
  });
  document.querySelectorAll('[data-enc-tab]').forEach(tab => {
    tab.addEventListener('click', () => renderEncyclopedia(tab.dataset.encTab));
  });
}

function initDiscoveryOverlay() {
  document.getElementById('disc-continue-btn')?.addEventListener('click', () => {
    document.getElementById('discovery-overlay').classList.remove('open');
  });
  document.getElementById('discovery-overlay')?.addEventListener('click', e => {
    if (e.target.id === 'discovery-overlay') {
      document.getElementById('discovery-overlay').classList.remove('open');
    }
  });
}

function loadStarterElements() {
  const ws = getWorkspace();
  if (!ws) return;
  const w = ws.offsetWidth;
  const h = ws.offsetHeight;
  spawnElement('fire',  w * 0.18, h * 0.22);
  spawnElement('water', w * 0.52, h * 0.22);
  spawnElement('earth', w * 0.18, h * 0.60);
  spawnElement('air',   w * 0.52, h * 0.60);
}

// ============================================================
// CSS DINAMIC — chain banner + achievement toast + legend styles
// ============================================================
(function injectStyles() {
  const s = document.createElement('style');
  s.textContent = `
    /* ── COMBO CHAIN BANNER ── */
    .chain-banner {
      position: fixed;
      top: 80px;
      left: 50%;
      transform: translateX(-50%) translateY(-20px) scale(0.85);
      background: var(--chain-color, #ff9800);
      color: #fff;
      padding: 10px 28px;
      border-radius: 999px;
      font-family: 'Sora', sans-serif;
      font-weight: 800;
      font-size: 16px;
      letter-spacing: 1px;
      display: flex;
      align-items: center;
      gap: 10px;
      z-index: 9500;
      opacity: 0;
      box-shadow: 0 4px 24px rgba(0,0,0,0.25);
      transition: all 0.3s cubic-bezier(0.34,1.56,0.64,1);
      pointer-events: none;
    }
    .chain-banner.chain-visible {
      opacity: 1;
      transform: translateX(-50%) translateY(0) scale(1);
    }
    .chain-emoji { font-size: 22px; }
    .chain-text  { font-size: 15px; font-weight: 800; letter-spacing: 2px; }

    /* ── ACHIEVEMENT TOAST ── */
    .achievement-toast {
      position: fixed;
      bottom: 28px;
      right: 20px;
      background: #fff;
      border: 1.5px solid #1a1a2e;
      border-radius: 14px;
      padding: 12px 16px;
      display: flex;
      align-items: center;
      gap: 12px;
      z-index: 9400;
      opacity: 0;
      transform: translateX(30px);
      transition: all 0.35s cubic-bezier(0.34,1.56,0.64,1);
      box-shadow: 0 6px 24px rgba(0,0,0,0.14);
      max-width: 280px;
      font-family: 'Sora', sans-serif;
    }
    .achievement-toast.ach-visible {
      opacity: 1;
      transform: translateX(0);
    }
    .ach-icon  { font-size: 32px; flex-shrink: 0; }
    .ach-title { font-size: 9px; letter-spacing: 2px; text-transform: uppercase; color: #78767d; font-weight: 600; margin-bottom: 2px; }
    .ach-name  { font-size: 13px; font-weight: 700; color: #1c1b1d; }
    .ach-desc  { font-size: 11px; color: #63616c; margin-top: 2px; }

    /* ── LEGENDARY ELEMENT pe canvas ── */
    .canvas-element--legend {
      border-color: #ff9800 !important;
      box-shadow: 0 0 12px rgba(255,152,0,0.4), 0 1px 4px rgba(0,0,0,0.08) !important;
      animation: legend-pulse 2s ease-in-out infinite;
    }
    @keyframes legend-pulse {
      0%,100% { box-shadow: 0 0 8px rgba(255,152,0,0.3); }
      50%      { box-shadow: 0 0 18px rgba(255,152,0,0.6); }
    }

    /* ── ELEMENT BTN LEGEND in sidebar ── */
    .element-btn--legend .el-name { color: #e65100; font-weight: 600; }

    /* ── ENC ACHIEVEMENT GRID ── */
    .enc-ach-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(72px, 1fr));
      gap: 6px;
      margin-top: 6px;
    }
    .enc-ach-card {
      border-radius: 10px;
      border: 1.5px solid #e5e1e3;
      padding: 10px 4px 8px;
      text-align: center;
      background: #fff;
      cursor: default;
      transition: border-color 0.12s, transform 0.1s;
    }
    .enc-ach-card.ach-unlocked { border-color: #1a1a2e; background: #f8f8ff; }
    .enc-ach-card.ach-unlocked:hover { transform: scale(1.05); }
    .enc-ach-card.ach-locked   { opacity: 0.4; background: #f6f2f4; }
    .enc-ach-emoji { font-size: 22px; margin-bottom: 4px; }
    .enc-ach-name  { font-size: 9px; color: #1c1b1d; line-height: 1.2; font-weight: 500; }
  `;
  document.head.appendChild(s);
})();

// ============================================================
// SISTEM INDICIU — modern, fara repetitii, fara combinatii deja facute
// ============================================================

let hintCooldownTimer  = null;
let hintCooldownLeft   = 0;
let hintUsedThisSession = new Set(); // combinatii deja sugerate in sesiunea curenta

function getHint() {
  const btn = document.getElementById('hint-btn');

  // Daca e pe cooldown
  if (hintCooldownLeft > 0) {
    showHintCooldownToast(hintCooldownLeft);
    shakeHintBtn();
    return;
  }

  const discovered     = new Set(state.discovered);
  const allRecipes     = [...RECIPES, ...SECRET_RECIPES];

  // Filtreaza: ambele ingrediente descoperite, rezultatul NEdescoperit, combinatia NEsugerate inca
  const possible = allRecipes.filter(([a, b, result]) => {
    const key = [a, b].sort().join('+');
    return (
      discovered.has(a) &&
      discovered.has(b) &&
      !discovered.has(result) &&
      !hintUsedThisSession.has(key)
    );
  });

  if (possible.length === 0) {
    // Daca am epuizat toate sugestiile, resetam sesiunea
    if (hintUsedThisSession.size > 0) {
      hintUsedThisSession.clear();
      showHintModal(null, 'reset');
    } else {
      showHintModal(null, 'empty');
    }
    return;
  }

  // Alege random una din posibile
  const pick = possible[Math.floor(Math.random() * possible.length)];
  const [a, b, result] = pick;
  const key = [a, b].sort().join('+');

  // Marcheaza ca folosita
  hintUsedThisSession.add(key);

  const elA = getElement(a);
  const elB = getElement(b);
  const elR = getElement(result);

  showHintModal({ elA, elB, elR });

  // Porneste cooldown 45s
  startHintCooldown(45, btn);
}

function startHintCooldown(seconds, btn) {
  hintCooldownLeft = seconds;
  updateHintBtn(btn, seconds);

  hintCooldownTimer = setInterval(() => {
    hintCooldownLeft--;
    updateHintBtn(btn, hintCooldownLeft);
    if (hintCooldownLeft <= 0) {
      clearInterval(hintCooldownTimer);
      hintCooldownTimer = null;
      resetHintBtn(btn);
    }
  }, 1000);
}

function updateHintBtn(btn, sec) {
  if (!btn) return;
  const label = btn.querySelector('.hint-label');
  if (label) label.textContent = `INDICIU (${sec}s)`;
  btn.style.opacity = '0.55';
  btn.style.cursor  = 'not-allowed';
}

function resetHintBtn(btn) {
  if (!btn) return;
  const label = btn.querySelector('.hint-label');
  if (label) label.textContent = 'INDICIU';
  btn.style.opacity = '';
  btn.style.cursor  = '';
}

function shakeHintBtn() {
  const btn = document.getElementById('hint-btn');
  if (!btn) return;
  btn.style.animation = 'none';
  requestAnimationFrame(() => {
    btn.style.animation = 'hint-shake 0.4s ease';
    setTimeout(() => btn.style.animation = '', 400);
  });
}

function showHintCooldownToast(sec) {
  showToast(`⏳ Indiciu disponibil în ${sec}s`);
}

// ── MODAL INDICIU ──
function showHintModal(data, mode = 'hint') {
  // Sterge modal vechi
  document.getElementById('hint-modal')?.remove();

  const modal = document.createElement('div');
  modal.id = 'hint-modal';
  modal.className = 'hint-modal-overlay';

  let inner = '';

  if (mode === 'empty') {
    inner = `
      <div class="hint-modal-card">
        <div class="hint-modal-icon">🔍</div>
        <div class="hint-modal-title">Nicio combinație nouă</div>
        <div class="hint-modal-sub">Nu există rețete noi posibile cu elementele pe care le ai.<br>Continuă să explorezi!</div>
        <button class="hint-modal-close-btn" onclick="document.getElementById('hint-modal').remove()">Închide</button>
      </div>
    `;
  } else if (mode === 'reset') {
    inner = `
      <div class="hint-modal-card">
        <div class="hint-modal-icon">🔄</div>
        <div class="hint-modal-title">Indicii resetate!</div>
        <div class="hint-modal-sub">Ai primit toate indiciile posibile. Le reluăm de la început.</div>
        <button class="hint-modal-close-btn" onclick="document.getElementById('hint-modal').remove()">OK</button>
      </div>
    `;
  } else {
    const { elA, elB, elR } = data;
    inner = `
      <div class="hint-modal-card hint-modal-card--hint">
        <div class="hint-modal-badge">💡 INDICIU</div>
        <div class="hint-modal-title">Încearcă această combinație</div>
        <div class="hint-combo-row">
          <div class="hint-combo-el">
            <span class="hint-combo-emoji">${elA.emoji}</span>
            <span class="hint-combo-name">${elA.name}</span>
          </div>
          <span class="hint-combo-plus">+</span>
          <div class="hint-combo-el">
            <span class="hint-combo-emoji">${elB.emoji}</span>
            <span class="hint-combo-name">${elB.name}</span>
          </div>
          <span class="hint-combo-arrow">→</span>
          <div class="hint-combo-el hint-combo-el--result">
            <span class="hint-combo-emoji">❓</span>
            <span class="hint-combo-name">???</span>
          </div>
        </div>
        <div class="hint-modal-sub">Rezultatul e o surpriză 🎯</div>
        <div class="hint-modal-actions">
          <button class="hint-modal-spawn-btn" onclick="spawnHintElements('${elA.id}','${elB.id}')">
            <span style="font-size:16px">✦</span> Adaugă pe tablă
          </button>
          <button class="hint-modal-close-btn" onclick="document.getElementById('hint-modal').remove()">
            Închide
          </button>
        </div>
      </div>
    `;
  }

  modal.innerHTML = inner;
  modal.addEventListener('click', e => {
    if (e.target === modal) modal.remove();
  });
  document.body.appendChild(modal);

  // Animatie de intrare
  requestAnimationFrame(() => modal.classList.add('hint-modal-open'));
}

function spawnHintElements(idA, idB) {
  document.getElementById('hint-modal')?.remove();
  const ws = getWorkspace();
  if (!ws) return;
  const w = ws.offsetWidth;
  const h = ws.offsetHeight;
  spawnElement(idA, w * 0.35, h * 0.4);
  spawnElement(idB, w * 0.55, h * 0.4);
}

// ── STILURI HINT MODAL ──
(function injectHintStyles() {
  const s = document.createElement('style');
  s.textContent = `
    @keyframes hint-shake {
      0%,100% { transform: translateX(0); }
      20%     { transform: translateX(-5px); }
      40%     { transform: translateX(5px); }
      60%     { transform: translateX(-4px); }
      80%     { transform: translateX(4px); }
    }

    .hint-modal-overlay {
      position: fixed;
      inset: 0;
      background: rgba(0,0,0,0.45);
      backdrop-filter: blur(5px);
      z-index: 9800;
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0;
      transition: opacity 0.25s ease;
    }
    .hint-modal-overlay.hint-modal-open { opacity: 1; }

    .hint-modal-card {
      background: #fff;
      border-radius: 20px;
      padding: 32px 36px;
      text-align: center;
      max-width: 400px;
      width: 92%;
      box-shadow: 0 20px 60px rgba(0,0,0,0.18);
      transform: scale(0.9) translateY(12px);
      transition: transform 0.3s cubic-bezier(0.34,1.56,0.64,1);
      font-family: 'Sora', sans-serif;
    }
    .hint-modal-overlay.hint-modal-open .hint-modal-card {
      transform: scale(1) translateY(0);
    }
    .hint-modal-card--hint {
      border-top: 4px solid #1a1a2e;
    }

    .hint-modal-icon  { font-size: 48px; margin-bottom: 10px; }
    .hint-modal-badge {
      display: inline-block;
      background: #f6f2f4;
      color: #1a1a2e;
      font-size: 10px;
      font-weight: 700;
      letter-spacing: 2px;
      padding: 4px 12px;
      border-radius: 999px;
      margin-bottom: 12px;
    }
    .hint-modal-title {
      font-size: 18px;
      font-weight: 700;
      color: #1c1b1d;
      margin-bottom: 20px;
    }
    .hint-modal-sub {
      font-size: 12px;
      color: #78767d;
      margin-top: 12px;
      line-height: 1.6;
    }

    /* Combinatie row */
    .hint-combo-row {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 12px;
      background: #f6f2f4;
      border-radius: 14px;
      padding: 16px 12px;
    }
    .hint-combo-el {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 4px;
      min-width: 56px;
    }
    .hint-combo-el--result {
      opacity: 0.5;
    }
    .hint-combo-emoji { font-size: 32px; line-height: 1; }
    .hint-combo-name  { font-size: 10px; color: #47464c; font-weight: 600; letter-spacing: 0.5px; }
    .hint-combo-plus  { font-size: 20px; color: #c8c5cd; font-weight: 300; }
    .hint-combo-arrow { font-size: 18px; color: #c8c5cd; }

    /* Butoane */
    .hint-modal-actions {
      display: flex;
      gap: 8px;
      justify-content: center;
      margin-top: 20px;
    }
    .hint-modal-spawn-btn {
      display: flex;
      align-items: center;
      gap: 6px;
      padding: 10px 20px;
      background: #1a1a2e;
      color: #fff;
      border: none;
      border-radius: 999px;
      font-size: 12px;
      font-family: 'Sora', sans-serif;
      font-weight: 600;
      cursor: pointer;
      transition: opacity 0.15s, transform 0.15s;
    }
    .hint-modal-spawn-btn:hover { opacity: 0.85; transform: scale(1.03); }
    .hint-modal-close-btn {
      padding: 10px 20px;
      background: #f6f2f4;
      color: #47464c;
      border: none;
      border-radius: 999px;
      font-size: 12px;
      font-family: 'Sora', sans-serif;
      font-weight: 600;
      cursor: pointer;
      transition: background 0.15s;
    }
    .hint-modal-close-btn:hover { background: #ebe7e9; }
  `;
  document.head.appendChild(s);
})();

// ── INIT HINT BTN ──
function initHint() {
  const btn = document.getElementById('hint-btn');
  if (!btn) return;

  // Inlocuieste textul label-ului cu un span cu clasa ca sa-l putem updata
  const labelSpan = btn.querySelector('.hint-label') || btn.querySelector('.text-label-caps');
  if (labelSpan) labelSpan.classList.add('hint-label');

  btn.addEventListener('click', getHint);
}

// ============================================================
// BOOT (Păstrează doar acest bloc la finalul fișierului)
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  loadState();
  renderSidebar();
  initSearch();
  initClearBoard();
  initEncyclopedia();
  initDiscoveryOverlay();
  initHint();
    
    requestAnimationFrame(() => {
        loadStarterElements();
        updateProgress();
    });
});