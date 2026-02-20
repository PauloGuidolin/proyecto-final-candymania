package com.candymania.backend.Repository;

import com.candymania.backend.model.Producto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository // Le dice a Spring: "Este componente se encarga de hablar con MySQL"
public interface ProductoRepository extends JpaRepository<Producto, Long> {

/* No necesitas escribir código aquí dentro por ahora.
       Al extender de JpaRepository, Spring ya te regala estos métodos:
       - save(producto): Para guardar o actualizar.
       - findAll(): Para traer todos los dulces al frontend.
       - findById(id): Para buscar un dulce específico.
       - deleteById(id): Para borrar un producto.
    */
}
