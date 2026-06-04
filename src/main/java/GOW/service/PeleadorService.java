package GOW.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import GOW.IService.PeleadorIService;
import GOW.entidades.Peleador;
import GOW.repository.PeleadorRepository;

@Service
public class PeleadorService implements PeleadorIService {

    @Autowired
    private PeleadorRepository pRepository;

    @Override
    public List<Peleador> findAllCharacters() {
        return pRepository.findAll();
    }

    @Override
    public Peleador saveCharacter(Peleador personage) {
        return pRepository.save(personage);
    }
}