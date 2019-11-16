# Panduan
## Soal 1
Function untuk menampilkan biodata dengan return value berformat json. Pada pembahasan ini, digunakan perintah:
```
JSON.stringify(obj);
```
dengan tujuan untuk mengkonversi javascript value ke JSON string
Output program berformat json dipanggil dengan:
```
console.log(data());
```
dan diperoleh output sebagai berikut:
```
{"name":"Wahyu","age":22,"address":"Kota Malang","hobbies":["bersepedah","mendengarkan musik"],"is_married":false,"list_school":"Universitas Brawijaya","skills":[{"skill_name":"python","level":"advanced"},{"skill_name":"javascript","level":"advanced"},{"skill_name":"matlab","level":"advanced"}],"interest_in_coding":true}
```

## Soal 2
Digunakan modul Regex pada javascript untuk melakukan pengecekan terhadap username dan password, Username dan password memiliki ketentuan-ketentuan tertentu (sesuai pada soal). Program dapat dijalankan dengan memberikan perintah pada command window seperti contoh berikut
```
console.log(username('WAHYUUU')); //true
console.log(password('111*PPP')); //true
console.log(password('111*PpP')); //false
console.log(password('hhh*999')); //false
```
Note: ``` username ``` merupakan fungsi untuk mengecek username dan  ``` password ``` merupakan fungsi untuk mengecek password
Diperoleh output:``` true ``` dan ``` false ``` sesuai dengan kriteria yang diberikan soal
## Soal 3
Untuk menghitung banyaknya kata yang diinputkan digunakan bantuan Regex dengan pembilang merupakan banyaknya kata dan penyebut merupakan total kata yang diinputkan. pemanggilan dapat dilakukan sebagai berikut
```
console.log(cek('99 halo Hola coba Nama 27 1 nama'));
```
Output:
```
5/8
```
## Soal 4
digunakan perulangan for untuk menentukan urutan array, setelah diurutkan anggota dalam array akan dihitung banyaknya (banyaknya frekuensi yang muncul) yang disimpan dalam array baru. Kemudian, array tersebut dieksekusi untuk menentukan banyaknya pair kaoskaki
Contoh perintah:
```
console.log(cek([20,50,70,10,70,30,10,30,50])); //4
console.log(cek([1,5,5,10,9,13,5,1])); //2
console.log(cek([2,1,3,4,5,6,])) //Tidak ada pasangan yang ditemukan!
```
## Soal 5
Menampilkan bentuk segitiga menggunakan Python. Dengan menggunakan perulangan for dengan hasil output dapat diperoleh dengan contoh pemanggilan berikut
Contoh perintah:
```
segitiga(7);
```
Output:
```
      *
     **
    ***
   ****
  *****
 ******
*******
```
## Soal 6
Menampilkan database dengan phpMyadmin sebagai berikut
