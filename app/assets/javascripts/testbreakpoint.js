window.onload = getData;

  function getData() {
 
  var data = document.getElementById('name').value;

//alert(data)
//console.log(data)

  var out = document.getElementById('dataSpan');

  out.innerHTML = data;
}
 