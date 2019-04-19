import UserBo from "../bo/UserBo";
import MessageException from '../exceptions/MessageException';

export default class UserController {

    constructor(bo) {
        this._bo = bo || new UserBo();
        this._messageException = new MessageException();
        this.save = this.save.bind(this);
        this.authenticate = this.authenticate.bind(this);
        this.show = this.show.bind(this);
        this.update = this.update.bind(this);
        this.loadPageEdit = this.loadPageEdit.bind(this);
        this.logout = this.logout.bind(this);
        this.loadPageLogin = this.loadPageLogin.bind(this);
        this.loadPageEdit = this.loadPageEdit.bind(this);
    }

    loadPageLogin(request, response) {
        return response.render("user/login");
    }

    loadPageRegister(request, response) {
        return response.render("user/register");
    }

    logout(request, response) {
        request.session.destroy(() => response.redirect("/"));
    }

    async authenticate(request, response) {
        try {
            const { email, password } = request.body;
            const user = await this._bo.authenticate({ email, password });
            request.session.user = user;
            return response.redirect("/");
        } catch (e) {
            return response.json({ msg: e.message })
        }

    }

    async save(request, response) {
        const newData = request.body;
        await this._bo.save(newData);
        return response.redirect("/user/login");
    }

    async show(request, response) {
        const user = await this._bo.findById(this._getIdUserAuthenticated(request));
        user.password = "";
        return response.render("user/show", { user });
    }

    async update(request, response) {
        const datasModified = request.body;
        await this._bo.update(this._getIdUserAuthenticated(request), datasModified);
        response.redirect("/");
    }

    async loadPageEdit(request, response) {
        const user = await this._bo.findById(this._getIdUserAuthenticated(request));
        user.password = "";
        return response.render("user/edit", { user: user });
    }

    _getIdUserAuthenticated(request) {
        const { _id } = request.session.user;
        return _id;
    }
}