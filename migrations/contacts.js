
exports.up = function(knex, Promise) {

  console.log('create table')

  return knex.schema.createTableIfNotExists('EngineeringContacts', function(table) {
      table.increments('name')
      table.string('website')
      table.string('email')
      table.string('phone')
      table.string('address')
      table.string('tags')
      table.timestamps()
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('EngineeringContacts')
    .then(function () {
    console.log('contacts table was dropped')
  })
}
