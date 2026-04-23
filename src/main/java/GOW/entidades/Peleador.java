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
@ManyToMany
@JoinTable(
    name = "Armaspeleador",
    joinColumns = @JoinColumn(name = "Peleador_id"),
    inverseJoinColumns = @JoinColumn(name = "Arma_id")
)
private List <Arma> Armaspeleador;

@ManyToMany
@JoinTable(
    name = "Ataquespeleados",
    joinColumns = @JoinColumn(name = "Peleador_id"),
    inverseJoinColumns = @JoinColumn(name = "Ataque_id")
)
private List <Ataque> Ataquespeleador;



public Peleador() {
}



public Peleador(long id, String nombre, int puntosVida, int energia, float defensaBase, GOW.entidades.Arma armaEquipada,
        List<GOW.entidades.Arma> armaspeleador, List <Arma> armas, List<Ataque> ataquespeleador) {
    Id = id;
    this.nombre = nombre;
    PuntosVida = puntosVida;
    this.energia = energia;
    this.defensaBase = defensaBase;
    Armaspeleador = armaspeleador;
    Ataquespeleador = ataquespeleador;
}



public long getId() {
    return Id;
}
public void setId(long id) {
    Id = id;
}
public String getNombre() {
    return nombre;
}
public void setNombre(String nombre) {
    this.nombre = nombre;
}
public int getPuntosVida() {
    return PuntosVida;
}
public void setPuntosVida(int puntosVida) {
    PuntosVida = puntosVida;
}
public int getEnergia() {
    return energia;
}
public void setEnergia(int energia) {
    this.energia = energia;
}
public float getDefensaBase() {
    return defensaBase;
}
public void setDefensaBase(float defensaBase) {
    this.defensaBase = defensaBase;
}


public List<Arma> getArmaspeleador() {
    return Armaspeleador;
}



public void setArmaspeleador(List<Arma> armaspeleador) {
    Armaspeleador = armaspeleador;
}



public List<Ataque> getAtaquespeleador() {
    return Ataquespeleador;
}



public void setAtaquespeleador(List<Ataque> ataquespeleador) {
    Ataquespeleador = ataquespeleador;
}

}
