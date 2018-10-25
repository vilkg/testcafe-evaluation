
import { t } from 'testcafe';

export default class Login {
    constructor() {

    }

    async withCredentials(username, password) {
        await t
            .typeText("#j_username", username)
            .typeText("#j_password", password)
            .click("#submit")
    }
}
