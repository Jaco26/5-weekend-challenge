app.service('SWAPIService as swapi', ['$http', swapiSvc]);

function swapiSvc ($http) {
    const self = this;
    const baseUrl = 'https://swapi.co/api/';

    self.returnedData = {}; 

    self.searchSWAPI = (whichResource, searchQuery, wookiee) => {
        // console.log('whichResource', whichResource, 'searchQuery', searchQuery, 'wookiee', wookiee);
        let swapiQuery;
        if (wookiee) {
            swapiQuery = baseUrl + whichResource + '/?search=' + searchQuery + '/?format=wookiee';
        } else {
            swapiQuery = baseUrl + whichResource + '/?search=' + searchQuery;
        }
        $http({
            method: 'GET',
            url: swapiQuery
        }).then( (response) => {
            self.returnedData = {};
            self.returnedData = response.data;
            console.log(self.returnedData);
        }).catch( (error) => {
            console.error('Error in self.searchSWAPI');
        });
    }

    self.getAll = (whichResource) => {
        let swapiQuery = baseUrl + whichResource;
        $http({
            method: 'GET',
            url: swapiQuery
        }).then((response) => {
            self.returnedData = {};
            self.returnedData = response.data;
            console.log(self.returnedData);
        }).catch((error) => {
            console.error('Error in self.searchSWAPI');
        });
    }



}