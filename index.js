const buttonCekKalimat = document.querySelector(".cek-kalimat .buttonCek");
// ------------ FUNCTION -------------------
cekKalimat = (string) => {
  const regEx = new RegExp(
    /Bagaimana cara memulai usaha bisnis|Bootcamp impact byte|Status covid hari ini/g
  );
  return regEx.test(string);
};

// ----------- EVENT LISTENER ------------------
buttonCekKalimat.addEventListener("click", () => {
  const kalimat = document.getElementById("kalimat").value;
  if (cekKalimat(kalimat)) {
    document.querySelector(".cek-kalimat #output").innerHTML =
      "Hasil pencarian oke";
  } else {
    document.querySelector(".cek-kalimat #output").innerHTML =
      "Hasil pencarian not oke";
  }
});
