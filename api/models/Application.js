/**
 * Application.js
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
    checkIncome: {
      type: 'boolean',
      required: true
    },
    debit: {
      type: 'boolean',
      allowNull: true
    },
    paymentUpToDate: {
      type: 'boolean',
      allowNull: true
    },
    termsConditions: {
      type: 'boolean',
      allowNull: true
    },
    privacyNotice: {
      type: 'boolean',
      allowNull: true
    },

    // Foreign key
    lead: {
      model: 'lead',
      columnName: 'leadId',
      required: true
    },
    income: {
      model: 'income',
      columnName: 'incomeId',
      required: true
    },
    profession: {
      model: 'profession',
      columnName: 'professionId'
    },
    financialProduct: {
      collection: 'financialProduct',
      via: 'application'
    }

  },

  beforeCreate: function (valuesToSet, proceed) {
    valuesToSet.id = uuidv4();
    return proceed();
  }

};
