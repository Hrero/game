//数组元素交换
export const swap = (index1, index2, list) => {
    const ele1 = list[index1];
    const ele2 = list[index2];
    list[index1] = ele2;
    list[index2] = ele1;
    return list;
}

export const swapElement = (ele1, ele2, list) => {
    const index1 = list.indexOf(ele1);
    const index2 = list.indexOf(ele2);
    list[index1] = ele2;
    list[index2] = ele1;
    return list;
}


//判断数组是否相等
export const equalTo = (array1: any[], array2: any[]) => {
    if (array1.length != array2.length) return false;
    const len = array1.length || array2.length;
    for (let i = 0; i < len; i++) {
        const a = array1[i];
        const b = array2[i];
        if (a != b)
            return false;
    }
    return true;
}

export const getIndex = (row, col, maxCol) => {
    let index;
    index = row * maxCol + col;
    return index
}


export const fill = (size) => {
    const list = [];
    for (let i = 0; i < size; i++) { list.push(i + 1) }
    return list;
}

export const shuffle = (array: any[]) => {
    var m = array.length,
        t, i;
    while (m) {
        i = Math.floor(Math.random() * m--);
        t = array[m];
        array[m] = array[i];
        array[i] = t;
    }
    return array;
}

export const getRandomArrayElements = (arr, count) => {
    var shuffled = arr.slice(0), i = arr.length, min = i - count, temp, index;
    while (i-- > min) {
    index = Math.floor((i + 1) * Math.random());
    temp = shuffled[index];
    shuffled[index] = shuffled[i];
    shuffled[i] = temp;
    }
    return shuffled.slice(min);
}

export const getFourWeekNumber = (id, lineNum) => {
    // [1,2,3,4,5,6,7,8,9,10]
    // [11,12,13,14,15,16,17,18,19,20]
    // 左上
    let zs = id - lineNum - 1
    let s = id - lineNum
    let ys = id - lineNum + 1
    let z = id - 1
    let y = id + 1
    let zx = id + lineNum - 1
    let x = id + lineNum
    let yx = id + lineNum + 1
    const getCol = (id, lineNum) => {
        return id % lineNum === 0 ? lineNum:  id % lineNum
    }
    const getRow = (id, lineNum) => {
        return id === lineNum ? 1 : Math.floor(id / lineNum) + 1 > lineNum ? lineNum : Math.floor(id / lineNum) + 1
    }
    // 第一列
    if (getCol(id, lineNum) === 1) {
        zs = z = zx = null
    }
    // 最后一列
    if (getCol(id, lineNum) === lineNum) {
        ys = y = yx = null
    }
    // 第一行
    if (getRow(id, lineNum) === 1) {
        zs = s = ys = null
    }
    // 最后一行
    if (getRow(id, lineNum) === lineNum) {
        zx = x = yx = null
        if (zx > id) {
            console.log(111);
            zx = null
            x = null
        }
    }
    return [zs, s, ys, z, y, zx, x, yx]
}
