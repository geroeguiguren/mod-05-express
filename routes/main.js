const express = require ("express");

const router = express.Router();

//requerimos el controller que esta en controllers/mainControllers.js

const controller = require ("../controllers/mainControllers")


// /main
router.get("/", controller.main);


router.get("/about", controller.about);


module.exports = router;
