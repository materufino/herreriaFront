select * from users
select * from clients
select * from orders


INSERT INTO orders VALUES (null, 'Fabricación', 'Armas', 'Espada corta', 'Finalizado', '03/04/2023 - 19:00hs', '05/04/2023 - 12:00hs', '17', 'Se le agregó mango de cuero de caimán a pedido del cliente', '1', '2', '', '', '', '', '', '');

INSERT INTO products VALUES (null, 'Armas', 'Daga', '13', '65');

INSERT INTO clients VALUES (null, 'Romualdo', 'H', null, '2');
INSERT INTO clients VALUES (null, 'Emilius', 'Herranz', null, '3');

alter table orders drop foreign key fk_orders_products1

alter table orders drop column product_id

SELECT * FROM usersend_date

INSERT INTO users VALUES (null, 'Roland', 'Y', 'Oficial', '1234', "rolandy", 'Armas');

alter table orders modify start_date varchar(45)

INSERT INTO users VALUES (null, 'Carls', 'B', 'Aprendiz', '1234', "carlsb", 'Armas');
INSERT INTO users VALUES (null, 'Corint', 'J', 'Oficial', '1234', "corintj", 'Herramientas');