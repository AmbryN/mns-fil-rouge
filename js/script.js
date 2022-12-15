// Boutons des points à côté de chaque article

plusPointBtns = document.getElementsByClassName("plus_point")
minusPointBtns = document.getElementsByClassName("minus_point")

for (let i=0; i<plusPointBtns.length; i++) {
    plusPointBtns[i].addEventListener('click',
        (element) => {
        if (minusPointBtns[i].classList.contains("minus_point_clicked")) {
            minusPointBtns[i].classList.remove("minus_point_clicked")
            minusPointBtns[i].classList.add("icon_dark_grey")
        }
        if (!element.target.classList.contains("plus_point_clicked")) {
            element.target.classList.add("plus_point_clicked");
            element.target.classList.remove("icon_dark_grey")
        } else {
            element.target.classList.remove("plus_point_clicked");
            element.target.classList.add("icon_dark_grey")
        }
        });
}

for (let i=0; i<minusPointBtns.length; i++) {
    minusPointBtns[i].addEventListener('click',
        (element) => {
            if (plusPointBtns[i].classList.contains("plus_point_clicked")) {
                plusPointBtns[i].classList.remove("plus_point_clicked")
                plusPointBtns[i].classList.add("icon_dark_grey")
            }
            if (!element.target.classList.contains("minus_point_clicked")) {
                element.target.classList.add("minus_point_clicked");
                element.target.classList.remove("icon_dark_grey")
            } else {
                element.target.classList.remove("minus_point_clicked");
                element.target.classList.add("icon_dark_grey")
            }
        });
}