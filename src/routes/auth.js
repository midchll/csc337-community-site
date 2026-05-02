
const express = require('express');
const crypto = require('crypto');
const router = express.Router();
const userQs = require('../db/userQueries');

// Create user
router.post('/create', async (req, res) => {
    try {
        var { name, email, password } = req.body;
        if (!email || !password) {
            return res.json({ error: 'Missing account details' });
        }

        const hashed = crypto
            .createHash('sha256')
            .update(password)
            .digest('hex');

        await userQs.createUser({
            name: name || 'Anonymous',
            email: email,
            password: hashed
        });

        res.status(201).json({ message: 'User successfully created.' });

    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Error during user creation.' });
    }
});

// Login, authenticate creds with stored
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const storedUser = await userQs.getUserByEmail(email);
        if (!storedUser) return res.status(401).json({ error: `Invalid credentials, email not found: ${email}` });

        // Use same hashing on the input password to match with stored
        const hashed = crypto
            .createHash('sha256')
            .update(password)
            .digest('hex');

        if (hashed !== storedUser.password) {
            return res.status(401).json({ error: 'Invalid credentials.' });
        }
        // Success, assign id to session
        req.session.user = { id: storedUser._id, name: storedUser.name, email: storedUser.email };
        console.log(req.session.user);
        return res.json({ message: 'Login Successful' });

    } catch (err) {
        console.log(err);
        return res.json({ error: 'Server error, login failed.' });
    }
});

// Logout, clear session info
router.post('/logout', (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            return res.status(500).json({ error: err });
        }
    });
    return res.json({ message: 'Successfully logged out.' });
});

module.exports = router;