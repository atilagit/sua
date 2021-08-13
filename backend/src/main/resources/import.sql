INSERT INTO tb_employee (name, cpf, admission_Date, login, password, active) VALUES ('Leandro Inácio', '39856849978', '2018-10-18', 'leandro@gmail.com', '$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG', true);
INSERT INTO tb_employee (name, cpf, admission_Date, login, password, active) VALUES ('Atila Izac Pereira da Silva', '39856849123', '2020-09-20', 'atila@gmail.com', '$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG', true);
INSERT INTO tb_employee (name, cpf, admission_Date, login, password, active) VALUES ('Mateus Cardoso', '39856846666', '2020-10-21', 'mateus@gmail.com', '$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG', true);

INSERT INTO tb_role (authority) VALUES ('ROLE_BASIC');
INSERT INTO tb_role (authority) VALUES ('ROLE_OPERATOR');
INSERT INTO tb_role (authority) VALUES ('ROLE_ADMIN');

INSERT INTO tb_employee_role (employee_id, role_id) VALUES (1, 1);
INSERT INTO tb_employee_role (employee_id, role_id) VALUES (1, 2);
INSERT INTO tb_employee_role (employee_id, role_id) VALUES (1, 3);

INSERT INTO tb_employee_role (employee_id, role_id) VALUES (2, 1);
INSERT INTO tb_employee_role (employee_id, role_id) VALUES (2, 2);

INSERT INTO tb_employee_role (employee_id, role_id) VALUES (3, 1);
