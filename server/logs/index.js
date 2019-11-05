const winston = require('winston');
const { createLogger, format, transports } = require('winston');
const { combine, timestamp, label, printf } = format;

const myFormat = printf(({ level, message, label, timestamp }) => {
  return `${timestamp} [${label}] ${level}: ${message}`;
});

const authLogger = createLogger({
    level: 'info',
    format: combine(
      label({ label: 'Auth' }),
      timestamp(),
      myFormat
    ),
    transports: [
    new transports.File({ filename: './logs/Auth/error.log', level: 'error' }),
    new transports.File({ filename: './logs/Auth/info.log', level: 'info' }),
    new transports.File({ filename: './logs/Auth/debug.log', level: 'debug' }),
    new transports.File({ filename: './logs/Auth/combined.log' })
    ]
});

const adminLogger = createLogger({
  level: 'info',
  format: combine(
    label({ label: 'Admin Manage' }),
    timestamp(),
    myFormat
  ),
  transports: [
  new transports.File({ filename: './logs/Admin/error.log', level: 'error' }),
  new transports.File({ filename: './logs/Admin/info.log', level: 'info' }),
  new transports.File({ filename: './logs/Admin/debug.log', level: 'debug' }),
  new transports.File({ filename: './logs/Admin/combined.log' })
  ]
});

module.exports = {
    authLogger,
    adminLogger
};