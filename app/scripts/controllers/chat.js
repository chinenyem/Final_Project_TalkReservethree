'use strict';
/**
 * @ngdoc function
 * @name talkreserveApp.controller:ChatCtrl
 * @description
 * # ChatCtrl
 * A demo of using AngularFire to manage a synchronized list.
 */
angular.module('talkreserveApp')
.constant('FIREBASE_URI', 'https://talkreserve.firebaseio.com/')
  .controller('ChatCtrl',  function ($scope, fbutil ) {
    
    


    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    // synchronize a read-only, synchronized array of messages, limit to most recent 10
  $scope.selectedTopic = 0;
  $scope.selctedGenre = {};
  $scope.sermon = [
    {
      id: 0,
      name: 'Spritual Empowerment',
      lesson: [
        'The Joy & Responsibility of Stewardship  1/3/2010 10AMa',
        'The Joy & Responsibility of Stewardship  1/3/2010 10AMb',
        'The Joy & Responsibility of Stewardship  1/3/2010 10AMc',
        'The Joy & Responsibility of Stewardship  1/3/2010 10AMd'
      ],

      live: true
    },
    {
      id: 1,
      name: 'Family Empowerment',
      lesson: [
        'The Potential of Your Family 10/5/2010 7PMa',
        'The Potential of Your Family 10/5/2010 7PMb',
        'The Potential of Your Family 10/5/2010 7PMc',
        'The Potential of Your Family 10/5/2010 7PMd'
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
        'Having Faith In God\'s Covenant Blessing 12/16/2008 7:30PMd'
      ],
      live: false
    },
    {
      id: 3,
      name: 'Marriage',
      lesson: [
        'Marriage Conference 2009 Lady Leisa Easley 11/14/2009a',
        'Marriage Conference 2009 Lady Leisa Easley 11/14/2009b',
        'Marriage Conference 2009 Lady Leisa Easley 11/14/2009c'
      ],
      live: true
    }
  ];

    $scope.messages = fbutil.syncArray('messages', {limit: 20});


    // provide a method for adding a message
    $scope.addMessage = function(newMessage) {
        
        //push a message to the end of the array
        $scope.messages.$add({
          day: newMessage.day,
          sermon: newMessage.selectedTopic,
          name: newMessage.name, 
          email: newMessage.email,
          price: newMessage.price,
          payment: newMessage.payment,
          paid: newMessage.paid
          
        })

    };

    //push a message to the end of the array
    $scope.deleteMessage = function(index){
      $scope.messages = fbutil.syncArray('messages');
      $scope.messages.$remove(index, 1);
    }



    

 });

  






