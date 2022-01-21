const createHash = require('crypto').createHash

process.stdin
    .pipe(createHash('sha512', { encoding: 'hex' })) // for hex encoding else it will be in binary
    .pipe(process.stdout)

    // use ctrl-d to see output