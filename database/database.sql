CREATE DATABASE firstapi;

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    name VARCHAR(40),
    email TEXT  

);

INSERT INTO users (name, email) VALUES
    ('axel', 'axel@blazzzor.com'),
    ('pancho', 'pancho@otako.com'),
    ('cris', 'cris@raider.com');