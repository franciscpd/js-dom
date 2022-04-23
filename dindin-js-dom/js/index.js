// 1
const header = document.getElementsByTagName("header")[0];
header.style.backgroundColor = "#2E948A";

// 2
const menuCursos = document.querySelector("#menu_opcoes nav a:nth-child(1)");
menuCursos.setAttribute("href", "cursos.html");

const onLoadHome = () => {
  // 1
  const introducao = document.querySelector("#introducao");
  introducao.style.justifyContent = "center";
  introducao.style.alignItems = "center";

  // 2
  const tituloDepoimento = document.querySelector(".depoimento h3");
  tituloDepoimento.innerHTML = "O que falam sobre nós";

  // 3
  const tituloBlog = document.querySelector(".titulo:not(.depoimento) h3");
  tituloBlog.innerHTML = "Mais conteúdo para você";

  // 4
  document.querySelectorAll(".titulo").forEach((titulo) => {
    titulo.style = "text-transform: uppercase;";
  });

  // 5
  const verTodosOsPosts = document.querySelector("#todos_posts");
  verTodosOsPosts.setAttribute("href", "blog.html");

  // 6
  const novoCurso = document.createElement("div");
  novoCurso.setAttribute("id", "independencia");
  novoCurso.innerHTML = `
  <img src="imagens/independencia_financeira.png"
  width="180px" alt="Independência Financeira">
  <h2>Independência Financeira</h2>
  <p>Duis aute irure dolor in reprehenderit in voluptate
  velit esse cillum dolore
  eu fugiat nulla pariatur. </p>
  <a class="comecar_agora" href="./curso.html">começar
  agora</a>`;

  const secaoCursos = document.getElementById(
    "investimentos_poupando_independencia"
  );
  secaoCursos.appendChild(novoCurso);
};

const onLoadContato = () => {
  // 1
  const formulario = document.querySelector("form");
  formulario.setAttribute("action", "sucesso.html");

  // 2
  const novoInput = document.createElement("input");
  novoInput.setAttribute("type", "tel");
  novoInput.setAttribute("required", true);
  novoInput.setAttribute("placeholder", "telefone");

  const textArea = document.querySelector("textarea");

  formulario.insertBefore(novoInput, textArea);

  for (let i = 0; i < formulario.elements.length; i++) {
    const item = formulario.elements[i];
    const nextItem = formulario.elements[i + 1];

    if (i > 2) break;

    item.addEventListener("keydown", (event) => {
      if (event.code === "Escape") {
        console.log("ESC is pressed");
      }

      if (event.code === "Enter") {
        event.preventDefault();

        nextItem.focus();
      }
    });
  }

  formulario.addEventListener("submit", (event) => {
    event.preventDefault();
    const infos = {};

    for (i = 0; i < formulario.elements.length; i++) {
      const item = formulario.elements[i];
      if (item.placeholder) {
        infos[item.placeholder] = item.value;
      }
    }

    window.alert(JSON.stringify(infos));
  });

  // 3
  const campoMensagem = document.getElementsByTagName("textarea")[0];
  campoMensagem.style.boxSizing = "border-box";

  // 4
  const botaoEnviar = document.getElementById("enviar");
  botaoEnviar.style.width = "auto";

  // 5
  fetch("index.html") // promises
    .then((result) => result.text())
    .then((data) => new DOMParser().parseFromString(data, "text/html"))
    .then((htmlHome) => {
      const style = document.createElement("link");
      style.setAttribute("rel", "stylesheet");
      style.setAttribute("href", "css/index.css");

      document.querySelector("head").appendChild(style);

      const main = document.querySelector("main");
      const tituloDepoimentos = htmlHome.querySelector(".depoimento");
      const depoimentos = htmlHome.getElementById("falam_sobre");

      main.appendChild(tituloDepoimentos);
      main.appendChild(depoimentos);

      const tituloDepoimento = document.querySelector(".depoimento h3");
      tituloDepoimento.innerHTML = "O que falam sobre nós";
    });
};
