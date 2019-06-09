'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Project = use ('App/Models/Project')

/**
 * Resourceful controller for interacting with projects
 */
class ProjectController {
  /**
   * Show a list of all projects.
   * GET projects
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    // just return a list of everything
    return await Project.all()
  }

  /**
   * Render a form to be used for creating a new project.
   * GET projects/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
    response.forbidden('403 forbidden') // error 403
  }

  /**
   * Create/save a new project.
   * POST projects
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {

/* sample store action
    const name = request.input('name')
    const img_url = request.input('img_url')

    const project = new Project()
    project.name = name
    project.img_url = img_url

    await project.save()
    return response.json(project)
*/
    response.forbidden('403 forbidden') // error 403
  }

  /**
   * Display a single project.
   * GET projects/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {

    let project = undefined

    try {
      // get the curren project
      project = await Project.findOrFail(params.id)
      // get connected data, tags, descriptions and links
      const tags = await project.tags().fetch()
      const descriptions = await project.projectDescriptions().fetch()
      const links = await project.projectLinks().fetch()
      // add them to the result
      const result = {project, tags, descriptions, links}
      return result
    }
    catch(ModelNotFoundException) {
      // only executes if find or fail failed, in which case
      // a ModelNotFoundException will be executed
      response.notFound('404 not found') // error 404
    }
  }

  /**
   * Render a form to update an existing project.
   * GET projects/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
    response.forbidden('403 forbidden') // error 403
  }

  /**
   * Update project details.
   * PUT or PATCH projects/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    response.forbidden('403 forbidden') // error 403
  }

  /**
   * Delete a project with id.
   * DELETE projects/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    response.forbidden('403 forbidden') // error 403
  }
}

module.exports = ProjectController
