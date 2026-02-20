package com.candymania.backend.controller;

import com.candymania.backend.Repository.ProductoRepository;
import com.candymania.backend.model.Producto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/productos")
@CrossOrigin(origins = "*")
public class ProductoController {
@Autowired
private ProductoRepository productoRepository;
@GetMapping
public List<Producto> obtenerTodos(){
    return productoRepository.findAll();
}
}
