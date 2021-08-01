class SearchController {

    index(req, res) {
        return res.render('search');
    }
}

module.exports = new SearchController;