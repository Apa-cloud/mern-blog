/* Function to handle errors */
/* Creating error for our convenience, even though no actual system error  */

export const errorHandler = (statusCode, message) => {
    const error = new Error();  /* Error constructor from JavaScript */
    error.statusCode = statusCode;
    error.message = message;
    return error;
};
