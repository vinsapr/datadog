"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const winston_1 = require("winston");
const dotenv = require("dotenv");
const { parsed } = dotenv.config({
    path: `${process.cwd()}/.env`,
});
process.env = Object.assign(Object.assign({}, parsed), process.env);
const DATADOG_API_KEY = process.env.DATADOG_API_KEY;
const SERVICE_NAME = process.env.SERVICE_NAME;
const httpTransportOptions = {
    host: 'http-intake.logs.datadoghq.com',
    path: `/api/v2/logs?dd-api-key=${DATADOG_API_KEY}&ddsource=nodejs&service=${SERVICE_NAME}`,
    ssl: true,
};
const ddlog = (0, winston_1.createLogger)({
    level: 'info',
    exitOnError: false,
    format: winston_1.format.json(),
    transports: [new winston_1.transports.Http(httpTransportOptions)],
});
exports.default = ddlog;
//# sourceMappingURL=ddlog.js.map