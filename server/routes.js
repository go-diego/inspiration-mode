const routes = require("next-routes");

module.exports = routes()
    .add({ name: "index", pattern: "/", page: "blog" })
    .add({
        name: "archive",
        pattern: "/archive",
        page: "archive"
    })
    .add({
        name: "post",
        pattern: "/blog/:slug",
        page: "post"
    });
// .add({
//     name: "search",
//     pattern: "/blog?q=:slug",
//     page: "archive"
// });
