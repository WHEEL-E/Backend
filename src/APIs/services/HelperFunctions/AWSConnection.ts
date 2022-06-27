import AWS from 'aws-sdk'
import awsConfig from '../../config/awsConfig'

AWS.config.update({
  accessKeyId: awsConfig.AWSAccessKeyId,
  secretAccessKey: awsConfig.AWSSecretKey,
  region: 'eu-west-1'
})

export default AWS
