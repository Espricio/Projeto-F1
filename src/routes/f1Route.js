const express = require("express");
const router = express.Router();

const f1Controller = require("../controllers/f1Controller");

router.get("/", f1Controller.index);
router.get("/listarEquipes", f1Controller.listarEquipes);

module.exports = router;
