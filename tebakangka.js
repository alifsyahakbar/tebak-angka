function main() {
   var nama = prompt("Masukan nama anda :");

   let ulang = true;
   while(ulang) {

      let kesempatan = 3;
      let nilai = Math.floor(Math.random()*10+1);
      let hasil = '';

      while(kesempatan >= 1) {
         alert('Hi! ' + nama.charAt(0).toUpperCase() + nama.slice(1) + '🙌' + '\nPermainan dengan ' + kesempatan + ' kesempatan.');
         let player = parseInt(prompt("Tebak Angka 1 - 10"));
         if (player === nilai) {
            hasil = 'BENAR';
            alert('Anda ' + hasil + ' angka yang anda tebak adalah ' + nilai);
            break;
         } else if(player < nilai) {
            hasil = 'RENDAH';
            kesempatan -= 1;
            alert('Nilai anda terlalu ' + hasil + '. Kesempatan anda sisa ' + kesempatan );
         } else if(player > nilai) {
            hasil = 'TINGGI';
            kesempatan -= 1;
            alert('Nilai anda terlalu ' + hasil + '. Kesempatan anda sisa ' + kesempatan);
         } else {
            break;
         }
         
         if(kesempatan === 0) {
            alert('Kesempatan telah Habis, ANDA GAGAL! . Nilai yg dicari adalah ' + nilai);
         }
      }
      ulang = confirm('Ulang Lagi?');


}
  swal("Terimakasih " + nama.charAt(0).toUpperCase() + nama.slice(1) + " !", "Lain waktu main lagi yaa!" , "success");
}

