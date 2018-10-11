
import job_controller from '../controllers/job_controller';
import search_controller from '../controllers/search_controller';
import profile_controller from '../controllers/profile_controller';

const routes = {
    '#/job': job_controller,
    '#/search': search_controller,
    '#/profile': profile_controller
}

export { routes } ;


