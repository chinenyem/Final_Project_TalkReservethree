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
  .controller('ChatCtrl',  function ($scope, fbutil) {
    
    


    
    // synchronize a read-only, synchronized array of messages, limit to most recent 10
  

    $scope.messages = fbutil.syncArray('messages', {limit: 20});


    // provide a method for adding a message
    $scope.addMessage = function(newMessage) {
        
        //push a message to the end of the array
        $scope.messages.$add({
          leader: newMessage.leader.volunteer,
          ministry: newMessage.ministry, 
          email: newMessage.email,
          position: newMessage.position,
          description: newMessage.description
          
        })

    };



 $scope.addVolunteer = function(volunteer){
    $scope.volunteers.$add({
          leader: volunteer.message,
          ministry: volunteer.message.ministry, 
          email: volunteer.message.email,
          position: volunteer.message.position,
          description: volunteer.message.description

    })
   };



    //push a message to the end of the array
    $scope.deleteMessage = function(index){
      $scope.messages = fbutil.syncArray('messages');
      $scope.messages.$remove(index, 1);
    }


 });

  






