
function transform_encapsulate(file) {
    file.raw = '(function(){' + file.raw + '})();'
}

module.exports = transform_encapsulate;
