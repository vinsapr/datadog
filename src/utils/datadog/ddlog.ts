import { createLogger, format, transports } from 'winston';
import dotenv = require('dotenv');

const { parsed } = dotenv.config({
  path: `${process.cwd()}/.env`,
});
process.env = { ...parsed, ...process.env };

const DATADOG_API_KEY = process.env.DATADOG_API_KEY;
const SERVICE_NAME = process.env.SERVICE_NAME;

const httpTransportOptions = {
  host: 'http-intake.logs.datadoghq.com',
  path: `/api/v2/logs?dd-api-key=${DATADOG_API_KEY}&ddsource=nodejs&service=${SERVICE_NAME}`,
  ssl: true,
};

const ddlog = createLogger({
  level: 'info',
  exitOnError: false,
  format: format.json(),
  transports: [new transports.Http(httpTransportOptions)],
});

export default ddlog;
