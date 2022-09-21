function generateAdvice(){
    var url = "	https://api.adviceslip.com/advice"
    var request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    responseString = request.responseText
    response = JSON.parse(responseString)
    var id = response["slip"]["id"]
    var advice = response["slip"]["advice"]

    var idHtml = document.getElementById("idAdvice")
    var adviceHtml = document.getElementById("advice")
    adviceHtml.innerHTML = `"${advice}"`
    idHtml.innerHTML = `Advice #${id}`
    
}
generateAdvice()