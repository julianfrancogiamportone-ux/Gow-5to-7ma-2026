package GOW.entidades;
import java.util.List;

import jakarta.persistence.*;
@Entity
public class Peleador {
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
private long Id;
private String nombre;
private int PuntosVida;
private int energia;
private float defensaBase;
private Arma armaEquipada;
private List inventario;
private List habilidades;
}
