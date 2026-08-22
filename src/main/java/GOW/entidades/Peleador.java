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
    private String UrlImagen;

    @ManyToMany
    @JoinTable(
        name = "Armaspeleador",
        joinColumns = @JoinColumn(name = "Peleador_id"),
        inverseJoinColumns = @JoinColumn(name = "Arma_id")
    )
    private List<Arma> Armaspeleador;

    @ManyToMany
    @JoinTable(
        name = "Ataquespeleador",
        joinColumns = @JoinColumn(name = "Peleador_id"),
        inverseJoinColumns = @JoinColumn(name = "Ataque_id")
    )
    private List<Ataque> Ataquespeleador;

    public Peleador() {
    }

    public Peleador(long id, String nombre, int puntosVida, int energia, float defensaBase) {
        Id = id;
        this.nombre = nombre;
        this.PuntosVida = puntosVida;
        this.energia = energia;
        this.defensaBase = defensaBase;
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

    public String getUrlImagen() {
        return UrlImagen;
    }

    public void setUrlImagen(String urlImagen) {
        UrlImagen = urlImagen;
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

    public void imprimir() {
        System.out.println("El nombre del peleador es " + nombre);
        System.out.println("Los puntos de vida son " + PuntosVida);
    }
}