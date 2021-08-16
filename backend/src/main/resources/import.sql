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

INSERT INTO tb_employee (name, cpf, admission_Date, login, password, active) VALUES ('Marianalva da Melo de Conceição Vieira', '39856854321', '2020-10-21', '39856854321', '$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG', true);	--4
INSERT INTO tb_employee (name, cpf, admission_Date, login, password, active) VALUES ('Jéssica Florinda Girafales', '39856854322', '2018-10-22', '39856854322', '$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG', true);				--5
INSERT INTO tb_employee (name, cpf, admission_Date, login, password, active) VALUES ('Ana de Melo Antonio Fagundes', '39856854323', '2020-10-23', '39856854323', '$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG', true);				--6
INSERT INTO tb_employee (name, cpf, admission_Date, login, password, active) VALUES ('Andréia Maria de Conceição', '39856854324', '2019-10-24', '39856854324', '$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG', true);				--7
INSERT INTO tb_employee (name, cpf, admission_Date, login, password, active) VALUES ('José Bezerra Souza e Silva', '39856854325', '2020-10-25', '39856854325', '$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG', true);				--8
INSERT INTO tb_employee (name, cpf, admission_Date, login, password, active) VALUES ('Maria Madalena de Jesus', '39856854326', '2020-10-26', '39856854326', '$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG', true);					--9
INSERT INTO tb_employee (name, cpf, admission_Date, login, password, active) VALUES ('Marcos Antonio Junqueira Ramos', '39856854327', '2021-05-27', '39856854327', '$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG', true);			--10

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

INSERT INTO tb_address (street, number, neighborhood, complement, city, state, cep) VALUES ('Rua da Confibra', '541', 'Jardim Campos Verdes', null, 'Hortolândia', 'SP', '13186070');
INSERT INTO tb_address (street, number, neighborhood, complement, city, state, cep) VALUES ('Rua Alessandro Bonci', '520', 'Eldorado', 'Perto do posto Ipiranga', 'São Paulo', 'SP', '04476280');
INSERT INTO tb_address (street, number, neighborhood, complement, city, state, cep) VALUES ('Rua Vinhal', '404', 'Jardim Campos Verdes', null, 'Sumaré', 'SP', '13171490');

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
INSERT INTO tb_posting (employee_id, provider_id, client_id, date, unit, quantity, price, salary_Advance, resolved, note) VALUES (10, null, null, '2021-07-20', 1, 10.0, 12.5, false, false, null);
INSERT INTO tb_posting (employee_id, provider_id, client_id, date, unit, quantity, price, salary_Advance, resolved, note) VALUES (6, 1, 1, '2021-07-20', 0, 120.52, 0.75, false, false, null);
INSERT INTO tb_posting (employee_id, provider_id, client_id, date, unit, quantity, price, salary_Advance, resolved, note) VALUES (7, 2, 1, '2021-07-20', 0, 56.52, 1.0, false, true, null);
INSERT INTO tb_posting (employee_id, provider_id, client_id, date, unit, quantity, price, salary_Advance, resolved, note) VALUES (8, 3, 2, '2021-07-20', 2, 1.0, 80, false, true, null);
INSERT INTO tb_posting (employee_id, provider_id, client_id, date, unit, quantity, price, salary_Advance, resolved, note) VALUES (9, 2, 2, '2021-07-19', 0, 16.0, 0.9, false, false, 'Dia que choveu muito');
INSERT INTO tb_posting (employee_id, provider_id, client_id, date, unit, quantity, price, salary_Advance, resolved, note) VALUES (4, 1, 1, '2021-07-21', 0, 120.52, 0.5, false, false, null);
INSERT INTO tb_posting (employee_id, provider_id, client_id, date, unit, quantity, price, salary_Advance, resolved, note) VALUES (10, null, null, '2021-07-20', 1, 10.0, 12.5, false, false, null);
INSERT INTO tb_posting (employee_id, provider_id, client_id, date, unit, quantity, price, salary_Advance, resolved, note) VALUES (6, null, null, '2021-07-20', 3, 1.0, -100.0, true, false, null);
INSERT INTO tb_posting (employee_id, provider_id, client_id, date, unit, quantity, price, salary_Advance, resolved, note) VALUES (7, 2, 1, '2021-07-20', 0, 56.52, 1.0, false, true, null);
INSERT INTO tb_posting (employee_id, provider_id, client_id, date, unit, quantity, price, salary_Advance, resolved, note) VALUES (8, 3, 2, '2021-07-20', 2, 1.0, 80.0, false, true, null);
INSERT INTO tb_posting (employee_id, provider_id, client_id, date, unit, quantity, price, salary_Advance, resolved, note) VALUES (9, 2, 2, '2021-07-19', 0, 16.0, 0.9, false, false, 'Dia que choveu muito');
INSERT INTO tb_posting (employee_id, provider_id, client_id, date, unit, quantity, price, salary_Advance, resolved, note) VALUES (4, 1, 1, '2021-07-21', 0, 120.52, 0.5, false, false, null);
INSERT INTO tb_posting (employee_id, provider_id, client_id, date, unit, quantity, price, salary_Advance, resolved, note) VALUES (10, 1, 1, '2021-07-20', 1, 10.0, 12.5, false, false, null);


