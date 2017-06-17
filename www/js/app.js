(function(){

var app=angular.module('appRss', ['ionic','angularMoment']);

app.controller('appRssCtrl',function($http,$scope){

  $scope.noticia=[];//iniciamos con un arreglo vacio

  function loadNoti(params,callback){

    $http.get('http://localhost:4444/feed',{params: params})
      .success(function(response){
        var noticia=[];
      angular.forEach(response.items, function(child){

          $scope.noticia.push(child);
          console.log(child);
      });
      callback(noticia);
    });
  }


    $scope.loadOlderNoti=function(){
      var params={};

      if($scope.noticia.length > 0){
        params['after']=$scope.noticia[$scope.noticia.length - 1].name;
      }
      loadNoti(params, function(olderNoti){
        $scope.noticia=$scope.noticia.concat(olderNoti);
        $scope.$broadcast('scroll.infiniteScrollComplete');

      });

    };
    $scope.loadNewNoti=function(){
      var params={'before':$scope.noticia[0].name};
      loadNoti(params, function (newNoti) {
        $scope.noticia=newNoti.concat($scope.noticia);
        $scope.$broadcast('scroll.refreshComplete');
      });
    };
  //pedimos el object json que queremos descargar
  //response si llego data
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
