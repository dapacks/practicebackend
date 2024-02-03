const express = require('express');
const router = express.Router();
const mongoDB=require("./db")
mongoDB();
/* GET home page. */


router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/start',function(req,res,next)
{
  res.render('start', { title: 'start' });
})
app.post('/fooditem', (req, res) => {
  try {
    res.send([global.food_items, global.foodCategory]);
  } catch (error) {
    console.error(error.message);
    res.send("server error");
  }
});

router.use('/api',require("./createUser")) 

router.use('/api',require("./DisplayData")) 

router.use('/api',require("./orderData"))

module.exports = router;
