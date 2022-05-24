-- To run this code, cd to the db directory, and use:
-- psql -d postgres://zvtisarc:KEw1fVg5mh0tzCAFzlOtTugNT5as090_@fanny.db.elephantsql.com/zvtisarc -f ecommerce.sql

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

CREATE TABLE public.product(
  "product_id" bigint NOT NULL,
  "book_title" varchar NOT NULL,
  "author" varchar NOT NULL,
  "year" varchar NOT NULL,
  "price" bigint NOT NULL,
  "description" varchar,
  CONSTRAINT "product_pk" PRIMARY KEY ("product_id")
)WITH (
  OIDS = FALSE
);

CREATE TABLE public.customer(
  "customer_id" serial NOT NULL,
  "name" varchar NOT NULL,
  "email" varchar NOT NULL,
  "mailing_address" varchar NOT NULL,
  CONSTRAINT "customer_pk" PRIMARY KEY ("customer_id")
)WITH (
  OIDS = FALSE
);

CREATE TABLE public.ord(
  "ord_id" serial NOT NULL,
  "quantity" integer NOT NULL,
  "total" bigint NOT NULL,
  "date" date,
  CONSTRAINT "ord_pk" PRIMARY KEY ("ord_id")
)WITH (
  OIDS = FALSE
);

-- CREATE TABLE products.ord(

-- )WITH (
--   OIDS = FALSE
-- );


-- ALTER TABLE product ADD CONSTRAINT
-- ALTER TABLE customer ADD CONSTRAINT
ALTER TABLE public.ord ADD CONSTRAINT "ord_fk0" FOREIGN KEY ("ord_by") REFERENCES  customer("customer_id");
ALTER TABLE public.ord ADD CONSTRAINT "ord_fk1" FOREIGN KEY ("product") REFERENCES  product("product_id");
