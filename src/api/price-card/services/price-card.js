'use strict';

/**
 * price-card service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::price-card.price-card');
