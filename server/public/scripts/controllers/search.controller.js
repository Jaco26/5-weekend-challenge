app.controller('SearchController', ['SWAPIService as swapi', '$mdDialog', function(swapi) {
    const self = this;
    // list of searchable resources and their attributes
    self.resources = { list: ['films', 'people', 'planets', 'species', 'starships', 'vehicles'] };

    // Dynamic search bar placeholder
    self.searchBarPlaceholder = 'search...';
    self.searchField = (whichResource) => {
        console.log('in searchField', whichResource);
        if (whichResource === 'films') {
            self.searchBarPlaceholder = 'search titles';
        } else if (whichResource === 'people') {
            self.searchBarPlaceholder = 'search names';
        } else if (whichResource === 'planets') {
            self.searchBarPlaceholder = 'search planet name';
        } else if (whichResource === 'species') {
            self.searchBarPlaceholder = 'search species name';
        } else if (whichResource === 'starships') {
            self.searchBarPlaceholder = 'search name or model';
        } else if (whichResource === 'vehicles') {
            self.searchBarPlaceholder = 'search name or model'
        } else {
            self.searchBarPlaceholder = 'search...';
        }
    }

    // swapi returned data object
    self.returned = swapi.returned
    

    // swapi $http function references
    self.searchSWAPI = swapi.searchSWAPI;
    self.getAll = swapi.getAll;
    self.getNextPage = swapi.getNextPage;
    self.getPrevPage = swapi.getPrevPage;


    // SEND FAVORITES TO DATABASE
    self.addFav = swapi.addFav

}]);


