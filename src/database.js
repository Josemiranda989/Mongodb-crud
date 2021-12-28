import { connect } from "mongoose";
import { MONGODB_URI } from "./config";

// connection to db
(async () => {
  try {
    const db = await connect(MONGODB_URI || "mongodb+srv://josemiranda989:mongodb1234@cluster0.phrow.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");
    console.log("Db connectect to", db.connection.name);
  } catch (error) {
    console.error(error);
  }
})();
