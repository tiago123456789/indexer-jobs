class MessageException {

    static CODE_MESSAGE = {
        "AUTH_FAILED": "AUTH_FAILED"
    }
    
    constructor() {
        this._messagesBasedCode = {
            [MessageException.CODE_MESSAGE.AUTH_FAILED] : "Datas invalids!"
        }   
    }
    
    getMessage(code) {
        const existCode = this._messagesBasedCode[code];
        if (existCode) {
            return this._messagesBasedCode[existCode];
        }

        return "";
    }
}

export default MessageException;