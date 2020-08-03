const router = require("express").Router();

const tasks = require("./task-model");

router.get("/", (req, res) => {
  tasks.getTasks()
    .then(tasks => {
        tasks ? res.status(200).json(tasks) : res.status(404).json({
            message: `No tasks!!!`
        })
    })
    .catch(err => {
      res.status(500).json({ error: `There is a server error`, err });
    });
});

router.post("/", (req, res) => {
  const data = req.body;
  tasks.addTask(data)
    .then(task => {
      res.status(201).json(task);
    })
    .catch(err => {
      res.status(500).json({ error: `There is a server error`, err });
    });
});

module.exports = router;