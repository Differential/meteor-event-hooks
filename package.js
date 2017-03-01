Package.describe({
	name: "differential:event-hooks",
	summary: "Provides hooks for various user-triggered events",
	git: 'https://github.com/Differential/meteor-event-hooks.git',
	version: '1.5.0'
});

var both = ['client', 'server']

Package.onUse(function (api) {
	api.versionsFrom("1.4.2.3");
	api.use('ecmascript');

	api.addFiles(['client.js'], 'client');
	api.addFiles(['server.js'], 'server');
	api.addFiles(['common.js'], both);

	if (typeof api.export !== 'undefined') {
		api.export(['Hooks', 'EventHooksMonitoringCollection'], both);
	}
});
