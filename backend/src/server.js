const express = require('express');
const path = require('path');

const app = express();
const port = 3001;

app.use(express.static(path.join(__dirname, '../../frontend/dist')));

app.get('/health', (_req, res) => {
  res.status(200).json({ status: 'UP' });
});

if (require.main === module) {
  app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`Backend listening on port ${port}`);
  });
}

module.exports = app;
