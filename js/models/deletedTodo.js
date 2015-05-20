/*global Backbone */
var app = app || {};

(function () {
	'use strict';

	// Deleted Todo Model
	// ----------

	// Our basic **deletedTodo** model has `title`, `order`, `prioritized`,
	// `deleted` and `completed` attributes.
	app.deletedTodo = Backbone.Model.extend({
		// Default attributes for the todo
		// and ensure that each todo created has `title` and `completed` keys.
		defaults: {
			title: '',
			completed: false,
			prioritized: false,
			priority_level: 0,
			deleted: true
		},

		// DOES NOTHING BUT MIMIC MODEL METHOD'S NAME TO AVOID ANY ACTION WITH 
		//  THE DELETED ITEM IN VIEW.
		toggle: function () {
			console.log('toggle');
		},

		togglePriority: function () {
			console.log('togglePriority');
		}
	});
})();
