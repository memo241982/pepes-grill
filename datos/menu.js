// Datos del menú de Pepe's Grill. Se edita desde Administrar menú (http://localhost:4400/admin/).
window.MENU = {
  "negocio": {
    "nombre": "Pepe's Grill",
    "moneda": "Q",
    "whatsapp": "+502 3601-7718",
    "telefono": "",
    "direccion": "3a. calle 12-49, zona 6, Barrio Hacienda La Virgen, Salamá, Baja Verapaz",
    "horario": "Martes a jueves: 6:00 p.m. – 9:00 p.m. · Viernes y sábado: 6:00 p.m. – 10:00 p.m. · Domingo: 6:00 p.m. – 9:00 p.m. · Lunes: cerrado",
    "nota": "Todos los panes al carbón y hamburguesas incluyen papas",
    "urlPublica": "https://memo241982.github.io/pepes-grill/"
  },
  "categorias": [
    {
      "id": "entradas",
      "nombre": "Entradas",
      "grupo": "comidas",
      "columna": 1,
      "productos": [
        {
          "id": "carpaccio",
          "nombre": "Carpaccio",
          "precio": 75
        },
        {
          "id": "aros-de-cebolla",
          "nombre": "Aros de cebolla",
          "precio": 50
        },
        {
          "id": "papas-fritas",
          "nombre": "Papas fritas",
          "precio": 30
        }
      ]
    },
    {
      "id": "carnes",
      "nombre": "Carnes",
      "grupo": "comidas",
      "columna": 1,
      "productos": [
        {
          "id": "churrasquito",
          "nombre": "Churrasquito",
          "precio": 35
        },
        {
          "id": "churrasquito-doble",
          "nombre": "Churrasquito doble",
          "precio": 55
        },
        {
          "id": "puyazo",
          "nombre": "Puyazo",
          "precio": 60
        },
        {
          "id": "puyazo-doble",
          "nombre": "Puyazo doble",
          "precio": 100
        },
        {
          "id": "chorizo-argentino-cuarto",
          "nombre": "Chorizo argentino 1/4 libra",
          "precio": 30
        },
        {
          "id": "chorizo-argentino",
          "nombre": "Chorizo argentino 1/2 libra",
          "precio": 45
        }
      ]
    },
    {
      "id": "tortilla",
      "nombre": "Tortilla",
      "grupo": "comidas",
      "columna": 2,
      "productos": [
        {
          "id": "quesadillas",
          "nombre": "Quesadillas",
          "precio": 45
        },
        {
          "id": "burrito",
          "nombre": "Burrito",
          "precio": 45
        }
      ]
    },
    {
      "id": "hamburguesas",
      "nombre": "Hamburguesas",
      "grupo": "comidas",
      "columna": 2,
      "incluyePapas": true,
      "productos": [
        {
          "id": "derretido",
          "nombre": "Derretido",
          "precio": 25
        },
        {
          "id": "clasica",
          "nombre": "Clásica",
          "precio": 35
        },
        {
          "id": "pepes-especial",
          "nombre": "Pepe's Especial",
          "precio": 47
        },
        {
          "id": "doble",
          "nombre": "Doble",
          "precio": 55
        },
        {
          "id": "doble-bacon",
          "nombre": "Doble Bacon",
          "precio": 72
        },
        {
          "id": "triple-bacon",
          "nombre": "Triple Bacon",
          "precio": 95
        },
        {
          "id": "big-pepes",
          "nombre": "Big Pepe's",
          "precio": 72
        },
        {
          "id": "big-pepes-especial",
          "nombre": "Big Pepe's Especial",
          "precio": 72
        },
        {
          "id": "super-clasica",
          "nombre": "Súper Clásica",
          "precio": 60
        },
        {
          "id": "tejana",
          "nombre": "Tejana",
          "precio": 65
        }
      ]
    },
    {
      "id": "panes-al-carbon",
      "nombre": "Panes al carbón",
      "grupo": "comidas",
      "columna": 3,
      "incluyePapas": true,
      "productos": [
        {
          "id": "chivito-uruguayo",
          "nombre": "Chivito uruguayo",
          "precio": 75
        },
        {
          "id": "pepes-cheese-steak",
          "nombre": "Pepe's Cheese Steak",
          "precio": 60
        },
        {
          "id": "choripan",
          "nombre": "Choripán",
          "precio": 45
        },
        {
          "id": "puyazo-steak",
          "nombre": "Puyazo Steak",
          "precio": 70
        },
        {
          "id": "super-steak",
          "nombre": "Súper Steak",
          "precio": 65
        },
        {
          "id": "melted-bacon",
          "nombre": "Melted Bacon",
          "precio": 60
        }
      ]
    },
    {
      "id": "extras",
      "nombre": "Extras",
      "grupo": "comidas",
      "columna": 3,
      "productos": [
        {
          "id": "tocino",
          "nombre": "Tocino",
          "precio": 15
        },
        {
          "id": "queso-mozzarella",
          "nombre": "Queso mozzarella",
          "precio": 20
        },
        {
          "id": "torta-de-carne",
          "nombre": "Torta de carne",
          "precio": 20
        },
        {
          "id": "huevo",
          "nombre": "Huevo",
          "precio": 5
        },
        {
          "id": "queso-cheddar",
          "nombre": "Queso cheddar",
          "precio": 5
        }
      ]
    },
    {
      "id": "bebidas",
      "nombre": "Bebidas",
      "grupo": "bebidas",
      "columna": 1,
      "productos": [
        {
          "id": "gaseosas",
          "nombre": "Gaseosas",
          "precio": 10
        },
        {
          "id": "limonada",
          "nombre": "Limonada",
          "precio": 15
        },
        {
          "id": "limonada-soda",
          "nombre": "Limonada con soda",
          "precio": 20
        },
        {
          "id": "naranjada",
          "nombre": "Naranjada",
          "precio": 15
        },
        {
          "id": "naranjada-soda",
          "nombre": "Naranjada con soda",
          "precio": 20
        },
        {
          "id": "smoothie-fresa",
          "nombre": "Smoothie de fresa",
          "precio": 25
        },
        {
          "id": "smoothie-mango",
          "nombre": "Smoothie de mango",
          "precio": 25
        },
        {
          "id": "batido-fresa",
          "nombre": "Batido de fresa",
          "precio": 25
        },
        {
          "id": "batido-chocolate",
          "nombre": "Batido de chocolate",
          "precio": 25,
          "disponible": false
        },
        {
          "id": "cafe-caramelo-frio",
          "nombre": "Café caramelo frío",
          "precio": 25
        }
      ]
    },
    {
      "id": "cervezas",
      "nombre": "Cervezas",
      "grupo": "bebidas",
      "columna": 2,
      "productos": [
        {
          "id": "cerveza-gallo",
          "nombre": "Cerveza Gallo",
          "precio": 15
        },
        {
          "id": "cerveza-monte-carlo",
          "nombre": "Cerveza Monte Carlo",
          "precio": 18
        },
        {
          "id": "cerveza-erdinger",
          "nombre": "Cerveza Erdinger",
          "precio": 50
        },
        {
          "id": "cerveza-guinness",
          "nombre": "Cerveza Guinness",
          "precio": 60
        }
      ]
    },
    {
      "id": "bebidas-preparadas",
      "nombre": "Bebidas preparadas",
      "grupo": "bebidas",
      "columna": 2,
      "productos": [
        {
          "id": "micheladas",
          "nombre": "Micheladas",
          "precio": 25
        },
        {
          "id": "mineral-preparada",
          "nombre": "Mineral preparada",
          "precio": 20
        },
        {
          "id": "pichel-michelada",
          "nombre": "Pichel de michelada",
          "precio": 75
        }
      ]
    },
    {
      "id": "bebidas-calientes",
      "nombre": "Bebidas calientes",
      "grupo": "bebidas",
      "columna": 3,
      "productos": [
        {
          "id": "cafe",
          "nombre": "Café",
          "precio": 10
        },
        {
          "id": "te",
          "nombre": "Té",
          "precio": 10
        }
      ]
    }
  ]
};
