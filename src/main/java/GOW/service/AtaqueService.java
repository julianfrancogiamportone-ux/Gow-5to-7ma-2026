package GOW.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import GOW.IService.AtaqueIService;
import GOW.entidades.Ataque;
import GOW.repository.AtaqueRepository;
import java.util.List;

        @Service 
public class AtaqueService implements AtaqueIService { 
 @Autowired 
    private AtaqueRepository AtaqueRepository; 
    
    public List<Ataque> findAllCharacters() { 
        return AtaqueRepository.findAll(); 
    } 
    public Ataque saveCharacter(Ataque Ataque) { 
        return AtaqueRepository.save(Ataque); 
    } 
}



