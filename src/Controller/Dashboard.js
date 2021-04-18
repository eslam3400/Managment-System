const Model = require('../Model/Model')

let dashboard = (req, res) => res.render('dashboard', { tab: "dashboard" })

module.exports = { dashboard }