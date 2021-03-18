#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { CloudFrontStack, S3BucketStack } from '../lib/infrastructure-stack';

const app = new cdk.App();
const s3BucketStack = new S3BucketStack(app, 'S3Bucket');
new CloudFrontStack(s3BucketStack.bucket, app, 'CloudFront')
