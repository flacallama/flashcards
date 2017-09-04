
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('cards').del()
    .then(function () {
      // Inserts seed entries
      return knex('cards').insert([
        {creator_id: 1, stack_id: 1, side1: 'cardFront 1+3', side2: 'cardFront 2+3', side3: 'cardFront 2*2', side4: 'cardFront two squared', hint: 'one less than five'  },
        {creator_id: 1, stack_id: 1, side1: 'cardFront 2+3', side2: 'cardFront 2+2+1', side3: 'cardFront 2*2 +1', side4: 'cardFront two squared +1', hint: 'it is five'  },
        {creator_id: 1, stack_id: 2, side1: 'cardFront 3+3', side2: 'cardFront 2*3', side3: 'cardFront 2*2+2', side4: 'cardFront two squared +2', hint: 'one more than five'  },
        {creator_id: 1, stack_id: 2, side1: 'cardFront 1+3', side2: 'cardFront 2+3', side3: 'cardFront 2*2', side4: 'cardFront two squared', hint: 'one less than five'  },
        {creator_id: 1, stack_id: 2, side1: 'cardFront 2+3', side2: 'cardFront 2+2+1', side3: 'cardFront 2*2 +1', side4: 'cardFront two squared +1', hint: 'it is five'  },
        {creator_id: 1, stack_id: 2, side1: 'cardFront 3+3', side2: 'cardFront 2*3', side3: 'cardFront 2*2+2', side4: 'cardFront two squared +2', hint: 'one more than five'  },

      ]);
    });
};
