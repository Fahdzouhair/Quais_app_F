/*global QUnit*/

sap.ui.define([
	"sd17_app_quais_vf/controller/Quais.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Quais Controller");

	QUnit.test("I should test the Quais controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
