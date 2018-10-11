
const job_controller = require('../controllers/home_job_controller');
const search_controller = require('../controllers/search_controller');
const profile_controller = require('../controllers/profile_controller');

const routes = {
    '#/job': job_controller,
    '#/search': search_controller,
    '#/profile': profile_controller
}

module.exports = routes