function nameFunction() {
    // Declare variables
    var input, filter, table, tr, td, i;
    input = document.getElementById("nameInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("all-the-products");
    tr = table.getElementsByTagName("tr");

    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[1];
      if (td) {
        if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";

        } else {
          tr[i].style.display = "none";

        }
      }
    }
  }
function descrFunction() {
    // Declare variables
    var input, filter, table, tr, td, i;
    input = document.getElementById("descrInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("all-the-products");
    tr = table.getElementsByTagName("tr");

    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[4];
      if (td) {
        if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";

        } else {
          tr[i].style.display = "none";

        }
      }
    }
  }   