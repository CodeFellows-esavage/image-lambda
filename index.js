'use strict';

//this is my lamda function

let AWS = require('aws-sdk');
let S3 = new AWS.S3();



exports.handler = async (event) => {

  //check if images.JSON file exists in the bucket
  //if file doesn't exist 'AccessDenied' error 
  let request = await S3.getObject({ Bucket: "catimg-bucket-esavage", Key: "images.JSON" }).promise();
  let imageLogArr = JSON.parse(request.Body);

  console.log(imageLogArr);

  if (!imageLogArr) {
    imageLogArr = [];
  }

  let imageLogObj = {
    name: event.Records[0].s3.object.key.split('/')[1],
    size: `${event.Records[0].s3.object.size / 1000}KB`,
    timestamp: new Date(),
  };

  imageLogArr.push(imageLogObj);

  console.log(imageLogArr);

  //update the file with the image information (push into array) from the s3 bucket event trigger
  await S3.putObject({ Bucket: "catimg-bucket-esavage", Key: "images.JSON", Body: JSON.stringify(imageLogArr) }).promise();

};
