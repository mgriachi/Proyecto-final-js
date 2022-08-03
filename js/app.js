
let carrito = []


class Calzado {
    constructor(id, marca, modelo, talles, colores, precio) {
        this.id = id
        this.marca = marca
        this.modelo = modelo
        this.talles = talles
        this.colores = colores
        this.precio = precio
    }
}

const calzado1 = new Calzado(50, 'Adidas', 'Airadida', [39, 40, 42, 44], ['blanco', 'negro', 'amarillo'], 20000)
const calzado2 = new Calzado(55, 'Adidas', 'Airjordan', [35, 36, 38, 39], ['blanco', 'rojo'], 22000)
const calzado3 = new Calzado(60, 'Nike', 'Air1', [38, 39, 40, 41, 43], ['negro', 'rojo'], 27000)


const editarProductoSeleccionado = (calzadoSeleccionado) => {
    const productoElegido = {
        id: calzadoSeleccionado.id,
        marca: calzadoSeleccionado.marca,
        modelo: calzadoSeleccionado.modelo,
        talle: 0,
        color: '',
        cantidad: 1,
        precio: calzadoSeleccionado.precio,
    }

    productoElegido.talle = Number(prompt('Elija Talle, tenemos los siguientes en stock: ' + calzadoSeleccionado.talles.join('-')))
    productoElegido.color = prompt('Elija Color, tenemos los siguientes en stock: ' + calzadoSeleccionado.colores.join('-')).toLowerCase()
    productoElegido.cantidad = Number(prompt('Cuantas unidades quiere sumar al carrito?'))

    return productoElegido
}

const seleccionarProducto = () => {
    const seleccionUsuario = prompt('Elegi el modelo de zapatillas que quieras comprar de: Airadidas, Airjordan, Air1')

    switch (seleccionUsuario) {
        case "Airadidas":
            console.log("Elegiste Airadidas")
            carrito.push(editarProductoSeleccionado(calzado1))
            break
        case "Airjordan":
            console.log("Elegiste airjordan")
            carrito.push(editarProductoSeleccionado(calzado2))
            break
        case "Air1":
            console.log("Elegiste air1")
            carrito.push(editarProductoSeleccionado(calzado3))
            break
        default:
            console.log("Elegi un modelo de la lista anterior,Porfavor")
            break
 }

 if (confirm("desea agregar otro producto a su compra?")){
    seleccionarProducto()
 }

}


 const sumarTotalCarrito = () => {
    let sumaTotalCarrito = 0
    for (const producto of carrito) {
        sumaTotalCarrito += producto.precio * producto.cantidad
    }
    return sumaTotalCarrito
}

seleccionarProducto()

alert('Gracias por su compra, su total es de $' + sumarTotalCarrito())
console.log('Gracias por su compra, su total es de $' + sumarTotalCarrito())
console.log(carrito)