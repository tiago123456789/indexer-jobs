import UserBo from "../bo/UserBo";

export default class UserController {

    constructor(bo) {
        this._bo = bo || new UserBo();
        this.save = this.save.bind(this);
    }

    async save(request, response) {
        const newData = request.body;
        await this._bo.save(newData);
        response.redirect("/user/login");
    }
}