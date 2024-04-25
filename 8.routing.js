const http = require('node:http')

const processRequest = (req, res) =>{
    const {method, url} = req

    switch (method){
        case 'GET':
            switch (url){
                case '/':
                    res.setHeader('Content-type', 'text/html; charset=utf-8')
                    return res.end('<h1>Mi página</h1>')
            }
    }
}

const server = http.createServer(processRequest)

server.listen(1234, ()=>{
    console.log('server listening on port http://localhost:1234')
})