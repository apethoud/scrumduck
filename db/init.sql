--
-- Scrumduck
--

-- BEGIN;

-- SET client_encoding = 'LATIN1';

CREATE TABLE appuser (
    id SERIAL PRIMARY KEY,
    name VARCHAR(30),
    email VARCHAR(50)
);

INSERT INTO appuser (id, name, email) VALUES
(1, 'Vincent',  'vincent@developermail.com'),
(2, 'Victoria', 'victoria@developermail.com');

-- ALTER TABLE ONLY user
--     ADD CONSTRAINT user_pkey PRIMARY KEY (id);

-- COMMIT;

-- ANALYZE user;