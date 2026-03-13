const fs = require('fs');
const path = require('path');
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const config = require('./shared/config/config');
const errorHandler = require('./shared/middleware/errorHandler');

function createApp(sharedServices) {
  const app = express();

  app.use(cors({ origin: config.CLIENT_URL, credentials: true }));
  app.use(cookieParser());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  const modulesDir = path.join(__dirname, 'modules');
  fs.readdirSync(modulesDir, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .forEach((dir) => {
      const indexPath = path.join(modulesDir, dir.name, 'index.js');
      if (fs.existsSync(indexPath)) {
        const mod = require(indexPath);
        mod.register(app, sharedServices);
      }
    });

  app.use(errorHandler);

  return app;
}

module.exports = { createApp };
