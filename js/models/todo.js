/*global Backbone */
var app = app || {};

(function () {
	'use strict';

	// Todo Model
	// ----------

	// Our basic **Todo** model has `title`, `order`, and `completed` attributes.
	app.Todo = Backbone.Model.extend({
		// Default attributes for the todo
		// and ensure that each todo created has `title` and `completed` keys.
		defaults: {
			title: '',
			completed: false,
			prioritized: false,
			priority_level: 0,
			deleted: false
		},

		// Toggle the `completed` state of this todo item.
		toggle: function () {
			this.save({
				completed: !this.get('completed')
			});
		},

		// Toggle the `prioritized` state of this todo item.
		togglePriority: function () {
			if ( this.get('prioritized') ){
				if ( this.get( 'priority_level') < 3) {
					this.save({
						priority_level: this.get('priority_level') + 1
					});
				}
				else {
					this.save({
						prioritized: !this.get('prioritized'),
						priority_level: 0
					});
				} 
			} else{
				this.save({
					prioritized: !this.get('prioritized')
				});
			}		
		}
	});
})();
