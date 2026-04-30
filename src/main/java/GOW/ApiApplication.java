package GOW;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import GOW.entidades.Arma;
import GOW.entidades.Ataque;
import GOW.entidades.Peleador;
@SpringBootApplication
public class ApiApplication {

	public static void main(String[] args) {
		SpringApplication.run(ApiApplication.class, args);

    


		Peleador kratos= new Peleador(1l,"Kratos",1200000,60000,200000.00f);
		Arma espadas= new Arma(1l,"Espadas del Caos", 60000, 15f);
		Peleador thor= new Peleador(2l, "Thor", 1000000, 40000,200000.00f);
		Arma martillo= new Arma(2l, "Mjolnir", 50000, 12f);
		Peleador odin= new Peleador(3l, "Odin", 950000, 80000, 100000.00f);
		Arma lanza= new Arma(3l, "Gungnir", 55000, 1f);
		Ataque iraespartana= new Ataque (1l, "Ira Espartana", 45000, 70000);
		Ataque emailhammer= new Ataque (2l, "Email Hammer", 30000, 67000);
		Ataque leiptra= new Ataque (3l, "Leiptra", 40000, 67000);
		kratos.imprimir();
		thor.imprimir();
		odin.imprimir();

	List <Arma> inventariokratos = null;
	kratos.setInventario(inventariokratos);
	thor.setInventario (List.of(martillo));

	int bonificadorkratos =  kratos.getInventario().get(0).getBonificadorDanio();
    int bonificadorthor= thor.getInventario().get(0).getBonificadorDanio();
	
	if (bonificadorkratos > bonificadorthor){
		System.out.println("el arma mas fuerte la tiene "+ kratos.getNombre());
}else if (bonificadorthor > bonificadorkratos){
	System.out.println("el arma mas fuerte la tiene "+ thor.getNombre());
	}else {
		System.out.println("ambos tienen el mismo bonificador de daño");
}
