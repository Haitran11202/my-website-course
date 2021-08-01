const course = require('../models/courses');
const { multipleMongooseToObject } = require('../../util/mongooses');

class MeController {
    storedController(req, res, next) {
        course.find({})
            .then(courses => res.render('me/stored-courses', {
                courses: multipleMongooseToObject(courses)
            }))
            .catch(next);
    }
}

module.exports = new MeController;