const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const app = express();

const PORT = process.env.PORT || 5000;
const config = require("./config/dev");
const { User } = require("./models/user");

mongoose
    .connect(config.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
    })
    .then(() => {
        console.log("DB Connected");
    })
    .catch((err) => {
        console.log(err);
    });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// app.use(cookieParser());

app.post("/api/users/register", (req, res, next) => {
    const user = new User(req.body); //saving data into the model and

    user.save((err, userData) => {
        if (err) return res.json({ success: false, err });
        return res.status(200).json({
            success: true,
        });
    });
});

app.listen(PORT, () => {
    console.log(`Server UP on PORT ${PORT}`);
});
