package com.candymania.backend.model;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "producto")

public class Producto {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Long id;
    private String nombre;
    private String descripcion;
    @Column(name = "imagen_url", nullable = true) // 'true' permite que esté vacío
    private String imagen_url;
    private Double precio;
}
