(function() {
	'use strict';

	function ProjectsListController() {
		var ctrl = this;
		console.log('projects-list.js!');
	}

	angular.module('app').component('projectsList', {
		template: `
			<div id="projects-list" class="aBlock">

				<section id="projectOne">
					<h6 id="titleOne">
						LetterDrops
					</h6>
				</section>
				<section id="projectTwo">
					<h6 id="titleTwo">
						Cause & Reflect
					</h6>
				</section>
				<section id="projectThree">
					<h6 id="titleThree">
						Marvel Tap-iT
					</h6>
				</section>
				<section id="projectFour">
					<h6 id="titleFour">
						Anvil
					</h6>
				</section>

			</div><!-- closes projects-list -->
		`,
		controller: ProjectsListController,
		bindings: {}
	});
})();