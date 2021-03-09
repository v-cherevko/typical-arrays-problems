exports.min = function min(array) {
    if (!array) {
        return 0;
    }
    if (array.length > 0) {
        return Math.min(...array);
    } else {
        return 0;
    }
};

exports.max = function max(array) {
    if (!array) {
        return 0;
    }
    if (array.length > 0) {
        return Math.max(...array);
    } else {
        return 0;
    }
};

exports.avg = function avg(array) {
    if (!array) {
        return 0;
    }
    if (array.length > 0) {
        let sum = array.reduce((a, b) => a + b, 0);
        return sum / array.length;
    } else {
        return 0;
    }
};
