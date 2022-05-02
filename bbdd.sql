
use helpandhelp;

create table usuarios(

    id int not null auto_increment primary key,
    username varchar(255),
    correo varchar(255) not null,
    password varchar(255) not null,
    rol varchar(255) not null


);


create table socios(

    id int not null auto_increment primary key,
    nombre varchar(255),
    apellidos varchar(255),
    correo varchar(255) not null,
    password varchar(255) not null,
    username varchar(255) not null,
    direccion varchar(255),
    mensualidad int

);

create table evento(

    id int not null auto_increment primary key,
    nombre varchar(255),
    descripcion text,
    fecha datetime not null,
    organizador int not null

);

create table ong(

    id int not null auto_increment primary key,
    nombre varchar(255),
    descripcion text,
    sede varchar(255),
    especialidad varchar(255)

);