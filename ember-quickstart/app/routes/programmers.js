import Route from '@ember/routing/route';

export default Route.extend({
	model() {
		return ['Joshua Bloch', 'Douglas Crockford', 'Gosling'];
	}
});
