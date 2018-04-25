CREATE USER admin;
CREATE USER app;
ALTER USER app WITH encrypted password 'copito';
CREATE DATABASE db_kicker;
GRANT ALL PRIVILEGES ON DATABASE db_kicker TO admin;
GRANT SELECT, INSERT, UPDATE, DELETE ON ALL TABLES IN SCHEMA public TO app;

CREATE TABLE public.users (
  id            BIGSERIAL PRIMARY KEY,
  email         VARCHAR(320) NOT NULL,
  first_name    VARCHAR(128) NOT NULL,
  last_name     VARCHAR(128) NOT NULL,
  password      VARCHAR(128) NOT NULL,
  date_created  TIMESTAMP DEFAULT current_timestamp NOT NULL,
  date_modified TIMESTAMP NOT NULL
);

CREATE INDEX index_user_first_name ON users (first_name);
CREATE INDEX index_user_last_name ON users (last_name);

CREATE TABLE public.teams (
  id            BIGSERIAL PRIMARY KEY,
  user_1        BIGINT REFERENCES users (id) NOT NULL,
  user_2        BIGINT REFERENCES users (id) NOT NULL,
  date_created  TIMESTAMP DEFAULT current_timestamp NOT NULL,
  date_modified TIMESTAMP NOT NULL
);

CREATE INDEX index_teams_user_1 ON teams (user_1);
CREATE INDEX index_teams_user_2 ON teams (user_2);

CREATE TABLE public.matches (
  id            BIGSERIAL PRIMARY KEY,
  match_owner   BIGINT REFERENCES users (id) NOT NULL,
  team_1        BIGINT REFERENCES teams (id) NOT NULL,
  team_2        BIGINT REFERENCES teams (id) NOT NULL,
  score_1       SMALLINT NOT NULL,
  score_2       SMALLINT NOT NULL,
  date_created  TIMESTAMP DEFAULT current_timestamp NOT NULL,
  date_modified TIMESTAMP NOT NULL
);

CREATE INDEX index_matches_team_1 ON matches (team_1);
CREATE INDEX index_matches_team_2 ON matches (team_2);

# DUMMY DATA

# users
INSERT INTO users (
  email, 
  first_name, 
  last_name,
  password,
  date_created,
  date_modified
)
VALUES (
  'elvizcacho@gmail.com',
  'Juan',
  'Vizcaino',
  '5f4dcc3b5aa765d61d8327deb882cf99',
  now(),
  now()
);

INSERT INTO users (
  email, 
  first_name, 
  last_name,
  password,
  date_created,
  date_modified
)
VALUES (
  'dirk@gmail.com',
  'Dirk',
  'Müller',
  '5f4dcc3b5aa765d61d8327deb882cf99',
  now(),
  now()
);

INSERT INTO users (
  email, 
  first_name, 
  last_name,
  password,
  date_created,
  date_modified
)
VALUES (
  'gena@gmail.com',
  'Gena',
  'Genas',
  '5f4dcc3b5aa765d61d8327deb882cf99',
  now(),
  now()
);

INSERT INTO users (
  email, 
  first_name, 
  last_name,
  password,
  date_created,
  date_modified
)
VALUES (
  'dirk@gmail.com',
  'Mario',
  'Marios',
  '5f4dcc3b5aa765d61d8327deb882cf99',
  now(),
  now()
);

# teams

INSERT INTO teams (
  user_1, 
  user_2, 
  date_created,
  date_modified
)
VALUES (
  1,
  2,
  now(),
  now()
);

INSERT INTO teams (
  user_1, 
  user_2, 
  date_created,
  date_modified
)
VALUES (
  3,
  4,
  now(),
  now()
);

# matches

INSERT INTO matches (
  match_owner, 
  team_1, 
  team_2,
  score_1,
  score_2,
  date_created,
  date_modified
)
VALUES (
  1,
  1,
  3,
  10,
  0,
  now(),
  now()
);
