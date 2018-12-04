/**
 * Lead.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */
const uuidv4 = require('uuid/v4');

module.exports = {

  attributes: {

    id: {
      type: 'string',
      unique: true,
      autoIncrement: true
    },
    email: {
      type: 'string',
      required: true,
      unique: true
    },
    phone: {
      type: 'string',
      required: true,
      unique: true
    },
    dayBirth: {
      type: 'string',
      allowNull: true
    },
    monthBirth: {
      type: 'string',
      allowNull: true
    },
    yearBirth: {
      type: 'string',
      allowNull: true
    },

    // Foreign key
    state: {
      model: 'state',
      columnName: 'stateId'
    }

  },

  beforeCreate: function (valuesToSet, proceed) {
    valuesToSet.id = uuidv4();
    return proceed();
  }

};
