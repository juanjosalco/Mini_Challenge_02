# Mini Reto 2 - Blockbuster

## Resumen
La página web es una aplicación para administrar una lista de películas. Los usuarios pueden ver, agregar, editar y eliminar películas utilizando una interfaz intuitiva y fácil de usar.

## Deployment:
[https://mini-challenge-02-inky.vercel.app](https://mini-challenge-02-inky.vercel.app)

## Tecnologías utilizadas
- Frontend: React
- API: Express
- Base de datos: MySQL
- Hosting de la página web: Vercel
- Hosting de la base de datos: PlanetScale
- Frameworks de CSS: Tailwind y Daisy UI

## Cómo utilizar la página web
La página web muestra una lista de películas. Cada película se muestra en una tarjeta (MovieCard) que contiene información sobre la película y botones para editar y eliminar los datos de la película.

Para editar los datos de una película, haga clic en el botón “Editar” en la tarjeta correspondiente. Esto abrirá un modal (ModalEdit) donde podrá actualizar los datos de la película. Una vez que haya realizado los cambios, haga clic en el botón “Guardar” para guardar los cambios. Para eliminar una película, haga clic en el botón “Eliminar” dentro del modal. Esto eliminará la película de la lista.

También puede agregar una nueva película haciendo clic en el botón “Agregar película” en la barra de navegación (Navbar). Esto abrirá el modal (ModalEdit) donde podrá ingresar los datos de la nueva película. En la sección de imagen se debe de ingresar una url de una imagen. Una vez que haya ingresado los datos, haga clic en el botón “Guardar” para agregar la nueva película a la lista.

## Características adicionales
La página web utiliza Tailwind y Daisy UI como frameworks de CSS para proporcionar un diseño atractivo y fácil de usar. Además, la página es responsive y se adapta a diferentes tamaños de pantalla para una mejor experiencia de usuario.

También se incluye un modo oscuro y claro que cambia automáticamente según las preferencias del sistema del usuario. Esto permite una mejor experiencia de lectura en diferentes condiciones de iluminación.

## Hosting
La página web está alojada en Vercel y la base de datos está alojada en PlanetScale.

## Diagrama de Componentes
![Diagrama de Componentes](https://user-images.githubusercontent.com/105229933/235365824-48ca6459-293b-4e4d-b335-62891a4c1704.jpeg)

## Documentación de los endpoints:

### ```GET /api/movies```
Este endpoint devuelve todas las películas almacenadas en la base de datos en formato JSON. Para utilizar este endpoint, simplemente envía una solicitud HTTP GET a la URL /api/movies.

Un ejemplo del formato de respuesta es:
```json
[
    {
        "id": 1,
        "title": "The Shawshank Redemption",
        "description": "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
        "image": "https://www.imdb.com/title/tt0111161/mediaviewer/rm2953253376/",
        "rating": 4
    },
    {
        "id": 2,
        "title": "The Godfather",
        "description": "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
        "image": "https://www.imdb.com/title/tt0068646/mediaviewer/rm3441975808/",
        "rating": 5
    }
]
```
### ```POST /api/movies```
Este endpoint permite agregar una nueva película a la base de datos. Para utilizar este endpoint, envía una solicitud HTTP POST a la URL /api/movies con los datos de la película en formato JSON en el cuerpo de la solicitud. Por ejemplo:

```json
{
    "title": "The Dark Knight",
    "description": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    "image": "https://www.example.com/images/dark-knight.jpg",
    "rating": 5
}
```

### ```DELETE /api/movies/:id```
Este endpoint permite eliminar una película existente de la base de datos. Para utilizar este endpoint, envía una solicitud HTTP DELETE a la URL /api/movies/:id, donde :id es el ID de la película que deseas eliminar

### ```PATCH  /api/movies/:id```

Este recibe una solicitud con los siguientes parámetros:

- ```id```: el id de la película que se desea actualizar.
- ```title``` (opcional): el nuevo título de la película.
- ```description``` (opcional): la nueva descripción de la película.
- ```image``` (opcional): la nueva URL de la imagen de la película.
- ```rating``` (opcional): el nuevo rating de la película.

Un ejemplo de un JSON es:
```json
{"title": "New Title", "description": "New description"}
```

## Link de Acceso a la Documentación de la API : 
https://app.swaggerhub.com/apis/juanjosalco/API-Movies/1.0.0

## Autores
- [Armando Terrazas](https://github.com/Armandotrsg)
- [Juan Salazar](https://github.com/juanjosalco)
