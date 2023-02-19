
# Description for full-stack app
Udagram is a full-stack application for Image Filtering application. consist of backend API ( Node.js) and a frontend  app (Angular). all componant are hosted  on Amazon Web Services (AWS) and allow users to login in and register and process our photes .
# AWS
##  main Services 
backend and frontend and also database  are hosted on AWS,using AWS services(Elastic Beanstalk,S3,RDS) .
 ### The  services used by Udagram app:

-  #### Elastic Beanstalk:
Amazon Elastic Beanstalk is used to host the backend API server for Udagram and this service make deployment, operation, and scaling of web applications so simple and easy.
    
-  #### RDS:
 This is a  relational database service that makes it easy create database in the cloud and connect it to our backend app . The Postgres database used by Udagram app  is hosted on  RDS provided by amazon .
    
- #### S3:
To organise, optimise, and set up access to your data, Amazon S3 offers administration options.
  The frontend of Udagram is hosted on an Amazon S3 bucket,
    

The several AWS services combine to provide Udagram with a complete infrastructure. The Postgres database, which is housed on Amazon RDS, connects with the backend API server, which is hosted on AWS Elastic Beanstalk, to store and retrieve data. A backend API server is connected to a frontend web app hosted on Amazon S3 in order to retrieve data and display it to consumers.

##### Frontend  App
Users of the software can access it through the frontend web application, which was developed using Angular. The frontend is hosted on Amazon S3, one of the most trustworthy and scalable object storage services. Users may easily receive a rapid and trustworthy performance from the app because it is sent directly from the S3 bucket.
##### Backend API 

It uses a Postgres database that is kept on an Amazon RDS server and was created with Node.js. The server is hosted by Amazon Elastic Beanstalk, a fully managed platform that makes it simple to develop, deploy, and scale web applications and services.

##### Postgres DB


The relational database management system Postgres stores the data required for the backend API server (RDBMS). The database is housed on Amazon RDS, a fully managed database service that makes it easy to set up, use, and develop relational databases.



### Conclusion

 A full-stack application  (Udagram) offers its users a web-based interface.
  The infrastructure 
 => The backend API server ( hosted on Elastic Beanstalk )
 => Postgres database hosted on AWS RDS. 
 => The frontend web app(Anuglar) is hosted on AWS S3