const express = require("express");
const router = express.Router();

const feedbackController = require("../controllers/feedback");
router.post("/create", feedbackController.create);
router.post("/:id/update", feedbackController.update);
router.get("/:id/delete", feedbackController.delete);

module.exports = router;
