var num = 1

const numQuestao = document.getElementById("numQuestao")
numQuestao.innerText = '0' + num
function adiciona()
{   
    numQuestao.innerText = num < 10 ? '0' + num : num
    return num++
}