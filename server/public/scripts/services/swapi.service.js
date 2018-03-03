app.service('SWAPIService as swapi', ['$http', swapiSvc]);

function swapiSvc ($http) {
    const self = this;
    const baseUrl = 'https://swapi.co/api/';

    self.returnedData = {list: []};

    self.searchSWAPI = (whichResource) => {
        console.log(whichResource);
    }


}