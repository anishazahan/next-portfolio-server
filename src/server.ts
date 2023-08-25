import mongoose from "mongoose";
import app from "./app";

const port: Number = 5000;

async function main() {
  try {
    await mongoose.connect(
      "mongodb+srv://portfolio-next:f9J1odnqkUAkbjAF@cluster0.509wz.mongodb.net/portfolio-next?retryWrites=true&w=majority"
    );
    console.log("database connected successful");
  } catch (error) {
    console.log(`falied to connect data, ${error}`);
  }
}

main();

app.listen(port, () => {
  console.log(`server is listening ons port ${port}`);
});
