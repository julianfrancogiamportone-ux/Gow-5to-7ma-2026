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
@ManyToMany
@JoinTable(
    name = "Peleador_id",
    joinColumns = @JoinColumn(name = "Peleador_id"),
    inverseJoinColumns = @JoinColumn(name = "Arma_id")
)
private List <Arma> Armaspeleador;

private List Arma;
@ManyToMany
@JoinTable(
    name = "Peleador_id",
    joinColumns = @JoinColumn(name = "Peleador_id"),
    inverseJoinColumns = @JoinColumn(name = "Ataque_id")
)
private List <Ataque> Ataquespeleador;



public Peleador() {
}



public Peleador(long id, String nombre, int puntosVida, int energia, float defensaBase, GOW.entidades.Arma armaEquipada,
        List<GOW.entidades.Arma> armaspeleador, List arma, List<Ataque> ataquespeleador) {
    Id = id;
    this.nombre = nombre;
    PuntosVida = puntosVida;
    this.energia = energia;
    this.defensaBase = defensaBase;
    this.armaEquipada = armaEquipada;
    Armaspeleador = armaspeleador;
    Arma = arma;
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
public Arma getArmaEquipada() {
    return armaEquipada;
}
public void setArmaEquipada(Arma armaEquipada) {
    this.armaEquipada = armaEquipada;
}



public List<Arma> getArmaspeleador() {
    return Armaspeleador;
}



public void setArmaspeleador(List<Arma> armaspeleador) {
    Armaspeleador = armaspeleador;
}



public List getArma() {
    return Arma;
}



public void setArma(List arma) {
    Arma = arma;
}



public List<Ataque> getAtaquespeleador() {
    return Ataquespeleador;
}



public void setAtaquespeleador(List<Ataque> ataquespeleador) {
    Ataquespeleador = ataquespeleador;
}

}
