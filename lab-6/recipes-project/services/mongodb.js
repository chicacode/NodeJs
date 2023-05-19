const { MongoClient } = require('mongodb');


const URL = process.env.MONGO_URL, dbName = process.env.MONGO_DB_NAME;

const mongoConnect = async () => {

    try{
        const dbo = await MongoClient.connect(URL);
        console.log(`Connected to ${dbName}`)


        // check if the database exists
        const dbList = await dbo.db().admin().listDatabases();
        console.log(dbList)

        return dbo.db(dbName);

    }catch(err){
        console.log(err.message)
    }
}

module.exports = {
    mongoConnect
}
