(function() {
	'use strict';

	function LandingController() {
		var ctrl = this;
		console.log('landing.js!');
	}

	angular.module('app').factory('dataService', dataService);

	function dataService() {
		var list = [
			{name: 'letterdrops', 
				data: {
					title: 'LetterDrops',
					brief: 'A game for kids to learn the ABCs and Keyboard Keys',
					instructions1: 'There are two levels that involve falling “drops” with letters inside: the levels are called “Alphabetized” and “Randomized”. As the drops fall, the user types the corresponding letter into the keyboard to pop the drop. ',
					instructions2: 'There is a third level that involves several drops that contain entire words: the level is called “Words”. The user must spell out the entire word, and once the spelling is completed the word drop will pop.',
					tech1: 'css keyframes for animation',
					tech2: 'javascript & jQuery for game setup and logic',
					tech3: 'ruby on rails for backend',
					repo: 'https://github.com/kenbarrios/LetterDrops',
					site: 'https://letterdrops.herokuapp.com/'
				} 
			}
		];
	}
})();