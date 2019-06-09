'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Tag extends Model {
  static boot () {
    super.boot()
    // we don't have time stamps in our database
    this.addTrait('NoTimestamp')
  }

  projects() {
    return this
      .belongsToMany('App/Models/Project')
      .pivotModel('App/Models/ProjectTag')
  }
}

module.exports = Tag
