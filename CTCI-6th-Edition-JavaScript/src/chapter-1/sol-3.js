// urlify

function urlify(str) {
    let trimmed_str = str.trim()
    let urlify = trimmed_str.replace(/ /g, "%20")
    return urlify
}

module.exports = urlify