(function() {
	'use strict';

	function ProjectsHeaderController() {
		var ctrl = this;
		console.log('projects-header.js!');
	}

	angular.module('app').component('projectsHeader', {
		template: `
			<div id="projects-header" class="aBlock">
				<h2>
					projects
				</h2>
			</div><!-- closes projects-header -->
		`,
		controller: ProjectsHeaderController,
		bindings: {}
	});
})();