import * as cdk from "@aws-cdk/core";
import * as cf from "@aws-cdk/aws-cloudfront";
import * as s3 from "@aws-cdk/aws-s3";
import * as origins from "@aws-cdk/aws-cloudfront-origins";
import { AllowedMethods, ViewerProtocolPolicy } from "@aws-cdk/aws-cloudfront";
import { Tags } from "@aws-cdk/core";
/***
 * Creates the bucket that will hold the web page assets.
 */
export class S3BucketStack extends cdk.Stack {

  public bucket: s3.Bucket;
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    this.bucket = new s3.Bucket(this, "pandemic-lite-prod");
    Tags.of(this.bucket).add("Project", "Pandemic-Game");
  }
}

/**
 * Provisions a CloudFront (CDN) distribution to work with the assets deployed on the bucket.
 */
export class CloudFrontStack extends cdk.Stack {
  public distribution: cf.Distribution;

  constructor(
    bucket: s3.Bucket,
    scope: cdk.Construct,
    id: string,
    props?: cdk.StackProps
  ) {
    super(scope, id, props);

    /*const cert = acm.Certificate.fromCertificateArn(
      this,
      "url-certificate",
      certificateArn
    );*/

    this.distribution = new cf.Distribution(this, "cloudfront-distribution", {
      defaultBehavior: {
        origin: new origins.S3Origin(bucket),
        allowedMethods: AllowedMethods.ALLOW_ALL,
        viewerProtocolPolicy: ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
      },
      // domainNames: [targetUrl],
      defaultRootObject: "index.html",
      errorResponses: [
        {
          httpStatus: 404,
          responseHttpStatus: 200,
          responsePagePath: "/index.html",
        },
      ],
      // certificate: cert,
    });

    Tags.of(this.distribution).add("Project", "Pandemic-Game");
  }
}