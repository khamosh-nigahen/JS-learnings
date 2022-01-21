const _ = {}

_.compose = (fn1, fn2) => {
    return (arg) => {
        return fn1(fn2(arg))
    }
}

// compose should be implemented by function keyword 
// as with arrow fucntions you won't have access to arguments keyword while passing multiple function arguments
// it will be more robust

const fn1 = (name) => {
    return `Hey ${name}`
}

const fn2 = (str) => {
    return str.toUpperCase()
}

const hey = _.compose(fn1, fn2)

console.log(hey("puneet"));