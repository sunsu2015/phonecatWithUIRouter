'use strict';

angular.
  module('myApp').
  config(function($stateProvider,$urlRouterProvider){
    $urlRouterProvider.otherwise('/phone');
    $stateProvider.state('phone',{
      url:'/phone',
      views:{
        '':{
          template: '<phone-list></phone-list>'
        }
      }
    }).state('detail',{
      url:'/phone/detail/:phoneId',
      views:{
        '':{
          template:'<phone-detail></phone-detail>'
        }
      }
    });
  });
