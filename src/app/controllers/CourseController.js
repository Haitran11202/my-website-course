const course = require('../models/courses');
const { mongooseToObject } = require('../../util/mongooses');
class SiteController {
    show(req, res, next) {
        course.findOne({
                slug: req.params.slug
            })
            .then(course => {
                res.render('courses/show', { course: mongooseToObject(course) });
            })
            .catch(next);
    }
    index(req, res) {
        res.send('courses')
    }
    create(req, res, next) {
        res.render('courses/create')
    }

    store(req, res, next) {
        const formData = req.body;

        formData.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`
        const Course = new course(formData);;
        Course.save()
            .then(() => res.redirect('/home'))
            .catch(error => {})
    }

    edit(req, res, next) {
            course.findById(req.params.id)
                .then(course => res.render('courses/edit', {
                    course: mongooseToObject(course)
                }))
                .catch(next);
        }
        //[PUT] /courses/:id
    update(req, res, next) {
            course.updateOne({ _id: req.params.id }, req.body)
                .then(() => res.redirect('/me/stored/courses'))
                .catch(next);
        }
        //[Delete] /courses/:id
    destroy(req, res, next) {
        course.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }

}

module.exports = new SiteController;