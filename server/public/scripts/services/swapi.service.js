app.service('SWAPIService as swapi', ['$http', swapiSvc]);

function swapiSvc ($http) {
    const self = this;
   
    // RETURNED DATA from SWAPI and SWAPIfavs
    self.returned = { SWAPIdata: [], FAVSdata: [], favDeets: [] }; 

      ///////////////////////////
     //// SWAPI calls //////////
    /////////////////////////// 
    // SWAPI URLS
    const baseUrl = 'https://swapi.co/api/';
    
    self.searchSWAPI = (whichResource, searchQuery, wookiee) => {
        let swapiQuery = baseUrl + whichResource + '/?search=' + searchQuery;;
        $http({
            method: 'GET',
            url: swapiQuery
        }).then( (response) => {
            self.returned.SWAPIdata = {};
            self.returned.SWAPIdata = response.data;
        }).catch( (error) => {
            console.error('Error in self.searchSWAPI', error);
        });
    } // END self.searchSWAPI

    self.getAll = (whichResource) => {
        let swapiQuery = baseUrl + whichResource;
        $http({
            method: 'GET',
            url: swapiQuery
        }).then((response) => {
            self.returned.SWAPIdata = {};
            self.returned.SWAPIdata = response.data;
        }).catch((error) => {
            console.error('Error in self.searchSWAPI');
        });
    } // END self.getAll

    self.getNextPage = (url) => {
        $http({
            method: 'GET',
            url: url
        }).then( (response) => {
            self.returned.SWAPIdata = {};
            self.returned.SWAPIdata = response.data;
        }).catch( (error) => {
            console.error(error); 
        }); // END $http
    } // END self.getNextPage

    self.getPrevPage = (url) => {
        $http({
            method: 'GET',
            url: url
        }).then((response) => {
            self.returned.SWAPIdata = {};
            self.returned.SWAPIdata = response.data;
        }).catch((error) => {
            console.error(error);
        }); // END $http
    } // END self.getPrevPage

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
                getGIF(self.returned.favDeets[self.returned.favDeets.length - 1].name || self.returned.favDeets[self.returned.favDeets.length - 1].title);
            }).catch((error) => {
                console.error(error);
            }); // END $http
        } 
    } // END self.getItemByURL

      /////////// //////////////////////
     // SWAPIfavs Post, Get, Put & Delete //
    ///////////// ////////////////////
    // ADD A FAVORITE
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

    // GET ALL FAVORITES
    self.getFavs = () => {
        $http({
            method: 'GET', 
            url: '/favorite'
        }).then( (response) => {
            self.returned.FAVSdata = response.data;          
        }).catch( (error) => {
            console.error(error);
        }); // END $http
    } // END self.getFavs

    // DELETE FAVORITED THING
    self.deleteFav = (fav) => {
        console.log(fav._id);
        $http({
            method: 'DELETE',
            url: '/favorite/'+fav._id,
        }).then( (response) => {
            self.getFavs();
        }).catch( (error) => {
            console.error(error);            
        }); // END $http
    } // END self.deleteFav

    // SUBMIT COMMENT ON A FAVORITE
    self.submitComment = (comment, id) => {
        console.log(comment, id);
        $http({
            method: 'PUT',
            url: '/favorite/'+id,
            data: {comments: comment}
        }).then ( (response) => {
            self.getFavs();
        }).catch( (error) => {
            console.log(error);    
        }); // END $http
    } // END self.submitComment


      ///////////////////////////
     //// GIPHY CALLS //////////
    ///////////////////////////
    // GIPHY URLS
    const searchGIPHYurl = 'http://api.giphy.com/v1/gifs/search?q=';
    const apiKey = '&api_key=0rj09zTLmHbERPILRy44muwCAFJwgyCZ';
    const limit = '&limit=1'

    function getGIF (name) {
        console.log(name);
        $http({
            method: 'GET',
            url: searchGIPHYurl + name + apiKey + limit,
        }).then( (response) => {
            self.returned.favDeets[self.returned.favDeets.length - 1].gif = response.data.data[0].images.downsized_medium.url;
        }).catch( (error) => {
            console.log(error); 
        }); // END $http
    } // END getGIF

} // END swapiSvc