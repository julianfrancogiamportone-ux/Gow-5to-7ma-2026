package GOW.IService;

import java.util.List;
import GOW.entidades.Arma;

public interface ArmaIService {
    List<Arma> findAllArmas();
    Arma saveArma(Arma arma);
}