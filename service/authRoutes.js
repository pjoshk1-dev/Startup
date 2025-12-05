import express from 'express';
import {
  createAccount,
  loginUser,
  logoutUser,
  restricted
} from './authController.js';

const router = express.Router();

// CREATE ACCOUNT
router.post('/create', createAccount);

// LOGIN
router.post('/login', loginUser);

// LOGOUT
router.post('/logout', logoutUser);

// RESTRICTED ENDPOINT
router.get('/restricted', restricted);

export default router;
