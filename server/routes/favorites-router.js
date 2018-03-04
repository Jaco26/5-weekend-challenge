const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const FavoritesSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    url: {type: String, required: true, unique: true}
}); // END FavoritesSchema

const Favorite = mongoose.model('Favorite', FavoritesSchema, 'favorites');

router.post('/',  (req, res) => {
    const newFav = new Favorite(req.body);
    newFav.save( (error, success) => {
        if(error){
            console.log('ERROR IN router /favorite POST:', error);
            res.sendStatus(500);
        } else {
            res.sendStatus(200);
        }
    })
}); // END router /favorite POST

router.get('/', (req, res) => {
    Favorite.find({}, (error, response) => {
        if(error){
            console.log('ERROR IN router /favorite GET:', error);
            res.sendStatus(500);
        } else {
            res.send(response);
        }
    }); // END Favorite.find
}); // END router /favorite GET

router.delete('/:id', (req, res) => {
    let id = req.params.id;
    Favorite.findByIdAndRemove(
        {"_id": id},
        (error, success) => {
            if(error){
                console.log('ERROR IN router /favorite/:id DELETE:', error);
                res.sendStatus(500);
            } else {
                res.sendStatus(200);
            }
        }
    )
}); // END router /favorite/:id DELETE


module.exports = router;