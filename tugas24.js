function panggilAku() {
  var angka = [32,33,16,40,9,7,11,2,44,1,66];
  console.log("Sebelumnya : ");
  console.log(angka);

  function panggil1() {
    console.log("Ascending : ");
    angka1 = angka.sort();
    return angka1
    console.log(angka1);
  };

  console.log(panggil1());

  function panggil2() {
    console.log("Descending : ");
    angka2 = angka.reverse();
    return angka2
    console.log(angka2);
  };

  console.log(panggil2());
};

panggilAku()
