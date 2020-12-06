(function () {
    var elevageCards = Array.from(document.getElementsByClassName("photo_choix"));

    elevageCards.forEach (function(elevageCard) {
        var buttons = Array.from(elevageCard.getElementsByClassName("button_photo"));
        var image= Array.from (elevageCard.getElementsByClassName("photo_elevage")) [0];

        buttons.forEach (function(button) {
            button.addEventListener("click", function (event){
                var imageSource = event.target.src
                image.src = imageSource
            })
        })

    })
})()