(function() {
	'use strict';

	function AboutController() {}

	angular.module('app').component('about', {
		template: `
			<div id="aboutMeDiv" class="site-card">
				<section id="about-me-img" class="block-titles">
					<h2>
						about
					</h2>
				</section>
				<section id="about-me-text" class="block-text">
					<h3>
						skills
					</h3>
					<ul>
						<li>
							html & css
						</li>
						<li>
							javascript & jquery
						</li>
						<li>
							angularjs
						</li>
						<li>
							typescript
						</li>
					</ul>

					<h3>
						in brief
					</h3>
					<p>
						Born and raised in Chicago. Cyclist. Activist.
					</p>
					<p>
						I want to make things. I'm fascinated by engineering. I love that web development provides digital raw materials that I can manipulate, build out, tear down, and build back up again, without having to resort to the limitations of brick and mortar.
					</p>
				</section>
			</div><!-- closes aboutMeDiv -->
		`,
		controller: AboutController,
		bindings: {}
	});
})();