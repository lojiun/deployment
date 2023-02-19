# Description of (CI/CD) using circleci
The continuous integration and continuous deployment (CI/CD) platform CircleCI is well-known. It enables software development teams to automate the writing, testing, and deploying of code.
Continuous deployment provides a number of benefits. Deployment processes for applications may be made more uniform to help prevent unauthorised changes.


# Description of  Orbs

Orbs are collections of tasks, instructions, and executors in CircleCI that may be shared between other CircleCI projects. Orbs offer pre-packaged, reusable configuration that makes setup easier and increases uniformity between projects.

In this pipeline description file, the following orbs are used:

-  in installation using `node` (Node.js)
-   in deployment `eb`:  help with Elastic Beanstalk .
-  in AWS CLI setupusing  `aws-cli`: help with AWS CLI setup.


orbs used in project :
  node: circleci/node@5.0.2
  eb: circleci/aws-elastic-beanstalk@2.0.1
  aws-cli: circleci/aws-cli@1.3.1


#  Description of Jobs

Jobs in CircleCI are predetermined workflows that do predetermined tasks. Depending on the pipeline definition, jobs may execute one after the other or in a predefined order.
Workflows are used to orchestrate jobs

The `build` job is responsible for building our app by set of steps 
==>>
jobs used in project :
    steps:
      # install node and checkout code
      - node/install:
          node-version: '16.13'
      - aws-cli/setup
      - checkout
      # Use root level package.json to install dependencies in the frontend app
      - run:
          name: Install Front-End Dependencies
          command: |
            echo "NODE --version" 
            echo $(node --version)
            echo "NPM --version" 
            echo $(npm --version)
            npm run frontend:install
      # TODO: Install dependencies in the the backend API
      - run:
          name: Install API Dependencies
          command: |
            echo "TODO: Install dependencies in the the backend API  "
            npm run api:install
          # TODO: Lint the frontend
      - run:
          name: Front-End Lint
          command: |
            echo "TODO: Lint the frontend"
            npm run frontend:lint
      # TODO: Build the frontend app
      - run:
          name: Front-End Build
          command: |
            echo "TODO: Build the frontend app"
            npm run frontend:build
      # TODO: Build the backend API
      - run:
          name: API Build
          command: |
            echo "TODO: Build the backend API"
            npm run api:build


## Deploy Job

The frontend and backend of the application are both deployed to Amazon Elastic Beanstalk by the 'deploy' task following manual approval. 
The `deploy` job is responsible for deploying our app by set of steps 
 steps:
      - node/install: used to install  node-version: '16.13'
      - eb/setup:set up Elastic Beanstalk.
      - aws-cli/setup:sets up the AWS CLI
      - checkout: checks out the code from the repository
      - Deployment: `npm run frontend:deploy` , `npm run api:deploy` to deploy our app.

        

# Workflow

A workflow is a set of guidelines that establishes the sequence in which a number of activities should be executed. 
Workflows allow for the orchestration of complicated jobs with the use of a minimal amount of setup parameters.


 the `workflow` named `udagram` defines the order of jobs to run: 
 1 - build
 2 - hold
 3 - deploy
 4 - hold 


 udagram workflow in config.yml file :
 workflows:
  udagram:
    jobs:
      - build
      - hold:
          filters:
            branches:
              only:
                - main
          type: approval
          requires:
            - build
      - deploy:
          requires:
            - hold