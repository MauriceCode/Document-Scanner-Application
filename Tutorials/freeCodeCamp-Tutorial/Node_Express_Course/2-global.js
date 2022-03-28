// Global - No window
// __dirname - path to current directory
// __filename = filename
// require - function to use modules (CommonJS)
// module - info about current module (file)
// process - info about env where the program is being executed 


console.log(__dirname)
console.log(__filename)

setInterval(() => {
    console.log('HELLO World')
}, 1000)