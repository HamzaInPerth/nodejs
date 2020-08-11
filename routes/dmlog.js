const express = require("express");

const {
  createDmlog,
  getDmlog,
  getDmlogs,
  updateDmlog,
  deleteDmlog,
} = require("../controllers/dmlog");
const router = express.Router();

router.route("/").get(getDmlogs).post(createDmlog);

router.route("/:id").get(getDmlog).put(updateDmlog).delete(deleteDmlog);

module.exports = router;
