import { readFileSync } from 'fs';
import { join } from 'path';

import {
    smarthome as SmartHome,
    // SmartHomeV1ExecuteResponseCommands,
    // Headers,
  } from 'actions-on-google';
import * as functions from 'firebase-functions';

let jwt;
try {
  jwt = JSON.parse(
    readFileSync(join(__dirname, 'smart-home-key.json')).toString()
  );
} catch (e) {
  functions.logger.warn('error reading service account key:', e);
  functions.logger.warn('reportState and requestSync operation will fail');
}

export const smarthome = SmartHome({
    jwt,
  });

