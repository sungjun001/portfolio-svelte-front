export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","robots.txt"]),
	mimeTypes: {".png":"image/png",".txt":"text/plain"},
	_: {
		client: {"start":"_app/immutable/entry/start.DEk-vzxa.js","app":"_app/immutable/entry/app.CDk_ceSV.js","imports":["_app/immutable/entry/start.DEk-vzxa.js","_app/immutable/chunks/entry.1lnd0DsQ.js","_app/immutable/chunks/scheduler.By1gkzyB.js","_app/immutable/chunks/index.BJeoyush.js","_app/immutable/entry/app.CDk_ceSV.js","_app/immutable/chunks/scheduler.By1gkzyB.js","_app/immutable/chunks/index.DNwIZS93.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/5.js'))
		],
		routes: [
			{
				id: "/sverdle",
				pattern: /^\/sverdle\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
