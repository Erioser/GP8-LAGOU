

const profile_template = require('../views/profile.html');

const render = () => {
    $('.home-container main').html(profile_template);
}

module.exports = {
    render
}