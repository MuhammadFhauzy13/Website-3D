document.title = 'oji keren'; //document.title mengambil nilai dari elemet title dan menganti menjadi nilai yang ingin ditentukan
console.log(document.body);
const body = document.body; //variabel const itu bernilai konstan atau tidak dapat diubah
body.append('Hello world'); //append untuk memasukkan sesuatu ke element body
const h1 = document.createElement('h1'); //sebelum isi nilai elemem,buat elementnya dlu <h1></h1>
h1.textContent = 'anjay ini h1 bro'; //ini untuk mengisi nilai dari h1 menggunakan textcontent, dan bisa menggunakan innerhtml atau innertext <h1>anjay ini h1 bro</h1>
body.append(h1); // ini masukkan nilai h1 ke body
const namaSaya = document.createElement('p');
namaSaya.innerHTML = 'Oji';
body.append(namaSaya);

const namaKamu = document.createElement('b');
namaKamu.innerText = 'bukan oji';
body.append(namaKamu);

const btn1 = document.getElementById('klik1');
const btn2 = document.querySelector('.btn2');
console.log(btn2);

const defaultText = 'klik saya 1';
btn1.textContent = defaultText;
btn1.style.border = 'none';
btn1.style.padding = '8px';
btn1.style.fontSize = '24px';
btn1.style.background = 'tomato';

function clickButton() {
  btn1.style.background = 'aqua';
  const newText = document.createElement('p');
  newText.textContent = 'halo apa kabar kamu ?';
  body.append(newText);
}
function ubahText() {
  btn1.textContent = 'hihihi';
}
function oriText() {
  btn1.textContent = defaultText;
}
function munculNm() {
  const nama = document.createElement('p');
  nama.textContent = 'M.Fauzy Nasir Umamit';
  body.append(nama);
}
function warnaNama() {
  btn2.style.background = 'aqua';
}
