var AWS = require("aws-sdk");
var fs=require("fs");

AWS.config.update({
    region:"us-west-2",
    endpoint:"http://dynamodb.us-west-2.amazonaws.com",
    accessKeyId: "AKIAIMF4ROOBX63PWXSA", 
    secretAccessKey: "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"
});

var docClient=new AWS.DynamoDB.DocumentClient();
console.log("Dang load du lieu... vui long doi trong giay lat");

var dsBook=JSON.parse(fs.readFileSync("b.json","utf8"));
function a(dsBook){
    // console.log(book.BookName);
    // console.log(book.BookYear);
    // gan du lieu thogng 
    var params={
        TableName:"SACHCU.STORE",
        Item:{
            "ID":dsBook.ID,
            "NAME":dsBook.NAME
        }

    };
    // console.log(params.Item.BookName);
    // console.log(params.Item.BookYear);

    // docClient.putItem(params,function(err,data){
    //     if(err)     console.log(err);
    //     //else    console.log(book.BookName);
    // });
    docClient.put(params, function(err, data) {
        if (err) {
            console.error("Unable to add book", dsBook.NAME, ". Error JSON:", JSON.stringify(err, null, 2));
        } else {
            console.log("PutItem succeeded:", dsBook.Book);
        }
     });
    };
a(dsBook);
