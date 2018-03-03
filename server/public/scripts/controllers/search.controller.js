app.controller('SearchController', ['SWAPIService as swapi', '$mdDialog', function(swapi, $scope, $mdDialog, $mdToast) {
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

    // swapi $http function references
    self.searchSWAPI = swapi.searchSWAPI;
    self.getAll = swapi.getAll;


    // ngDialogue 
    $scope.showTabDialog = function (ev) {
        $mdDialog.show({
            controller: DialogController,
            templateUrl: 'tabDialog.tmpl.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose: true
        })
            .then(function (answer) {
                $scope.status = 'You said the information was "' + answer + '".';
            }, function () {
                $scope.status = 'You cancelled the dialog.';
            });
    };
  



    function DialogController($scope, $mdDialog) {
        $scope.hide = function () {
            $mdDialog.hide();
        };

        $scope.cancel = function () {
            $mdDialog.cancel();
        };

        $scope.answer = function (answer) {
            $mdDialog.hide(answer);
        };
    }



      // swapi $http calls
}]);



