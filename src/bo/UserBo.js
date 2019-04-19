import UserDao from "../dao/UserDao";
import UserCollection from "../collections/User";
import User from "../collections/User";
import bcrypt from "bcrypt";
import AuthFailedException from "../exceptions/AuthFailedException";
import NotFoundException from "../exceptions/NotFoundException";
import MessageException from "../exceptions/MessageException";

export default class UserBo {

    constructor(dao) {
        this._userDao = dao || new UserDao();
    }

    async findById(id) {
        console.log(id);
        const user = await this._userDao.findById(id);
        if (!user) {
            throw new NotFoundException(MessageException.CODE_MESSAGE.NOT_FOUND);
        }

        return user;
    }

    async update(id, dataModified) {
        await this.findById(id);
        this._userDao.update(id, dataModified);
    }

    async authenticate(credencials) {
        const user = await this._userDao.getUserByEmail(credencials.email);

        if (!user) {
            throw new AuthFailedException(MessageException.CODE_MESSAGE.AUTH_FAILED);
        }

        const isPasswordValid = await bcrypt.compare(credencials.password, user.password);

        if (!isPasswordValid) {
            throw new AuthFailedException(MessageException.CODE_MESSAGE.AUTH_FAILED);
        }

        user.password = "";
        return user;
    }

    async save(newData) {
        await this._userDao.save(newData);
    }
}