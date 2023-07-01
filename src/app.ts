import * as dotenv from "dotenv";
dotenv.config();

import mongoose from "mongoose";
import client from "./app/app.discord";
import app from "./app/app.web";

(async () => {
  await client.login(process.env.DISCORD_TOKEN);
  console.log("Discord connected!");

  const URL = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@meet-up.xjlbrss.mongodb.net/${process.env.MONGODB_DBNAME}?retryWrites=true&w=majority`;
  await mongoose.connect(URL);
  console.log("MongoDB connected!");

  const port = process.env.PORT || 3000;
  app.listen(port);
  console.log("Express connected!");
})();
