var express = require('express');
var router = express.Router();
var knex = require('../db/knex.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.clearCookie('username');
  res.clearCookie('userID')
  res.render('index', { title: 'login' });
});

router.post('/login', function(req, res, next){
  knex.raw(`select * from users where username = '${req.body.username}'`)
  .then(function(users){
    if(users.rows[0].password == `${req.body.password}`){
      if(!req.cookies.stackNum){
        res.cookie('stackNum', 1)
      }
      res.cookie('userID', users.rows[0].id),
      res.cookie('username', users.rows[0].username),
      res.redirect('/study')
    }
  })
})

router.get('/study', function(req, res, next) {
  Promise.all([
    knex('cards')
    .join('views', 'cards.id', 'views.card_id')
    .where('cards.creator_id', req.cookies.userID)
  ])
    .then(function(cards) {
        res.cookie('cardID', `${cards[0][0].card_id}`)
        res.cookie('start_time', `${cards[0][0].start_time}`)
        res.render('study', {
        card: cards[0]
        })
      })
})

router.post('/markcorrect', function(req, res, next) {
  knex.raw(`INSERT INTO views VALUES (default, ${req.cookies.userID}, ${req.cookies.cardID}, default, default, true, 'noneyet')`)
  .then(function(input){
    res.clearCookie('cardId');
    res.clearCookie('start_time')
    res.redirect('/study')
  })
})

router.post('/markincorrect', function(req, res, next) {
  knex.raw(`INSERT INTO views VALUES (default, ${req.cookies.userID}, ${req.cookies.cardID}, default, default, false, 'noneyet')`)
  .then(function(input){
    res.clearCookie('cardId');
    res.clearCookie('start_time')
    res.redirect('/study')
  })
})




// handles the stack change button
router.post('/changestack', function(req, res, next){
  res.clearCookie('stackNum');
  res.cookie('stackNum', `${req.body.changestack}`);
  res.redirect('/study')
})

// router.get('/', function(req, res, next) {
//   if (req.isAuthenticated()) {
//   Promise.all([
//     knex('selling_by_id')
//     .join('users', 'users.id', 'selling_by_id.seller_id')
//     .select('seller_name', 'img_url', 'item_name', 'haggle_price', 'buyer_name', 'status')
//     .where('seller_id', req.user.id),
//     knex('buyer_by_id')
//     .join('users', 'users.id', 'buyer_by_id.buyer_id')
//     .select('img_url', 'item_name', 'haggle_price', 'seller_name', 'city', 'status')
//     .where('buyer_id', req.user.id),
//     knex('users')
//     .join('items', 'users.id', 'items.seller_id')
//     .select('users.name as user_name', 'items.*')
//     .where('users.id', req.user.id),
//   ])
//   .then(function(users) {
//       res.render('user', {
//       selling: users[0],
//       buying: users[1],
//       users: users[2]
//       })
//     })
//   } else {
//   res.redirect('/user/login');
//   }
// });






module.exports = router;
