'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProjectLinksSchema extends Schema {
  up () {
    this.create('project_links', (table) => {
      table.increments()
      table.integer('project_id')
      table.string('button_colour')
      table.string('text')
      table.string('url')
    })
  }

  down () {
    this.drop('project_links')
  }
}

module.exports = ProjectLinksSchema
