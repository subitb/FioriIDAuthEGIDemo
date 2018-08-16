sap.ui.define([
	"sap/ui/test/Opa5",
	"Webapp/FioriIDAuth_EGI_DEMO/test/integration/arrangements/Arrangement",
	"Webapp/FioriIDAuth_EGI_DEMO/test/integration/NavigationJourneyPhone",
	"Webapp/FioriIDAuth_EGI_DEMO/test/integration/NotFoundJourneyPhone",
	"Webapp/FioriIDAuth_EGI_DEMO/test/integration/BusyJourneyPhone"
], function (Opa5, Arrangement) {
	"use strict";

	Opa5.extendConfig({
		arrangements: new Arrangement(),
		viewNamespace: "Webapp.FioriIDAuth_EGI_DEMO.view.",
		autoWait: true
	});
});
