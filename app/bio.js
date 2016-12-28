(function() {
	'use strict';

	function BioController() {
		console.log('bio.js!');
		this.close = function() {
			this.active = '0000';
		}
	}

	angular.module('app').component('bio', {
		template: `
			<section
				class="bio-section"
				ng-style="{
				'background':'linear-gradient(to left, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.8)), url({{ $ctrl.project.img }})',
				'background-attachment': 'fixed',
				'background-size': 'cover',
				'background-position': 'center',
				'background-repeat': 'no-repeat'}">
				<div ng-click="$ctrl.close()" class="close-btn">
					close
				</div>
				<div class="">
					<h1>
						{{ $ctrl.project.title }}
					</h1>
					<p>
						{{ $ctrl.project.brief }}
					</p>
					<br>
					<h3>
						Instructions
					</h3>

					<ul>
						<li>
							{{ $ctrl.project.instructions1 }}
						</li>
						<li>
							{{ $ctrl.project.instructions2 }}
						</li>
					</ul>

					<h3>
						Technologies
					</h3>
					<ul>
						<li>
							{{ $ctrl.project.tech1 }}
						</li>
						<li>
							{{ $ctrl.project.tech2 }}
						</li>
						<li>
							{{ $ctrl.project.tech3 }}
						</li>
					</ul>

					<a ng-href="{{ $ctrl.project.repo }}" target="_blank">
						<h3>
							Repository
						</h3>
					</a>

					<a ng-href="{{ $ctrl.project.site }}" target="_blank">
						<h3>
							Site
						</h3>
					</a>
				</div>
			</section>
		`,
		controller: BioController,
		bindings: {
			project: '<',
			active: '='
		}
	});
})();