const Middleware = require("../../index");

const authors = [
  {
    name: "Stephen",
    lastname: "Hawking",
    birthDate: new Date(1942, 01, 08).toISOString(),
    diedDate: new Date(2018, 03, 14).toISOString(),
  },
  {
    name: "Albert",
    lastname: "Einstein",
    birthDate: new Date(1879, 03, 14).toISOString(),
    diedDate: new Date(1955, 04, 18).toISOString(),
  },
];

async function getAuthors(context, req) {
  return Promise.resolve(authors).then((data) => context.res.ok({ data }));
}

module.exports = new Middleware({ httpHandler: true })
  .use(getAuthors)
  .catch((err, context, req) => {
    context.log.error(err.message);

    return context.res.internalServerError({
      message: err.message,
    });
  })
  .listen();
