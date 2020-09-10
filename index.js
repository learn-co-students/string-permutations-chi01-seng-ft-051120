function findAllPermutations(str, pre='') {
    if (str.length > 1) {
        str = str.split('');
        return str.map(s => findAllPermutations(str.filter(l => l !== s).join(''), pre + s)).flat();
    }
    else {
        return pre + str;
    }
}
