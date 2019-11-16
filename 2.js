function username(x){
    if (x.length==7 && x.match(/[A-Z]/g).length===x.length){
        return true;
    }else{
        return false;
    }
}

function password(ww){
    const m=/[*]/,
    re1= /\d{3,3}/ig,
    re2= /[a-zA-Z]{3,3}/ig,
    re3=/\w{3,3}/ig,
    a=ww.match(re1),
    b=ww.match(re2),
    num=(ww.match(re3)[0]==a,
    str=ww.match(re3)[1]==b);
    let j=ww[0],k=ww[4],
    angka=0,huruf=0;
    for (let i=0;i<3;i++){
        if (ww[i]==j){
            angka=angka+1;
            j=ww[i];
        }
    }
    for (let i=4;i<7;i++){
        if (ww[i]==k){
            huruf=huruf+1;
            k=ww[i];
        }
    }
    if(ww.length==7&&ww.match(re3).length==2&&str==true&&num==true&&angka==huruf==true&&m.test(ww[3])&&a[0].length==3&&b[0].length==3) return true;
    else return false;
}
console.log(username('WAHYUUU'));
console.log(password('111*PPP'));
console.log(password('111*PpP'));
console.log(password('hhh*999'));

