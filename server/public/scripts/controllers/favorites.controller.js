app.controller('FavoritesController', ['SWAPIService as swapi', function(swapi, $mdDialogue, $mdToast){
    const self = this;

    // swapi returned data object
    self.returned = swapi.returned;

    // SWAPIfavs $http function references
    self.getFavs = swapi.getFavs;



    // ON LOAD
    self.getFavs()

}]); // END FavoritesController