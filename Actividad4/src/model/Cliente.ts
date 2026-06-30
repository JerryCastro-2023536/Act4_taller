import { Tipo } from "./Tipo";
import { Usuario } from "./Usuario";

export class Cliente extends Usuario{
    private direccion : string;
    private telefono : number;
    private tipo : Tipo;

    constructor(id : number, 
                nombre : string,
                correo : string,
                username : string,
                contrasena : string,
                direccion : string,
                telefono : number, 
                tipo : Tipo){
        super(id, nombre, correo, username, contrasena);
        this.direccion = direccion;
        this.telefono = telefono;
        this.tipo = tipo;
    }

    override mostrarDatos() : void{
        console.log("|---------Registros-----------|");
        super.mostrarDatos();
        console.log("Direccion: " + this.direccion);
        console.log("Telefono: " + this.telefono);
        console.log("Tipo: " + this.tipo);
        console.log("|------------------------------|")
    }

}