const btnPesquisar = document.getElementById("btnPesquisar");

const atribuirValor = (json) => {
  if (json.erro) {
    return alert("O Cep digitado está inválido");
  }

  const { logradouro, complemento, bairro, localidade, uf } = json;

  const rua = document.getElementById("rua");
  const complementoInput = document.getElementById("complemento");
  const bairroInput = document.getElementById("bairro");
  const cidade = document.getElementById("cidade");
  const estado = document.getElementById("estado");

  rua.value = logradouro;
  complementoInput.value = complemento;
  bairroInput.value = bairro;
  cidade.value = localidade;
  estado.value = uf;
};

btnPesquisar.addEventListener("click", async (event) => {
  event.preventDefault();

  const inputDoCep = document.getElementById("cep");
  const valorDoCep = inputDoCep.value;

  console.log(valorDoCep.length);

  if (valorDoCep.length > 7) {
    try {
      const response = await fetch(
        `https://viacep.com.br/ws/${valorDoCep}/json/`
      );

      atribuirValor(await response.json());
    } catch (error) {
      alert("O Cep digitado está inválido");
    }

    // fetch(`https://viacep.com.br/ws/${valorDoCep}/json/`)
    //   .then((response) => response.json())
    //   .then(atribuirValor)
    //   .catch(() => {
    //     alert("O Cep digitado está inválido");
    //   });
  }
});

// async/await
