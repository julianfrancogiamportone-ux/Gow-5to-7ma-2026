package GOW.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import GOW.IService.AtaqueIService;
import GOW.entidades.Ataque;

@RestController
@RequestMapping("/api/ataques")
public class AtaqueController {

    @Autowired
    private AtaqueIService pService;

    @GetMapping
    public List<Ataque> getAllCharacters() {
        return pService.findAllCharacters();
    }

    @PostMapping
    public Ataque createCharacter(@RequestBody Ataque ataque) {
        return pService.saveCharacter(ataque);
    }
}