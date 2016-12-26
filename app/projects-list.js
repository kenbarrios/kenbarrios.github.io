(function() {
	'use strict';
	ProjectsListController.$inject = ['dataService'];
	function ProjectsListController(dataService) {
		console.log('projects-list.js!');
		this.list = dataService;
		this.active = '0000';
		this.setActive = function(id) {
			console.log('id = ', id);
			this.active = id;
		}
	}

	angular.module('app').component('projectsList', {
		template: `
			<div id="projects-list" class="aBlock">
				<section ng-repeat="project in $ctrl.list" ng-click="$ctrl.setActive(project.id)" class="project-slim-cell" ng-style="{'background-image':'url({{ project.img }})'}">
					<h6>
						{{ project.title }}
					</h6>
				</section>
			</div><!-- closes projects-list -->
		`,
		controller: ProjectsListController,
		bindings: {}
	});
})();