import MessageException from "./MessageException";

function AuthFailedException(message = null) {
    this.code = "AUTH_FAILED";
    this.message = message;
}

AuthFailedException.prototype = Error.prototype;

export default AuthFailedException;