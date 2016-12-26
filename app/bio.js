(function() {
	'use strict';

	function BioController() {
		var ctrl = this;
		console.log('bio.js!');
	}

	angular.module('app').component('bio', {
		template: `
		<div> BIO RIGHT HERE
			<section id="" class="">
				<div class="closeBtn">
					close
				</div>
				<div class="">
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
							LetterDrops repository
						</h3>
					</a>

					<a href="https://letterdrops.herokuapp.com/" target="_blank">
						<h3>
							LetterDrops site
						</h3>
					</a>
				</div><!-- closes bioContent -->
			</section><!-- closes bioOne -->
			</div>
		`,
		controller: BioController,
		bindings: {}
	});
})();