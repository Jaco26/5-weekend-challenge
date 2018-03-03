app.controller('SearchController', ['SWAPIService as swapi', '$mdDialog', function(swapi, $mdDialog, $mdToast) {
    const self = this;
    // list of searchable resources and their attributes
    self.resources = { list: ['films', 'people', 'planets', 'species', 'starships', 'vehicles'] };

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

    // swapi returned data object
    self.returned = swapi.returned
    console.log(self.returned);
    

    // swapi $http function references
    self.searchSWAPI = swapi.searchSWAPI;
    self.getAll = swapi.getAll;


    // SEND FAVORITES TO DATABASE
    self.favoriteThis = (result) => {
        console.log(result);
        
    }




    // self.showAlert = function (ev) {
    //     $mdDialog.show(
    //         $mdDialog.alert()
    //             .parent(angular.element(document.querySelector('#popupContainer')))
    //                 .clickOutsideToClose(true)
    //                 .title('This is an alert title')
    //                 .textContent('You can specify something here')
    //                 .ariaLabel('Alert Dialog Demo')
    //                 .ok('Got it!')
    //                 .targetEvent(ev)
    //     )  
    // } // END self.showAlert



      // swapi $http calls
}]);



