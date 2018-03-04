app.service('SWAPIService as swapi', ['$http', swapiSvc]);

function swapiSvc ($http) {
    const self = this;
    const baseUrl = 'https://swapi.co/api/';

    self.returned = {SWAPIdata: [], FAVSdata: [], favDeets: []}; 
    
    // Star Wars API Gets

    self.searchSWAPI = (whichResource, searchQuery, wookiee) => {
        console.log('whichResource', whichResource, 'searchQuery', searchQuery, 'wookiee', wookiee);
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
            self.returned.SWAPIdata = {};
            self.returned.SWAPIdata = response.data;
            console.log(self.returned.SWAPIdata);
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
            self.returned.SWAPIdata = {};
            self.returned.SWAPIdata = response.data;
            console.log(self.returned.SWAPIdata);
        }).catch((error) => {
            console.error('Error in self.searchSWAPI');
        });
    }

    self.getItemByURL = (url) => {
        let isValid = true;
        for(let deet of self.returned.favDeets){
            if(deet.url.match(url)){
                isValid = false
            }
        }
        if (isValid) { 
            $http({
                method: 'GET',
                url: url,
            }).then((response) => {
                self.returned.favDeets.push(response.data);
                console.log(self.returned.favDeets);
            }).catch((error) => {
                console.log(error);
            }); // END $http
        } 
    } // END self.getItemByURL

    // SWAPIfavs Posts & Gets
    self.addFav = (fav) => {
        let favObj = {url: fav.url};
        let name;
        if(fav.name){
            favObj.name = fav.name
        } else {
            favObj.name = fav.title
        }
        $http({
            method: 'POST', 
            url: '/favorite',
            data: favObj,
        }).then( (response) => {
            console.log(response);
            self.getFavs();
        }).catch( (error) => {
            console.log(error);
        })
    }

    self.getFavs = () => {
        $http({
            method: 'GET', 
            url: '/favorite'
        }).then( (response) => {
            console.log(response.data);
            self.returned.FAVSdata = response.data;   
            console.log(self.returned.FAVSdata);         
        }).catch( (error) => {
            console.log(error);
        }); // END $http
    } // END self.getFavs


}