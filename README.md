# image-lambda
Utilized AWS lambda and S3 to automate a response when an image is added to an S3 bucket.

## Images.JSON File
https://catimg-bucket-esavage.s3.us-west-2.amazonaws.com/images.JSON

## How To Use
- This lamda function requires no imput from the user as it is triggered by S3 when any file is added into the /images folder on the catimg-bucket-esavage s3 bucket.

## Issues Encountered
1. accessing the event s3 object, accidently used S3 in place of s3
2. needed to research how to provide my lamda function permissions to execute with S3 bucket
3. get object from S3 bucket, AccessDenied error if the file doesn't exist
4. when actually reading a JSON file from the S3 bucket the JSON needs to be parse otherwise it returns a Buffer that isn't human readable.

## Resources
- [Lambda Acess to S3 Bucket](https://aws.amazon.com/premiumsupport/knowledge-center/lambda-execution-role-s3-bucket/)
- [npm aws-sdk](https://www.npmjs.com/package/aws-sdk)
- [Class: AWS S3 Docs](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html#putObject-property)
- [get-object](https://awscli.amazonaws.com/v2/documentation/api/latest/reference/s3api/get-object.html)
- [put-object](https://docs.aws.amazon.com/cli/latest/reference/s3api/put-object.html#examples)
- [saving files to S3](https://www.voidkat.com/aws-lambda-save-s3/)
- [json parse](https://stackoverflow.com/questions/56134303/write-data-to-empty-json-file/56134398)
- Jacob Knnack Code Fellows Instructor