
//This function adds contacts into my table
function addRow() {

  var tbl = document.getElementById("my-table");
  var row = tbl.insertRow();
  var cell1 = row.insertCell();
  var cell2 = row.insertCell();
  var cell3 = row.insertCell();

  cell1.innerHTML = document.getElementById("name").value;
  cell2.innerHTML = document.getElementById("number").value;
  cell3.innerHTML = document.getElementById("email").value;

  document.getElementById('name').value = "";
  document.getElementById('number').value = "";
  document.getElementById('email').value = "";


}

// Found this search function at https://www.w3schools.com/howto/howto_js_filter_lists.asp
// Changed it up to make it work for this problem but thought i should reference it
function searchFunction() {

  const element = document.getElementById("noResult");

  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("search");
  filter = input.value.toUpperCase();
  table = document.getElementById("my-table");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
  td = tr[i].getElementsByTagName("td")[1];
  if (td) {
    txtValue = td.textContent || td.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      tr[i].style.display = "";
      element.style.display = "none";
    } else {
        tr[i].style.display = "none";
        element.style.display = "block";
        element.style.display = "inline";

      }
    }
  }
}
