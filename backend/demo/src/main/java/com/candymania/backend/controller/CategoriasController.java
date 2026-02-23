package com.candymania.backend.controller;

import com.candymania.backend.Repository.CategoriasRepository;
import com.candymania.backend.Repository.ProductoRepository;
import com.candymania.backend.model.Categorias;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/categorias")
@CrossOrigin(origins = "http://localhost:5173")
public class CategoriasController {
    @Autowired
    CategoriasRepository categoriasRepository;

    @GetMapping
    public List<Categorias> obtenerTodas() {
        return categoriasRepository.findAll();
    }
    @PostMapping
    public Categorias guardar(@RequestBody Categorias categorias) {
        return categoriasRepository.save(categorias);
    }
    @PutMapping("/{id}")
    public Categorias editar(@PathVariable Long id, @RequestBody Categorias cat) {
        return categoriasRepository.findById(id)
                .map(categorias -> {
                    categorias.setName(cat.getName());
                    return categoriasRepository.save(categorias);
                }).orElseThrow(() -> new RuntimeException("producto no encontrado"));
    }

    @DeleteMapping("/{id}")
    public void eliminar(@PathVariable Long id){
        categoriasRepository.deleteById(id);
    }


}
