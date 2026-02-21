package com.candymania.backend.controller;


import com.candymania.backend.Repository.ProductoRepository;
import com.candymania.backend.model.Producto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/productos")
@CrossOrigin(origins = "http://localhost:5173") // Solo esta, y asegúrate de que cierre con )
public class ProductoController {

    @Autowired
    private ProductoRepository productoRepository;

    @GetMapping
    public List<Producto> obtenerTodos() {
        return productoRepository.findAll();
    }

    // Asegúrate de tener también el método POST para guardar
    @PostMapping
    public Producto guardar(@RequestBody Producto producto) {
        return productoRepository.save(producto);
    }

    @PutMapping("/{id}")
    public Producto actualizar(@PathVariable Long id, @RequestBody Producto productoDetalles) {
        return productoRepository.findById(id)
                .map(producto -> {
                    producto.setNombre(productoDetalles.getNombre());
                    producto.setPrecio(productoDetalles.getPrecio());
                    producto.setDescripcion(productoDetalles.getDescripcion());
                    producto.setImagen_url(productoDetalles.getImagen_url());
                    return productoRepository.save(producto);
                })
                .orElseThrow(() -> new RuntimeException("Producto no encontrado con id " + id));
    }

    @DeleteMapping("/{id}")
    public void eliminar(@PathVariable Long id) {
        productoRepository.deleteById(id);
    }
}