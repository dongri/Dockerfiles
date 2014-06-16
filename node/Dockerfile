FROM centos:6.4
MAINTAINER Dongri Jin

RUN yum update -y
RUN rpm -Uvh http://download.fedoraproject.org/pub/epel/6/i386/epel-release-6-8.noarch.rpm
RUN yum install -y npm

ADD nodejs /var/app/nodejs

RUN npm install -g nodemon
RUN cd /var/app/nodejs; npm install

EXPOSE 3000
CMD ["node", "/var/app/nodejs/index.js"]

