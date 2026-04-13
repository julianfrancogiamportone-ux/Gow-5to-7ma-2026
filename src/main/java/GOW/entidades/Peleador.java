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
public List getInventario() {
    return inventario;
}
public void setInventario(List inventario) {
    this.inventario = inventario;
}
public List getHabilidades() {
    return habilidades;
}
public void setHabilidades(List habilidades) {
    this.habilidades = habilidades;
}
}
