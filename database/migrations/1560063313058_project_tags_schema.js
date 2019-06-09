'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProjectTagsSchema extends Schema {
  up () {
    this.create('project_tags', (table) => {
      table.increments()
      table.integer('project_id')
      table.integer('tag_id')
    })
  }

  down () {
    this.drop('project_tags')
  }
}

module.exports = ProjectTagsSchema
