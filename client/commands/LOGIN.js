import rl from "../rl.js";

const LOGIN = () => {
  rl.question("username : ", function (username) {
    rl.question("password : ", function (pass) {
      console.log(username, pass);
    });
  });
};

export default LOGIN;
