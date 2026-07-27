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
    private ArmaRepository ArmaRepository; 
    public List<Arma> findAllCharacters() { 
        return ArmaRepository.findAll(); 
    } 
    public Arma saveCharacter(Arma arma) { 
        return ArmaRepository.save(arma); 
    } 
} 