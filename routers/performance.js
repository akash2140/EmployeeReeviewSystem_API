const express = require("express");
const router = express.Router();
const passport = require('passport')
const performanceController = require("../controllers/performance");
router.post("/create",passport.autherizedUser, performanceController.create);
router.post("/:id/update",passport.autherizedUser, performanceController.update);
router.get("/:id/delete",passport.autherizedUser, performanceController.delete);
module.exports = router;
