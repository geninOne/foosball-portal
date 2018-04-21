CREATE USER docker;
CREATE DATABASE docker;
GRANT ALL PRIVILEGES ON DATABASE docker TO docker;

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
