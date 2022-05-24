const { readFile, writeFile } = require('fs')

readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err)
        return;
    }
    const first = result

    readFile('./content/second.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err)
            return;
        }
        const second = result

        writeFile(
            './content/result-async.txt',
            `This file is ready to lunch but if not give way for ${first} and ${second}`,
            (err, result) => {
                if (err) {
                    console.log(err)
                    return;
                }
                console.log(result)
            }
        )
    })
})