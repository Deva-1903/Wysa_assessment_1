const express = require("express");
const router = express.Router();
const {
  addNickname,
  addChanges,
  addStrugleDuration,
  addSleepTime,
  addWakeUpTime,
  addSleepHours,
  getResults,
  deleteUser,
} = require("../controllers/userController");

router.route("/nickname/add").post(addNickname);
router.route("/changes/add").post(addChanges);
router.route("/strugleDuration/add").post(addStrugleDuration);
router.route("/sleepTime/add").post(addSleepTime);
router.route("/wakeupTime/add").post(addWakeUpTime);
router.route("/sleepHours/add").post(addSleepHours);
router.route("/results/get").get(getResults);
router.route("/user").delete(deleteUser);

module.exports = router;
