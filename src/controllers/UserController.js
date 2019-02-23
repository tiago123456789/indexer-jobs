import UserBo from "../bo/UserBo";

export default class UserController {

    constructor(bo) {
        this._bo = bo || new UserBo();
        this.save = this.save.bind(this);
        this.authenticate = this.authenticate.bind(this);
    }

    async authenticate(request, response) {
        try {
            const { email, password } = request.body;
            const user = await this._bo.authenticate({ email, password });
            request.session.user = user;
            return response.redirect("/");
        } catch (e) {
            console.log(e);
        }

    }

    async save(request, response) {
        const newData = request.body;
        await this._bo.save(newData);
        return response.redirect("/user/login");
    }
}