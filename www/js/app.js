(function(){

var app=angular.module('appRss', ['ionic']);

app.controller('appRssCtrl',function($scope){

  $scope.noticia=[
    {

        title:'Avengers'
    },
    {
       title:'transformers'
    }    
  ];

});

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {

      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});
}());
//creamos una funcion anonima
//cambiamos el nombre del modulo de angular
//
