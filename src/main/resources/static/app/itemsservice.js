angular.module("app").service("itemsService", ItemsService);

function ItemsService() {

	this.items = [];

	this.getItems = function() {
		return this.items;
	}

	this.newItem = function(newItem) {
		this.items.push(newItem);
	}

	this.updateItem = function(updatedItem) {
			//Do nothing
	}

	this.deleteItem = function(item) {
		this.items.splice(items.indexOf(item), 1);
	}
}

