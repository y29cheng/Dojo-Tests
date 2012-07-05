define(["dojo/_base/declare", "dojo/fx", "dojo/dom-style", "dijit/_WidgetBase", "dijit/_TemplatedMixin", "dojo/text!templates/tabWidget.html"], 
		function(declare, fx, domStyle, _WidgetBase, _TemplatedMixin, template) {
			return declare([_WidgetBase, _TemplatedMixin], {
				templateString: template,
				baseClass: "tabWidget",
				tabName: "no name",
				menuItems: [],
				constructor: function(args) {
					declare.safeMixin(this, args);
				},
				
			})
})