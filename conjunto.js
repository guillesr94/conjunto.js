// - Un nuevo Set con los nombres de tu familia
let familia = ["Taty","Orlando",];
let setFamilia = new Set(familia)
console.log(setFamilia)
// - Modifica el Set original añadiendo tu nombre (duplicado) (debería darte lo mismo)
setFamilia.add("Guillermo","Guillermo");
console.log(setFamilia)
// - Modifica el Set original añadiendo el nombre "Javascript" (ya que empieza a formar parte de tu vida ;)
setFamilia.add("JavaScript")
console.log(setFamilia)