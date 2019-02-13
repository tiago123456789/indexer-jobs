import Dao from "./Dao";
import User from "../collections/User";

export default class UserDao extends Dao {

    constructor() {
        super(User);
    }

    async save(data) {
        return await User.register(data, data.password);
    }
}