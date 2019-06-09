'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProjectDescriptionsSchema extends Schema {
  up () {
    this.create('project_descriptions', (table) => {
      table.increments()
      table.integer('project_id')
      table.string('subtitle')
      table.text('description')
    })
  }

  down () {
    this.drop('project_descriptions')
  }
}

module.exports = ProjectDescriptionsSchema
