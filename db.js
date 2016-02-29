module.exports = function (knex) {
  
  return {
    getAll: function (table, callback) {
      knex.raw('select * from ' + table).then(function (resp) {
        callback(null, resp)
      })
    },
   }
}