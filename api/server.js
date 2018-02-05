// server.js
const jsonServer = require('json-server');
const server = jsonServer.create();
const db = require('./db.js')();
const router = jsonServer.router(db);
const middlewares = jsonServer.defaults();

const PORT = 3001;


// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares);

// server.use(jsonServer.rewriter({
//   '/api/*': '/$1',
// }));

// In this example, returned resources will be wrapped in a body property
// router.render = (req, res) => {
//   res.jsonp({
//     body: res.locals.data,
//     length: res.locals.data.length,
//   })
// };

// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use(jsonServer.bodyParser);
server.use((req, res, next) => {
  if (req.method === 'POST') {
    req.body.createdAt = Date.now();
  }
  // Continue to JSON Server router
  next()
});

// auth
// const isAuthorized = function(req){ return true; }
// server.use((req, res, next) => {
//   if (isAuthorized(req)) { // add your authorization logic here
//     next() // continue to JSON Server router
//   } else {
//     res.sendStatus(401)
//   }
// });

server.use('/api', router);
server.listen(PORT, () => {
  console.log('JSON Server is running on http://localhost:' + PORT);
});