'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class ProjectDescription extends Model {
  static boot () {
    super.boot()
    // we don't have time stamps in our database
    this.addTrait('NoTimestamp')
  }

}

module.exports = ProjectDescription
