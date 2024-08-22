const fastifyPlugin = require("fastify-plugin");
const servicePlugin = require("./services/servicePlugin");
const repositoryPlugin = require("./repositories/repositoryPlugin");
const todoRoutes = require("./routes/api/v1/submissionRoutes");

/**
 *
 * @param {Fastify object} fastify
 * @param {*} options
 */
async function app(fastify, options) {
  await fastify.register(require("@fastify/cors"));
  await fastify.register(repositoryPlugin);
  await fastify.register(servicePlugin);

  await fastify.register(todoRoutes, { prefix: "/todos" });

  // register test routes
  await fastify.register(require("./routes/api/apiRoutes"), { prefix: "/api" });
}

module.exports = fastifyPlugin(app);
