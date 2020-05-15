#CREATING TABLES
CREATE
    database lw10;
USE
    lw10;

CREATE 
    TABLE faculty 
        (
          id INT AUTO_INCREMENT NOT NULL,
          name VARCHAR(255) NOT NULL,
          PRIMARY KEY (id)
        );

CREATE
    TABLE groups
    (
       id INT AUTO_INCREMENT NOT NULL,
       name VARCHAR(255) NOT NULL,
       faculty_id INT NOT NULL,
       PRIMARY KEY (id),
       FOREIGN KEY (faculty_id) REFERENCES faculty(id)
    );

CREATE
   TABLE students
    (
        id            INT AUTO_INCREMENT NOT NULL,
        first_name    VARCHAR(255)       NOT NULL,
        age           INT                NOT NULL,
        last_name     VARCHAR(255)       NOT NULL,
        group_id      INT                NOT NULL,
        PRIMARY KEY (id),
        FOREIGN KEY (group_id) REFERENCES group(id)
    );
  

       

        

#Initialization
INSERT INTO 
    faculty(name)
VALUES
    ('Faculty of Information Technologies and Computer Engineering'),
    ('Faculty of Economics'),
    ('Faculty of Management and Law');
INSERT INTO
    groups(name, faculty_id)
VALUES
    ('PS-11', 1),
    ('PS-12', 1),
    ('PS-13', 1),
    ('EF-11', 2),
    ('EF-12', 2),
    ('EF-13', 2),
    ('FM-11', 3),
    ('FM-12', 3),
    ('FM-13', 3);
INSERT INTO
    students(first_name, last_name, age, group_id)
VALUES
    ('Artem', 'Ivanov', 18, 1),
    ('Ivan', 'Artemov', 19, 1),
    ('Mikhail', 'Senkin', 18, 1),
    ('Andrey', 'Toptygin', 20, 1),
    ('Anton', 'Repkin', 19, 1),
    ('Masha', 'Mikeeva', 18, 2),
    ('Dasha', 'Kiseleva', 18, 2),
    ('Pavel', 'Artemov', 21, 2),
    ('Anton', 'Petrov', 18, 2),
    ('Vasy', 'Repkin', 19, 2),
    ('Misha', 'Bananov', 18, 3),
    ('Anton', 'Yablokov', 18, 3),
    ('Danila', 'Kaktusov', 19, 3),
    ('Nastya', 'Yagodkina', 19, 3),
    ('Anton', 'Antonov', 19, 3),
    ('Anton', 'Pogodin', 19, 4),
    ('Andrey', 'Grechkin', 19, 4),
    ('Kolya', 'Rybkin', 18, 4),
    ('Artem', 'Ivanov', 18, 4),
    ('Andrey', 'Toptygin', 20, 4),
    ('Pavel', 'Kackov', 19, 5),
    ('Dasha', 'Polomkina', 19, 5),
    ('Valer', 'Elkin', 18, 5),
    ('Anton', 'Valerov', 18, 5),
    ('Kirill', 'Gromov', 19, 5),
    ('Tolya', 'Stoykov', 18, 6),
    ('Andrey', 'Gromov', 19, 6),
    ('Misha', 'Laptev', 18, 6),
    ('Anton', 'Tikhomirov', 19, 6),
    ('Nastya', 'Lapteva', 19, 6),
    ('Darya', 'Ptichkina', 21, 7),
    ('Dina', 'Gromova', 19, 7),
    ('Masha', 'Yaskina', 19, 7),
    ('Maria', 'Toptygina', 19, 7),
    ('Igor', 'Neveselov', 18, 7),
    ('Alexey', 'Veselov', 18, 8),
    ('Gleb', 'Imbirev', 19, 8),
    ('Pavel', 'Kaktusov', 18, 8),
    ('Alfir', 'Gimadiev', 19, 8),
    ('German', 'Shmidt', 19, 8),
    ('Gleb', 'Boreyko', 19, 9),
    ('Ivan', 'Voytenko', 18, 9),
    ('Danila', 'Stantsov', 19, 9),
    ('Insaf', 'Halirahamnov', 18, 9),
    ('Alexey', 'Grozny', 19, 9);
#4.1
SELECT 
    *
FROM
    students
WHERE
    age = 19;
#4.2
SELECT 
    groups.name AS 'Группа',
    students.* 
FROM 
    students
JOIN
    groups 
ON
    students.group_id = groups.id
WHERE
    groups.name = 'PS-11';
#4.3
SELECT
    faculty.name AS 'Факультет',
    students.*
FROM
    students
JOIN
    groups
ON
    students.group_id = groups.id
JOIN
    faculty
ON
    groups.faculty_id = faculty.id
WHERE
    faculty.name = 'Faculty of Information Technologies and Computer Engineering';
#4.4
SELECT
    faculty.name,
    groups.name,
    students.first_name,
    students.last_name
FROM
    students
JOIN
    groups
ON
    students.group_id = groups.id
JOIN
    faculty
ON
    groups.faculty_id = faculty.id
WHERE
    students.first_name = 'Alfir' AND students.last_name = 'Gimadiev'; 