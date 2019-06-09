'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Project extends Model {

  static boot () {
    super.boot()
    // we don't have time stamps in our database
    this.addTrait('NoTimestamp')
  }

  tags() {
    return this
      .belongsToMany('App/Models/Tag')
      .pivotModel('App/Models/ProjectTag')
  }

  projectDescriptions() {
    return this.hasMany('App/Models/ProjectDescription')
  }
  projectLinks() {
    return this.hasMany('App/Models/ProjectLink')
  }
}

module.exports = Project
