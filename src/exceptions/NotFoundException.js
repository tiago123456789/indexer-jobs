import MessageException from "./MessageException";

function NotFoundException(message = null) {
    this.code = "NOT_FOUND";
    this.message = message;
}

NotFoundException.prototype = Error.prototype;

export default NotFoundException;