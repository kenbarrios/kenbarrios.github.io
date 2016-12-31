(function() {
	'use strict';

	angular.module('app').factory('dataService', dataService);

	function dataService() {
		var list = [
				{
					id: '0001',
					title: 'LetterDrops',
					brief: 'A game for kids to learn the ABCs and Keyboard Keys',
					instructions1: 'There are two levels that involve falling “drops” with letters inside: the levels are called “Alphabetized” and “Randomized”. As the drops fall, the user types the corresponding letter into the keyboard to pop the drop.',
					instructions2: 'There is a third level that involves several drops that contain entire words: the level is called “Words”. The user must spell out the entire word, and once the spelling is completed the word drop will pop.',
					tech1: 'css keyframes for animation',
					tech2: 'javascript & jQuery for game setup and logic',
					tech3: 'ruby on rails for backend',
					repo: 'https://github.com/kenbarrios/LetterDrops',
					site: 'https://letterdrops.herokuapp.com/',
					img: '/Users/Almohada/kenbarrios.github.io/images/letterDrops1.png'
				},
				{
					id: '0002',
					title: 'Cause & Reflect',
					brief: 'A front-end only meetup site for activists',
					instructions1: null,
					instructions2: null,
					tech1: 'HTML and CSS to design the entire site, from scratch.',
					tech2: 'Independently found necessary breakpoints for media queries',
					tech3: 'Javascript for the dropdown log-in form',
					repo: 'https://github.com/kenbarrios/kenbarrios.github.io/tree/master/GA-Circuits/unit11',
					site: 'https://kenbarrios.github.io/GA-Circuits/unit11/index.html',
					img: '/Users/Almohada/kenbarrios.github.io/images/cause-and-reflect.png'
				},
				{
					id: '0003',
					title: 'Marvel Tap-iT',
					brief: 'A comic book themed video game',
					instructions1: 'Two players play on one desktop/laptop/tablet. After signing in, players choose one hero and one villian. The player on the left of the screen can attack the player on the right using the “A” button.',
					instructions2: 'The player on the right can attack with the “L” button. On a touch screen, players can simply tap their character to attack.',
					tech1: 'Marvel API to generate character jpgs and biographies (when available).',
					tech2: 'javascript & jQuery for game setup and logic',
					tech3: 'ruby on rails for backend',
					repo: 'https://github.com/WDI-Woodstock-Schroeder/MarvelTapIt',
					site: 'http://marveltapit.herokuapp.com/',
					img: '/Users/Almohada/kenbarrios.github.io/images/marveltapit.png'
				},
				{
					id: '0004',
					title: 'Anvil',
					brief: 'A front-end only news site',
					instructions1: null,
					instructions2: null,
					tech1: 'first-ever project',
					tech2: 'HTML and CSS to design the entire site, from scratch.',
					tech3: 'Independently found necessary breakpoints for media queries',
					repo: 'https://github.com/kenbarrios/kenbarrios.github.io/tree/master/GA-Circuits/unit9',
					site: 'https://kenbarrios.github.io/GA-Circuits/unit9/index.html',
					img: '/Users/Almohada/kenbarrios.github.io/images/anvil.png'
				},
		];
		return list;
	}
})();