(() => {

    // https://gist.github.com/Klerith/7599f1637cc683ef59a03fd1c40d53d0

    const temperaturesInCelcius = [33.6, 12.34];

    const serverIPv4 = '123.123.123.123';

    const users = [{id: 1, email: 'fernando@google.com'},{ id: 2, email: 'juan@google.com' }, { id: 3, email: 'melissa@google.com' }];

    const userEmails = users.map( user => user.email );

    const canJump = false;
    const canRun = true;
    const hasItems = true;
    const isLoading = false;


    const startTime = new Date().getTime();
    //....
    // 3 doritos después
    //...
    const endTime = new Date().getTime() - startTime;


    function fetchBooks() {
        throw new Error('Function not implemented.');
    }

    function fetchBooksByUrl( url: string) {
        throw new Error('Function not implemented.');
    }
    
    function getSqueareArea( side: number ) {
        throw new Error('Function not implemented.');
    }

    function printJob() {
        throw new Error('Function not implemented.');
    }

})();