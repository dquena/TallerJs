/**
 * Utilizamos la palabra new para que la funcion constructora automaticamente 
 * realice el  Object.create(creaCliente.prototype)
 * y nos devuelva el objeto creado "this
 */

function Cliente(nombre,apellido,){
    //let cliente = Object.create(creaCliente.prototype)
    this.nombre=nombre;
    this.apellido=apellido;   
    this.longitudNombre=nombre.length;

}

function Nueva(){
    this.farafal="fafafa"
    console.log("Nueva...");
}

let nue = new Cliente("Pablito","pepito",Nueva);
//nue.nueva()
console.log(nue.farafal)

Cliente.prototype.saludar =function saludar(){
    return "Hola soy " + this.nombre+ ", " + this.apellido ;
};
Cliente.prototype.despedir= function despedir(){
    return "Chau " + this.nombre+ ", " + this.apellido
}
 

/*let cliente = new Cliente("maxi", "meza")
console.log(cliente.saludar(), cliente.longitudNombre)
cliente = new Cliente("maxi1", "meza")
console.log(cliente.despedir(), cliente.longitudNombre)

cliente = new Cliente("maxi2", "meza")
console.log(cliente.saludar(), cliente.longitudNombre)
cliente = new Cliente("maxi3", "meza")
console.log(cliente.saludar(), cliente.longitudNombre)
*/
