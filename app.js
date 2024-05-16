const buttons = document.querySelectorAll('.btn')

buttons.forEach(button => {

    const content = document.querySelector(button.dataset.target)
    button.innerText = button.dataset.hide

    button.addEventListener('click', () => {

        if (content.classList.contains('hide')) {
            button.innerText = button.dataset.hide
            content.classList.remove('hide')
        }

        else {
            button.innerText = button.dataset.show
            content.classList.add('hide')
        }

        // if (content.classList.contains('hide')) {
        //     button.innerText = button.dataset.hide
        //     content.classList.remove('hide')
        // } else {
        //     button.innerText = button.dataset.show
        //     content.classList.add('hide')
        // }


    })

})

// const content = document.getElementById('content')

//click event = tiklama
//dblclick event = cift tıklama
//focus event = odaklanma
//blur event = odağı kaybetme


// const a = 4

// if (a == 4) {
//     console.log('a değeri calisti')

// }

// else if (a == 5) {
//     console.log('a değeri 5')
// }

// else {
//     console.log('a değeri 4 değil')
// }

// if (
// 	content.style.display === "" ||
// 	content.style.display === "block"
// ) {
// 	//console.log('content sayfada gorunur')
// 	content.style.display = "none"
//
// 	// butonun text'ini goster olarak ayarlamam gerekiyor!
// 	button.innerText = button.dataset.show
//
// } else {
// 	// console.log('content sayfada gizli')
// 	content.style.display = "block"
// 	button.innerText = button.dataset.hide
// }


