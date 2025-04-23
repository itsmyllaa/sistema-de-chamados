package com.exemplo.sistemachamados;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/tecnicos")
@CrossOrigin(origins = "http://localhost:4200")
@Validated
public class TecnicoController {

    @Autowired
    private TecnicoRepository repository;

    @GetMapping
    public List<Tecnico> listar() {
        return repository.findAll();
    }

    @PostMapping
    public Tecnico criar(@Valid @RequestBody Tecnico tecnico) {
        return repository.save(tecnico);
    }

    @PutMapping("/{id}")
    public Tecnico atualizar(@PathVariable Long id, @RequestBody Tecnico tecnico) {
        tecnico.setId(id);
        return repository.save(tecnico);
    }

    @DeleteMapping("/{id}")
    public void deletar(@PathVariable Long id) {
        repository.deleteById(id);
    }

    @GetMapping("/{id}")
    public Optional<Tecnico> buscarPorId(@PathVariable Long id) {
        return repository.findById(id);
    }
}
