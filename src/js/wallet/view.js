import {ItemView} from "backbone.marionette";
import template from "./template.hbs";

export default ItemView.extend({
	template: template,
	className: "wallet",

	onRender() {
		this.$el.animate({ left: 0 });
	}
});