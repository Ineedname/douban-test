(function(){
	// body...
	/**
	* doubanApp.detailModule Module
	*
	* Description
	*/
	var detailModule = angular.module('doubanApp.detailModule', ['doubanApp.service']);
    detailModule.config(['$routeProvider',function($routeProvider) {
        $routeProvider.
        when('/detail/:movieId',{
            templateUrl:'detail/detail.html',
            controller:'DetailController'
        })
        
    }])
    detailModule.controller('DetailController', ['$scope','JsonpService','$routeParams','$route','$rootScope','appConfig',function($scope,JsonpService,$routeParams,$route,$rootScope,appConfig) {
            
               $scope.loading = false;
        	   JsonpService.jsonp(appConfig.detailUrl+$routeParams.movieId,{},function(res){

                 	//$scope.subjects = res.subjects;
                 	//$scope.total = res.total;
                 	//$route.updateParams({page:page});
                 	$scope.title = res.title;
                 	$scope.summary = res.summary;
                 	$scope.images = res.images;
                 	$scope.directors = res.directors;
                 	$scope.genres = res.genres;
                 	$scope.casts = res.casts;
                    $scope.loading = true;
                 	//$scope.rating = res.rating;
                 	//console.log(res);
                 	//$scope.totalPage = Math.ceil($scope.total / count);
                 	//刷新页面
                    $scope.$apply();	
                    
                    //处理翻页
                 	// $scope.handlePage = function(page){
                 	// 	//更改路由的参数需要用到$route
                 	// 	page = Math.max(Math.min(page,$scope.totalPage),1);
                 	// 	$route.updateParams({page:page});

                 	// }
        	})
      
    }])

})()
