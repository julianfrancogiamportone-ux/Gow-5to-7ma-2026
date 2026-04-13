package GOW.entidades;
import jakarta.persistence.*;
@Entity
public class Arma{
private int id;
private String nombre;
private int BonificadorDanio;
private float peso;
public Arma() {
}
public Arma(int id, String nombre, int bonificadorDanio, float peso) {
    this.id = id;
    this.nombre = nombre;
    BonificadorDanio = bonificadorDanio;
    this.peso = peso;
}
public int getId() {
    return id;
}
public void setId(int id) {
    this.id = id;
}
public String getNombre() {
    return nombre;
}
public void setNombre(String nombre) {
    this.nombre = nombre;
}
public int getBonificadorDanio() {
    return BonificadorDanio;
}
public void setBonificadorDanio(int bonificadorDanio) {
    BonificadorDanio = bonificadorDanio;
}
public float getPeso() {
    return peso;
}
public void setPeso(float peso) {
    this.peso = peso;
}
}
