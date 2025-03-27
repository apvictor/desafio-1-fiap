function submitFormulario() {

  var jsonData = JSON.stringify({
    "names": [
      document.getElementById("nome1").value,
      document.getElementById("nome2").value,
      document.getElementById("nome3").value,
      document.getElementById("nome4").value,
      document.getElementById("nome5").value,
      document.getElementById("nome6").value
    ],
    "message": document.getElementById("historia").value
  });

  console.log(jsonData);

  fetch("https://fsdt-contact.onrender.com/contact", {
    method: "POST",
    body: jsonData,
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  });
}