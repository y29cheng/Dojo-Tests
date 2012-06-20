define(["dojo/_base/declare", "dojo/parser", "dojo/ready", "dojo/_base/fx", "dojo/dom-style", "dijit/_WidgetBase", "dijit/_TemplatedMixin", "dojo/text!templates/personWidget.html"], 
		function(declare, parser, ready, baseFx, domStyle, _WidgetBase, _TemplatedMixin, template) {
			return declare([_WidgetBase, _TemplatedMixin], {
				templateString: template,
				baseClass: "personEntry",
				name: "No name",
				bio: "No bio",
				baseBackgroundColor: "#fff",
				mouseBackgroundColor: "#def",
				constructor: function(args) {
					declare.safeMixin(this, args);
				},
				_changeBackgroundColor: function(toColor) {
					baseFx.animateProperty({
						node: this.domNode,
						properties: {
							backgroundColor: toColor
						},
						duration: 500
					}).play();
				},
				setPersonalInfo: function(name, bio) {
					if (name) this.name = name;
					if (bio) this.bio = bio;
				},
				postCreate: function() {
					var domNode = this.domNode;
					
					domStyle.set(domNode, "backgroundColor", this.baseBackgroundColor);
					this.connect(domNode, "onmouseenter", function(e) {
						this._changeBackgroundColor(this.mouseBackgroundColor);
					});
					this.connect(domNode, "onmouseleave", function(e) {
						this._changeBackgroundColor(this.baseBackgroundColor);
					});
				}
			});
						
});