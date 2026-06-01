package GOW.IService;

import java.util.List; 
import GOW.entidades.Arma;

public interface ArmaIService { 
public List<Arma> findAllCharacters(); 
public Arma saveCharacter(Arma arma); 
} 
