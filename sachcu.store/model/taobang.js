var AWS=require("aws-sdk");
AWS.config.update({
    region:"us-west-2",
    endpoint:"http://dynamodb.us-west-2.amazonaws.com",
    accessKeyId: "AKIAIMF4ROOBX63PWXSA", 
    secretAccessKey: "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"
});

var dynamodb=new AWS.DynamoDB();
var params = {
    TableName : "SACHCU.STORE",
    KeySchema: [  
        // ?? bookyear--> range, booknamw-->hash??
		{ AttributeName: "ID", KeyType: "HASH"}
    ],
    AttributeDefinitions: [       
        { AttributeName: "ID", AttributeType: "S" }
    ],
    ProvisionedThroughput: {       
        ReadCapacityUnits: 5, 
        WriteCapacityUnits: 5
    }
};

dynamodb.createTable(params,function(err,data){
    if(err)
        console.log(err);
    else{
        console.log("create success table Book");
    }
});