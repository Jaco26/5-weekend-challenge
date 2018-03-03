const app = angular.module('swapiApp', ['ngRoute']);

app.config( ($routeProvider) => {
    $routeProvider.when('/', {
        templateUrl: 'views/search.html',
        controller: 'SearchController as search'
    }).when('/favs', {
        templateUrl: 'views/favorites.html',
        controller: 'FavoritesController as fc'
    }).when('/search', {
        redirectTo: '/',
    }).otherwise({
        templateUrl: '<h3>404 Page Not Found!</h3>'
    }); // END $routeProvider...
}); // END app.config