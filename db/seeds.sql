INSERT INTO department (name)
VALUES ("Science"),
       ("Ship Crew"),
       ("Engineering"),
       ("Accounting"),
       ("Health and Saftey");

INSERT INTO role (title, salary, department_id)
VALUES ("Head Scientist", 200000, 1),
       ("Engineering Lead", 150000, 3),
       ("Pilot", 100000, 2),
       ("Co-Pilot", 50000, 2),
       ("Staff Doctor", 300000, 5),
       ("Intern", 0, 2),
       ("Senior Accountant", 80000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Hubert", "Farnsworth", 1, NULL),
       ("Phillip", "Fry", 2, 1),
       ("Turana", "Leela", 3, 1),
       ("Bender", "Rodriguez", 4, 1),
       ("Hermes", "Conrad", 7, 1),
       ("John", "Zoidberg", 5, 1),
       ("Amy", "Wong", 6, 1),
       ("Zapp", "Brannigan", 3, NULL),
       ("Kif", "Kroker", 3, 8)
               