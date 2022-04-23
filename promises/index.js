const btnPesquisar = document.getElementById("btnPesquisar");

const atribuirValor = (json) => {
  return new Promise((resolve, reject) => {
    if (json.erro) {
      return reject();
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

    resolve();
  });
};

btnPesquisar.addEventListener("click", async (event) => {
  event.preventDefault();

  const inputDoCep = document.getElementById("cep");
  const valorDoCep = inputDoCep.value;

  if (valorDoCep.length > 7) {
    try {
      const response = await fetch(
        `https://viacep.com.br/ws/${valorDoCep}/json/`
      ).then((res) => res.json());

      await atribuirValor(response);
    } catch {
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
