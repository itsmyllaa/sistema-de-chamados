package com.exemplo.sistemachamados;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/chamados")
@CrossOrigin(origins = "http://localhost:4200")
public class ChamadoController {

    @Autowired
    private ChamadoRepository repository;

    @GetMapping
    public List<Chamado> listar() {
        return repository.findAll();
    }

    @PostMapping
    public Chamado criar(@RequestBody Chamado chamado) {
        return repository.save(chamado);
    }

    @PutMapping("/{id}")
    public Chamado atualizar(@PathVariable Long id, @RequestBody Chamado chamado) {
        chamado.setId(id);
        return repository.save(chamado);
    }

    @DeleteMapping("/{id}")
    public void deletar(@PathVariable Long id) {
        repository.deleteById(id);
    }

    @GetMapping("/{id}")
    public Optional<Chamado> buscarPorId(@PathVariable Long id) {
        return repository.findById(id);
    }
}