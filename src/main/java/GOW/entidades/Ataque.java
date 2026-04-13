package GOW.entidades;
import jakarta.persistence.*;
@Entity

public class Ataque {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nombre;
    private String email;
    private int costoEnergia;
    private int daniobase;

   
    public Ataque() {
    }

  public Ataque(Long id, String nombre, String email, int costoEnergia, int daniobase) {
        this.id = id;
        this.nombre = nombre;
        this.email = email;
        this.costoEnergia = costoEnergia;
        this.daniobase = daniobase;
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
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public int getCostoEnergia() {
        return costoEnergia;
    }
    public void setCostoEnergia(int costoEnergia) {
        this.costoEnergia = costoEnergia;
    }
    public int getDaniobase() {
        return daniobase;
    }
    public void setDaniobase(int daniobase) {
        this.daniobase = daniobase;
    }

    

  
}