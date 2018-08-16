// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 Products in the list
// * All 3 Products have at least one Supplier

sap.ui.define([
	"sap/ui/test/Opa5",
	"Webapp/FioriIDAuth_EGI_DEMO/test/integration/arrangements/Arrangement","Webapp/FioriIDAuth_EGI_DEMO/test/integration/MasterJourney",
	"Webapp/FioriIDAuth_EGI_DEMO/test/integration/NavigationJourney",
	"Webapp/FioriIDAuth_EGI_DEMO/test/integration/NotFoundJourney",
	"Webapp/FioriIDAuth_EGI_DEMO/test/integration/BusyJourney"
], function (Opa5, Arrangement) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Arrangement(),
		viewNamespace: "Webapp.FioriIDAuth_EGI_DEMO.view.",
		autoWait: true
	});
});
