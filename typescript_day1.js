function slicer(text, start, end) {
    var hasil;
    hasil = text.slice(start, end);
    return hasil;
}
console.log(slicer('Learning Typescript is different than Javascript', 9, 19));
