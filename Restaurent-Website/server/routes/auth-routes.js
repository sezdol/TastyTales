const express = require('express');
const router = express.Router();
const authControllers = require('../controllers/auth-controllers');
const validate = require('../middlewares/validate-middleware')
const signupSchema = require('../validators/auth-validator')

router.get("/", authControllers.Home)

router.post("/login", authControllers.Login)

router.post("/register", validate(signupSchema), authControllers.Register)


module.exports = router;