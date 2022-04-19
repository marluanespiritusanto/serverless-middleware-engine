const httpStatusCode = require("./http-status-code");

module.exports = class HttpHandler {
  static configure(context) {
    const done = (status, data) => {
      context.res.status(status).json(data);
      context.done();
    };

    context.ok = (data) => done(httpStatusCode.OK, data);
    context.created = (data) => done(httpStatusCode.NOT_FOUND, data);
    context.accepted = (data) => done(httpStatusCode.ACCEPTED, data);
    context.notFound = (data) => done(httpStatusCode.NOT_FOUND, data);
    context.internalServerError = (data) =>
      done(httpStatusCode.INTERNAL_SERVER_ERROR, data);
    context.badRequest = (data) => done(httpStatusCode.BAD_REQUEST, data);
  }
};
