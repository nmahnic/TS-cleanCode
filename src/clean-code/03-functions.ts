(() => {

    // https://gist.github.com/Klerith/d9278895ff5dcacf6f1001d447fb443a

    // función para obtener información de una película por Id
    function getMovieById( movieId: number ) {
        console.log({ movieId });
    }

    // función para obtener información de los actores de una película - Actors o Cast // id = movieId getMovieCast
    function getMovieCastById( movieId: string ) {
        console.log({ movieId });
    }

    // funcion para obtener el bio del actor por el id
    function getActorDescriptionById( actorId: string ) {
        console.log({ actorId });
    }
    
    interface Movie {
        title: string
        description: string
        rating: number
        cast: string[] 
    }

    // Crear una película
    function createMovie({title, description, rating, cast}: Movie) {
        console.log({ title, description, rating, cast });
    }

    function checkFullName( fullName: string): boolean {
        return true;
    }
    // Crea un nuevo actor
    function createActor( fullName: string, birthdate: Date ): boolean {
        
        // tarea asincrona para verificar nombre
        // ..
        // ..
        if ( checkFullName(fullName) ) return false;

        console.log('Crear actor');
        return true;        

    }

})();