'use strict';

/**
 * custom-setting service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::custom-setting.custom-setting');
