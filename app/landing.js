(function() {
	'use strict';

	function LandingController() {
		var ctrl = this;
		console.log('landing.js!');
	}

	angular.module('app').component('landing', {
		template: `
			<div id="landing" class="aBlock">
				<app-nav></app-nav>

				<h1 class="hireMe1">
					ken barrios
				</h1>
				<h3 class="hireMe2">
					front end web developer
				</h3>
			</div>
		`,
		controller: LandingController,
		bindings: {}
	});
})();