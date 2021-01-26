const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const User = require('../../models/User');

// @route   POST api/users
// @desc    register user
// @access  public

router.post(
  '/',
  [
    //object property name, error message
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check(
      'password',
      'please enter a password with 6 or more characters',
    ).isLength({ min: 6 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    !errors.isEmpty() && res.status(400).json({ errors: errors.array() });

    //use Dto in typescript
    const { name, email, password } = req.body;
    try {
      let user = await User.findOne({ email });

      user &&
        res.status(400).json({ errors: [{ msg: 'User already exists' }] });
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  },
);

module.exports = router;
