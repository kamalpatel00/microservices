class ApiError extends Error {
  constructor(statusCode, message, isOperational = true, stack = '') {
    // eslint-disable-next-line no-unused-expressions
    console.log('API ERROR'), super(message);
    this.statusCode = statusCode;
    this.isOperational = isOperational;
    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

module.exports = ApiError;