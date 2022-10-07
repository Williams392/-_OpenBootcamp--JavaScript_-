// Una variable que contenga la lista de la compra (mínimo 5 elementos)
const compra = ["Cafe", "Leche", "Azucar", "Jamonada", "Pan"]

// Modifica la lista de la compra y añádele "Aceite de Girasol"
compra.push("Aceite de Girasol")
// Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"
compra.pop()


// Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)
const peliculas = [
    {
        titulo: "Top Gun: Maverick",
        director: "Joseph Kosinski",
        fecha: new Date(2022, 05, 27)
    },
    {
        titulo: "Thor: Amor y trueno",
        director: "Taika Waititi",
        fecha: new Date(2022, 07, 06)
    },
    {
        titulo: "La Liga de la Justicia de Zack Snyder",
        director: "Zack Snyder",
        fecha: new Date(2021, 03, 18)
    }
]

// Una nueva lista que contenga las películas posteriores al 1 de enero de 2010=>(utilizando filter)
const peliculasNuevas = peliculas.filter(pelicula => pelicula.fecha > new Date(2010, 0, 1))

const directores = peliculas.map(pelicula => {
    return pelicula.director
})
const titulos = peliculas.map(pelicula => {
    return pelicula.titulo
})
const directores_titulos = directores.concat(titulos)
const directores_titulos_prop = [...directores, ...titulos]