const AWS = require('aws-sdk');
const fs = require('fs');
const path = require('path');

//configuring the AWS environment
AWS.config.update({
    accessKeyId: "AKIAIMF4ROOBX63PWXSA", 
    secretAccessKey: "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"
});

var s3 = new AWS.S3();
var filePath = "../public/images/hinh.jpg";

//configuring parameters
var params = {
  Bucket: 'sachcu.store',
  Body : fs.createReadStream(filePath),
  Key : "sachcu/"+Date.now()+"_"+path.basename(filePath),
  ACL: 'public-read-write'
};

// https://docs.aws.amazon.com/AmazonS3/latest/dev/acl-overview.html#CannedACL

s3.upload(params, function (err, data) {
  //handle error
  if (err) {
    console.log("Error", err);
  }

  //success
  if (data) {
    console.log("Uploaded in:", data.Location);
  }
});
