import { paths, envs } from './config/';
import { createLogger, format, transports } from 'winston';
import DailyRotateFile from 'winston-daily-rotate-file';
import fs from 'fs';

const dir = paths.logs;

if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
}

const logger = createLogger({
    level: 'info',
    format: format.simple(),
    transports: [
        new transports.Console({
            colorize: true
        }),
        new DailyRotateFile({
            filename: envs.logs.filename,
            dirname: dir,
            maxSize: '20m',
            maxFiles: '14d',
            datePattern: '.dd-MM-yyyy',
            zippedArchive: true
        })
    ]
});

export default logger;
