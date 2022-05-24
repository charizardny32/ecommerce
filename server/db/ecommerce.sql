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

CREATE TABLE product(
  "product_id" integer NOT NULL,
  "book_title" varchar NOT NULL,
  "price" bigint NOT NULL,
  "description" varchar,
  CONSTRAINT "product_pk" PRIMARY KEY ("product_id")
)WITH (
  OIDS = FALSE
);

CREATE TABLE customer(
  "customer_id" serial NOT NULL,
  "name" varchar NOT NULL,
  "email" varchar NOT NULL,
  "mailing_address" varchar NOT NULL,
  CONSTRAINT "customer_pk" PRIMARY KEY ("customer_id")
)WITH (
  OIDS = FALSE
);

CREATE TABLE order(
  "order_id" serial NOT NULL,
  -- "product_id" integer NOT NULL,
  -- "customer_id" integer NOT NULL,
  "quantity" integer NOT NULL,
  "total" bigint NOT NULL,
  "date" date
  CONSTRAINT "order_pk" PRIMARY KEY ("order_id")
)WITH (
  OIDS = FALSE
);

-- CREATE TABLE products.orders(

-- )WITH (
--   OIDS = FALSE
-- );


-- ALTER TABLE product ADD CONSTRAINT
-- ALTER TABLE customer ADD CONSTRAINT
ALTER TABLE order ADD CONSTRAINT "order_fk0" FOREIGN KEY ("ordered_by") REFERENCES  customer("customer_id");
ALTER TABLE order ADD CONSTRAINT "order_fk1" FOREIGN KEY ("product") REFERENCES  product("product_id");
