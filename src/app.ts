import mongoose from "mongoose";
import client from "./discordapp";

(async () => {
  await client.login(process.env.DISCORD_TOKEN);
  console.log("Discord connected!");

  const URL = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@meet-up.xjlbrss.mongodb.net/${process.env.MONGODB_DBNAME}?retryWrites=true&w=majority`;
  await mongoose.connect(URL);
  console.log("MongoDB connected!");
})();
