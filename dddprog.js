function busca() {
	ddd = document.querySelector('#est').value
	fetch(`https://brasilapi.com.br/api/ddd/v1/${ddd}`)
	.then(retorno => {
		return retorno.json() })
	.then(dados => {
		dados.cities.forEach(pesq => {
			f_lista(pesq) })
})
	}


ul = document.createElement("ul");
ul.setAttribute("id", "lista")
document.querySelector('body').append(ul)
document.querySelector('#est').addEventListener("change", f_apaga)


function f_lista(pesq){
	li = document.createElement("li");
	li.textContent = pesq
	document.querySelector('#lista').append(li)}


function f_apaga(){
	apaga = document.querySelectorAll('li')
	for(const rem of apaga){
		rem.remove()
}}
