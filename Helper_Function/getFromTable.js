const Dynamo = require("../Dynamo_files/dynamo");
const dynamoResp = require("./returnDynamoResponse");

async function getFromTable(tableName, {
    primaryKeyExpression,
    primaryKeyVal,
    secondaryKeyExpression,
    secondaryKeyValue
}){
    try {
        const getResp = await Dynamo.get({
            TableName: tableName,
            Key: secondaryKeyExpression != undefined ? {
                [primaryKeyExpression]: primaryKeyVal,
                [secondaryKeyExpression]: secondaryKeyValue
            }:{
                [primaryKeyExpression]: primaryKeyVal,
            }
        }).promise()
        return dynamoResp(false, getResp.Item)
    } catch (error) {
        return dynamoResp(true, error)
    }
}

module.exports = getFromTable