sap.ui.define([
	"Webapp/FioriIDAuth_EGI_DEMO/controller/BaseController"
	], function (BaseController) {
		"use strict";

		return BaseController.extend("Webapp.FioriIDAuth_EGI_DEMO.controller.NotFound", {

			onInit: function () {
				this.getRouter().getTarget("notFound").attachDisplay(this._onNotFoundDisplayed, this);
			},

			_onNotFoundDisplayed : function () {
					this.getModel("appView").setProperty("/layout", "OneColumn");
			}
		});
	}
);
