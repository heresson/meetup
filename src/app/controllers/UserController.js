// import * as Yup from 'yup';
class UserController {
  async store(req, res) {
    return res.json({ hello: 'hello world' });
  }
}

export default new UserController();
