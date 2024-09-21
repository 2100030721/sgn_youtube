const API_KEY = 'AIzaSyDq8lIT4CQy4aK59ynXXyOdpP7FAns3UBA';
    var menuIcon = document.querySelector(".menu-icon");
    var slidebar = document.querySelector(".slidebar");
    var container = document.querySelector(".container");

    // Toggle the "small-sidebar" class when the menu icon is clicked
    menuIcon.onclick = function() {
        slidebar.classList.toggle("small-slidebar");
        container.classList.toggle("large-container")  ;  
    };

