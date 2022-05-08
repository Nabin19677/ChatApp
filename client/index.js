import rl from "./rl.js";

//commands
import LOGIN from "./commands/LOGIN.js";
import SIGNUP from "./commands/SIGNUP.js";

(async function () {
  rl.prompt();
  rl.write("LOGIN");
  rl.on("line", (line) => {
    switch (line.toUpperCase()) {
      case "LOGIN":
        LOGIN();
        break;
      case "SIGNUP":
        SIGNUP();
        break;
      default:
        break;
    }
  });
})();

rl.on("close", () => {
  console.log("CLOSE");
  process.exit(0);
});
