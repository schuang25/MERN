const Author = require("../models/authors.model");

module.exports.findAllAuthors = (req, res) => {
    Author.find()
        .then(allAuthors => res.json(allAuthors))
        .catch(err => res.status(400).json(err));
};

module.exports.findAuthor = (req, res) => {
    Author.findById({_id: req.params.id})
        .then(author => res.json(author))
        .catch(err => res.status(400).json(err));
};

module.exports.createAuthor = (req, res) => {
    Author.create(req.body)
        .then(newAuthor => res.json(newAuthor))
        .catch(err => res.status(400).json(err));
};

module.exports.updateAuthor = (req, res) => {
    Author.findByIdAndUpdate({_id: req.params.id}, req.body, {new: true, runValidators: true})
        .then(updatedAuthor => res.json(updatedAuthor))
        .catch(err => res.status(400).json(err));
};

module.exports.deleteAuthor = (req, res) => {
    Author.findByIdAndDelete({_id: req.params.id})
        .then(result => res.json(result))
        .catch(err => res.status(400).json(err));
};