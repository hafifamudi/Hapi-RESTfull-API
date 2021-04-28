const routes = [
    {
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            return 'this is homepage'
        }
    },
    {
        method: '*',
        path: '/',
        handler: (request, h) => {
            return 'cannot find the page'
        }
    },
    {
        method: 'GET',
        path: '/portfolio',
        handler: (request, h) => {
            return 'this is portfolio'
        }
    },
    {
        method: '*',
        path: '/about',
        handler: (request, h) => {
            return 'cannot find the page'
        }
    },
    {
        method: 'GET',
        path: '/hello/{name?}',
        handler: (request, h) => {
            const {name = "stranger"} = request.params;
            const { lang } = request.query;
 
            if(lang === 'id') {
                return `Hai, ${name}!`;
            }
            return `Hello, ${name}!`;        }
    },
    {
        method: '*',
        path: '/{any*}',
        handler: (request, h) => {
            return 'cannot find the page'
        }
    },
    
]

export default routes;