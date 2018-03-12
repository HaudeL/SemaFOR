create table associations
(
    num_RNA varchar(10) not null,
    nom_asso varchar(254) not null,
    adresse varchar(100) not null,
    code_postal integer not null,
    ville varchar(100) not null,
    nom_referent varchar(150) not null,
    prenom_referent varchar(100) not null,
    telephone integer not null,
    email varchar(254) not null,
    etat_valid  bit not null default 0,
    primary key (num_RNA)
)

create table materiel
(
    id_materiel int not null auto_increment,
    categorie varchar(100) not null,
    categorie_sup varchar(100) not null,
    intitule varchar(100) not null,
    descriptif varchar(500) not null,
    prix int not null,
    situation_geo varchar(250) not null,
    num_RNA varchar(10) not null, 
    primary key (id_materiel),
    FOREIGN key (num_RNA) references associations(num_RNA)
)

create table echanges
(
    id_echange int not null auto_increment,
    id_materiel int not null,
    num_RNA_pret varchar(10) not null,
    num_RNA_emprunt varchar(10) not null,
    id_periode_echange int not null,
    primary key (id_echange),
    FOREIGN key (id_materiel) references materiel(id_materiel),
    FOREIGN key (num_RNA_pret)references associations(num_RNA),
    FOREIGN key (num_RNA_emprunt) references associations(num_RNA),
    FOREIGN key (id_periode_echange)references periode_echange(id_periode_echange)
)

create table periode_echange
(
    id_periode_echange int not null auto_increment,
    id_materiel int not null,
    date_debut_ech date, 
    date_fin_ech date,
    primary key (id_periode_echange),
    FOREIGN key (id_materiel) references materiel(id_materiel)
)

create table periode_indispo
(
    id_periode_indispo int not null auto_increment,
    id_materiel int not null,
    date_debut_ind date, 
    date_fin_ind date,
    primary key (id_periode_indispo)
)