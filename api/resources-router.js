const router = require("express").Router();
const Resources = require("./resources-model");

router.get("/", (req, res) => {
  Resources.getResources()
    .then(resources => {
        resources ? res.status(200).json(resources) : res.status(404).json({ message: "Nope, no resources" });
    })
    .catch(err => {
      res.status(500).json({ error: "server error", err });
    });
});

router.post("/", (req, res) => {
  const data = req.body;
  Resources.addResource(data)
    .then(resource => {
      res.status(201).json(resource);
    })
    .catch(err => {
      res.status(500).json({ error: "server error", err });
    });
});

module.exports = router;