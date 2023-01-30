var num  = 1

const numQuestao = document.getElementById("numQuestao")

function adiciona(){
    
    num < 10 ? numQuestao.innerText = '0' + num : numQuestao.innerText = num
    return num++
}