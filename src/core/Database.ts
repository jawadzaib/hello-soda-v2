const mongoose = require('mongoose');

class Database {
    constructor() {
        mongoose.connect('mongodb+srv://root:root@cluster0-6pazf.mongodb.net/hellosoda?retryWrites=true&w=majority')
        const db = mongoose.connection;
        db.on('error', () => {
            console.log("Connection Error")
        })
        db.on('open', () => {
            console.log("Database connected!")
        })
    }
}


export default Database