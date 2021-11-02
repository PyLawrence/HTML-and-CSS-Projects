function openModal(selected) {
    document.getElementById("myModal").style.display = "block";

    let elements = document.getElementsByClassName("mySlides");

    for (let j = 0; j <= elements.length; j++) {
        if (elements[j].id.slice(-1) == selected) {
            elements[j].style.display = "block";
        }
        else {
            elements[j].style.display = "none";
        }
    }
}

function closeModal() {
    document.getElementById("myModal").style.display = "none";
    
}