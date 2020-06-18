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
    alert(`Oke! Kita cariin "${kalimat}" buat kamu!`);
  } else {
    alert("Kata kunci masih salah, bos!");
  }
});
