import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class CdkDemoStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here
    // We have created the VPC object from the VPC class
    new ec2.Vpc(this, 'mainVPC', {
      // This is where you can define how many AZs you want to use
      maxAzs: 2,
      // This is where you can define the subnet configuration per AZ
      subnetConfiguration: [
         {
           cidrMask: 24,
           name: 'public-subnet',
           subnetType: ec2.SubnetType.PUBLIC,
         }
      ]
   });
  }
}