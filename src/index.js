import "./config.js";
import ExpressApp from "./App/index.js";

ExpressApp.listen(ExpressApp.get("port"), () => {
  console.log(`Express App Listening ${ExpressApp.get("port")}`);
});
