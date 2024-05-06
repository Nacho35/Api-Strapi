"use strict";

/**
 * post router.
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

const defaultRouter = createCoreRouter("api::post.post");

const customRouter = (innerRouter, routeOveride = [], extraRoutes = []) => {
  let routes;

  return {
    get prefix() {
      return innerRouter.prefix;
    },
    get routes() {
      if (!routes) routes = innerRouter.routes;

      const newRoutes = routes.map((route) => {
        let found = false;

        routeOveride.forEach((overide) => {
          if (
            route.handler === overide.handler &&
            route.method === overide.method
          ) {
            found = overide;
          }
        });

        return found || route;

      });

      return newRoutes.concat(extraRoutes);
    },
  };
};

const myExtraRoutes = [];

const myOverideRoute = [
  {
    method: "GET",
    path: "/posts/:slug",
    handler: "api::post.post.findOne",
  },
];

module.exports = customRouter(defaultRouter, myOverideRoute, myExtraRoutes);