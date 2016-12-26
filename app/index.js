(function() {
	'use strict';
	angular.module('app', [])
	.controller('RootController', RootController)
	.component('app', {
		template: `
		<div class="container">
			<landing></landing>

			<about></about>

			<projects-header></projects-header>

			<projects-list></projects-list>

			<connect></connect>

			<bio></bio>
			<!-- jQuery transition divs after clicking on an individual project -->
			<!-- jQuery transition divs after clicking on an individual project -->
			<!-- jQuery transition divs after clicking on an individual project -->
			<!-- jQuery transition divs after clicking on an individual project -->
			<div class="biosWrapper">

			<section id="bioOne" class="projectBios">
				<div class="closeBtn">
					close
				</div>
				<div class="bioContent">
					<h1>
						LetterDrops
					</h1>
					<p>
						A game for kids to learn the ABCs and Keyboard Keys
					</p>
					<br>
					<h3>
						Instructions
					</h3>

					<ul>
						<li>
							There are two levels that involve falling “drops” with letters inside: the levels are called “Alphabetized” and “Randomized”. As the drops fall, the user <strong>types the corresponding letter into the keyboard to pop the drop</strong>.
						</li>
						<li>
							There is a third level that involves several drops that contain entire words: the level is called “Words”. The user must <strong>spell out the entire word, and once the spelling is completed the word drop will pop</strong>.
						</li>
					</ul>

					<h3>
						Technologies
					</h3>
					<ul>
						<li>
							css keyframes for animation
						</li>
						<li>
							javascript & jQuery for game setup and logic
						</li>
						<li>
							ruby on rails for backend
						</li>
					</ul>

					<a href="https://github.com/kenbarrios/LetterDrops" target="_blank">
						<h3>
							Letter Drops repository
						</h3>
					</a>

					<a href="https://letterdrops.herokuapp.com/" target="_blank">
						<h3>
							Letter Drops site
						</h3>
					</a>
				</div><!-- closes bioContent -->
			</section><!-- closes bioOne -->

			<section id="bioTwo" class="projectBios">
				<div class="closeBtn">
					close
				</div>
				<div class="bioContent">
					<h1>
						Cause & Reflect
					</h1>
					<h2>
						A front-end only meetup site for activists
					</h2>
					<br>
					<h3>
						Technologies
					</h3>

					<ul>
						<li>
							HTML and CSS to design the entire site, from scratch.
						</li>
						<li>
							Independently found necessary breakpoints for media queries
						</li>
						<li>
							Javascript for the dropdown log-in form
						</li>
					</ul>


					<a href="https://github.com/kenbarrios/kenbarrios.github.io/tree/master/GA-Circuits/unit11" target="_blank">
						<h3>
							Cause & Reflect repository
						</h3>
					</a>


					<a href="https://kenbarrios.github.io/GA-Circuits/unit11/index.html" target="_blank">
						<h3>
							Cause & Reflect site
						</h3>
					</a>
				</div>
			</section> <!-- closes bio two -->

			<section id="bioThree" class="projectBios">
				<div class="closeBtn">
					close
				</div>
				<div class="bioContent">
					<h1>
						Marvel Tap-iT
					</h1>
					<h2>
						A comic book themed video game
					</h2>
					<br>
					<h3 class="instructions">
						Instructions
					</h3>

					<ul class="instructions">
						<li class="instructions">
							Two players play on one desktop/laptop/tablet. After signing in, players choose one hero and one villian. The player on the left of the screen can attack the player on the right using the <strong>“A” button</strong>. The player on the right can attack with the <strong>“L” button</strong>. On a touch screen, players can simply tap their character to attack.
						</li>
					</ul>

					<h3>
						Technologies
					</h3>
					<ul>
						<li>
							Marvel API to generate character jpgs and biographies (when available)
						</li>
						<li>
							javascript & jQuery for game setup and logic
						</li>
						<li>
							ruby on rails for backend
						</li>
					</ul>


					<a href="https://github.com/WDI-Woodstock-Schroeder/MarvelTapIt" target="_blank">
						<h3>
							Marvel Tap-It repository
						</h3>
					</a>

					<a href="http://marveltapit.herokuapp.com/" target="_blank">
						<h3>
							Marvel Tap-It site
						</h3>
					</a>
				</div>
			</section>
			<section id="bioFour" class="projectBios">
				<div class="closeBtn">
					close
				</div>
				<div class="bioContent">
					<h1>
						Anvil
					</h1>
					<h2>
						A front-end only news site
					</h2>
					<br>
					<h3>
						Technologies
					</h3>
					<ul>
						<li>
							HTML and CSS to design the entire site, from scratch.
						</li>
						<li>
							Independently found necessary breakpoints for media queries
						</li>
					</ul>

					<a href="https://github.com/kenbarrios/kenbarrios.github.io/tree/master/GA-Circuits/unit9" target="_blank">
						<h3>
							Anvil repository
						</h3>
					</a>


					<a href="https://kenbarrios.github.io/GA-Circuits/unit9/index.html" target="_blank">
						<h3>
							Anvil site
						</h3>
					</a>
				</div>
			</section>

			</div><!-- closes biosWrapper -->

		</div><!-- closes container -->
		`,
		controller: RootController,
		bindings: {}
	});
	
	function RootController() {
		console.log('index.js!');
	}
})();