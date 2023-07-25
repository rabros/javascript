function carregar(){
var msg = document.getElementById('msg')
var img = document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
msg.innerText = `Agora são ${hora} horas`
if(hora >= 0 && hora < 12){
    // Bom dia
    img.src = 'fotomanhã.jpg'
    document.body.style.background = 'white'
} else if(hora >= 12 && hora < 18){
    // Boa tarde
    img.src = 'fototarde.jpg'
    document.body.style.background = 'orange'
} else {
    // Boa noite
    img.src = 'fotonoite.jpg'
    document.body.style.background = 'Gray'
}
}