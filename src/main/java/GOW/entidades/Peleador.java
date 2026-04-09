package GOW.entidades;
import jakarta.persistence.*;
@Entity
public class Peleador {
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
private long Id;
private String nombre;
private int PuntosVida;
private int energia;
}
