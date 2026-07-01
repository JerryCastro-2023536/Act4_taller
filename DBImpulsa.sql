drop database if exists DBImpulsa_IN5CM;
create database DBImpulsa_IN5CM;
use DBImpulsa_IN5CM;

create table Usuario(
	id_usuario int primary key not null auto_increment,
    nombre varchar(50),
    apellido varchar(45),
    username varchar(59),
    correo varchar(100),
    password varchar(50),
    telefono int,
    rol varchar(100),
    estado varchar(10),
    fecha_registro date
);

create table Organizacion(
	id_organizacion int primary key auto_increment not null,
    nombre varchar(100),
    foto longblob,
    tipo varchar(20),
    descripcion text,
    correo varchar(100),
    telefono int,
    sitio_web text,
    pais varchar(50),
    estado varchar(10),
    fecha_registro date,
    id_usuario int,
    foreign key (id_usuario) references Usuario (id_usuario)
);

create table Oportunidad(
	id_oportunidad int primary key not null auto_increment,
    titulo varchar(50),
    tipo varchar(20),
    categoria varchar(20),
    descripcion text,
    requisitos text,
    fecha_publicacion date,
    fecha_limite date,
    modalidad varchar(20),
    ubicacion varchar(100),
    foto longblob,
    estado varchar(10),
    id_organizacion int not null,
    foreign key (id_organizacion) references Organizacion(id_organizacion)
);

create table Perfil(
	id_perfil int primary key not null auto_increment,
    foto longblob,
    institucion varchar(100),
    carrera varchar(100),
    biografia text,
    experiencia_anios int,
    links text,
    rol varchar(10),
    id_usuario int,
    foreign key (id_usuario) references Usuario(id_usuario)
);

create table Documento(
	id_documento int primary key not null auto_increment,
    nombre varchar(50),
    tipo_documento varchar(50),
    archivo longblob,
    fecha_registro date,
    id_perfil int, 
    foreign key (id_perfil) references Perfil(id_perfil)
);

