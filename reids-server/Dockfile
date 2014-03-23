FROM base

RUN apt-get update
RUN apt-get -y install redis-server

RUN echo "1" >> /proc/sys/vm/overcommit_memory

EXPOSE 6379
CMD ["/usr/bin/redis-server"]

