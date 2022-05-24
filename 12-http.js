const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcome to our homepage enjoy!!')
    }
    if (req.url === '/about') {
        res.end(
            'This is the total history of what as been going on around us take your time to totally understand all the default and the ancusparancus of all that you can learn about'
        )
    }

    res.end(`
        <h1>Ops!!</h1>
        <p>Page cannot be found here</p>
        <p><b>Suggestion:</b> <a href="/">Go back to homepage</a></p>
        <p><b>Suggestion:</b> <a href="/about">Go back to about page</a></p>

        <h1>Thank you</h1>
    `)
})

server.listen(5000)