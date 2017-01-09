Schema

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
fname           | string    | not null, indexed
lname           | string    | not null, indexed
email           | string    | not null, indexed, unique
image_url       | string    | not null, indexed
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## dwellings
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
owner_id    | integer   | not null, foreign key (references users), indexed
location    | string    | not null
lattitude   | float     | not null
longitude   | float     | not null
price       | integer   | not null, indexed
image_url   | string    | not null
description | string    | not null
type        | string    | not null
guest_limit | integer   | not null
bedroooms   | integer   | not null
beds        | integer   | not null

## bookings
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
guest_id    | integer   | not null, foreign key (references users), indexed
dwelling_id | integer   | not null, foreign key (references spot ), indexed
start_date  | date      | not null
end_date    | date      | not null

## reviews
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
guest_id    | integer   | not null, foreign key (references users), indexed
dwelling_id | integer   | not null, foreign key (references spot ), indexed
rating      | integer   | not null,
body        | string    | not null
