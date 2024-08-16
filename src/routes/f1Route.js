const express = require("express");
const router = express.Router();

const f1Controller = require("../controllers/f1Controller");

router.get("/", f1Controller.index);
router.get("/listarEquipes", f1Controller.listarEquipes);
router.get("/editarEquipe/:id_equipe", f1Controller.editarEquipe);
router.post("/salvarEdicaoEquipe", f1Controller.salvarEdicaoEquipe);

module.exports = router;
