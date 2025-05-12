// Função chamada quando a página for carregada
function navigatingTo(args) {
  const page = args.object;
  page.bindingContext = {}; // contexto de dados vazio
}

// Função para SOMAR
function onSomar(args) {
  const page = args.object.page;

  // Pega os valores dos campos de entrada e converte para número
  const val1 = parseFloat(page.getViewById("input1").text) || 0;
  const val2 = parseFloat(page.getViewById("input2").text) || 0;

  const resultado = val1 + val2;

  // Atualiza o texto do Label com o resultado
  page.getViewById("resultado").text = "Resultado: " + resultado;
}

// Função para SUBTRAIR
function onSubtrair(args) {
  const page = args.object.page;
  const val1 = parseFloat(page.getViewById("input1").text) || 0;
  const val2 = parseFloat(page.getViewById("input2").text) || 0;
  const resultado = val1 - val2;
  page.getViewById("resultado").text = "Resultado: " + resultado;
}

// Função para MULTIPLICAR
function onMultiplicar(args) {
  const page = args.object.page;
  const val1 = parseFloat(page.getViewById("input1").text) || 0;
  const val2 = parseFloat(page.getViewById("input2").text) || 0;
  const resultado = val1 * val2;
  page.getViewById("resultado").text = "Resultado: " + resultado;
}

// Função para DIVIDIR
function onDividir(args) {
  const page = args.object.page;
  const val1 = parseFloat(page.getViewById("input1").text) || 0;
  const val2 = parseFloat(page.getViewById("input2").text);

  // Verifica se está dividindo por zero
  if (!val2) {
    page.getViewById("resultado").text = "Erro: divisão por zero!";
    return;
  }

  const resultado = val1 / val2;
  page.getViewById("resultado").text = "Resultado: " + resultado;
}

// Exporta as funções para serem acessadas no XML
exports.navigatingTo = navigatingTo;
exports.onSomar = onSomar;
exports.onSubtrair = onSubtrair;
exports.onMultiplicar = onMultiplicar;
exports.onDividir = onDividir;
