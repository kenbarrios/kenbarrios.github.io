(function() {
	'use strict';

	function NavController() {}

	angular.module('app').component('appNav', {
		template: `
			<nav class="desktopNav">
				<ul>
					<a href="javascript:history.go(0)">
						<li>
							kb
						</li>
					</a>
					<a href="#aboutMeDiv">
						<li>
							about
						</li>
					</a>
					<a href="#projects-header">
						<li>
							projects
						</li>
					</a>
					<a href="#connect">
						<li>
							connect
						</li>
					</a>
				</ul>
			</nav><!-- closes DESKTOP NAV -->

			<nav class="mobileNav">
				<button>Toggle</button>
				<ul>
					<a href="javascript:history.go(0)">
						<li>
							kb
						</li>
					</a>
					<a href="#aboutMeDiv">
						<li>
							about
						</li>
					</a>
					<a href="#projects-header">
						<li>
							projects
						</li>
					</a>
					<a href="#connect">
						<li>
							connect
						</li>
					</a>
				</ul>
			</nav><!-- closes MOBILE NAV -->
		`,
		controller: NavController,
		bindings: {}
	});
})();