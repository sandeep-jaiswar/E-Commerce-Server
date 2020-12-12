const express = require('express');
const router = express.Router();



module.exports = () => {

    router.post('/create', async  function(req, res, next){
        console.log(req.body);
        return res.send('POST HTTP method on user resource');
    });

    router.get('/fetchAll', async  function(req, res){
        return res.send('GET HTTP fetch method on user resource');
     });

    router.get('/fetchByEmail', async  function(req, res){
    return res.send('GET HTTP method on user resource');
    });

    router.post('/update', async  function(req, res, next){
        return res.send('POST HTTP method on user resource');
    });

    router.delete('/deleteByEmail', async  function(req, res){
        return res.send('DELETE HTTP method on user resource');
    });

    router.delete('/deleteAll', async function(req, res){
        return res.send('DELETE HTTP method on user resource');
    });

  return router;
}