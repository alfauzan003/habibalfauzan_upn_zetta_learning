function slicer(text:string, start:number, end:number): string{
    let hasil:string;
    hasil = text.slice(start, end);
    return hasil;
}
console.log(slicer('Learning Typescript is different than Javascript', 9, 19));