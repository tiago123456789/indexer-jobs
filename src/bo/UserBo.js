import UserDao from "../dao/UserDao";

export default class UserBo {

    constructor(dao) {
        this._userDao = dao || new UserDao();
    }

    async save(newData) {
        await this._userDao.save(newData);
    }
}