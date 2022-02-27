const express = require('express');
const router = express.Router();

router.get('/thread', (req, res) => {
  res.send('test')
});

module.exports = router;
