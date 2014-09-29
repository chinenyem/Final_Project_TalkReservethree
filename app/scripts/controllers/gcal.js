'use strict';

/**
 * @ngdoc function
 * @name talkreserveApp.controller:GcalCtrl
 * @description
 * # GcalCtrl
 * Controller of the talkreserveApp
 */
angular.module('talkreserveApp')
  .controller('GcalCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

$(document).ready(function() {
    $('#calendar').fullCalendar({
		
			
			events: {

				url:
				'https://www.google.com/calendar/feeds/talkreserve%40gmail.com/public/basic',
				className: 'gcalevent',
				backgroundColor: 'rgba(114, 139, 141, .9)',
				textColor: 'white',
				editable: 'true'


				},
			
			eventClick: function(event) {
				// opens events in a popup window
				window.open(event.url, 'gcalevent', 'width=700,height=600');
				return false;
			},
			
			loading: function(bool) {
				$('#loading').toggle(bool);
			}
			
		});

    	});



  });
