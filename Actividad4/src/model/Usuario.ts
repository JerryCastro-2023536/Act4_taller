export class Usuario{
    private id : number;
    private nombre : string;
    private correo : string;
    private username : string;
    private contrasena : string;

    constructor(id : number, 
                nombre : string,
                correo : string,
                username : string,
                contrasena : string)
    {
        this.id = id;
        this.nombre = nombre;
        this.correo = correo;
        this.username = username;
        this.contrasena = contrasena;
    }

    public getId(): number {
        return this.id;
    }

    public getNombre(): string {
        return this.nombre;
    }

    public getCorreo(): string {
        return this.correo;
    }

    public getUsername(): string {
        return this.username;
    }

   mostrarDatos() : void{
        console.log("ID: " + this.getId());
        console.log("Nombre: " + this.getNombre());
        console.log("Correo: " + this.getCorreo());
        console.log("Username: " + this.getUsername());
   }

}