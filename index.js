const elementoRespostas = document.querySelector('#respostas')
const inputPergunta = document.querySelector('#inputPergunta')
const buttonPerguntar = document.querySelector('#buttonPerguntar')
const respostas = [
  'Certeza!',
  'Não tenho tanta certeza.',
  'É decididamente assim.',
  'Não conte com isso.',
  'Sem dúvidas!',
  'Pergunte novamente mais tarde.',
  'Sim, definitivamente!',
  'Minha resposta é não.',
  'Você pode contar com isso.',
  'Melhor não te dizer agora.',
  'A meu ver, sim.',
  'Minhas fontes dizem não.',
  'Provavelmente.',
  'Não é possível prever agora.',
  'Perspectiva boa.',
  'As perspectivas não são tão boas.',
  'Sim.',
  'Concentre-se e pergunte novamente.',
  'Sinais apontam que sim.'
]
// clicar em fazer pergunta
function fazerPergunta() {
  if (inputPergunta.value == '') {
    alert('Digite sua pergunta')
  }

  buttonPerguntar.setAttribute('disabled', true)

  const pergunta = '<div>' + inputPergunta.value + '</div>'

  // gerar numero aleatorio
  const totalRespostas = respostas.length
  const numeroAleatorio = Math.floor(Math.random() * totalRespostas)

  elementoRespostas.innerHTML = pergunta + respostas[numeroAleatorio]

  elementoRespostas.style.opacity = 1
  // sumir a respostas depois de 3 segundos
  setTimeout(function () {
    elementoRespostas.style.opacity = 0
    buttonPerguntar.removeAttribute('disabled')
  }, 3000)
}
