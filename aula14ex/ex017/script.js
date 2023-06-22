function gerarTabela() {
  let num = document.getElementById('txtn');
  let tab = document.getElementById('seltab');
  if (num.value.length == 0) {
    alert('[ERROR] Insira um valor numérico!');
  } else {
    let n = Number(num.value);
    let a = 1;
    tab.innerHTML = '';
    while (a <= 10) {
      let linha = document.createElement('option');
      linha.text = `${n} x ${a} = ${n*a}`; 
      tab.appendChild(linha); 
      a++;
    }
  }
}