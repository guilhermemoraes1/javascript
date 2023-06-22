function contar() {
  var inicio = document.querySelector('#inicio');
  var fim = document.querySelector('#fim');
  var passo = document.querySelector('#passo');
  var res = document.querySelector('#res');
  var i = Number(inicio.value);
  var f = Number(fim.value);
  var p = Number(passo.value);
  if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
    if (inicio.value.length == 0) { 
      alert("[ERROR1] Você não preencheu o valor do início.");
    } else if (fim.value.length == 0) {
      alert("[ERROR2] Você não preencheu o valor do fim.");
    } else {
      alert("[ERROR3] Você não preencheu o valor do passo.");
    }
  }

  if (p == 0 || p > f) {
    alert("Passo Inválido! Considerando passo 1");
    p = 1;
  };

  res.innerHTML = "Contando: <br>";

  if (i < f) {
    for (let a = i; a <= f; a += p) {
      res.innerHTML += `${a} \u{1F449}`;
    }
  } else {
    for (let a = i; a >= f; a -= p) { 
      res.innerHTML += `${a} \u{1F449}`;
    }
  }
  res.innerHTML += "&#x1F3C1";
}