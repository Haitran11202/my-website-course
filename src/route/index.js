const newsRouter = require('./news');
const meRouter = require('./me');
const siteRouter = require('./site');
const courseRouter = require('./courses');
const searchRouter = require('./search');
const faceRouter = require('./face');

function route(app) {

    app.use('/home', siteRouter);
    app.use('/courses', courseRouter);
    app.use('/me', meRouter);
    app.use('/news', newsRouter);
    app.use('/search', searchRouter);
    app.use('/', faceRouter);
}
module.exports = route;