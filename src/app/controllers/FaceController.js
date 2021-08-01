class FaceController {
    index(req, res) {
        return res.render('face');
    }
}

module.exports = new FaceController;