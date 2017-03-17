(function() {
	'use strict';

	function ConnectController() {}

	angular.module('app').component('connect', {
		template: `
			<div id="connect" class="site-card">
				<section id="contactTitle" class="block-titles">
					<h2>
						connect
					</h2>
				</section>
				<section class="block-text">
					<a href="https://www.linkedin.com/in/kenbarrios1/" target="_blank"><p>linkedin</p></a>
					<a href="https://github.com/kenbarrios" target="_blank"><p class="midLink">github</p></a>
					<a href="mailto:ken.barrios.13@gmail.com"><p>email</p></a>
				</section>
			</div>
		`,
		controller: ConnectController,
		bindings: {}
	});
})();