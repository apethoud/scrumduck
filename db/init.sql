CREATE TABLE appuser (
    id SERIAL PRIMARY KEY,
    name VARCHAR(30),
    email VARCHAR(50)
);

INSERT INTO appuser (id, name, email) VALUES
(1, 'Vincent',  'vincent@developermail.com'),
(2, 'Victoria', 'victoria@developermail.com');