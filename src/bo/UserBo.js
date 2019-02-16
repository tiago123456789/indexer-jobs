import UserDao from "../dao/UserDao";
import UserCollection from "../collections/User";
import User from "../collections/User";
import bcrypt from "bcrypt";
import AuthFailedException from "../exceptions/AuthFailedException";
import MessageException from "../exceptions/MessageException";

export default class UserBo {

    constructor(dao) {
        this._userDao = dao || new UserDao();
    }

    async authenticate(credencials) {
        const user = await this._userDao.getUserByEmail(credencials.eamil);
        console.log(user);
        if (!user) {
            throw new AuthFailedException(MessageException.CODE_MESSAGE.AUTH_FAILED);
        }

        // const isPasswordValid = await bcrypt.compare(credencials.password, user.password);

        if (!isPasswordValid) {
            throw new AuthFailedException(MessageException.CODE_MESSAGE.AUTH_FAILED);
        }

        delete user.password
        return user;
    }

    async save(newData) {
        await this._userDao.save(newData);
    }
}