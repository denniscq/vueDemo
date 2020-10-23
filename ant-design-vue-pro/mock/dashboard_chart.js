function chart (method) {
    let res = null
    switch (method) {
        case 'GET':
            res = [100, 20, 10, 66, 50, 66]
            break;
        default:
            res = null
    }

    return res
}

module.exports = chart;