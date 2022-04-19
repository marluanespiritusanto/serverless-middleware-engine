const HttpHandler = require("./http/http-handler");

module.exports = class FunctionMiddleware {
  #options = {};
  #stack = [];

  constructor({ httpHandler }) {
    this.#options = { httpHandler };
  }

  /**
   * @description Introduce a new middleware to the stack
   * @param {Function} fn Serverless function
   * @returns {FunctionMiddleware}
   */

  use(fn) {
    this.#stack.push({ fn });

    return this;
  }

  /**
   * @description Function to catch exceptions
   * @param {Function} fn Serverless function
   * @returns {FunctionMiddleware}
   */
  catch(fn) {
    this.#stack.push({ fn, isError: true });

    return this;
  }

  /**
   * @description Introduce a new middleware to the stack with a condition for its execution
   * @param {Function} fn Serverless function
   * @param {Function} predicate Function that return a boolean
   * @returns {FunctionMiddleware}
   */
  useIf(fn, predicate) {
    this.#stack.push({ fn, predicate, conditional: true });

    return this;
  }

  /**
   * @description Pass the middleware engine to the function one.
   * @returns {Function} Function context
   */
  listen() {
    return async (context, inputs, ...args) => {
      if (this.#options.httpHandler) {
        this.#setHttpHandler(context);
      }

      return await this.#handle(context, inputs, ...args);
    };
  }

  #setHttpHandler(context) {
    HttpHandler.configure(context);
  }

  async #handle(context, input, ...args) {
    let index = 0;

    const done = context.done;

    // done method overwrite
    // TODO: implement a logger pattern
    context.done = (...params) => {
      done(...params);
    };

    context.next = async (err) => {
      try {
        const layer = this.#stack[index++];

        if (!layer) {
          return context.done(err);
        }

        if (err && layer.isError) {
          return layer.fn(err, context, input, ...args);
        }

        if (err || layer.isError) {
          return context.next(err);
        }

        if (layer.conditional && !layer.predicate(context, input)) {
          return context.next();
        }

        return await layer.fn(context, input, ...args);
      } catch (ex) {
        return context.next(ex);
      }
    };

    context.next();
  }
};
