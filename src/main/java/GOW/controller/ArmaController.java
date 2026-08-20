package GOW.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import GOW.IService.ArmaIService;
import GOW.entidades.Arma;

@RestController
@RequestMapping("/api/armas")
public class ArmaController {

    @Autowired
    private ArmaIService ArmaService;

    @GetMapping
    public List<Arma> getAllArmas() {
        return ArmaService.findAllArmas();
    }

    @PostMapping
    public Arma createArma(@RequestBody Arma arma) {
        return ArmaService.saveArma(arma);
    }
}