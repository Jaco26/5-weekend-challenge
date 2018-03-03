app.controller('SearchController', ['SWAPIService as swapi', function(swapi, $mdDialogue, $mdToast) {
    const self = this;
    // list of searchable resources and their attributes
    self.resources = { list: ['films', 'people', 'planets', 'species', 'starships', 'vehicles'] };
    // pass this into Append this to request urls to get response translated into Wookiee
    self.formatWookie = '?format=wookiee';

    // format wookiee checkbox (true of false)
    self.wookieeCheckBox = {
        value1: false,
    };
    // Dynamic search bar placeholder
    self.searchBarPlaceholder = 'search...';
    self.searchField = (whichResource) => {
        console.log('in searchField', whichResource);
        if (whichResource === 'films') {
            console.log('whichResource is "films"');
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

    // swapi returned data objects
    self.returned = swapi.returned


    // swapi $http references
    self.searchSWAPI = swapi.searchSWAPI;
    self.getAll = swapi.getAll;




    // swapi $http calls

}]);



