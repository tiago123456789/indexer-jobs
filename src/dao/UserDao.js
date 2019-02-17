import Dao from "./Dao";
import User from "../collections/User";

export default class UserDao extends Dao {

    constructor() {
        super(User);
    }

    async getUserByEmail(email) {
        return await User.find({ email: email });
    }
}