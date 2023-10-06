let cargandoAnimacion = document.getElementById('cargandoAnimacion')

function cargandoAnimacionEvent() {
  cargandoAnimacion.classList.remove('hidden')
  cargandoAnimacion.classList.add('animacion3')
  setTimeout(() => {
   cargandoAnimacion.classList.add('hidden')
}, 1500)
}

const guardarLocalStorage = () => {
  localStorage.setItem('carritoCompras', JSON.stringify(productosCarrito))
}

class crearProducto {
  constructor(nombre, precio, imagen, id, marca, tipo, cantidad) {
    this.nombre = nombre,
    this.precio = precio,
    this.imagen = imagen,
    this.id = id,
    this.marca = marca,
    this.tipo = tipo,
    this.cantidad = cantidad
  };
};

let corteizAlcatrazHoodie = new crearProducto('CORTEIZ ALCATRAZ HOODIE', 299.99, 'resources/corteizAlcatrazHoodie.png', 1, 'Corteiz', 'Hoodie', 1)

let yeMustBeBornAgainHoodie = new crearProducto('YE MUST BE BORN AGAIN', 159.99, 'resources/yeMustBeBornAgainHoodie.png', 2, 'Yeezy', 'Hoodie', 1)

let chromeHearts = new crearProducto('CORTEIZ HEARTS X MATTY', 79, 'resources/chromeHearts.png', 3, 'Corteiz', 'Hoodie', 1)

let bapeHoodie = new crearProducto('BAPE HOODIE', 180, 'resources/bapeHoodie.png', 4, 'BAPE', 'Hoodie', 1)

let bapeNeighbourhoodHoodie = new crearProducto('BAPE NEIGHBOURHOOD HOODIE', 210.99, 'resources/bapeNeighbourhoodHoodie.png', 5, 'BAPE', 'Hoodie', 1)

let jordan4TSIceBlue = new crearProducto('JORDAN 4 TS ICE BLUE', 400, 'resources/jordan4TSIceBlue.png', 6, 'Jordan', 'Shoes', 1)

let jordan4RetroLighting = new crearProducto('JORDAN 4 RETRO LIGHTING', 3130.99, 'resources/jordan4RetroLighting.png', 7, 'Jordan', 'Shoes', 1)

let jordan4WhiteOreo = new crearProducto('JORDAN 4 WHITE OREO', 495, 'resources/jordan4WhiteOreo.png', 8, 'Jordan', 'Shoes', 1)

let bapeSK8Red = new crearProducto('BAPE SK8 RED', 250.99, 'resources/bapeSK8RED.png', 9, 'BAPE', 'Shoes', 1)

let bapeOutUniversity = new crearProducto('BAPE OUT UNIVERSITY', 185, 'resources/bapeOutUniversity.png', 10, 'BAPE', 'Shoes', 1)

let yeezySlideBone = new crearProducto('YEEZY SLIDE BONE', 240, 'resources/yeezySlideBone.png', 11, 'Yeezy', 'Shoes', 1)

let yeezyFoamRunner = new crearProducto('YEEZY FOAM RUNNER', 149.99, 'resources/yeezyFoamRunner.png', 12, 'Yeezy', 'Shoes', 1)

let nikeJapanese = new crearProducto('NIKE JAPANESE', 52, 'resources/nikeJapanese.png', 12, 'Nike', 'Hoodie', 1)

let airForce1 = new crearProducto('AIR FORCE 1', 167, 'resources/airForce1.png', 13, 'Nike', 'Hoodie', 1)


const productosDisponibles = [corteizAlcatrazHoodie, yeMustBeBornAgainHoodie, chromeHearts, bapeHoodie, bapeNeighbourhoodHoodie, jordan4TSIceBlue, jordan4RetroLighting, jordan4WhiteOreo, bapeSK8Red, bapeOutUniversity, yeezySlideBone, yeezyFoamRunner, nikeJapanese, airForce1]

const productosCarrito = JSON.parse(localStorage.getItem('carritoCompras')) || []

let precioTotal = JSON.parse(localStorage.getItem('precioTotal')) || 0

let containerButtons = document.getElementById('containerButtons')

class buttonMarcas {
  constructor(id, imagen, nombre) {
    this.id = id
    this.imagen = imagen
    this.nombre = nombre
  }
}

let corteizButtonDisplay = new buttonMarcas('corteizButton', 'resources/corteiz.png', 'Corteiz')

let nikeButtonDisplay = new buttonMarcas('nikeButton', 'resources/nike.png', 'Nike')

let yeezyButtonDisplay = new buttonMarcas('yeezyButton', 'resources/yeezy.png', 'Yeezy')

let jordanButtonDisplay = new buttonMarcas('jordanButton', 'resources/jordan.png', 'Jordan')

let bapeButtonDisplay = new buttonMarcas('bapeButton', 'resources/bape.png', 'Bape')

const buttonMarcasDisplay = [corteizButtonDisplay, nikeButtonDisplay, yeezyButtonDisplay, jordanButtonDisplay, bapeButtonDisplay]

buttonMarcasDisplay.forEach((el) => {
  let cardButtons = `
  <div id="${el.id}" class="h-[30px]  flex my-2 cursor-pointer">
  <div class="h-full w-10% flex items-center justify-center">
    <img src="${el.imagen}" alt="" class="h-[90%]">
  </div>
  <div class="h-full w-90% flex items-center">
    <span class="pl-3">${el.nombre}</span>
  </div>
</div>`

containerButtons.innerHTML += cardButtons
})

// Elements Header

const searchProductos = document.getElementById('searchProductos')

searchProductos.addEventListener('input', buscarProductos)

function buscarProductos() {
  let valorBuscar = searchProductos.value.toLowerCase()

  contenedorProductos.innerHTML = "";
  let productosFiltrados = productosDisponibles.filter(el => el.nombre.toLowerCase().includes(valorBuscar))
  productosFiltrados.forEach((el) => {
    let cardProducto = `
    <div class="w-[180px] h-[370px] mx-7 my-2">
      <div class="h-[70%] w-full flex justify-center items-center bg-zinc-200">
        <img src="${el.imagen}" alt="" class="w-full">
      </div>
      <div class="h-[30%] w-full flex flex-col">
        <span class="font-medium text-[14px] my-[4px] whitespace-nowrap"> ${el.nombre} </span>
        <span class="font-extrabold text-[14px]"> $${el.precio} </span>
        <div class="w-full flex justify-center items-center">
          <button class="buttonAgregar text-center bg-black px-5 py-1 my-3 text-white"> Agregar </button>
        </div>
      </div>
   `

    contenedorProductos.innerHTML += cardProducto
  
    let buttonsAgregarCarrito = document.querySelectorAll('.buttonAgregar')
  
    buttonsAgregarCarrito.forEach((button, index) => {
      button.addEventListener('click', () => {
        const enviarCarrito = {
          nombre: productosFiltrados[index].nombre,
          precio: productosFiltrados[index].precio,
          imagen: productosFiltrados[index].imagen,
          id: productosFiltrados[index].id,
          marca: productosFiltrados[index].marca,
          tipo: productosFiltrados[index].tipo,
          cantidad: 1
        }
        productosCarrito.push(enviarCarrito)
        precioTotal = precioTotal + enviarCarrito.precio
        let precioTotalStorage = JSON.stringify(precioTotal)
        localStorage.setItem('precioTotal', precioTotalStorage)
        eventCarrito()
        carritoNumero()
        guardarLocalStorage()
        Toastify({
          text: "Producto agregado",
          duration: 1300,
          newWindow: true,
          close: true,
          gravity: "bottom",
          position: "right",
          style: {
            background: "black",
          },
          onClick: function(){}
        }).showToast();
      })
    })
  })
}

const carritoLenght = document.getElementById('carritoLenght')

function carritoNumero() {

  const carritoLenghtStorage = productosCarrito.length

  localStorage.setItem('carritoLenght', JSON.stringify(carritoLenghtStorage))

  carritoLenght.innerHTML = `Carrito: ${JSON.parse(localStorage.getItem('carritoLenght'))}` || `Carrito: ${productosCarrito.length}`
}

// Elemets Carrito

const contenedorProductos = document.getElementById('contenedorProductos');

const abrirCarrito = document.getElementById('abrirCarrito')

const cerrarCarrito = document.getElementById('cerrarCarrito')

const containerCarrito = document.getElementById('containerCarrito')

const containerCarritoProductos = document.getElementById('containerCarritoProductos')

const carritoSalirFuera = document.getElementById('carritoSalirFuera')

const precioTotalCarrito = document.getElementById('precioTotalCarrito')

precioTotalCarrito.innerHTML = `
<span>Precio total: ${precioTotal}$</span>`

// Elements Buttons Aside 

const productosButton = document.getElementById('productosButton')

const corteizButton = document.getElementById('corteizButton')

const nikeButton = document.getElementById('nikeButton')

const yeezyButton = document.getElementById('yeezyButton')

const jordanButton = document.getElementById('jordanButton')

const bapeButton = document.getElementById('bapeButton')

  productosDisponibles.forEach((el) => {
    cargandoAnimacionEvent()
    let cardProducto = `
    <div class="w-[180px] h-[370px] mx-7 my-2">
      <div class="h-[70%] w-full flex justify-center items-center bg-zinc-200">
        <img src="${el.imagen}" alt="" class="w-full">
      </div>
      <div class="h-[30%] w-full flex flex-col">
        <span class="font-medium text-[14px] my-[4px] whitespace-nowrap"> ${el.nombre} </span>
        <span class="font-extrabold text-[14px]"> $${el.precio} </span>
        <div class="w-full flex justify-center items-center">
          <button class="text-center bg-black px-5 py-1 my-3 text-white"> Agregar </button>
        </div>
      </div>
   `
  
    contenedorProductos.innerHTML += cardProducto
  
    let buttonsAgregarCarrito = document.querySelectorAll('.text-center.bg-black.px-5.py-1.my-3.text-white')
  
    buttonsAgregarCarrito.forEach((button, index) => {
      button.addEventListener('click', () => {
        const enviarCarrito = {
          nombre: productosDisponibles[index].nombre,
          precio: productosDisponibles[index].precio,
          imagen: productosDisponibles[index].imagen,
          id: productosDisponibles[index].id,
          marca: productosDisponibles[index].marca,
          tipo: productosDisponibles[index].tipo,
          cantidad: 1
        }

        const productoExistente = productosCarrito.find((el) => el.id === productosDisponibles[index].id) 

        if (productoExistente === undefined) {
        productosCarrito.push(enviarCarrito)
        precioTotal = precioTotal + enviarCarrito.precio
        }

        else {
          productoExistente.cantidad += 1
          productoExistente.precio += productosDisponibles[index].precio
          precioTotal = precioTotal + productosDisponibles[index].precio
        }

        let precioTotalStorage = JSON.stringify(precioTotal)
        localStorage.setItem('precioTotal', precioTotalStorage)
        eventCarrito()
        carritoNumero()
        guardarLocalStorage()
        Toastify({
          text: "Producto agregado",
          duration: 1300,
          newWindow: true,
          close: true,
          gravity: "bottom",
          position: "right",
          style: {
            background: "black",
          },
          onClick: function(){}
        }).showToast();
      })
    })
  })

function todosLosProductos() {
  cargandoAnimacionEvent()
  productosDisponibles.forEach((el) => {
    let cardProducto = `
    <div class="w-[180px] h-[370px] mx-7 my-2">
      <div class="h-[70%] w-full flex justify-center items-center bg-zinc-200">
        <img src="${el.imagen}" alt="" class="w-full">
      </div>
      <div class="h-[30%] w-full flex flex-col">
        <span class="font-medium text-[14px] my-[4px] whitespace-nowrap"> ${el.nombre} </span>
        <span class="font-extrabold text-[14px]"> $${el.precio} </span>
        <div class="w-full flex justify-center items-center">
          <button class="text-center bg-black px-5 py-1 my-3 text-white"> Agregar </button>
        </div>
      </div>
   `
  
    contenedorProductos.innerHTML += cardProducto
  
    let buttonsAgregarCarrito = document.querySelectorAll('.text-center.bg-black.px-5.py-1.my-3.text-white')
  
    buttonsAgregarCarrito.forEach((button, index) => {
      button.addEventListener('click', () => {
        const enviarCarrito = {
          nombre: productosDisponibles[index].nombre,
          precio: productosDisponibles[index].precio,
          imagen: productosDisponibles[index].imagen,
          id: productosDisponibles[index].id,
          marca: productosDisponibles[index].marca,
          tipo: productosDisponibles[index].tipo,
          cantidad: 1
        }

        const productoExistente = productosCarrito.find((el) => el.id === productosDisponibles[index].id) 

        if (productoExistente === undefined) {
        productosCarrito.push(enviarCarrito)
        precioTotal = precioTotal + enviarCarrito.precio
        }

        else {
          productoExistente.cantidad += 1
          productoExistente.precio += productosDisponibles[index].precio
          precioTotal = precioTotal + productosDisponibles[index].precio
        }

        let precioTotalStorage = JSON.stringify(precioTotal)
        localStorage.setItem('precioTotal', precioTotalStorage)
        eventCarrito()
        carritoNumero()
        guardarLocalStorage()
        Toastify({
          text: "Producto agregado",
          duration: 1300,
          newWindow: true,
          close: true,
          gravity: "bottom",
          position: "right",
          style: {
            background: "black",
          },
          onClick: function(){}
        }).showToast();
      })
    })
  })
}

function filtrarCorteiz() {
  cargandoAnimacionEvent()
  contenedorProductos.innerHTML = ""
  let productosFiltrados = productosDisponibles.filter(el => el.marca === 'Corteiz')

  productosFiltrados.forEach((el) => {
    let cardProducto = `
    <div class="w-[180px] h-[370px] mx-7 my-2">
      <div class="h-[70%] w-full flex justify-center items-center bg-zinc-200">
        <img src="${el.imagen}" alt="" class="w-full">
      </div>
      <div class="h-[30%] w-full flex flex-col">
        <span class="font-medium text-[14px] my-[4px] whitespace-nowrap"> ${el.nombre} </span>
        <span class="font-extrabold text-[14px]"> $${el.precio} </span>
        <div class="w-full flex justify-center items-center">
          <button class="text-center bg-black px-5 py-1 my-3 text-white"> Agregar </button>
        </div>
      </div>
   `
  
    contenedorProductos.innerHTML += cardProducto
  
    let buttonsAgregarCarrito = document.querySelectorAll('.text-center.bg-black.px-5.py-1.my-3.text-white')
  
    buttonsAgregarCarrito.forEach((button, index) => {
      button.addEventListener('click', () => {
        const enviarCarrito = {
          nombre: productosFiltrados[index].nombre,
          precio: productosFiltrados[index].precio,
          imagen: productosFiltrados[index].imagen,
          id: productosFiltrados[index].id,
          marca: productosFiltrados[index].marca,
          tipo: productosFiltrados[index].tipo,
          cantidad: 1
        }

        const productoExistente = productosCarrito.find((el) => el.id === productosFiltrados[index].id) 

        if (productoExistente === undefined) {
        productosCarrito.push(enviarCarrito)
        precioTotal = precioTotal + enviarCarrito.precio
        }

        else {
          productoExistente.cantidad += 1
          productoExistente.precio += productosFiltrados[index].precio
          precioTotal = precioTotal + productosFiltrados[index].precio
        }

        let precioTotalStorage = JSON.stringify(precioTotal)
        localStorage.setItem('precioTotal', precioTotalStorage)
        eventCarrito()
        carritoNumero()
        guardarLocalStorage()
        Toastify({
          text: "Producto agregado",
          duration: 1300,
          newWindow: true,
          close: true,
          gravity: "bottom",
          position: "right",
          style: {
            background: "black",
          },
          onClick: function(){}
        }).showToast();
      })
    })
  })
}

function filtrarNike() {
  cargandoAnimacionEvent()
  contenedorProductos.innerHTML = ""
  let productosFiltrados = productosDisponibles.filter(el => el.marca === 'Nike')

  productosFiltrados.forEach((el) => {
    let cardProducto = `
    <div class="w-[180px] h-[370px] mx-7 my-2">
      <div class="h-[70%] w-full flex justify-center items-center bg-zinc-200">
        <img src="${el.imagen}" alt="" class="w-full">
      </div>
      <div class="h-[30%] w-full flex flex-col">
        <span class="font-medium text-[14px] my-[4px] whitespace-nowrap"> ${el.nombre} </span>
        <span class="font-extrabold text-[14px]"> $${el.precio} </span>
        <div class="w-full flex justify-center items-center">
          <button class="text-center bg-black px-5 py-1 my-3 text-white"> Agregar </button>
        </div>
      </div>
   `
  
    contenedorProductos.innerHTML += cardProducto
  
    let buttonsAgregarCarrito = document.querySelectorAll('.text-center.bg-black.px-5.py-1.my-3.text-white')
  
    buttonsAgregarCarrito.forEach((button, index) => {
      button.addEventListener('click', () => {
        const enviarCarrito = {
          nombre: productosFiltrados[index].nombre,
          precio: productosFiltrados[index].precio,
          imagen: productosFiltrados[index].imagen,
          id: productosFiltrados[index].id,
          marca: productosFiltrados[index].marca,
          tipo: productosFiltrados[index].tipo,
          cantidad: 1
        }

        const productoExistente = productosCarrito.find((el) => el.id === productosFiltrados[index].id) 

        if (productoExistente === undefined) {
        productosCarrito.push(enviarCarrito)
        precioTotal = precioTotal + enviarCarrito.precio
        }

        else {
          productoExistente.cantidad += 1
          productoExistente.precio += productosFiltrados[index].precio
          precioTotal = precioTotal + productosFiltrados[index].precio
        }

        let precioTotalStorage = JSON.stringify(precioTotal)
        localStorage.setItem('precioTotal', precioTotalStorage)
        eventCarrito()
        carritoNumero()
        guardarLocalStorage()
        Toastify({
          text: "Producto agregado",
          duration: 1300,
          newWindow: true,
          close: true,
          gravity: "bottom",
          position: "right",
          style: {
            background: "black",
          },
          onClick: function(){}
        }).showToast();
      })
    })
  })
}

function filtrarYeezy() {
  cargandoAnimacionEvent()
  contenedorProductos.innerHTML = ""
  let productosFiltrados = productosDisponibles.filter(el => el.marca === 'Yeezy')

  productosFiltrados.forEach((el) => {
    let cardProducto = `
    <div class="w-[180px] h-[370px] mx-7 my-2">
      <div class="h-[70%] w-full flex justify-center items-center bg-zinc-200">
        <img src="${el.imagen}" alt="" class="w-full">
      </div>
      <div class="h-[30%] w-full flex flex-col">
        <span class="font-medium text-[14px] my-[4px] whitespace-nowrap"> ${el.nombre} </span>
        <span class="font-extrabold text-[14px]"> $${el.precio} </span>
        <div class="w-full flex justify-center items-center">
          <button class="text-center bg-black px-5 py-1 my-3 text-white"> Agregar </button>
        </div>
      </div>
   `
  
    contenedorProductos.innerHTML += cardProducto
  
    let buttonsAgregarCarrito = document.querySelectorAll('.text-center.bg-black.px-5.py-1.my-3.text-white')
  
    buttonsAgregarCarrito.forEach((button, index) => {
      button.addEventListener('click', () => {
        const enviarCarrito = {
          nombre: productosFiltrados[index].nombre,
          precio: productosFiltrados[index].precio,
          imagen: productosFiltrados[index].imagen,
          id: productosFiltrados[index].id,
          marca: productosFiltrados[index].marca,
          tipo: productosFiltrados[index].tipo,
          cantidad: 1
        }

        const productoExistente = productosCarrito.find((el) => el.id === productosFiltrados[index].id) 

        if (productoExistente === undefined) {
        productosCarrito.push(enviarCarrito)
        precioTotal = precioTotal + enviarCarrito.precio
        }

        else {
          productoExistente.cantidad += 1
          productoExistente.precio += productosFiltrados[index].precio
          precioTotal = precioTotal + productosFiltrados[index].precio
        }

        let precioTotalStorage = JSON.stringify(precioTotal)
        localStorage.setItem('precioTotal', precioTotalStorage)
        eventCarrito()
        carritoNumero()
        guardarLocalStorage()
        Toastify({
          text: "Producto agregado",
          duration: 1300,
          newWindow: true,
          close: true,
          gravity: "bottom",
          position: "right",
          style: {
            background: "black",
          },
          onClick: function(){}
        }).showToast();
      })
    })
  })
}

function filtrarJordan() {
  cargandoAnimacionEvent()
  contenedorProductos.innerHTML = ""
  let productosFiltrados = productosDisponibles.filter(el => el.marca === 'Jordan')

  productosFiltrados.forEach((el) => {
    let cardProducto = `
    <div class="w-[180px] h-[370px] mx-7 my-2">
      <div class="h-[70%] w-full flex justify-center items-center bg-zinc-200">
        <img src="${el.imagen}" alt="" class="w-full">
      </div>
      <div class="h-[30%] w-full flex flex-col">
        <span class="font-medium text-[14px] my-[4px] whitespace-nowrap"> ${el.nombre} </span>
        <span class="font-extrabold text-[14px]"> $${el.precio} </span>
        <div class="w-full flex justify-center items-center">
          <button class="text-center bg-black px-5 py-1 my-3 text-white"> Agregar </button>
        </div>
      </div>
   `
  
    contenedorProductos.innerHTML += cardProducto
  
    let buttonsAgregarCarrito = document.querySelectorAll('.text-center.bg-black.px-5.py-1.my-3.text-white')
  
    buttonsAgregarCarrito.forEach((button, index) => {
      button.addEventListener('click', () => {
        const enviarCarrito = {
          nombre: productosFiltrados[index].nombre,
          precio: productosFiltrados[index].precio,
          imagen: productosFiltrados[index].imagen,
          id: productosFiltrados[index].id,
          marca: productosFiltrados[index].marca,
          tipo: productosFiltrados[index].tipo,
          cantidad: 1
        }

        const productoExistente = productosCarrito.find((el) => el.id === productosFiltrados[index].id) 

        if (productoExistente === undefined) {
        productosCarrito.push(enviarCarrito)
        precioTotal = precioTotal + enviarCarrito.precio
        }

        else {
          productoExistente.cantidad += 1
          productoExistente.precio += productosFiltrados[index].precio
          precioTotal = precioTotal + productosFiltrados[index].precio
        }

        let precioTotalStorage = JSON.stringify(precioTotal)
        localStorage.setItem('precioTotal', precioTotalStorage)
        eventCarrito()
        carritoNumero()
        guardarLocalStorage()
        Toastify({
          text: "Producto agregado",
          duration: 1300,
          newWindow: true,
          close: true,
          gravity: "bottom",
          position: "right",
          style: {
            background: "black",
          },
          onClick: function(){}
        }).showToast();
      })
    })
  })
}

function filtrarBape() {
  cargandoAnimacionEvent()
  contenedorProductos.innerHTML = ""
  let productosFiltrados = productosDisponibles.filter(el => el.marca === 'BAPE')

  productosFiltrados.forEach((el) => {
    let cardProducto = `
    <div class="w-[180px] h-[370px] mx-7 my-2">
      <div class="h-[70%] w-full flex justify-center items-center bg-zinc-200">
        <img src="${el.imagen}" alt="" class="w-full">
      </div>
      <div class="h-[30%] w-full flex flex-col">
        <span class="font-medium text-[14px] my-[4px] whitespace-nowrap"> ${el.nombre} </span>
        <span class="font-extrabold text-[14px]"> $${el.precio} </span>
        <div class="w-full flex justify-center items-center">
          <button class="text-center bg-black px-5 py-1 my-3 text-white"> Agregar </button>
        </div>
      </div>
   `
  
    contenedorProductos.innerHTML += cardProducto
  
    let buttonsAgregarCarrito = document.querySelectorAll('.text-center.bg-black.px-5.py-1.my-3.text-white')
  
    buttonsAgregarCarrito.forEach((button, index) => {
      button.addEventListener('click', () => {
        const enviarCarrito = {
          nombre: productosFiltrados[index].nombre,
          precio: productosFiltrados[index].precio,
          imagen: productosFiltrados[index].imagen,
          id: productosFiltrados[index].id,
          marca: productosFiltrados[index].marca,
          tipo: productosFiltrados[index].tipo,
          cantidad: 1
        }

        const productoExistente = productosCarrito.find((el) => el.id === productosFiltrados[index].id) 

        if (productoExistente === undefined) {
        productosCarrito.push(enviarCarrito)
        precioTotal = precioTotal + enviarCarrito.precio
        }

        else {
          productoExistente.cantidad += 1
          productoExistente.precio += productosFiltrados[index].precio
          precioTotal = precioTotal + productosFiltrados[index].precio
        }

        let precioTotalStorage = JSON.stringify(precioTotal)
        localStorage.setItem('precioTotal', precioTotalStorage)
        eventCarrito()
        carritoNumero()
        guardarLocalStorage()
        Toastify({
          text: "Producto agregado",
          duration: 1300,
          newWindow: true,
          close: true,
          gravity: "bottom",
          position: "right",
          style: {
            background: "black",
          },
          onClick: function(){}
        }).showToast();
      })
    })
  })
}

productosButton.addEventListener('click', todosLosProductos)

corteizButton.addEventListener('click', filtrarCorteiz)

nikeButton.addEventListener('click', filtrarNike)

yeezyButton.addEventListener('click', filtrarYeezy)

jordanButton.addEventListener('click', filtrarJordan)

bapeButton.addEventListener('click', filtrarBape)

function toggleHiddenCarrito() {
  containerCarrito.classList.toggle('hidden')
  carritoSalirFuera.classList.toggle('hidden')
  containerCarrito.classList.add('animacion')
  carritoSalirFuera.classList.add('animacion2')
}

abrirCarrito.addEventListener('click', toggleHiddenCarrito)

cerrarCarrito.addEventListener('click', toggleHiddenCarrito)

carritoSalirFuera.addEventListener('click', toggleHiddenCarrito)

function eventCarrito () {
  containerCarritoProductos.innerHTML = ""
  precioTotalCarrito.innerHTML = `
  <span>Precio total: ${precioTotal}$</span>
  `
  productosCarrito.forEach((el) => {
    let cardCarrito = `
    <div class="relative w-full h-[200px] flex my-3">
    <i class="absolute top-0 right-0 text-lg hover:text-red-600 fa-solid fa-trash-can cursor-pointer"></i>
      <div class="h-full w-[50%] flex justify-center items-center bg-zinc-200">
        <img src="${el.imagen}" alt="" class="w-[80%]">
      </div>
      <div class="h-full w-[50%] flex flex-col items-center my-[30px]">
        <span class="w-[80%] font-medium text-[17px] my-[4px] text-center"> ${el.nombre} </span>
        <span class="font-extrabold text-[14px]"> $${el.precio} </span>
        <span class="w-[80%] font-medium text-[17px] my-[4px] text-center"> Cantidad: ${el.cantidad} </span>
    </div>
   `
  
   containerCarritoProductos.innerHTML += cardCarrito

    let buttonsEliminarProducto = document.querySelectorAll('.fa-solid.fa-trash-can')

    buttonsEliminarProducto.forEach((button, index) => {
      button.addEventListener('click', () => {
        let restarPrecio = productosCarrito[index].precio
        precioTotal -= restarPrecio
        let precioTotalStorage = JSON.stringify(precioTotal)
        localStorage.setItem('precioTotal', precioTotalStorage)
        productosCarrito.splice(index, 1)
        eventCarrito()
        guardarLocalStorage()
        carritoNumero()
      })
    })
  })
}

eventCarrito()
carritoNumero()