import { UsuarioService } from "../service/usuarioservice";
import { Cliente } from "../model/Cliente";
import { rl } from "../utils/Readline";
import { Administrador } from "../model/Administrador";

const service = new UsuarioService();

export function menu() {

    console.log("|---------- Sistema Gestión -----------|");
    console.log("1. Agregar Cliente");
    console.log("2. Agregar Administrador");
    console.log("3. Mostrar Usuarios");
    console.log("4. Buscar Usuario");
    console.log("0. Salir");
    console.log("|--------------------------------------|")

    rl.question("Seleccione una opcion: ", (opcion) => {

        switch (opcion) {

            case "1":
                rl.question("ID: ", (id) => {
                    rl.question("Nombre: ", (nombre) => {
                        rl.question("Correo: ", (correo) => {
                            rl.question("Username: ", (username) => {
                                rl.question("Contraseña: ", (contrasena) => {
                                    rl.question("Dirección: ", (direccion) => {
                                        rl.question("Teléfono: ", (telefono) => {

                                            const cliente = new Cliente(
                                                Number(id),
                                                nombre,
                                                correo,
                                                username,
                                                contrasena,
                                                direccion,
                                                Number(telefono),
                                                "Nuevo"
                                            );

                                            service.agregarUsuario(cliente);

                                            console.log("Cliente agregado");

                                            menu();
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
                break;

            case "2":
                rl.question("ID: ", (id) => {
                    rl.question("Nombre: ", (nombre) => {
                        rl.question("Correo: ", (correo) => {
                            rl.question("Username: ", (username) => {
                                rl.question("Contraseña: ", (contrasena) => {
                                    rl.question("Descripcion: ", (descripcion) => {

                                        const admin = new Administrador(
                                            Number(id),
                                            nombre,
                                            correo,
                                            username,
                                            contrasena,
                                            descripcion,
                                            "bajo",
                                            "Activo"       
                                        );

                                        service.agregarUsuario(admin);

                                        console.log("Administrador agregado");

                                         menu();

                                    });
                                });
                            });
                        });
                    });
                });
                break;

            case "3":
                service.mostrarUsuarios();
                menu();
                break;

            case "4":

                rl.question("Ingrese el ID: ", (id) => {
                    const usuario = service.buscarUsuario(Number(id));

                    if (usuario) {
                        usuario.mostrarDatos();
                    } else {
                        console.log("Usuario no encontrado");
                    }

                    menu();

                });
                break;

            case "0":
                console.log("Saliendo...");
                rl.close();
                break;

            default:
                console.log("Opción inválida.");
                menu();

        }

    });

}
