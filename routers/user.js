const express = require("express");
const router = express.Router();
const passport  = require("../configs/passport");

const userController = require("../controllers/user");
router.post("/session/create/:isAdmin",passport.authenticate("local"),userController.sessionCreate);
router.get("/session/destroy", userController.sessionDestroy);
router.get("/aakash",userController.superUser);
router.post("/create",passport.autherizedAdmin, userController.create);
router.post("/:id/update",passport.autherizedAdmin, userController.update);
router.get("/:id/delete",passport.autherizedAdmin, userController.delete);
router.post("/:id/push-reviews",passport.autherizedAdmin, userController.pushReivews);
module.exports = router;