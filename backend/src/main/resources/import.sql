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

INSERT INTO tb_address (street, number, neighborhood, complement, city, state, cep) VALUES ('Rua da Confibra', '541', 'Jardim Campos Verdes', null, 'Hortolândia', 'SP', '13186070');
INSERT INTO tb_address (street, number, neighborhood, complement, city, state, cep) VALUES ('Rua Alessandro Bonci', '520', 'Eldorado', 'Perto do posto Ipiranga', 'São Paulo', 'SP', '04476280');
INSERT INTO tb_address (street, number, neighborhood, complement, city, state, cep) VALUES ('Rua Vinhal', '404', 'Jardim Campos Verdes', null, 'Sumaré', 'SP', '13171490');

INSERT INTO tb_employee (name, cpf, admission_Date, login, password, active, address_id) VALUES ('Marianalva da Melo de Conceição Vieira', '39856854321', '2020-10-21', '39856854321', '$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG', true, 1);	--4
INSERT INTO tb_employee (name, cpf, admission_Date, login, password, active, address_id) VALUES ('Jéssica Florinda Girafales', '39856854322', '2018-10-22', '39856854322', '$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG', true, 2);				--5
INSERT INTO tb_employee (name, cpf, admission_Date, login, password, active, address_id) VALUES ('Ana de Melo Antonio Fagundes', '39856854323', '2020-10-23', '39856854323', '$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG', true, 3);				--6
INSERT INTO tb_employee (name, cpf, admission_Date, login, password, active) VALUES ('Andréia Maria de Conceição', '39856854324', '2019-10-24', '39856854324', '$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG', true);								--7
INSERT INTO tb_employee (name, cpf, admission_Date, login, password, active) VALUES ('José Bezerra Souza e Silva', '39856854325', '2020-10-25', '39856854325', '$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG', true);								--8
INSERT INTO tb_employee (name, cpf, admission_Date, login, password, active, address_id) VALUES ('Maria Madalena de Jesus', '39856854326', '2020-10-26', '39856854326', '$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG', true, 1);					--9
INSERT INTO tb_employee (name, cpf, admission_Date, login, password, active, address_id) VALUES ('Marcos Antonio Junqueira Ramos', '39856854327', '2021-05-27', '39856854327', '$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG', false, 2);			--10

INSERT INTO tb_employee_role (employee_id, role_id) VALUES (4, 1);
INSERT INTO tb_employee_role (employee_id, role_id) VALUES (5, 1);
INSERT INTO tb_employee_role (employee_id, role_id) VALUES (6, 1);
INSERT INTO tb_employee_role (employee_id, role_id) VALUES (7, 1);
INSERT INTO tb_employee_role (employee_id, role_id) VALUES (8, 1);
INSERT INTO tb_employee_role (employee_id, role_id) VALUES (9, 1);
INSERT INTO tb_employee_role (employee_id, role_id) VALUES (10, 1);

INSERT INTO tb_provider (name, cpf, cnpj, active) VALUES ('Antônio de Melo de Conceição Vieira', '20262197021', '37405765000111', true);
INSERT INTO tb_provider (name, cpf, cnpj, active) VALUES ('Jobiscleiton Florinda Girafales', null, '37405765000112', true);
INSERT INTO tb_provider (name, cpf, cnpj, active) VALUES ('Aparecido da Costa Junior', '20262197023', null, true);

INSERT INTO tb_client (contact, corporate_Name, cpf, cnpj, active, address_id) VALUES ('Jonielson Cleibisson Cleber e Kauan da Silva', 'Citrus e Cia', '97717222041', '18107334000121', true, 1);
INSERT INTO tb_client (contact, corporate_Name, cpf, cnpj, active, address_id) VALUES ('Anderson Oliveira de Moraes', 'Fruts & Foods', '97717222042', '18107334000122', true, 2);
INSERT INTO tb_client (contact, corporate_Name, cpf, cnpj, active, address_id) VALUES ('Caio Azeite de Oliva', 'Oliva Embalagens e Cia', null, '18107334000123', true, 3);
INSERT INTO tb_client (contact, corporate_Name, cpf, cnpj, active, address_id) VALUES ('Matias e Mato Grosso de Souza', 'Matias chás e plantas', '97717222044', null, true, null);

INSERT INTO tb_posting (employee_id, provider_id, client_id, date, unit, quantity, price, salary_Advance, resolved, note) VALUES (4, 1, 1, '2021-07-24', 0, 120.52, 0.5, false, false, null);
INSERT INTO tb_posting (employee_id, provider_id, client_id, date, unit, quantity, price, salary_Advance, resolved, note) VALUES (5, 2, 1, '2021-07-24', 0, 146.52, 0.5, false, false, 'O começo do texto é aqui');
INSERT INTO tb_posting (employee_id, provider_id, client_id, date, unit, quantity, price, salary_Advance, resolved, note) VALUES (6, 1, 1, '2021-07-24', 0, 120.52, 0.75, false, false, 'Exemplo de mais um texto grande');
INSERT INTO tb_posting (employee_id, provider_id, client_id, date, unit, quantity, price, salary_Advance, resolved, note) VALUES (7, 2, 1, '2021-07-23', 0, 56.52, 1.0, false, true, 'Acabou a energia');
INSERT INTO tb_posting (employee_id, provider_id, client_id, date, unit, quantity, price, salary_Advance, resolved, note) VALUES (8, 3, 2, '2021-07-22', 0, 240.52, 0.8, false, true, null);
INSERT INTO tb_posting (employee_id, provider_id, client_id, date, unit, quantity, price, salary_Advance, resolved, note) VALUES (9, 2, 2, '2021-07-21', 0, 16.0, 0.9, false, false, 'Dia que choveu muito');
INSERT INTO tb_posting (employee_id, provider_id, client_id, date, unit, quantity, price, salary_Advance, resolved, note) VALUES (4, 1, 1, '2021-07-21', 0, 120.52, 0.5, false, false, null);
INSERT INTO tb_posting (employee_id, provider_id, client_id, date, unit, quantity, price, salary_Advance, resolved, note) VALUES (10, null, null, '2022-10-20', 1, 10.0, 12.5, false, false, null);
INSERT INTO tb_posting (employee_id, provider_id, client_id, date, unit, quantity, price, salary_Advance, resolved, note) VALUES (6, 1, 1, '2021-07-20', 0, 120.52, 0.75, false, false, null);
INSERT INTO tb_posting (employee_id, provider_id, client_id, date, unit, quantity, price, salary_Advance, resolved, note) VALUES (7, 2, 1, '2021-07-20', 0, 56.52, 1.0, false, true, null);
INSERT INTO tb_posting (employee_id, provider_id, client_id, date, unit, quantity, price, salary_Advance, resolved, note) VALUES (8, 3, 2, '2021-07-20', 2, 1.0, 80, false, true, null);
INSERT INTO tb_posting (employee_id, provider_id, client_id, date, unit, quantity, price, salary_Advance, resolved, note) VALUES (9, 2, 2, '2021-07-19', 0, 16.0, 0.9, false, false, 'Dia que choveu muito');
INSERT INTO tb_posting (employee_id, provider_id, client_id, date, unit, quantity, price, salary_Advance, resolved, note) VALUES (4, 1, 1, '2021-07-21', 0, 120.52, 0.5, false, false, null);
INSERT INTO tb_posting (employee_id, provider_id, client_id, date, unit, quantity, price, salary_Advance, resolved, note) VALUES (10, null, null, '2022-10-20', 1, 10.0, 12.5, false, false, null);
INSERT INTO tb_posting (employee_id, provider_id, client_id, date, unit, quantity, price, salary_Advance, resolved, note) VALUES (6, null, null, '2022-10-20', 3, 1.0, -100.0, true, false, null);
INSERT INTO tb_posting (employee_id, provider_id, client_id, date, unit, quantity, price, salary_Advance, resolved, note) VALUES (7, 2, 1, '2021-07-20', 0, 56.52, 1.0, false, true, null);
INSERT INTO tb_posting (employee_id, provider_id, client_id, date, unit, quantity, price, salary_Advance, resolved, note) VALUES (8, 3, 2, '2021-07-20', 2, 1.0, 80.0, false, true, null);
INSERT INTO tb_posting (employee_id, provider_id, client_id, date, unit, quantity, price, salary_Advance, resolved, note) VALUES (9, 2, 2, '2021-07-19', 0, 16.0, 0.9, false, false, 'Dia que choveu muito');
INSERT INTO tb_posting (employee_id, provider_id, client_id, date, unit, quantity, price, salary_Advance, resolved, note) VALUES (4, 1, 1, '2021-07-21', 0, 120.52, 0.5, false, false, null);
INSERT INTO tb_posting (employee_id, provider_id, client_id, date, unit, quantity, price, salary_Advance, resolved, note) VALUES (10, 1, 1, '2021-07-20', 1, 10.0, 12.5, false, false, null);
INSERT INTO tb_posting (employee_id, provider_id, client_id, date, unit, quantity, price, salary_Advance, resolved, note) VALUES (4, 2, 1, '2021-07-21', 0, 120.52, 0.5, false, false, null);
INSERT INTO tb_posting (employee_id, provider_id, client_id, date, unit, quantity, price, salary_Advance, resolved, note) VALUES (4, 2, 3, '2021-07-21', 0, 120.52, 0.5, false, false, null);
INSERT INTO tb_posting (employee_id, provider_id, client_id, date, unit, quantity, price, salary_Advance, resolved, note) VALUES (4, 1, 3, '2021-07-21', 0, 120.52, 0.5, false, false, null);
INSERT INTO tb_posting (employee_id, provider_id, client_id, date, unit, quantity, price, salary_Advance, resolved, note) VALUES (4, 2, 2, '2021-07-21', 0, 120.52, 0.5, false, false, null);
INSERT INTO tb_posting (employee_id, provider_id, client_id, date, unit, quantity, price, salary_Advance, resolved, note) VALUES (4, 3, 3, '2021-07-21', 0, 120.52, 0.5, false, false, null);

INSERT INTO tb_posting (employee_id, provider_id, client_id, date, unit, quantity, price, salary_Advance, resolved, note) VALUES (4,  1, 1, '2021-07-29', 0, 116.74, 0.30, false, false, null);
INSERT INTO tb_posting (employee_id, provider_id, client_id, date, unit, quantity, price, salary_Advance, resolved, note) VALUES (5,  2, 2, '2021-08-05', 0, 127.85, 0.50, false, true,  null);
INSERT INTO tb_posting (employee_id, provider_id, client_id, date, unit, quantity, price, salary_Advance, resolved, note) VALUES (6,  3, 3, '2021-07-29', 0, 138.96, 0.30, false, false, null);
INSERT INTO tb_posting (employee_id, provider_id, client_id, date, unit, quantity, price, salary_Advance, resolved, note) VALUES (7,  1, 4, '2021-08-05', 0, 149.67, 0.50, false, true,  null);
INSERT INTO tb_posting (employee_id, provider_id, client_id, date, unit, quantity, price, salary_Advance, resolved, note) VALUES (8,  2, 1, '2021-08-12', 0, 151.56, 0.75, false, false, null);
INSERT INTO tb_posting (employee_id, provider_id, client_id, date, unit, quantity, price, salary_Advance, resolved, note) VALUES (9,  3, 2, '2021-08-19', 0, 135.47, 1.00, false, true,  null);
INSERT INTO tb_posting (employee_id, provider_id, client_id, date, unit, quantity, price, salary_Advance, resolved, note) VALUES (10, 1, 3, '2021-07-29', 0, 146.38, 0.80, false, false, null);
INSERT INTO tb_posting (employee_id, provider_id, client_id, date, unit, quantity, price, salary_Advance, resolved, note) VALUES (4,  2, 4, '2021-08-05', 0, 157.29, 0.90, false, true,  null);
INSERT INTO tb_posting (employee_id, provider_id, client_id, date, unit, quantity, price, salary_Advance, resolved, note) VALUES (5,  3, 1, '2021-08-12', 0, 168.31, 0.40, false, false, null);
INSERT INTO tb_posting (employee_id, provider_id, client_id, date, unit, quantity, price, salary_Advance, resolved, note) VALUES (6,  1, 2, '2021-08-19', 0, 179.45, 1.50, false, true,  null);
INSERT INTO tb_posting (employee_id, provider_id, client_id, date, unit, quantity, price, salary_Advance, resolved, note) VALUES (7,  2, 3, '2021-07-29', 0, 166.56, 0.30, false, false, null);
INSERT INTO tb_posting (employee_id, provider_id, client_id, date, unit, quantity, price, salary_Advance, resolved, note) VALUES (8,  3, 4, '2021-08-05', 0, 175.67, 0.50, false, true,  null);
INSERT INTO tb_posting (employee_id, provider_id, client_id, date, unit, quantity, price, salary_Advance, resolved, note) VALUES (9,  1, 1, '2021-08-12', 0, 184.78, 0.75, false, false, null);
INSERT INTO tb_posting (employee_id, provider_id, client_id, date, unit, quantity, price, salary_Advance, resolved, note) VALUES (10, 2, 2, '2021-08-19', 0, 193.69, 1.00, false, true,  null);
INSERT INTO tb_posting (employee_id, provider_id, client_id, date, unit, quantity, price, salary_Advance, resolved, note) VALUES (4,  3, 3, '2021-07-29', 0, 112.76, 0.80, false, false, null);
INSERT INTO tb_posting (employee_id, provider_id, client_id, date, unit, quantity, price, salary_Advance, resolved, note) VALUES (5,  1, 4, '2021-08-05', 0, 153.85, 0.90, false, true,  null);
INSERT INTO tb_posting (employee_id, provider_id, client_id, date, unit, quantity, price, salary_Advance, resolved, note) VALUES (6,  2, 1, '2021-08-12', 0, 164.95, 0.40, false, false, null);
INSERT INTO tb_posting (employee_id, provider_id, client_id, date, unit, quantity, price, salary_Advance, resolved, note) VALUES (7,  3, 2, '2021-08-19', 0, 175.16, 1.50, false, true,  null);
INSERT INTO tb_posting (employee_id, provider_id, client_id, date, unit, quantity, price, salary_Advance, resolved, note) VALUES (8,  1, 3, '2021-07-29', 0, 186.57, 0.30, false, false, null);
INSERT INTO tb_posting (employee_id, provider_id, client_id, date, unit, quantity, price, salary_Advance, resolved, note) VALUES (9,  2, 4, '2021-08-05', 0, 197.68, 0.50, false, true,  null);
INSERT INTO tb_posting (employee_id, provider_id, client_id, date, unit, quantity, price, salary_Advance, resolved, note) VALUES (10, 3, 1, '2021-08-12', 0, 166.79, 0.75, false, false, null);
INSERT INTO tb_posting (employee_id, provider_id, client_id, date, unit, quantity, price, salary_Advance, resolved, note) VALUES (4,  1, 2, '2021-08-19', 0, 157.86, 1.00, false, true,  null);
INSERT INTO tb_posting (employee_id, provider_id, client_id, date, unit, quantity, price, salary_Advance, resolved, note) VALUES (5,  2, 3, '2021-07-29', 0, 148.95, 0.80, false, false, null);
INSERT INTO tb_posting (employee_id, provider_id, client_id, date, unit, quantity, price, salary_Advance, resolved, note) VALUES (6,  3, 4, '2021-08-05', 0, 139.64, 0.90, false, true,  null);
INSERT INTO tb_posting (employee_id, provider_id, client_id, date, unit, quantity, price, salary_Advance, resolved, note) VALUES (7,  1, 1, '2021-08-12', 0, 121.43, 0.40, false, false, null);
INSERT INTO tb_posting (employee_id, provider_id, client_id, date, unit, quantity, price, salary_Advance, resolved, note) VALUES (8,  2, 2, '2021-08-19', 0, 138.52, 1.50, false, true,  null);
INSERT INTO tb_posting (employee_id, provider_id, client_id, date, unit, quantity, price, salary_Advance, resolved, note) VALUES (9,  3, 3, '2021-07-29', 0, 149.63, 0.30, false, false, null);
INSERT INTO tb_posting (employee_id, provider_id, client_id, date, unit, quantity, price, salary_Advance, resolved, note) VALUES (10, 1, 4, '2021-08-05', 0, 151.74, 0.50, false, true,  null);
INSERT INTO tb_posting (employee_id, provider_id, client_id, date, unit, quantity, price, salary_Advance, resolved, note) VALUES (4,  2, 1, '2021-08-12', 0, 165.65, 0.75, false, false, null);
INSERT INTO tb_posting (employee_id, provider_id, client_id, date, unit, quantity, price, salary_Advance, resolved, note) VALUES (5,  3, 2, '2021-08-19', 0, 176.76, 1.00, false, true,  null);
INSERT INTO tb_posting (employee_id, provider_id, client_id, date, unit, quantity, price, salary_Advance, resolved, note) VALUES (6,  1, 3, '2021-07-29', 0, 167.87, 0.80, false, false, null);
INSERT INTO tb_posting (employee_id, provider_id, client_id, date, unit, quantity, price, salary_Advance, resolved, note) VALUES (7,  2, 4, '2021-08-05', 0, 178.96, 0.90, false, true,  null);
INSERT INTO tb_posting (employee_id, provider_id, client_id, date, unit, quantity, price, salary_Advance, resolved, note) VALUES (8,  3, 1, '2021-08-12', 0, 189.17, 0.40, false, false, null);
INSERT INTO tb_posting (employee_id, provider_id, client_id, date, unit, quantity, price, salary_Advance, resolved, note) VALUES (9,  1, 2, '2021-08-19', 0, 196.58, 1.50, false, true,  null);
INSERT INTO tb_posting (employee_id, provider_id, client_id, date, unit, quantity, price, salary_Advance, resolved, note) VALUES (10, 2, 3, '2021-07-29', 0, 115.69, 0.30, false, false, null);
INSERT INTO tb_posting (employee_id, provider_id, client_id, date, unit, quantity, price, salary_Advance, resolved, note) VALUES (4,  3, 4, '2021-08-05', 0, 154.71, 0.50, false, true,  null);
INSERT INTO tb_posting (employee_id, provider_id, client_id, date, unit, quantity, price, salary_Advance, resolved, note) VALUES (5,  1, 1, '2021-08-12', 0, 163.85, 0.75, false, false, null);
INSERT INTO tb_posting (employee_id, provider_id, client_id, date, unit, quantity, price, salary_Advance, resolved, note) VALUES (6,  2, 2, '2021-08-19', 0, 172.96, 1.00, false, true,  null);
INSERT INTO tb_posting (employee_id, provider_id, client_id, date, unit, quantity, price, salary_Advance, resolved, note) VALUES (7,  3, 3, '2021-07-29', 0, 183.67, 0.80, false, false, null);
INSERT INTO tb_posting (employee_id, provider_id, client_id, date, unit, quantity, price, salary_Advance, resolved, note) VALUES (8,  1, 4, '2021-08-05', 0, 194.58, 0.90, false, true,  null);
INSERT INTO tb_posting (employee_id, provider_id, client_id, date, unit, quantity, price, salary_Advance, resolved, note) VALUES (9,  2, 1, '2021-08-12', 0, 165.69, 0.40, false, false, null);
INSERT INTO tb_posting (employee_id, provider_id, client_id, date, unit, quantity, price, salary_Advance, resolved, note) VALUES (10, 3, 2, '2021-08-19', 0, 156.76, 1.50, false, true,  null);
INSERT INTO tb_posting (employee_id, provider_id, client_id, date, unit, quantity, price, salary_Advance, resolved, note) VALUES (4,  1, 3, '2021-07-29', 0, 147.85, 0.30, false, false, null);
INSERT INTO tb_posting (employee_id, provider_id, client_id, date, unit, quantity, price, salary_Advance, resolved, note) VALUES (5,  2, 4, '2021-08-05', 0, 136.97, 0.50, false, true,  null);
INSERT INTO tb_posting (employee_id, provider_id, client_id, date, unit, quantity, price, salary_Advance, resolved, note) VALUES (6,  3, 1, '2021-08-12', 0, 127.68, 0.75, false, false, null);
INSERT INTO tb_posting (employee_id, provider_id, client_id, date, unit, quantity, price, salary_Advance, resolved, note) VALUES (7,  1, 2, '2021-08-19', 0, 138.59, 1.00, false, true,  null);
INSERT INTO tb_posting (employee_id, provider_id, client_id, date, unit, quantity, price, salary_Advance, resolved, note) VALUES (8,  2, 3, '2021-07-29', 0, 149.41, 0.80, false, false, null);
INSERT INTO tb_posting (employee_id, provider_id, client_id, date, unit, quantity, price, salary_Advance, resolved, note) VALUES (9,  3, 4, '2021-08-05', 0, 151.35, 0.90, false, true,  null);
INSERT INTO tb_posting (employee_id, provider_id, client_id, date, unit, quantity, price, salary_Advance, resolved, note) VALUES (10, 1, 1, '2021-08-12', 0, 165.26, 0.40, false, false, null);
INSERT INTO tb_posting (employee_id, provider_id, client_id, date, unit, quantity, price, salary_Advance, resolved, note) VALUES (4,  2, 2, '2021-08-19', 0, 176.37, 1.50, false, true,  null);

INSERT INTO tb_posting (employee_id, provider_id, client_id, date, unit, quantity, price, salary_Advance, resolved, note) VALUES (4,  1, 1, '2022-07-29', 0, 116.74, 0.30, false, false, null);
INSERT INTO tb_posting (employee_id, provider_id, client_id, date, unit, quantity, price, salary_Advance, resolved, note) VALUES (5,  2, 2, '2022-08-05', 0, 127.85, 0.50, false, true,  null);
INSERT INTO tb_posting (employee_id, provider_id, client_id, date, unit, quantity, price, salary_Advance, resolved, note) VALUES (6,  3, 3, '2022-07-29', 0, 138.96, 0.30, false, false, null);
INSERT INTO tb_posting (employee_id, provider_id, client_id, date, unit, quantity, price, salary_Advance, resolved, note) VALUES (7,  1, 4, '2022-08-05', 0, 149.67, 0.50, false, true,  null);
INSERT INTO tb_posting (employee_id, provider_id, client_id, date, unit, quantity, price, salary_Advance, resolved, note) VALUES (8,  2, 1, '2022-08-12', 0, 151.56, 0.75, false, false, null);
INSERT INTO tb_posting (employee_id, provider_id, client_id, date, unit, quantity, price, salary_Advance, resolved, note) VALUES (9,  3, 2, '2022-08-19', 0, 135.47, 1.00, false, true,  null);
INSERT INTO tb_posting (employee_id, provider_id, client_id, date, unit, quantity, price, salary_Advance, resolved, note) VALUES (10, 1, 3, '2022-07-29', 0, 146.38, 0.80, false, false, null);
INSERT INTO tb_posting (employee_id, provider_id, client_id, date, unit, quantity, price, salary_Advance, resolved, note) VALUES (4,  2, 4, '2022-08-05', 0, 157.29, 0.90, false, true,  null);
INSERT INTO tb_posting (employee_id, provider_id, client_id, date, unit, quantity, price, salary_Advance, resolved, note) VALUES (5,  3, 1, '2022-08-12', 0, 168.31, 0.40, false, false, null);
INSERT INTO tb_posting (employee_id, provider_id, client_id, date, unit, quantity, price, salary_Advance, resolved, note) VALUES (6,  1, 2, '2022-08-19', 0, 179.45, 1.50, false, true,  null);
INSERT INTO tb_posting (employee_id, provider_id, client_id, date, unit, quantity, price, salary_Advance, resolved, note) VALUES (7,  2, 3, '2022-07-29', 0, 166.56, 0.30, false, false, null);
INSERT INTO tb_posting (employee_id, provider_id, client_id, date, unit, quantity, price, salary_Advance, resolved, note) VALUES (8,  3, 4, '2022-08-05', 0, 175.67, 0.50, false, true,  null);
INSERT INTO tb_posting (employee_id, provider_id, client_id, date, unit, quantity, price, salary_Advance, resolved, note) VALUES (9,  1, 1, '2022-08-12', 0, 184.78, 0.75, false, false, null);
INSERT INTO tb_posting (employee_id, provider_id, client_id, date, unit, quantity, price, salary_Advance, resolved, note) VALUES (10, 2, 2, '2022-08-19', 0, 193.69, 1.00, false, true,  null);
INSERT INTO tb_posting (employee_id, provider_id, client_id, date, unit, quantity, price, salary_Advance, resolved, note) VALUES (4,  3, 3, '2022-07-29', 0, 112.76, 0.80, false, false, null);
INSERT INTO tb_posting (employee_id, provider_id, client_id, date, unit, quantity, price, salary_Advance, resolved, note) VALUES (5,  1, 4, '2022-08-05', 0, 153.85, 0.90, false, true,  null);
INSERT INTO tb_posting (employee_id, provider_id, client_id, date, unit, quantity, price, salary_Advance, resolved, note) VALUES (6,  2, 1, '2022-08-12', 0, 164.95, 0.40, false, false, null);
INSERT INTO tb_posting (employee_id, provider_id, client_id, date, unit, quantity, price, salary_Advance, resolved, note) VALUES (7,  3, 2, '2022-08-19', 0, 175.16, 1.50, false, true,  null);
INSERT INTO tb_posting (employee_id, provider_id, client_id, date, unit, quantity, price, salary_Advance, resolved, note) VALUES (8,  1, 3, '2022-07-29', 0, 186.57, 0.30, false, false, null);
INSERT INTO tb_posting (employee_id, provider_id, client_id, date, unit, quantity, price, salary_Advance, resolved, note) VALUES (9,  2, 4, '2022-08-05', 0, 197.68, 0.50, false, true,  null);
INSERT INTO tb_posting (employee_id, provider_id, client_id, date, unit, quantity, price, salary_Advance, resolved, note) VALUES (10, 3, 1, '2022-08-12', 0, 166.79, 0.75, false, false, null);
INSERT INTO tb_posting (employee_id, provider_id, client_id, date, unit, quantity, price, salary_Advance, resolved, note) VALUES (4,  1, 2, '2022-08-19', 0, 157.86, 1.00, false, true,  null);
INSERT INTO tb_posting (employee_id, provider_id, client_id, date, unit, quantity, price, salary_Advance, resolved, note) VALUES (5,  2, 3, '2022-07-29', 0, 148.95, 0.80, false, false, null);
INSERT INTO tb_posting (employee_id, provider_id, client_id, date, unit, quantity, price, salary_Advance, resolved, note) VALUES (6,  3, 4, '2022-08-05', 0, 139.64, 0.90, false, true,  null);
INSERT INTO tb_posting (employee_id, provider_id, client_id, date, unit, quantity, price, salary_Advance, resolved, note) VALUES (7,  1, 1, '2022-08-12', 0, 121.43, 0.40, false, false, null);
INSERT INTO tb_posting (employee_id, provider_id, client_id, date, unit, quantity, price, salary_Advance, resolved, note) VALUES (8,  2, 2, '2022-08-19', 0, 138.52, 1.50, false, true,  null);
INSERT INTO tb_posting (employee_id, provider_id, client_id, date, unit, quantity, price, salary_Advance, resolved, note) VALUES (9,  3, 3, '2022-07-29', 0, 149.63, 0.30, false, false, null);
INSERT INTO tb_posting (employee_id, provider_id, client_id, date, unit, quantity, price, salary_Advance, resolved, note) VALUES (10, 1, 4, '2022-08-05', 0, 151.74, 0.50, false, true,  null);
INSERT INTO tb_posting (employee_id, provider_id, client_id, date, unit, quantity, price, salary_Advance, resolved, note) VALUES (4,  2, 1, '2022-08-12', 0, 165.65, 0.75, false, false, null);
INSERT INTO tb_posting (employee_id, provider_id, client_id, date, unit, quantity, price, salary_Advance, resolved, note) VALUES (5,  3, 2, '2022-08-19', 0, 176.76, 1.00, false, true,  null);
INSERT INTO tb_posting (employee_id, provider_id, client_id, date, unit, quantity, price, salary_Advance, resolved, note) VALUES (6,  1, 3, '2022-07-29', 0, 167.87, 0.80, false, false, null);
INSERT INTO tb_posting (employee_id, provider_id, client_id, date, unit, quantity, price, salary_Advance, resolved, note) VALUES (7,  2, 4, '2022-08-05', 0, 178.96, 0.90, false, true,  null);
INSERT INTO tb_posting (employee_id, provider_id, client_id, date, unit, quantity, price, salary_Advance, resolved, note) VALUES (8,  3, 1, '2022-08-12', 0, 189.17, 0.40, false, false, null);
INSERT INTO tb_posting (employee_id, provider_id, client_id, date, unit, quantity, price, salary_Advance, resolved, note) VALUES (9,  1, 2, '2022-08-19', 0, 196.58, 1.50, false, true,  null);
INSERT INTO tb_posting (employee_id, provider_id, client_id, date, unit, quantity, price, salary_Advance, resolved, note) VALUES (10, 2, 3, '2022-07-29', 0, 115.69, 0.30, false, false, null);
INSERT INTO tb_posting (employee_id, provider_id, client_id, date, unit, quantity, price, salary_Advance, resolved, note) VALUES (4,  3, 4, '2022-08-05', 0, 154.71, 0.50, false, true,  null);
INSERT INTO tb_posting (employee_id, provider_id, client_id, date, unit, quantity, price, salary_Advance, resolved, note) VALUES (5,  1, 1, '2022-08-12', 0, 163.85, 0.75, false, false, null);
INSERT INTO tb_posting (employee_id, provider_id, client_id, date, unit, quantity, price, salary_Advance, resolved, note) VALUES (6,  2, 2, '2022-08-19', 0, 172.96, 1.00, false, true,  null);
INSERT INTO tb_posting (employee_id, provider_id, client_id, date, unit, quantity, price, salary_Advance, resolved, note) VALUES (7,  3, 3, '2022-07-29', 0, 183.67, 0.80, false, false, null);
INSERT INTO tb_posting (employee_id, provider_id, client_id, date, unit, quantity, price, salary_Advance, resolved, note) VALUES (8,  1, 4, '2022-08-05', 0, 194.58, 0.90, false, true,  null);
INSERT INTO tb_posting (employee_id, provider_id, client_id, date, unit, quantity, price, salary_Advance, resolved, note) VALUES (9,  2, 1, '2022-08-12', 0, 165.69, 0.40, false, false, null);
INSERT INTO tb_posting (employee_id, provider_id, client_id, date, unit, quantity, price, salary_Advance, resolved, note) VALUES (10, 3, 2, '2022-08-19', 0, 156.76, 1.50, false, true,  null);
INSERT INTO tb_posting (employee_id, provider_id, client_id, date, unit, quantity, price, salary_Advance, resolved, note) VALUES (4,  1, 3, '2022-07-29', 0, 147.85, 0.30, false, false, null);
INSERT INTO tb_posting (employee_id, provider_id, client_id, date, unit, quantity, price, salary_Advance, resolved, note) VALUES (5,  2, 4, '2022-08-05', 0, 136.97, 0.50, false, true,  null);
INSERT INTO tb_posting (employee_id, provider_id, client_id, date, unit, quantity, price, salary_Advance, resolved, note) VALUES (6,  3, 1, '2022-08-12', 0, 127.68, 0.75, false, false, null);
INSERT INTO tb_posting (employee_id, provider_id, client_id, date, unit, quantity, price, salary_Advance, resolved, note) VALUES (7,  1, 2, '2022-08-19', 0, 138.59, 1.00, false, true,  null);
INSERT INTO tb_posting (employee_id, provider_id, client_id, date, unit, quantity, price, salary_Advance, resolved, note) VALUES (8,  2, 3, '2022-07-29', 0, 149.41, 0.80, false, false, null);
INSERT INTO tb_posting (employee_id, provider_id, client_id, date, unit, quantity, price, salary_Advance, resolved, note) VALUES (9,  3, 4, '2022-08-05', 0, 151.35, 0.90, false, true,  null);
INSERT INTO tb_posting (employee_id, provider_id, client_id, date, unit, quantity, price, salary_Advance, resolved, note) VALUES (10, 1, 1, '2022-08-12', 0, 165.26, 0.40, false, false, null);
INSERT INTO tb_posting (employee_id, provider_id, client_id, date, unit, quantity, price, salary_Advance, resolved, note) VALUES (4,  2, 2, '2022-08-19', 0, 176.37, 1.50, false, true,  null);



INSERT INTO tb_provider (name, corporate_Name, cpf, cnpj, active) VALUES ('Inativo para massa de dados', 'Frutas e Alegria', '20262197024', '37405765000114', false);
INSERT INTO tb_provider (name, corporate_Name, cpf, cnpj, active) VALUES ('Nome para massa de dados', 'Music & Cia', null, '37405765000115', true);
INSERT INTO tb_provider (name, corporate_Name, cpf, cnpj, active) VALUES ('Ativo para massa de dados', 'Fantasias Mágicas', '20262197026', null, true);
INSERT INTO tb_provider (name, corporate_Name, cpf, cnpj, active) VALUES ('Nome para massa de dados', 'Babys & Jhonson', '20262197027', '37405765000117', true);
INSERT INTO tb_provider (name, corporate_Name, cpf, cnpj, active, address_id) VALUES ('Nome para massa de dados', 'Turma Kids', null, '37405765000118', true, 1);
INSERT INTO tb_provider (name, corporate_Name, cpf, cnpj, active, address_id) VALUES ('Nome para massa de dados', 'Carnes Brasil', '20262197029', null, true, 2);
INSERT INTO tb_provider (name, corporate_Name, cpf, cnpj, active, address_id) VALUES ('Nome para massa de dados', 'Papelaria Milos', '20262197030', '37405765000120', true, 3);
INSERT INTO tb_provider (name, cpf, cnpj, active, address_id) VALUES ('Nome para massa de dados', null, '37405765000121', true, 1);
INSERT INTO tb_provider (name, cpf, cnpj, active, address_id) VALUES ('Nome para massa de dados', '20262197032', null, true, 2);
INSERT INTO tb_provider (name, cpf, cnpj, active, address_id) VALUES ('Nome para massa de dados', '20262197033', '37405765000124', true, null);
INSERT INTO tb_provider (name, cpf, cnpj, active) VALUES ('Nome para massa de dados', null, '37405765000125', true);
INSERT INTO tb_provider (name, cpf, cnpj, active) VALUES ('Atila nome para massa de dados', '20262197036', null, true);
INSERT INTO tb_provider (name, cpf, cnpj, active) VALUES ('Nome para massa de dados', '20262197037', '37405765000127', true);
INSERT INTO tb_provider (name, cpf, cnpj, active) VALUES ('Nome para massa de dados', null, '37405765000128', true);
INSERT INTO tb_provider (name, cpf, cnpj, active) VALUES ('Nome para massa de dados', '20262197039', null, true);
INSERT INTO tb_provider (name, cpf, cnpj, active) VALUES ('Nome para massa de dados', '20262197040', '37405765000130', true);
INSERT INTO tb_provider (name, cpf, cnpj, active) VALUES ('Nome para massa de dados', null, '37405765000501', true);
INSERT INTO tb_provider (name, cpf, cnpj, active) VALUES ('Nome para massa de dados', '20262197502', null, true);
INSERT INTO tb_provider (name, cpf, cnpj, active) VALUES ('Nome para massa de dados', '20262197503', '37405765000503', true);
INSERT INTO tb_provider (name, cpf, cnpj, active) VALUES ('Nome para massa de dados', null, '37405765000504', true);
INSERT INTO tb_provider (name, cpf, cnpj, active) VALUES ('C Nome para massa de dados', '20262197505', null, true);
INSERT INTO tb_provider (name, cpf, cnpj, active) VALUES ('Nome para massa de dados', '20262197506', '37405765000507', true);
INSERT INTO tb_provider (name, cpf, cnpj, active) VALUES ('Nome para massa de dados', null, '37405765000508', true);
INSERT INTO tb_provider (name, cpf, cnpj, active) VALUES ('B Nome para massa de dados', '20262197509', null, false);
INSERT INTO tb_provider (name, cpf, cnpj, active) VALUES ('Nome para massa de dados', '20262197510', '37405765000511', true);
INSERT INTO tb_provider (name, cpf, cnpj, active) VALUES ('Nome para massa de dados', null, '37405765000512', true);
INSERT INTO tb_provider (name, cpf, cnpj, active) VALUES ('A Nome para massa de dados', '20262197513', null, true);
