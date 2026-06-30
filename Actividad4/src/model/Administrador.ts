import { estado } from "./Estado";
import { privilegio } from "./Privilegio";
import { Usuario } from "./Usuario";

export class Administrador extends Usuario{
    private descripcion : string;
    private privilegio : privilegio;
    private estado : estado;

    constructor(id : number, 
                    nombre : string,
                    correo : string,
                    username : string,
                    contrasena : string,
                    descripcion : string,
                    privilegio : privilegio, 
                    estado : estado){
            super(id, nombre, correo, username, contrasena);
            this.descripcion = descripcion;
            this.privilegio = privilegio;
            this.estado = estado;
        }
    
    override mostrarDatos() : void{
        console.log("|---------Registros-----------|");
        super.mostrarDatos();
        console.log("Descripcion: " + this.descripcion);
        console.log("Privilegios: " + this.privilegio);
        console.log("Estado: " + this.estado);
        console.log("|------------------------------|")
    }

}