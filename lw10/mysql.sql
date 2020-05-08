CREATE
    database lw10;
USE
    lw10;

CREATE
   TABLE student
    (
        id      INT AUTO_INCREMENT NOT NULL,
        name    VARCHAR(255)       NOT NULL,
        age     INT                NOT NULL,
        last_name VARCHAR(255)     NOT NULL,
        group   INT                NOT NULL,
        faculty VARCHAR(255)       NOT NULL,
        PRIMARY KEY (id)
    )  DEFAULT CHARACTER SET utf8mb4
       COLLATE `utf8mb4_unicode_ci`
       ENGINE = InnoDB;
CREATE
    TABLE group
    (
        id  INT AUTO_INCREMENT NOT NULL,
        student INT            NOT NULL,
        faculty INT            NOT NULL,
        PRIMARY KEY (id)
    )   DEFAULT CHARACTER utf8mb4
        COLLATE `utf8mb4_unicode_ci`
        ENGINE = InnoDB;
CREATE
    TABLE faculty
    (
        id  INT AUTO_INCREMENT NOT NULL,
        name    VARCHAR(255)   NOT NULL,
        group   INT            NOT NULL,
        PRIMARY KEY (id)
    )   DEFAULT CREATE utf8mb4
        COLLATE `utf8mb4_unicode_ci`
        ENGINE = InnoDB;

SELECT
  age 
FROM
  student
WHERE
  age = 19;

SELECT
  name
FROM
  student
WHERE
  group = 1;

SELECT
  name
FROM
  student
WHERE
  faculty = 'FIVT';

SELECT
  faculty, group
FROM
  student
WHERE
  name = '';
