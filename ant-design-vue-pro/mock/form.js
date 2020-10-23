function form (method) {
    let res = null
    switch (method) {
        case 'POST':
            res = { msaage: 'OK' }
            break;
        default:
            res = null
    }

    return res
}

module.exports = form;