import { SQSClient, SendMessageCommand } from '@aws-sdk/client-sqs'
import PQueue from 'p-queue'

const queue = new PQueue({ concurrency: 1 })


const client = new SQSClient({
  region: 'us-east-1',
  credentials: {
    accessKeyId: 'foo',
    secretAccessKey: 'bar',
  },
})

console.log('Up')