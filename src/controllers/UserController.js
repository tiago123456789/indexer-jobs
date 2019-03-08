import UserBo from "../bo/UserBo";
import MessageException from '../exceptions/MessageException';

export default class UserController {

    constructor(bo) {
        this._bo = bo || new UserBo();
        this.save = this.save.bind(this);
        this.authenticate = this.authenticate.bind(this);
        this.show = this.show.bind(this);
        this._messageException = new MessageException();
    }

    async authenticate(request, response) {
        try {
            const { email, password } = request.body;
            const user = await this._bo.authenticate({ email, password });
            request.session.user = user;
            return response.redirect("/");
        } catch (e) {
            return response.json({ msg: e.message})
        }

    }

    async save(request, response) {
        const newData = request.body;
        await this._bo.save(newData);
        return response.redirect("/user/login");
    }

    async show(request, response) {
        const user = await this._bo.findById(this._getIdUserAuthenticated());
        user.password = "";
        return response.render("user/show", { user });
    }

    async update(request, response) {
        const datasModified = request.body;
        await this._bo.update(this._getIdUserAuthenticated(), datasModified);
        // Redirect to anyone route.
    }

    _getIdUserAuthenticated() {
        const { _id } = request.session.user;
        return _id;
    }
}