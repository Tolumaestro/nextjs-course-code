import { MongoClient } from "mongodb";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const data = req.body;

    try {
      const client = await MongoClient.connect(
        "mongodb+srv://admin-tolu:Test123@cluster0.1noibfp.mongodb.net/meetups?retryWrites=true&w=majority"
      );

      const db = client.db();

      const meetupsCollection = db.collection("meetups");
      const result = await meetupsCollection.insertOne(data);

      console.log(result);

      client.close();

      res.status(201).json({
        message: "Meetup Inserted",
      });
    } catch (err) {
      console.log(err);
    }
  }
};

export default handler;
