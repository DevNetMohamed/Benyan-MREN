  import mongoose from "mongoose";

  export const connectionDB = async () => {
    return await mongoose
      .connect(process.env.MONGO_URI)
      .then((res) => console.log(`DB is connected on ${process.env.MONGO_URI}`))
      .catch((err) => console.log("DB Not Connected", err));
  };
