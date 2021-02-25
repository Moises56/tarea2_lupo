//TODO -----------------------------------------------USUARIOS
var usuarios = [{
        nombre: "Pedro",
        apellido: "Martinez",
        ordenes: [{
                nombreProducto: "Producto 1",
                descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                cantidad: 2,
                precio: 49.99
            },
            {
                nombreProducto: "Producto 2",
                descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                cantidad: 6,
                precio: 297.5
            }
        ]
    },
    {
        nombre: "Juan",
        apellido: "Perez",
        ordenes: [{
                nombreProducto: "Producto 3",
                descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                cantidad: 2,
                precio: 49.99
            },
            {
                nombreProducto: "Producto 4",
                descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                cantidad: 2,
                precio: 49.99
            }
        ]
    },
    {
        nombre: "Maria",
        apellido: "Rodriguez",
        ordenes: [{
                nombreProducto: "Producto 1",
                descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                cantidad: 4,
                precio: 198
            },
            {
                nombreProducto: "Producto 3",
                descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                cantidad: 3,
                precio: 148
            }
        ]
    }
];


// TODO-----------------------------------------------CATEGORIAS
var categorias = [{
        nombreCategoria: "Farmacias",
        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
        color: "#FADB54",
        icono: "fas fa-clinic-medical",
        empresas: [{
                nombreEmpresa: "Empresa 1",
                imagen: "img/banner.jpg",
                productos: [{
                        nombreProducto: "Producto 1",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto 2",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto 3",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto 4",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    }
                ]
            },
            {
                nombreEmpresa: "Empresa 2",
                imagen: "img/banner.jpg",
                productos: [{
                        nombreProducto: "Producto 1",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto 2",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto 3",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto 4",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    }
                ]
            },
            {
                nombreEmpresa: "Empresa 3",
                imagen: "img/banner.jpg",
                productos: [{
                        nombreProducto: "Producto 1",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto 2",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto 3",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto 4",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    }
                ]
            }
        ]
    },
    {
        nombreCategoria: "Restaurantes",
        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
        color: "#F3ADAC",
        icono: "fas fa-utensils",
        empresas: [{
                nombreEmpresa: "Empresa 1",
                imagen: "img/banner.jpg",
                productos: [{
                        nombreProducto: "Producto 1",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto 2",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto 3",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto 4",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    }
                ]
            },
            {
                nombreEmpresa: "Empresa 2",
                imagen: "img/banner.jpg",
                productos: [{
                        nombreProducto: "Producto 1",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto 2",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto 3",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto 4",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    }
                ]
            },
            {
                nombreEmpresa: "Empresa 3",
                imagen: "img/banner.jpg",
                productos: [{
                        nombreProducto: "Producto 1",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto 2",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto 3",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto 4",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    }
                ]
            }
        ]
    },
    {
        nombreCategoria: "Salud",
        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
        color: "#D98F6D",
        icono: "fas fa-heartbeat",
        empresas: [{
                nombreEmpresa: "Empresa 1",
                imagen: "img/banner.jpg",
                productos: [{
                        nombreProducto: "Producto 1",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto 2",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto 3",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto 4",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    }
                ]
            },
            {
                nombreEmpresa: "Empresa 2",
                imagen: "img/banner.jpg",
                productos: [{
                        nombreProducto: "Producto 1",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto 2",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto 3",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto 4",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    }
                ]
            },
            {
                nombreEmpresa: "Empresa 3",
                imagen: "img/banner.jpg",
                productos: [{
                        nombreProducto: "Producto 1",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto 2",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto 3",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto 4",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    }
                ]
            }
        ]
    },
    {
        nombreCategoria: "Café",
        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
        color: "#9482C4",
        icono: "fas fa-mug-hot",
        empresas: [{
                nombreEmpresa: "Empresa 1",
                imagen: "img/banner.jpg",
                productos: [{
                        nombreProducto: "Producto 1",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto 2",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto 3",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto 4",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    }
                ]
            },
            {
                nombreEmpresa: "Empresa 2",
                imagen: "img/banner.jpg",
                productos: [{
                        nombreProducto: "Producto 1",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto 2",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto 3",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto 4",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    }
                ]
            },
            {
                nombreEmpresa: "Empresa 3",
                imagen: "img/banner.jpg",
                productos: [{
                        nombreProducto: "Producto 1",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto 2",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto 3",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto 4",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    }
                ]
            }
        ]
    },
    {
        nombreCategoria: "Bebidas",
        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
        color: "#F3AC85",
        icono: "fas fa-cocktail",
        empresas: [{
                nombreEmpresa: "Empresa 1",
                imagen: "img/banner.jpg",
                productos: [{
                        nombreProducto: "Producto 1",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto 2",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto 3",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto 4",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    }
                ]
            },
            {
                nombreEmpresa: "Empresa 2",
                imagen: "img/banner.jpg",
                productos: [{
                        nombreProducto: "Producto 1",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto 2",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto 3",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto 4",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    }
                ]
            },
            {
                nombreEmpresa: "Empresa 3",
                imagen: "img/banner.jpg",
                productos: [{
                        nombreProducto: "Producto 1",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto 2",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto 3",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto 4",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    }
                ]
            }
        ]
    }
];

//? console.log('Usuarios', usuarios);
//? console.log('Categorias', categorias);


//******************************************************************************************************** */
//TODO -> Guardando las Categorias a LocaslStorage 
var localStorage = window.localStorage;
var indiceSeleccionado = null;

if (localStorage.getItem('categorias') === null) {
    localStorage.setItem('categorias', JSON.stringify(categorias))
} else {
    categorias = JSON.parse(localStorage.getItem("categorias"));
}

//******************************************************************************************************** */
//TODO -> Guardando los Usuarios a LocaslStorage 
if (localStorage.getItem('usuarios') === null) {
    localStorage.setItem('usuarios', JSON.stringify(usuarios))
} else {
    usuarios = JSON.parse(localStorage.getItem("usuarios"));
}

//******************************************************************************************************** */
//TODO -> Funcion Generar lista de usuarios en el select
function generarUser() {
    usuarios.forEach((users, i) => {
    // ?  console.log('usuarios: ', i);
      document.getElementById('user').innerHTML +=
      `<option value="${users.nombre} ${users.apellido}">${users.nombre} ${users.apellido}</option>`

    })

}
generarUser();

//******************************************************************************************************** */
//TODO -> Funcion Generar nombre de usuarios
function nombre(indice) {
    let nombre = $('#user').val() //* Obtener el valor del selec
  //?  console.log('user: ', nombre);
    if (nombre == null) {
        nombre = 'Usuarios';
    }
    document.getElementById('nombreUsuario').innerHTML = ` `
    document.getElementById('nombreUsuario').innerHTML = `¡Hola ${nombre} !`
}
nombre();


//******************************************************************************************************** */
//TODO -> Funcion Generar lista de Categorias
function generarCategorias() {
    document.getElementById('categorias').innerHTML = '';

    categorias.forEach((app, i) => {
        //? console.log('categorias: ', app);
        document.getElementById('categorias').innerHTML += `
            <div onclick="mostrarCategoria(${i})" class="card p-3 m-2" id="${app.nombreCategoria}" style=" background:${app.color}">
                <div class="card-header"><i class="${app.icono}"></i></div>
                <div class="card-body mr-5">
                    <h5 class="card-title p-0">${app.nombreCategoria}</h5>
                    <p class="card-text text-white">3 Comercios</p>
                </div>
            </div> 
         `;
        })
}
generarCategorias()

//******************************************************************************************************** */
//TODO ->  Funcion Generar ordenes por usuario

function verOrdenes(indice) {
    let name = $('#user').val() //* Obtener el valor del selec
    //?  console.log('tus ordenes: ', name);
    if (name == null) {
        name = 'Pedro'
    }
    //?  console.log(`usuario: ${nombre}` );
     document.getElementById('titulOrden').innerHTML = ` `
     document.getElementById('titulOrden').innerHTML = `${name},Estas son tus Ordenes`
     document.getElementById('listaOrdenes').innerHTML = ` `

     usuarios.forEach((ordenes, i) => {
        // ?  console.log('usuarios: ', ordenes.nombre);
          let orden = ordenes.ordenes;
        // ?  console.log('lista: ', orden);
          for (let j = 0; j < orden.length; j++) {
              //?  console.log(orden[j].descripcion);              
                if (name == ordenes.nombre + " " + ordenes.apellido) {
                  document.getElementById('listaOrdenes').innerHTML += 
                  `  <li class="list-group-item">
                          <h4 class="tituloProducto">${orden[j].nombreProducto}</h4>
                          <p>${orden[j].descripcion}</p>
                          <h4 style="text-align:right;">$${orden[j].precio}</h4>
                      </li>
                    `;
                };
          };
    
        });
    
}
verOrdenes();

//******************************************************************************************************** */
//TODO ->  Funcion mostrarCategoria

function mostrarCategoria(indice){
    console.log('mostrar ventana', indice);

}