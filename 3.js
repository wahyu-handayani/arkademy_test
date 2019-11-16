function cek(x){
    const total=x.match(/\w+/ig).length, kata=x.match(/[a-z]+/ig).length;
    return `${kata}/${total}`
}
console.log(cek('99 halo Hola coba Nama 27 1 nama'));