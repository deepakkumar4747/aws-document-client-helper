const AWS = require('aws-sdk')
require('dotenv').config()
console.log(process.env)
AWS.config.update({'region':'ap-southeast-1'})
const Dynamo=new AWS.DynamoDB.DocumentClient({
    accessKeyId: process.env.accessKeyId, 
        secretAccessKey: process.env.secretAccessKey,
        region: 'ap-southeast-1'
});
module.exports=Dynamo