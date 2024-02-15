import * as server from '../entries/pages/sverdle/_page.server.ts.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/sverdle/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/sverdle/+page.server.ts";
export const imports = ["_app/immutable/nodes/5.D0zz7l7f.js","_app/immutable/chunks/scheduler.By1gkzyB.js","_app/immutable/chunks/index.DNwIZS93.js","_app/immutable/chunks/each.DjtbDa1r.js","_app/immutable/chunks/entry.1lnd0DsQ.js","_app/immutable/chunks/index.BJeoyush.js"];
export const stylesheets = ["_app/immutable/assets/5.DOkkq0IA.css"];
export const fonts = [];
