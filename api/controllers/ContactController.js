/**
 * ContactController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

  email: function(req, res) {
    let params = req.allParams();
    var message = Email.template(params);
    var subject = (params.products) ? 'Anuncia tu marca Wini' : 'Contacto Wini';

    Email.send(subject, message, null, sails.config.emailContact.contact, function(err) {
      if (err) {
        console.log(err);
        return res.serverError(err);
      }
      return res.ok();
    });
  }

};
