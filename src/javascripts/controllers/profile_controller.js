

import profile_template from '../views/profile.html';

const render = () => {
    $('.home-container main').html(profile_template);
}

export default {
    render
}