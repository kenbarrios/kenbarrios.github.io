(function() {
	'use strict';
	ProjectsListController.$inject = ['dataService'];
	function ProjectsListController(dataService) {
		console.log('projects-list.js!');
		this.list = dataService;
		this.active = '0000';
		this.project = {};
		this.setActive = function(project) {
			this.active = project.id;
			this.project = project;
			console.log('this.project = ', this.project);
		}
	}

	angular.module('app').component('projectsList', {
		template: `
			<div id="projects-list" class="aBlock">
				<section ng-repeat="project in $ctrl.list" ng-click="$ctrl.setActive(project)" class="project-slim-cell" ng-style="{'background-image':'url({{ project.img }})'}">
					<h6>
						{{ project.title }}
					</h6>
				</section>
				<bio ng-if="$ctrl.project.id == $ctrl.active" project="$ctrl.project"></bio>
			</div>
		`,
		controller: ProjectsListController,
		bindings: {}
	});
})();