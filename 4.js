function cek([...a]){
    let min,m=0,jumlah;
    for(let i=0;i<=a.length;i++){
        for(let j=i;j<=a.length;j++){
            if (a[i]>a[j]){
                min=a[j];
                a[j]=a[i];
                a[i]=min;
            }
        }
    }
    let b=[]
    for(let h=0; h<a.length; h++){
        jumlah = 0;
        for(let i=0; i<a.length; i++){
            if(a[h] == a[i]) jumlah++;
        }
        if(a[h] != a[h-1])
        b.push(jumlah)
    }
    for (let i=0;i<b.length;i++){
        if(b[i]%2==0) m=m+(b[i]/2);
        else m=m+Math.floor(b[i]/2);
    }
    if (m>0) return m
    else return 'Tidak ada pasangan yang ditemukan!';
}
console.log(cek([20,50,70,10,70,30,10,30,50]));
console.log(cek([1,5,5,10,9,13,5,1]));
console.log(cek([2,1,3,4,5,6,]))