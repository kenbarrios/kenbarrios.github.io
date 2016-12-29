(function() {
	'use strict';
	angular.module('app', [])
	.controller('RootController', RootController)
	.component('app', {
		template: `
		<div class="container">
			<landing></landing>

			<about></about>

			<projects-header></projects-header>

			<projects-list></projects-list>

			<connect></connect>
		</div>
		`,
		controller: RootController,
		bindings: {}
	});
	
	function RootController() {}
})();