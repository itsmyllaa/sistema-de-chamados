package com.exemplo.sistemachamados;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/chamados")
@CrossOrigin(origins = "*")
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