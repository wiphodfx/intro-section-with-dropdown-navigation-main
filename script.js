let sidebar = document.getElementById("sidebar");
let main = document.getElementById("mainContent");

function openSideBar() {
  sidebar.style.right = "0";
  main.style.backgroundColor = "#00000033";
}

function closeSidebar() {
  sidebar.style.right = "-250px";
  main.style.backgroundColor = "";
}
