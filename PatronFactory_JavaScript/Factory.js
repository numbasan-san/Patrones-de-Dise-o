class Comida {

    $Orden = document.getElementById ( "Orden" );
	$Aviso = document.getElementById ( "Aviso" );

	preparar () {

		this.$Aviso.innerHTML = "Orden lista!";

	}	

}

class Espagueti extends Comida {

	constructor () {

		super ();
		this.preparar ();
		this.$Orden.innerHTML = ">> Orden de espaguetis lista.";

	}

}

class Asado extends Comida {

	constructor () {

		super ();
		this.preparar ();
		this.$Orden.innerHTML = ">> Orden de asado lista.";

	}

}

class Cocina {

	constructor ( type ) {

		switch ( type ) {

			case "Espagueti":

				return new Espagueti ();
				break;

			case "Asado":

				return new Asado ();
				break;

			default:
				
				return null;
				break;

		}

	}

}

function Pedido ( orden ) {

    const Orden = new Cocina ( orden );
    
}