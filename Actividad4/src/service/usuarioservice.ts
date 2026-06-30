import { usuarios } from "../data/usuarios";
import { Usuario } from "../model/Usuario";

export class UsuarioService{

     agregarUsuario(usuario: Usuario): void{
        usuarios.push(usuario);
    }

    mostrarUsuarios(): void{

        if(usuarios.length == 0){
            console.log("No existen usuarios");
            return;
        }

        usuarios.forEach(usuario=>{

            usuario.mostrarDatos();

        });

    }


    buscarUsuario(id : number) : Usuario | undefined{
        return usuarios.find(u => u.getId() === id);
    }
}