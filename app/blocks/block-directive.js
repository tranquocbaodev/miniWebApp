$(function() {
	angular.module('app.core')
		.directive('headerTemp', headerTemp)
		.directive('footerTemp', footerTemp)
		.directive('particlegroundAbove', particlegroundAbove)
		.directive('particleAbove', particleAbove)
		;


	function headerTemp() {
		return{
			restrict: 'AE',
			templateUrl: 'app/templates/header.html',
			link: function(rootScope,scope, el, attr) {
				
			}
		}
	}

	function footerTemp() {
		return{
			restrict: 'AE',
			templateUrl: 'app/templates/footer.html',
			link: function(rootScope,scope, el, attr) {
	
			}
		}
	}

	function particleAbove() {
		return{
			restrict: 'AE',
			link: function(rootScope,scope, el, attr) {
				particlesJS.load('particles-js', 'app/data/particles.json', function() {
				  console.log('callback - particles.js config loaded');
				});

			}
		}
	}

	function particlegroundAbove() {
		return{
			restrict: 'AE',
			link: function(rootScope,scope, el, attr) {
				particlesJS.load('particles', 'app/data/particles-background.json', function() {
				  console.log('callback - particles.js config loaded');
				});

				particlesJS.load('particles-group', 'app/data/particles-background-group.json', function() {
				  console.log('callback - particles.js config loaded');
				});
			}
		}
	}
});