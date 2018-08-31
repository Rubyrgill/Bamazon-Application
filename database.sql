CREATE DATABASE bamazon;
USE bamazon;

drop table products;

create table products (
itemid integer(10) not null auto_increment,
productname varchar(100),
departmentname varchar(50),
price decimal(20,2),
stockquantity integer(20),
primary key(itemid)
);

insert into products (itemid,productname,departmentname,price,stockquantity)
values (1, "LED Starry Lights", "Decor",35.67, 5),
(2,"Play-Doh", Toys, 10.99, 120),
(3,"Instax film", "Camera", 25.69, 240),
(4,"Ballet Slippers", "Shoes", 49.99, 25),
(5, "Uno Deck", "Games", 9.55, 2),
(6, "Beach Ball", "Games", 12.44, 1000),
(7, "Glow Sticks", "Games", 25.98, 167),
(8, "Funky Socks", "Games", 55.87, 7),
(9, "Blue Notebook", "Paper", 8.55, 154),
(10, "Balloons", "Games", 9.55, 2),

Select*from products;