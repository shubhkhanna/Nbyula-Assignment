const express = require("express");
const {
  getCourses,
  createCourse,
  getCourseById,
} = require("../controllers/courseControllers");
const {
  protectMiddleware,
  isTeacher,
} = require("../middlewares/authMiddleware");
const {
  validateCourseData,
  validationCheck,
} = require("../helpers/validation");
const router = express.Router();

router
  .route("/")
  .get(protectMiddleware, getCourses)
  .post(
    protectMiddleware,
    isTeacher,
    validateCourseData,
    validationCheck,
    createCourse
  );
router.route("/:id").get(protectMiddleware, getCourseById);

module.exports = router;
