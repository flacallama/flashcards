
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('views').del()
    .then(function () {
      // Inserts seed entries
      return knex('views').insert([
        {user_id: 1, card_id:4, start_time: '2017-09-03 15:41:17.161738-07', end_time: '2017-09-03 15:41:27.161738-07', correct: false, hint:'test'},
        {user_id: 1, card_id:4, start_time: '2017-09-03 15:41:17.161738-07', end_time: '2017-09-03 15:41:27.161738-07', correct: true, hint:'test'},
        {user_id: 1, card_id:5, start_time: '2017-09-03 15:41:17.161738-07', end_time: '2017-09-03 15:41:27.161738-07', correct: true, hint:'test'},
        {user_id: 1, card_id:5, start_time: '2017-09-03 15:41:17.161738-07', end_time: '2017-09-03 15:41:27.161738-07', correct: true, hint:'test'},

      ]);
    });
};
