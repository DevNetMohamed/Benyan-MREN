export class AppError extends Error {
  constructor(message, status) {
    super(message);
    this.status = status;
  }
};


export const asyncHandler = (API) => {
  return (req, res, next) => {
    API(req, res, next).catch((err) => {
      if (err instanceof AppError) {
        return next(err);
      }
      if (err.message) {
        return next(new AppError(err.message, err.status || 500));
      }
      // fallback
      return next(new AppError(JSON.stringify(err), 500));
    });
  };
};


export const globalErrorHandling = (err, req, res, next) => {
    const statusCode = err.cause || 500;

    // 1. Check if it's a Validation Error (like Joi or Mongoose)
    if (err.validationErrors && Array.isArray(err.validationErrors)) {
        return res.status(statusCode).json({
            message: "Validation Error",
            errors: err.validationErrors.map(detail => ({
                message: detail?.message || "Invalid value",
                path: detail?.path,
                type: detail?.type
            }))
        });
    }

    // 2. Generic Error Response
    // Use optional chaining and fallbacks to prevent "undefined" crashes
    return res.status(statusCode).json({
        message: err.message || "Internal Server Error",
        errors: [
            {
                message: err.message || "An unexpected error occurred",
                // Only show stack trace in development
                ...(process.env.NODE_ENV === 'development' ? { stack: err.stack } : {})
            }
        ]
    });
};