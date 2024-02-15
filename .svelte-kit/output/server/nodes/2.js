import * as universal from '../entries/pages/_page.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.ts";
export const imports = ["_app/immutable/nodes/2.Sbc279rm.js","_app/immutable/chunks/scheduler.By1gkzyB.js","_app/immutable/chunks/index.DNwIZS93.js","_app/immutable/chunks/index.BJeoyush.js"];
export const stylesheets = ["_app/immutable/assets/2.Cs8KR-Bb.css"];
export const fonts = [];
