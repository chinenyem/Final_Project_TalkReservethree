'use strict';

/**
 * @ngdoc function
 * @name talkreserveApp.controller:OrdertwoCtrl
 * @description
 * # OrdertwoCtrl
 * Controller of the talkreserveApp
 */

  // .controller('OrdertwoCtrl', function ($scope) {
  //   $scope.awesomeThings = [
  //     'HTML5 Boilerplate',
  //     'AngularJS',
  //     'Karma'
  //   ];
  // });
angular.module('talkreserveApp')
.controller('OrdertwoCtrl', ['$scope', 'ordertwoSVC', function ($scope, ordertwoSVC) {

	$scope.selectedTopic = 0;
	$scope.selectedGenre = null;
	$scope.sermon = [
		{
			id: 0,
			name: 'Spritual Empowerment',
			lesson: [
				'The Joy & Responsibility of Stewardship  1/3/2010 10AMa',
				'The Joy & Responsibility of Stewardship  1/3/2010 10AMb',
				'The Joy & Responsibility of Stewardship  1/3/2010 10AMc',
				'The Joy & Responsibility of Stewardship  1/3/2010 10AMd',
				'The Joy & Responsibility of Stewardship  1/3/2010 10AMe',
				'The Joy & Responsibility of Stewardship  1/3/2010 10AMf',
				'The Joy & Responsibility of Stewardship  1/3/2010 10AMg',
				'The Joy & Responsibility of Stewardship  1/3/2010 10AMh'
			],

			live: true
		},
		{
			id: 1,
			name: 'Family Empowerment',
			lesson: [
				'The Potential for Your Family household 10/5/2010 7PMa',
				'The Potential for Your Family household 10/5/2010 7PMb',
				'The Potential for Your Family household 10/5/2010 7PMc',
				'The Potential for Your Family household 10/5/2010 7PMd',
				'The Potential for Your Family household 10/5/2010 7PMe',
				'The Potential for Your Family household 10/5/2010 7PMf',
				'The Potential for Your Family household 10/5/2010 7PMg',
				'The Potential for Your Family household 10/5/2010 7PMh'
			],
			live: true
		},
		{
			id: 2,
			name: 'Finances',
			lesson: [
				'Having Faith In God\'s Covenant Blessing 12/16/2008 7:30PMa',
				'Having Faith In God\'s Covenant Blessing 12/16/2008 7:30PMb',
				'Having Faith In God\'s Covenant Blessing 12/16/2008 7:30PMc',
				'Having Faith In God\'s Covenant Blessing 12/16/2008 7:30PMd',
				'Having Faith In God\'s Covenant Blessing 12/16/2008 7:30PMe',
				'Having Faith In God\'s Covenant Blessing 12/16/2008 7:30PMf',
				'Having Faith In God\'s Covenant Blessing 12/16/2008 7:30PMg',
				'Having Faith In God\'s Covenant Blessing 12/16/2008 7:30PMh'
			],
			live: false
		},
		{
			id: 3,
			name: 'Marriage',
			lesson: [
				'Marriage Conference 2009 Lady Leisa Easley 11/14/2009a',
				'Marriage Conference 2009 Lady Leisa Easley 11/14/2009b',
				'Marriage Conference 2009 Lady Leisa Easley 11/14/2009c',
				'Marriage Conference 2009 Lady Leisa Easley 11/14/2009d',
				'Marriage Conference 2009 Lady Leisa Easley 11/14/2009e',
				'Marriage Conference 2009 Lady Leisa Easley 11/14/2009f',
				'Marriage Conference 2009 Lady Leisa Easley 11/14/2009g',
				'Marriage Conference 2009 Lady Leisa Easley 11/14/2009h'
			],
			live: true
		}
	];


	

    $scope.newItem = { name: '', email: '', payment: '', paid:'', selectedGenre:'', price:'', date: new Date()};
    $scope.currentItem = null;

    $scope.items = ordertwoSVC.getItems();

    $scope.addItem = function () {
        ordertwoSVC.addItem(angular.copy($scope.newItem));
        $scope.newItem = { name: '', email: '', payment:'', paid:'', selectedGenre:'', price:'', date: new Date()};
    };

    $scope.updateItem = function (id) {
        ordertwoSVC.updateItem(id);
    };

    $scope.removeItem = function(id) {
        ordertwoSVC.removeItem(id);
    };
}]);







