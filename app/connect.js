(function() {
	'use strict';

	function ConnectController() {
		var ctrl = this;
		console.log('connect.js!');
	}

	angular.module('app').component('connect', {
		template: `
			<div id="connect" class="aBlock">
				<section id="contactTitle" class="blockTitles">
					<h2>
						connect
					</h2>
				</section>
				<section class="blockBlurbs">
					<a href="https://www.linkedin.com/pub/ken-barrios/91/148/290" target="_blank"><p>linkedin</p></a>
					<a href="https://github.com/kenbarrios" target="_blank"><p class="midLink">github</p></a>
					<a href="mailto:ken.barrios.13@gmail.com"><p>email</p></a>
				</section>
			</div><!-- closes connect -->
		`,
		controller: ConnectController,
		bindings: {}
	});
})();