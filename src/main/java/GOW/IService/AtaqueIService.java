package GOW.IService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

public interface AtaqueIService {

    @Service 
public class AtaqueService implements AtaqueIService { 
 @Autowired 
    private AtaqueRepository pRepository; 
    public List<Personage> findAllCharacters() { 
        return pRepository.findAll(); 
    } 
    public Personage saveCharacter(Personage personage) { 
        return pRepository.save(personage); 
    } 
}
}
