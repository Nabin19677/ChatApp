import rl from "../rl.js";

const SIGNUP = () => {
  rl.question("name : ", function (username) {
    rl.question("username : ", function (pass) {
      rl.question("password : ", function (pass) {
        console.log(username, pass);
      });
    });
  });
};

export default SIGNUP;
