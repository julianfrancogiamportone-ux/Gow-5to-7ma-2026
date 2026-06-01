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
    private ArmaRepository pRepository; 
    public List<Arma> findAllCharacters() { 
        return pRepository.findAll(); 
    } 
    public Arma saveCharacter(Arma arma) { 
        return pRepository.save(arma); 
    } 
} 