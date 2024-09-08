const CustomError = require("../utils/customError");

exports.monitor_api = (req, res, next) => {
  try {
    const TIMEOUT_DURATION = 5000; //10s
    const startTime = Date.now();
    let isTimeout = false;
    const user_id =
      req.user?.userDetails[0]?._id || req.user?.userDetails?._id || undefined;
    // console.log(
    //   `[${new Date().toISOString()}] ${req.method} ${
    //     req.originalUrl
    //   } - Request received`
    // );

    // Set a timeout to check if the request takes too long to complete
    const timeout = setTimeout(() => {
      isTimeout = true;
      console.error(
        "\x1b[31m%s\x1b[0m",
        `[user:${user_id}][${new Date().toISOString()}] ${req.method} ${
          req.originalUrl
        } - Request timed out`
      );
      //   res.status(408).send("Request Timeout");
    }, TIMEOUT_DURATION);

    // Log the end of the request when response is finished
    res.on("finish", () => {
      if (!isTimeout) {
        clearTimeout(timeout); // Clear the timeout if the request completes within the specified time
        const duration = Date.now() - startTime;
        console.log(
          `[user:${user_id}][${new Date().toISOString()}] ${req.method} ${
            req.originalUrl
          } - Request completed in ${duration}ms`
        );
      }
    });

    // Handle any errors during the request
    res.on("close", () => {
      if (!isTimeout && !res.finished) {
        clearTimeout(timeout); // Clear the timeout if the request completes with an error
        console.error(
          `[user:${user_id}][${new Date().toISOString()}] ${req.method} ${
            req.originalUrl
          } - Request terminated prematurely`
        );
      }
    });

    next();
  } catch (error) {
    console.log("Some thing wrong on monitory API - (middleware)", error);

    return next(
      new CustomError(
        error.message || "Some thing wrong on monitory API - (middleware)",
        error.code || 500
      )
    );
  }
};
