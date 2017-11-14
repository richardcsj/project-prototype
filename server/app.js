module.exports = function(app,models) {
    require("./services/user.service.server.js")(app);
    require("./services/property.service.server.js")(app);
    require("./services/review.service.server.js")(app);

};
