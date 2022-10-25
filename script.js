function carregar(){
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = 18 //data.getHours()
msg.innerHTML = `Agora são ${hora} horas`


if(hora >= 6 && hora < 12) {
    //Bom dia!
    img.src = 'img/amanhecer.jpg'
    document.body.style.background = '#e2cd9f'

} else if(hora >= 12 && hora < 18) {
    //Boa tarde!
    img.src = 'img/entardecer.jpg'
    document.body.style.background = '#b9846f'

} else  if (hora >= 18 && hora <= 23) {
    // Boa noite!
    img.src = 'img/anoitecer.jpg'
    document.body.style.background = '#515154'

}else {
    //Boa madrugada
    img.src ='img/madrugada.jpg'
    document.body.style.background = 'black'
}

}