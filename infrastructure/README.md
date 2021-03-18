# Pandemic game lite infrastructure

## Setup:

You need the `cdk` CLI installed and correctly setup in order to run this project. Instructions can be found [here](https://docs.aws.amazon.com/cdk/latest/guide/getting_started.html).

After setting up `ckd` make sure you have the correct credentials setup on your machine.

## Creating the infrastructure:

Run `cdk deploy --all`.

## Integration with the CI/CD pipeline:

After creating the infrastructure, please ensure that the bucket name and Cloudfront distributions are up-to-date on the github actions.

## Useful commands

 * `npm run build`   compile typescript to js
 * `npm run watch`   watch for changes and compile
 * `npm run test`    perform the jest unit tests
 * `cdk deploy`      deploy this stack to your default AWS account/region
 * `cdk diff`        compare deployed stack with current state
 * `cdk synth`       emits the synthesized CloudFormation template
