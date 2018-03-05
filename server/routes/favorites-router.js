const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const schemas = require('../modules/schemas');

// MODELS 
const Comment = mongoose.model('Comment', schemas.commentSchema)
const Favorite = mongoose.model('Favorite', schemas.favoriteSchema, 'favorites');

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

// ADD COMMENT 
router.put('/:id', (req, res) => {
    const id = req.params.id;
    console.log('REQ.BODY', req.body);
    const newComment = new Comment(req.body);
    console.log('NEW COMMENT', newComment);
    newComment.save( (error, commentDoc) => {
        if(error){
            res.sendStatus(500);  
        } else {
            console.log('commentDoc._id', commentDoc.comments);
            
            Favorite.findByIdAndUpdate(
                { "_id": id },
                { $push: { comments: {comments: commentDoc.comments }} },
                (pusherror, doc) => {
                    if (pusherror) {
                        console.log('PUSH ERROR IN router /favorite/:id PUT', pusherror);
                        res.sendStatus(500);
                    } else {
                        res.sendStatus(200);
                        console.log('updated fav Document', doc);

                    }
                }
            )
        }
    })
    
   
}); // END router /favorite/:id PUT


module.exports = router;