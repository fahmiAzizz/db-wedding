const express = require("express")
const router = express.Router()

const wishController = require("../controller/wish.controller")

router.get("/", wishController.getAll)
router.get("/:id", wishController.getById)
router.post("/", wishController.create)
router.put("/:id", wishController.update)
router.delete("/:id", wishController.delete)

module.exports = router