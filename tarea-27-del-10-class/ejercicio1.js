class Producto {
  constructor(id, nombre, detalle, marca, precio, stock) {
    this.id = id;
    this.nombre = nombre;
    this.detalle = detalle;
    this.marca = marca;
    this.precio = precio;
    this.stock = stock;
  }

  // static sumarPrecios(productos) {
  //   return productos.reduce((acum, p) => acum + p.precios, 0);

  // }

  static sumarPrecios(productos) {
    return productos.reduce((acum, p) => {
      console.log("Sumando:", acum, "+", p.precio);
      return acum + p.precio;
    }, 0);
  }

    static productosConStock(productos) {
    return productos.filter(p => p.stock > 0);
  }
}

const tecladoRazer = new Producto(
  1,
  "Teclado mecánico",
  "RGB, switches verdes",
  "Razer",
  45000,
  10
);
const mouseLogitech = new Producto(
  2,
  "Mouse gamer",
  "Inalámbrico, 6 botones programables",
  "Logitech",
  38000,
  0
);
const monitorSamsung = new Producto(
  3,
  'Monitor 27"',
  "144Hz, 1ms, Full HD",
  "Samsung",
  160000,
  5
);
const auricularesHyperx = new Producto(
  4,
  "Auriculares gamer",
  "Sonido envolvente 7.1, micrófono desmontable",
  "HyperX",
  72000,
  0
);
const padSteelseries = new Producto(
  5,
  "Mousepad",
  "Tamaño XL, base antideslizante",
  "SteelSeries",
  12000,
  20
);

const productos = [
  tecladoRazer,
  mouseLogitech,
  monitorSamsung,
  auricularesHyperx,
  padSteelseries,
];

const productosDisponibles = Producto.productosConStock(productos);


console.log(productosDisponibles.map(p => p.nombre));
