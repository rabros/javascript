function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtnasc')
    var res = document.querySelector('div#res')
    console.log(fano)
    if (fano.value.length == 0 || fano.value > ano){
        alert('ERRO: VERIFIQUE OS DADOS')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero = 'Homem'
            if(idade >=0 && idade <10){
                //criança
                img.setAttribute('src', 'child-boy.jpg')
            } else if (idade < 21){
                //jovem
                img.setAttribute('src','yong-boy.jpg')
            } else if (idade < 50){
                //adulto
                img.setAttribute('src', 'man.jpg')
            } else{
                //idoso
                img.setAttribute('src', 'idoso.jpg')
            }

        } else if (fsex[1].checked){
            genero = 'Mulher'
            if(idade >=0 && idade <10){
                //criança
                img.setAttribute('src', 'child-girl.jpg')
            } else if (idade < 21){
                //jovem
                img.setAttribute('src', 'yong-girl.jpg')
            } else if (idade < 50){
                //adulto
                img.setAttribute('src', 'woman.jpg')
            } else{
                //idoso
                img.setAttribute('src', 'idosa.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerText = `Detectamos ${genero} com ${idade} anos.`        
        res.appendChild(img)        
    }
}
