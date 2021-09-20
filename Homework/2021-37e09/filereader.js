function FileReader(path) {
    this.path = path
    this.readAndOutput = function() {
        let result = fetch(path)
        .then(this.done())
    }
    this.done = function(err, data) {
        console.log(result)
    }
 }
 module.exports = FileReader
 