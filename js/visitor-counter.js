function visitorCounter(){
  fetch("https://z488u3q7q0.execute-api.us-east-1.amazonaws.com/visitorCounter")
    .then(response => response.text())
    .then((body) => {
      document.getElementById("visitor-counter").innerHTML=body
    })
}
