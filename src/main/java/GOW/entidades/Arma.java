package GOW.entidades;
import jakarta.persistence.*;
import java.util.List;

@Entity
public class Arma{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
        
private String nombre;
private int BonificadorDanio;
private float peso;
@ManyToMany(mappedBy = "Armaspeleador") 
private List<Peleador> peleadores;

public Arma(){
 
}
public Arma(Long id, String nombre, int bonificadorDanio, float peso) {
    this.id = id;
    this.nombre = nombre;
    BonificadorDanio = bonificadorDanio;
    this.peso = peso;
}
public Long getId() {
    return id;
}
public void setId(Long id) {
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
