const Login = async (req, res) => {
    res.render('login')
  }
  const Register = async (req, res) => {
    res.render('register')
  }
  module.exports = {
    Login,
    Register
  }