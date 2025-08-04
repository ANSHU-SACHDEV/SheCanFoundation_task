const express=require("express");
const cors=require("cors");
const dotenv=require('dotenv');
const connectDB=require('./config/db');
const leaderboardRoutes = require("./routes/leaderBoardRoutes");


dotenv.config();

const app=express();
connectDB();

app.use(cors());
app.use(express.json());

app.use('/api/interns', require('./routes/internRoutes'));
app.use("/api/leaderboard", leaderboardRoutes);


const port=process.env.PORT || 5000;

app.listen(port,()=>{
  console.log(`app is listening to port ${port}`);
})