
// 1. Hacer superclase Maestro y subclases Maestro de Física y 
//    Maestro de Música y a cada uno asignarle su materia y 
//    calcular su promedio de grupo a partir de calificaciones 
//    (puedes usar arreglos). El maestro de física tiene un 
//    atributo "antiguedad" que guarda un valor numerico, 
//    mientras que el maestro de música tiene un atributo "edad"
//    también guardando un valor numérico.

class Maestro{
    constructor(materia,calificaciones){
        this.materia = materia
        this.calificaciones = calificaciones
    }

    promGrupo(){
        var acum=0
        for(var i=0;i<this.calificaciones.length;i++){
            acum+=this.calificaciones[i]
        }
        return (acum/this.calificaciones.length).toFixed(2)
    }
}

    class Mfisica extends Maestro{
        constructor(materia,calificaciones,antiguedad){
            super(materia,calificaciones)
            this.antiguedad = antiguedad
        }
    }

    class Mmusica extends Maestro{
        constructor(materia,calificaciones,promGrupo,edad){
            super(materia,calificaciones)
            this.edad = edad
        }
    }

const juan = new Mfisica("Fisica",[9,8,9,7,10,4,5,9,10,6],10)
console.log(`El promedio del Grupo del maestro de ${this.materia} Juan es de ${juan.promGrupo()}`)

const xavier = new Mmusica("Musica",[8,5,3,1,8,9],20)
console.log(`El promedio del Grupo del maestro de ${this.materia} xavier es de ${xavier.promGrupo()}`)

// 2.- Crea una superclase llamada Electrodoméstico con las 
//     siguientes características:
//     a. Sus atributos son precio, color, consumoEnergetico
//        y capacidad (peso máximo)
//     b. El constructor solo debe pedir precio, color 
//        y capacidad. 
//     c. consumoEnergetico debe iniciar con valor de 100

class Electrodomestico{
    constructor(precio,color,capacidad){
        this.precio = precio
        this.color = color
        this.capacidad = capacidad
        this.consumoEnergetico = 100
    }

    setNuevoConsumoEnergetico(nuevoConsumo){
        this.consumoEnergetico = nuevoConsumo
    }
}

// 3.- Crea una subclase de Electrodomestico llamada Lavadora 
//     con las siguientes características:
//     a. Su atributo es carga(kg de ropa), además de los 
//        atributos heredados.
//     b. Crea el método precioFinal(). Este se calcula
//        multiplicando el consumoEnergetico por la carga.

    class Lavadora extends Electrodomestico{
        constructor(precio,color,capacidad,carga){
            super(precio,color,capacidad) //No necesito colocar consumoEnergetico por que ya esta definido, solo se colocan en el super los dinamicos
            this.carga = carga
        }
        precioFinal(){
            return this.consumoEnergetico*this.carga
        }
    }

const maytag = new Lavadora(5000,"Beige","15 kg",7)
console.log(`El precio final de maytag es ${maytag.precioFinal()}`)

maytag.setNuevoConsumoEnergetico(150)
console.log(`El nuevo precio final de maytag es ${maytag.precioFinal()}`)

// 4.- Crear la clase construcción que hereda a otras dos 
//     clases "casa" y "edificio". 
//     a. Sus atributos son: numPuertas, numVentanas, numPisos,
//        direccion, altura, largo y ancho del terreno.
//     b. Cada uno tiene un metodo que regresa los metros 
//        cuadrados
//     c. Un metodo debe regresar la direccion
//     d. Un metodo debe permitir modificar la direccion
//     e. Buscar la mejor manera de aprovechar la herencia

class Construccion{
    constructor(numPuertas, numVentanas, numPisos, altura, largoTerreno, anchoTerreno){
        this.numPuertas = numPuertas
        this.numVentanas = numVentanas
        this.numPisos = numPisos
        this.direccion = ""
        this.altura = altura
        this.largoTerreno = largoTerreno
        this.anchoTerreno = anchoTerreno
    }
    getDireccion(){
        return this.direccion
    }
    setDireccion(direccion){
        this.direccion = direccion
    }
}

class Casa extends Construccion{
    constructor(numPuertas, numVentanas, numPisos, altura, largoTerreno, anchoTerreno){
        super(numPuertas, numVentanas, numPisos, altura, largoTerreno, anchoTerreno)
        this.metrosConstruccion = 0
        this.direccion = ""
    }
    getMetros(){
        this.metrosConstruccion = this.largoTerreno*this.anchoTerreno
        return this.metrosConstruccion
    }
}

class Edificio extends Construccion{
    constructor(numPuertas, numVentanas, numPisos, altura, largoTerreno, anchoTerreno){
        super(numPuertas, numVentanas, numPisos, altura, largoTerreno, anchoTerreno)
        this.metrosConstruccion = 0
        this.direccion = ""
    }
    getMetros(){
        this.metrosConstruccion = this.largoTerreno*this.anchoTerreno*this.numPisos
        return this.metrosConstruccion
    }
}

var casa1 = new Casa(10,5,2,12,30,10)
console.log(casa1)
casa1.setDireccion("Del Real #345")
casa1.getMetros()
console.log(casa1)

var edificio1 = new Edificio(40,80,10,50,25,25)
console.log(edificio1)
edificio1.setDireccion("Colosio # 444")
edificio1.getMetros()
console.log(edificio1)

// 5.- Crear una clase Bebida que herede a dos clases Cerveza 
//     y Refresco. Ambas clases deben tener la propiedad 
//     cantidad (ml). La clase Refresco debe tener el atributo
//     azucar(g) y la clase Cerveza debe el atributo 
//     porcentajeAlcohol. Crear los getters y setters
//     correspondientes.

class Bebida{
    constructor(cantidad){
        this.cantidad = cantidad
    }
}

class Refresco extends Bebida{
    constructor(cantidad){
        super(cantidad)
        this.azucar = 0
    }

    setAzucar(azucar){
        this.azucar = azucar
    }

    getAzucar(){
        return this.azucar
    }

}

class Cerveza extends Bebida{
    constructor(cantidad){
        super(cantidad)
        this.porcentajeAlcohol = 0
    }

    setAlcohol(alcohol){
        this.porcentajeAlcohol = alcohol
    }

    getAlcohol(){
        return this.porcentajeAlcohol
    }

}

const cocaCola = new Refresco(335)
cocaCola.setAzucar(50)
console.log(cocaCola)

const jarritos = new Refresco(2000)
jarritos.setAzucar(200)
console.log(jarritos)

const indio = new Cerveza(1200)
indio.setAlcohol(3.8)
console.log(indio)

const michelob = new Cerveza(600)
michelob.setAlcohol(3.0)
console.log(michelob)

console.log(`La cantidad de alcohol en la cerveza indio es de ${indio.getAlcohol()}`)
