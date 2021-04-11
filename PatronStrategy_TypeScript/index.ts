class Transmutador {

    private strategy: Transmutacion;

    public setStrategy ( strategy: Transmutacion ) : void {

        this.strategy = strategy;
        
    } 

    public transmutar () : void {

        this.strategy.transmutar ();

    }

}

interface Transmutacion {

    transmutar () : void;

}

class TransmutarPlata implements Transmutacion {

    transmutar () : void {

        console.log ( "Transmutando el plomo en plata." );

    }

}
class TransmutarHierro implements Transmutacion {

    transmutar () : void {

        console.log ( "Transmutando el plomo en hierro." );

    }

}

const transmutador = new Transmutador ();
transmutador.setStrategy ( new TransmutarPlata () );
transmutador.transmutar ();