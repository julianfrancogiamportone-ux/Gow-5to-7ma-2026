package GOW.IService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import GOW.entidades.Ataque;
import GOW.repository.AtaqueRepository;
import java.util.List;


public interface AtaqueIService {

    @Service 
public class AtaqueService implements AtaqueIService { 
 @Autowired 
    private AtaqueRepository AtaqueRepository; 
    public List<Ataque> findAllCharacters() { 
        return AtaqueRepository.findAll(); 
    } 
    public Ataque saveCharacter(Ataque ataque) { 
        return AtaqueRepository.save(ataque); 
    } 
}
}
