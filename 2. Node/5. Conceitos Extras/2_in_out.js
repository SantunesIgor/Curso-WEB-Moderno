const n = process.argv.indexOf('-a') !== -1
console.log(n)

if(n){
    process.stdout.write('hey\n')
    process.exit()
} else {
    process.stdout.write('what should i call u: ')
    process.stdin.on('data', data => {
        const name = data.toString().replace('\n', '')

        process.stdout.write(`hi ${name}\n`)
        process.exit()
    })
}