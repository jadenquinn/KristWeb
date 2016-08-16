import {AppRouter} from "backbone.marionette";

import SidebarService from "./sidebar/service";

import OverviewView from "./overview/view";
import TestGroundView from "./testground/view";
import FriendsView from "./friends/view";
import AddressView from "./address/view";
import PayView from "./transaction/pay-view";
import TransactionView from "./transaction/view";
import BlockView from "./block/view";

import SettingsStorageView from "./settings/storage/view";
import SettingsNotificationView from "./settings/notifications/view";

export default AppRouter.extend({
	routes: {
		"": "overview",
		"testground(/)": "testground",
		"overview(/)": "overview",
		"addressbook(/)": "friends",
		"friends(/)": "friends",
		"address(es)/:address": "address",
		"transaction(s)(/)": "pay",
		"transaction(s)/:transaction": "transaction",
		"block(s)/:block": "block",
		"name(s)/:name(.kst)": "pay",
		"settings/storage": "settingsStorage",
		"settings/notifications": "settingsNotifications"
	},

	initialize(options = {}) {
		this.container = options.container;
	},

	testground() {
		this.container.show(new TestGroundView());

		SidebarService.request("activate", {
			key: "testground"
		});
	},

	overview() {
		this.container.show(new OverviewView());

		SidebarService.request("activate", {
			key: "overview"
		});
	},

	friends() {
		this.container.show(new FriendsView());

		SidebarService.request("activate", {
			key: "friends"
		});
	},

	address(address) {
		this.container.show(new AddressView({
			address: address
		}));

		SidebarService.request("deactivate");
	},

	pay() {
		this.container.show(new PayView());

		SidebarService.request("activate", {
			key: "transactions"
		});
	},

	transaction(transaction) {
		this.container.show(new TransactionView({
			transaction: transaction
		}));

		SidebarService.request("activate", {
			key: "transactions"
		});
	},

	block(block) {
		this.container.show(new BlockView({
			block: block
		}));

		SidebarService.request("deactivate");
	},

	settingsStorage() {
		this.container.show(new SettingsStorageView());

		SidebarService.request("activate", {
			key: "settings"
		});
	},

	settingsNotifications() {
		this.container.show(new SettingsNotificationView());

		SidebarService.request("activate", {
			key: "settings"
		});
	}
});