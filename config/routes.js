/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {


  //  ╦ ╦╔═╗╔╗ ╔═╗╔═╗╔═╗╔═╗╔═╗
  //  ║║║║╣ ╠╩╗╠═╝╠═╣║ ╦║╣ ╚═╗
  //  ╚╩╝╚═╝╚═╝╩  ╩ ╩╚═╝╚═╝╚═╝

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': {
    view: 'pages/homepage'
  },
  '/step1': {
    view: 'pages/step1'
  },
  '/step2': {
    view: 'pages/step3'
  },
  '/step3': {
    view: 'pages/step5'
  },
  '/step4': {
    view: 'pages/step6'
  },
  '/step5': {
    view: 'pages/step8'
  },
  '/step6': {
    view: 'pages/step9'
  },
  // '/step7': {
  //   view: 'pages/step7'
  // },
  // '/step8': {
  //   view: 'pages/step8'
  // },
  // '/step9': {
  //   view: 'pages/step9'
  // },
  '/about': {
    view: 'pages/about'
  },
  '/brand': {
    view: 'pages/brand'
  },
  '/contact': {
    view: 'pages/contact'
  },
  '/faq': {
    view: 'pages/faq'
  },
  '/healers': {
    view: 'pages/healers'
  },
  '/loan': {
    view: 'pages/loan'
  },
  '/privacy': {
    view: 'pages/privacy'
  },
  '/results': {
    view: 'pages/results'
  },
  '/terms': {
    view: 'pages/terms'
  },

  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/


  'POST /email': {
    controller: 'Contact',
    action: 'email'
  },

};
