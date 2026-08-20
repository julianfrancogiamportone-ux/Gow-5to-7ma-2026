package GOW.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import GOW.IService.ArmaIService;
import GOW.entidades.Arma;
import GOW.repository.ArmaRepository;

@Service
public class ArmaService implements ArmaIService {

    @Autowired
    private ArmaRepository armaRepository;

    @Override
    public List<Arma> findAllArmas() {
        return armaRepository.findAll();
    }

    @Override
    public Arma saveArma(Arma arma) {
        return armaRepository.save(arma);
    }
}