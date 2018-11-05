let router = require("express").Router();
let mongoose = require("mongoose");
let Secret = mongoose.model("Secret");

// Secret routing will go here

// Get a list of secrets
router.get("/", (req, res) => {
  Secret.find()
    .then(result => res.send(result))
    .catch(error => res.status(500).send(error));
});

// Add a secret
router.post("/", (req, res) => {
  let newSecret = new Secret(req.body);
  newSecret
    .save()
    .then(result => res.send(result))
    .catch(error => res.status(400).send(error));
});

// Update a secret
router.put("/:id", (req, res) => {
  Secret.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(result => res.send(result))
    .catch(error => res.status(400).send(error));
});

// Delete a secret
router.delete("/:id", (req, res) => {
  Secret.findByIdAndDelete(req.params.id)
    .then(result => res.send(result))
    .catch(error => res.status(400).send(error));
});

module.exports = router;
