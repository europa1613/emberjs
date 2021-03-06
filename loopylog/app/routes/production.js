import Ember from 'ember';
import Route from '@ember/routing/route';
const Promise = Ember.RSVP.Promise;

export default Route.extend({
	model(params) {
		/*return {
			"ProductName": "Ponderosa",
			"DimensionName": "1\" X 4\" X 14",
			"BoardsSum": 20,
			"BoardFeetSum": 10000
		}*/

		//return Ember.$.getJSON(`/data/production.json?start=${params.start}&end=${params.end}`);

		return new Promise(function(resolve) {
			setTimeout(function() {
				let data = Ember.$.getJSON(`/data/production.json?start=${params.start}&end=${params.end}`);
				resolve(data);
			}, 2000);
		});
	}
});
