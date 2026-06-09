const express = require('express');

const app = express();
const port = 3001;

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
