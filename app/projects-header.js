(function() {
	'use strict';

	function ProjectsHeaderController() {}

	angular.module('app').component('projectsHeader', {
		template: `
			<div id="projects-header" class="site-card">
				<h2>
					projects
				</h2>
			</div>
		`,
		controller: ProjectsHeaderController,
		bindings: {}
	});
})();