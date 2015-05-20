/*global Backbone */
var app = app || {};

(function () {
	'use strict';

	// Deleted Todos Collection
	// ---------------

	// The collection of todos is backed by *localStorage* instead of a remote
	// server.
	var deletedTodos = Backbone.Collection.extend({
		// Reference to this collection's model.
		model: app.deletedTodo,

		// Save all of the deleted todo items under the `"todos-deleted"` namespace.
		localStorage: new Backbone.LocalStorage('todos-deleted'),

		// Filter down the list to only todo items that are deleted.
		trash: function () {
			return this;
		},

		// We keep the Todos in sequential order, despite being saved by unordered
		// GUID in the database. This generates the next order number for new items.
		nextOrder: function () {
			return this.length ? this.last().get('order') + 1 : 1;
		},

		// Todos are sorted by their original insertion order.
		comparator: 'order'
	});

	// Create our global collection of **DeletedTodos**.
	app.deletedTodos = new deletedTodos();
})();
