const header = document.getElementsByTagName("header")[0];
header.style.backgroundColor = "#2E948A";

const onLoadHome = () => {
  document.querySelectorAll(".titulo").forEach((titulo) => {
    titulo.style = "text-transform: uppercase;";
  });

  const introducao = document.querySelector("#introducao");
  introducao.style.display = "flex";
  introducao.style.justifyContent = "center";
  introducao.style.alignItems = "center";

  const botaoSaberMais = document.querySelector("#saber_mais");

  botaoSaberMais.addEventListener("click", (event) => {
    event.preventDefault();

    window.alert("Em breve novidades!");
  });
};

const onLoadContato = () => {
  const formulario = document.querySelector("form");
  formulario.setAttribute("action", "sucesso.html");

  const novoInput = document.createElement("input");
  novoInput.setAttribute("type", "tel");
  novoInput.setAttribute("required", true);
  novoInput.setAttribute("placeholder", "telefone");

  const textArea = document.querySelector("textarea");

  formulario.insertBefore(novoInput, textArea);

  formulario.addEventListener("submit", (event) => {
    event.preventDefault();
    const elements = formulario.elements;
    const infos = {};

    for (i = 0; i < formulario.elements.length; i++) {
      const item = formulario.elements[i];
      if (item.placeholder) {
        infos[item.placeholder] = item.value;
      }
    }

    window.alert(JSON.stringify(infos));
  });

  const campoMensagem = document.getElementsByTagName("textarea")[0];
  campoMensagem.style.boxSizing = "border-box";

  // fetch("index.html")
  //   .then((result) => result.text())
  //   .then((data) =>
  //     console.log(new DOMParser().parseFromString(data, "text/html"))
  //   );
};
