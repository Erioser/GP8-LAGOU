

const search_template = require('../views/search.html');

const render = () => {
    $('.home-container main').html(search_template);
}

module.exports = {
    render
}