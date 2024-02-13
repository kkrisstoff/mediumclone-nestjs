FROM postgres

ENV POSTGRES_USER postgres
ENV POSTGRES_PASSWORD mypassword
ENV POSTGRES_DB pg-mediunclone

COPY db/init.sql /docker-entrypoint-initdb.d/

EXPOSE 5432