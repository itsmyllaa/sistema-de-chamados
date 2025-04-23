package com.exemplo.sistemachamados;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HealthCheckController {
    @GetMapping("/")
    public String home() {
        return "Backend do Sistema de Chamados está rodando!";
    }
}
