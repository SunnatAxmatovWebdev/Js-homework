let a = 30;
if (a >= 10 && a <= 99) {
  // ikkixonali son
  if (a % 2 === 0) {
      console.log("Ikki xonali juft son");
  } else {
      console.log("Ikki xonali toq son");
  }
} else if (a >= 100 && a <= 999) {
  // uchxonali son
  if (a % 2 === 0) {
      console.log("Uch xonali juft son");
  } else {
    console.log("Uch xonali toq son");
  }
} else {
  console.log("Bu son ikki yoki uch xonali emas iltimos ikki yoki uch xonali son kiriting");
}