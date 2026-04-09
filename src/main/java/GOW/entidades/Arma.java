package GOW.entidades;
import jakarta.persistence.*;
@Entity
public class Arma{
private int id;
private String nombre;
private int BonificadorDanio;
private float peso;
public Arma(String nombre; int BonificadorDanio){
this.nombre = nombre;
this.BonificadorDanio = BonificadorDanio;
}
