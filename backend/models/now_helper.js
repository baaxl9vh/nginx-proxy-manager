const db     = require('../db');
const config = require('config');
const Model  = require('objection').Model;

Model.knex(db);

module.exports = function () {
	if (config.database.knex && config.database.knex.client === 'sqlite3') {
		return Model.raw('date(\'now\')');
	} else {
		return Model.raw('NOW()');
	}
};
