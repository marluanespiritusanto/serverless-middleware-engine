const httpStatusCode = require("./http-status-code");

module.exports = class HttpHandler {
  /**
   * @description Configure the http handler for the HTTP context.
   * @param {object} context HTTP Context
   * @returns {void}
   */
  static configure(context) {
    /**
     * @description Context done abstraction
     * @param {number} status HTTP Status Code
     * @param {object} data Data to send to the client in JSON format.
     * @returns {void}
     */
    const done = (status, data = {}) => {
      data = {
        ...data,
        success: status > 200 && status < 300,
        statusCode: status,
        timestamp: new Date().toISOString(),
      };

      context.res.status(status).json(data);
      context.done();
    };

    context.res.ok = (data) => done(httpStatusCode.OK, data);
    context.res.created = (data) => done(httpStatusCode.CREATED, data);
    context.res.accepted = (data) => done(httpStatusCode.ACCEPTED, data);
    context.res.nonAuthoritativeInformation = (data) =>
      done(httpStatusCode.NON_AUTHORITATIVE_INFORMATION, data);
    context.res.noContent = (data) => done(httpStatusCode.NO_CONTENT, data);
    context.res.resetContent = (data) =>
      done(httpStatusCode.RESET_CONTENT, data);
    context.res.partialContent = (data) =>
      done(httpStatusCode.PARTIAL_CONTENT, data);
    context.res.multiStatus = (data) => done(httpStatusCode.MULTI_STATUS, data);
    context.res.multipleChoices = (data) =>
      done(httpStatusCode.MULTIPLE_CHOICES, data);
    context.res.movedPermanently = (data) =>
      done(httpStatusCode.MOVED_PERMANENTLY, data);
    context.res.movedTemporarily = (data) =>
      done(httpStatusCode.MOVED_TEMPORARILY, data);
    context.res.seeOther = (data) => done(httpStatusCode.SEE_OTHER, data);
    context.res.notModified = (data) => done(httpStatusCode.NOT_MODIFIED, data);
    context.res.useProxy = (data) => done(httpStatusCode.USE_PROXY, data);
    context.res.temporaryRedirect = (data) =>
      done(httpStatusCode.TEMPORARY_REDIRECT, data);
    context.res.permanentRedirect = (data) =>
      done(httpStatusCode.PERMANENT_REDIRECT, data);
    context.res.badRequest = (data) => done(httpStatusCode.BAD_REQUEST, data);
    context.res.unauthorized = (data) =>
      done(httpStatusCode.UNAUTHORIZED, data);
    context.res.paymentRequired = (data) =>
      done(httpStatusCode.PAYMENT_REQUIRED, data);
    context.res.forbidden = (data) => done(httpStatusCode.FORBIDDEN, data);
    context.res.notFound = (data) => done(httpStatusCode.NOT_FOUND, data);
    context.res.methodNotAllowed = (data) =>
      done(httpStatusCode.METHOD_NOT_ALLOWED, data);
    context.res.notAcceptable = (data) =>
      done(httpStatusCode.NOT_ACCEPTABLE, data);
    context.res.proxyAuthenticationRequired = (data) =>
      done(httpStatusCode.PROXY_AUTHENTICATION_REQUIRED, data);
    context.res.requestTimeout = (data) =>
      done(httpStatusCode.REQUEST_TIMEOUT, data);
    context.res.conflict = (data) => done(httpStatusCode.CONFLICT, data);
    context.res.gone = (data) => done(httpStatusCode.GONE, data);
    context.res.lengthRequired = (data) =>
      done(httpStatusCode.LENGTH_REQUIRED, data);
    context.res.preconditionFailed = (data) =>
      done(httpStatusCode.PRECONDITION_FAILED, data);
    context.res.requestTooLong = (data) =>
      done(httpStatusCode.REQUEST_TOO_LONG, data);
    context.res.requestUriTooLong = (data) =>
      done(httpStatusCode.REQUEST_URI_TOO_LONG, data);
    context.res.unsupportedMediaType = (data) =>
      done(httpStatusCode.UNSUPPORTED_MEDIA_TYPE, data);
    context.res.requestedRangeNotSatisfiable = (data) =>
      done(httpStatusCode.REQUESTED_RANGE_NOT_SATISFIABLE, data);
    context.res.expectationFailed = (data) =>
      done(httpStatusCode.EXPECTATION_FAILED, data);
    context.res.imATeapot = (data) => done(httpStatusCode.IM_A_TEAPOT, data);
    context.res.insufficientSpaceOnResource = (data) =>
      done(httpStatusCode.INSUFFICIENT_SPACE_ON_RESOURCE, data);
    context.res.methodFailure = (data) =>
      done(httpStatusCode.METHOD_FAILURE, data);
    context.res.misdirectedRequest = (data) =>
      done(httpStatusCode.MISDIRECTED_REQUEST, data);
    context.res.unprocessableEntity = (data) =>
      done(httpStatusCode.UNPROCESSABLE_ENTITY, data);
    context.res.locked = (data) => done(httpStatusCode.LOCKED, data);
    context.res.failedDependency = (data) =>
      done(httpStatusCode.FAILED_DEPENDENCY, data);
    context.res.preconditionRequired = (data) =>
      done(httpStatusCode.PRECONDITION_REQUIRED, data);
    context.res.tooManyRequests = (data) =>
      done(httpStatusCode.TOO_MANY_REQUESTS, data);
    context.res.requestHeaderFieldsTooLarge = (data) =>
      done(httpStatusCode.REQUEST_HEADER_FIELDS_TOO_LARGE, data);
    context.res.unavailableForLegalReasons = (data) =>
      done(httpStatusCode.UNAVAILABLE_FOR_LEGAL_REASONS, data);
    context.res.internalServerError = (data) =>
      done(httpStatusCode.INTERNAL_SERVER_ERROR, data);
    context.res.notImplemented = (data) =>
      done(httpStatusCode.NOT_IMPLEMENTED, data);
    context.res.badGateway = (data) => done(httpStatusCode.BAD_GATEWAY, data);
    context.res.serviceUnavailable = (data) =>
      done(httpStatusCode.SERVICE_UNAVAILABLE, data);
    context.res.gatewayTimeout = (data) =>
      done(httpStatusCode.GATEWAY_TIMEOUT, data);
    context.res.httpVersionNotSupported = (data) =>
      done(httpStatusCode.HTTP_VERSION_NOT_SUPPORTED, data);
    context.res.insufficientStorage = (data) =>
      done(httpStatusCode.INSUFFICIENT_STORAGE, data);
    context.res.networkAuthenticationRequired = (data) =>
      done(httpStatusCode.NETWORK_AUTHENTICATION_REQUIRED, data);
  }
};
