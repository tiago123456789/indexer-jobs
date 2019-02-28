class MessageException {

    static CODE_MESSAGE = {
        "AUTH_FAILED": "AUTH_FAILED",
        "NOT_FOUND": "NOT_FOUND"
    }
    
    constructor() {
        this._messagesBasedCode = {
            [MessageException.CODE_MESSAGE.AUTH_FAILED] : "Datas invalids!",
            [MessageException.CODE_MESSAGE.NOT_FOUND] : "Register not found!",            
        }   
    }
    
    getMessage(code) {
        return (this._messagesBasedCode[code] || "");
    }
}

export default MessageException;