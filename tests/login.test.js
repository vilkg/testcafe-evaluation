import { Selector } from 'testcafe';
import Login from '../actions/login';

const loginPage = new Login();

fixture `Login`
    .page `http://play.dhis2.org/dev`;

test('should work for valid user', async t => {
    await loginPage
        .withCredentials("admin", "district");
    await t
        .expect(Selector(".d2-ui-control-bar").exists).ok();
})

test('should show error when user invalid ', async t => {
    await loginPage
        .withCredentials("false", "password");
    await t
        .expect(Selector("#loginMessage").innerText).contains("Invalid login information");
})