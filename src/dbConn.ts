import { connect } from "mongoose";
(async()=>{
    const mongoose = await connect(process.env.DB_CONN!, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    });
    if(!mongoose.connection){
        console.log("DB error")
    }
})()
