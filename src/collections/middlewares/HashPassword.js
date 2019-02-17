import bcrypt from "bcrypt";
import CONSTANTES from "../../config/Constantes";

export default function(next) {
    const user = this;
    const hash = bcrypt.hashSync(user.password, CONSTANTES.SALT_ROUND);
    user.password = hash;
    next();
}