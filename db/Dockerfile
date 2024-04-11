FROM mysql:8.0.0

COPY init.sql /docker-entrypoint-initdb.d/

ENV MYSQL_ROOT_PASSWORD=root

EXPOSE 3306