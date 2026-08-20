package GOW.IService;

import java.util.List;
import GOW.entidades.Ataque;

public interface AtaqueIService {
    List<Ataque> findAllCharacters();
    Ataque saveCharacter(Ataque ataque);
}