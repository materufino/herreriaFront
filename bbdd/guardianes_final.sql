select * from users

UPDATE users SET surname = 'Erion', username= 'rolanderion' WHERE id = 10;



select * from clients
select * from orders



DELETE FROM users WHERE id=11;

DELETE FROM clients WHERE dni='2';

INSERT INTO orders VALUES (null, 'Reparación', 'Armas', 'Daga', 'En proceso', '03/04/2023 - 19:00hs', '05/04/2023 - 12:00hs', '13', 'Poca cosa para comentar', '1', '1', 'Afiladura de hoja', 'Cambio de empuñadura', 'Engrasado de hoja', 'Finalizado', 'EN proceso', 'En espera', '1');

INSERT INTO products VALUES (null, 'Armas', 'Daga', '13', '65');

INSERT INTO clients VALUES (null, 'Romualdo', 'H', null, '2');
INSERT INTO clients VALUES (null, 'Emilius', 'Herranz', null, '3');

alter table users add category varchar(20)

SELECT * FROM usersend_date

INSERT INTO users VALUES (null, 'Roland', 'Y', 'Oficial', '1234', "rolandy", 'Armas');

alter table orders modify start_date varchar(45)

INSERT INTO users VALUES (null, 'Carls', 'B', 'Aprendiz', '1234', "carlsb", 'Armas');
INSERT INTO users VALUES (null, 'Corint', 'J', 'Oficial', '1234', "corintj", 'Herramientas');