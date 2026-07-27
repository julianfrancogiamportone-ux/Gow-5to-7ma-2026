package GOW.IService;

import java.util.List;
import GOW.entidades.Peleador;

public interface PeleadorIService {

public List<Peleador> findAllCharacters();
public GOW.entidades.Peleador saveCharacter(Peleador Peleador);
}
