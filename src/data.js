// ---------- static game data ----------

export const WRENCHES = [10, 12, 13, 15, 17, 19];

export const PARTS = [
  {
    id: 'crank', name: 'CRANKSHAFT', short: 'CRANK',
    tool: 17, torque: 65, tol: 5, bolts: 2, price: 55,
    desc: 'Drop it into the mains. If it does not spin free by hand, stop and start again.',
    requires: []
  },
  {
    id: 'pistons', name: 'PISTONS & RODS', short: 'PISTONS',
    tool: 13, torque: 35, tol: 4, bolts: 4, price: 70,
    desc: 'Four slugs, four rods. Ring gaps up, caps matched. This is where the engine starts lying to you.',
    requires: ['crank']
  },
  {
    id: 'oilpan', name: 'OIL PAN', short: 'OIL PAN',
    tool: 10, torque: 18, tol: 3, bolts: 3, price: 25,
    desc: 'Thin stamped steel. Easy to warp, easy to leak. Snug, not savage.',
    requires: ['crank']
  },
  {
    id: 'gasket', name: 'HEAD GASKET', short: 'GASKET',
    tool: 0, torque: 0, tol: 0, bolts: 0, price: 18,
    desc: 'It only goes on one way. The right way up is the one that does not leak.',
    requires: ['pistons']
  },
  {
    id: 'head', name: 'CYLINDER HEAD', short: 'HEAD',
    tool: 17, torque: 75, tol: 5, bolts: 3, price: 90,
    desc: 'Heavy cast iron. Work the bolts in sequence, or the gasket will remember.',
    requires: ['gasket']
  },
  {
    id: 'carb', name: 'CARBURETOR', short: 'CARB',
    tool: 13, torque: 22, tol: 3, bolts: 2, price: 45,
    desc: 'A controlled fuel leak. Bolt it down and we will make it behave later.',
    requires: ['head']
  },
  {
    id: 'wiring', name: 'WIRING LOOM', short: 'LOOM',
    tool: 0, torque: 0, tol: 0, bolts: 0, price: 35,
    desc: 'A nest of copper and cracked tape. Route it away from the exhaust.',
    requires: ['head']
  },
  {
    id: 'battery', name: 'BATTERY', short: 'BATTERY',
    tool: 10, torque: 12, tol: 2, bolts: 2, price: 40,
    desc: 'Twelve volts and a bad attitude. Do not bridge the terminals with the wrench.',
    requires: []
  },
  {
    id: 'radiator', name: 'RADIATOR', short: 'RADIATOR',
    tool: 13, torque: 20, tol: 3, bolts: 2, price: 50,
    desc: 'Fin stack with a slow leak. Mount it soft and fill it cold.',
    requires: []
  },
  {
    id: 'fueltank', name: 'FUEL TANK', short: 'TANK',
    tool: 15, torque: 25, tol: 4, bolts: 2, price: 35,
    desc: 'A rusty can with straps. Do not overtorque the straps; they will cut through.',
    requires: []
  },
  {
    id: 'driveshaft', name: 'DRIVESHAFT', short: 'SHAFT',
    tool: 15, torque: 45, tol: 5, bolts: 2, price: 40,
    desc: 'Two universal joints and a long grudge against physics. Phase it or it will vibrate.',
    requires: []
  },
  {
    id: 'wheels', name: 'WHEELS', short: 'WHEELS',
    tool: 19, torque: 110, tol: 10, bolts: 4, price: 80,
    desc: 'Four bald tires and a lug nut each. The last one always feels tight. It is not.',
    requires: ['driveshaft']
  },
  {
    id: 'seat', name: 'SEAT', short: 'SEAT',
    tool: 13, torque: 30, tol: 4, bolts: 2, price: 20,
    desc: 'Torn vinyl over a broken spring. Not safety equipment, but it is what you have.',
    requires: []
  },
  {
    id: 'steering', name: 'STEERING COLUMN', short: 'STEERING',
    tool: 15, torque: 25, tol: 3, bolts: 1, price: 30,
    desc: 'A shaft, a wheel, and a prayer. Leave the nut loose and you will find out.',
    requires: []
  }
];

export const PART_MAP = Object.fromEntries(PARTS.map(p => [p.id, p]));

export const TUNE = {
  mixture: { min: 0, max: 100, start: 18, ideal: 55, tol: 6, label: 'FUEL MIXTURE', unit: '' },
  valve: { min: 0.08, max: 0.44, start: 0.39, ideal: 0.23, tol: 0.025, label: 'VALVE CLEARANCE', unit: 'mm', step: 0.005, decimals: 3 },
  timing: { min: -8, max: 20, start: -5, ideal: 11, tol: 2, label: 'IGNITION TIMING', unit: '°', step: 0.5, decimals: 1 }
};

export const SURVIVAL_DECAY = {
  // per in-game minute
  hunger: 0.055,
  thirst: 0.075,
  fatigue: 0.045,
  stress: 0.022,
  hygiene: 0.018
};

export const LOCATIONS = {
  home:     { x: 0,   z: 4,    label: 'HOME',      kind: 'home' },
  sawmill:  { x: -74, z: -44,  label: 'SAWMILL',   kind: 'pickup' },
  farm:     { x: 66,  z: -42,  label: 'FARMHOUSE', kind: 'drop' },
  barn:     { x: -34, z: 68,   label: 'NORTH BARN',kind: 'pickup' },
  store:    { x: 62,  z: 60,   label: 'STORE',     kind: 'drop' },
  scrapyard:{ x: -52, z: 64,   label: 'SCRAPYARD', kind: 'pickup' }
};

export const JOBS = [
  {
    id: 'firewood', name: 'FIREWOOD RUN', pay: 140,
    pickup: 'sawmill', drop: 'farm', cargo: 'FIREWOOD',
    desc: 'Old Marlow needs four cord stacked by the porch before dark. Load at the sawmill.',
    loadTime: 6, loadKind: 'hold'
  },
  {
    id: 'septic', name: 'SEPTIC PUMP', pay: 190,
    pickup: 'farm', drop: 'farm', cargo: 'SEPTIC',
    desc: 'The farmhouse tank is full and backing up. Pump it out. You will smell it for a day.',
    loadTime: 9, loadKind: 'pressure'
  },
  {
    id: 'hay', name: 'HAY DELIVERY', pay: 110,
    pickup: 'barn', drop: 'store', cargo: 'HAY',
    desc: 'Twelve bales for the feed store. Keep it under thirty or the load walks off the trailer.',
    loadTime: 5, loadKind: 'hold'
  },
  {
    id: 'scrap', name: 'SCRAP HAUL', pay: 160,
    pickup: 'scrapyard', drop: 'sawmill', cargo: 'SCRAP',
    desc: 'A load of bent steel for the mill. Heavy. The tractor will feel every pothole.',
    loadTime: 7, loadKind: 'hold'
  }
];

export const JOB_MAP = Object.fromEntries(JOBS.map(j => [j.id, j]));

export const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
export const lerp = (a, b, t) => a + (b - a) * t;
export const rand = (a, b) => a + Math.random() * (b - a);
export const pick = arr => arr[Math.floor(Math.random() * arr.length)];
