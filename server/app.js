import express from "express";
import cors from "cors";
import "dotenv/config";
import userRouter from "./routes/User.route.js";
import adminRouter from "./routes/Admin.route.js";
import reviewRouter from "./routes/Review.route.js";
import chatRouter from "./routes/LiveChat.route.js"

import paymentRouter from "./routes/Payment.route.js";
import paymentRouter from "./routes/Payment.route.js";

import membershipRouter from "./routes/Membership.route.js";

//import productRouter from './routes/Product.route.js'
import productRouter from './routes/Product.route.js'
import productRouter from './routes/Product.route.js'
import sessionRouter from "./routes/Session.route.js";
//import financeRouter from "./routes/Finance.route.js"
import uploadImage from "./uploadImage.js";
import attendanceRouter from "./routes/Attendance.route.js";
import trainerRouter from "./routes/Trainer.route.js";
import trainerAppRouter from "./routes/TrainerApp.route.js";
import productRouter from "./routes/Product.route.js";
import cartRouter from "./routes/Cart.route.js";

const app = express();

app.use(cors());
app.use(express.json({ limit: "20mb" }));

// Add console.log statement here
console.log('Middleware applied');

app.get('/', (req, res) => {
    // Add console.log statement here
    console.log('Request received at root endpoint');
    res.send('Server is Running! 🚀');
})

app.use('/user', userRouter);
app.use('/admin', adminRouter);
// app.use('/membership', membershipRouter);
app.use('/review', reviewRouter);
app.use('/product', productRouter);
app.use('/trainer', trainerRouter);
app.use('/trainer/applicant',trainerAppRouter)
app.use('/session', sessionRouter);

app.use('/cart', cartRouter);


//app.use('/payment', paymentRouter);

//app.use('/finance',financeRouter);
app.use('/attendance', attendanceRouter);


app.post("/uploadImage", (req, res) => {
    uploadImage(req.body.image).then((url) => {
        res.send(url)
    }).catch((err) => {
        res.status(500).send(err)
    })
})



// Add console.log statement here
console.log('Routers assigned');

export default app;