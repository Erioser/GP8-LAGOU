

const list = require('./list.json');

module.exports = () => {
    return {
        // 相当于 提供了 localhost:3000/list -> list
        list: list
    }
}