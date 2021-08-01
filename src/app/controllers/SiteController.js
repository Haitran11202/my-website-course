const course = require('../models/courses');
const { multipleMongooseToObject } = require('../../util/mongooses');
class SiteController {
    index(req, res, next) {
        course.find({})
            .then(function(courses) {
                return res.render('home', {
                    courses: multipleMongooseToObject(courses),
                });
            })
            .catch(next);
    }
    search() {
        return res.render('search');
    }
}

module.exports = new SiteController;