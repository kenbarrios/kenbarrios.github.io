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
						I'm fascinated by engineering. I love that web development provides digital raw materials that I can manipulate, build out, tear down, and build back up again - without having to deal with the limitations of brick and mortar. My preference would be to work for firms that are involved in either education, architecture, fitness, government, or non-profit work.
					</p>
				</section>
			</div><!-- closes aboutMeDiv -->
		`,
		controller: AboutController,
		bindings: {}
	});
})();