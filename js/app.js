const container = document.querySelector(".container")
const coffees = [
    {name: "Perspiciatis", image: "images/trent-erwin-fKImVjUwkXc-unsplash.jpg" },
{ name: "Voluptatem", image: "images/trent-erwin-fKImVjUwkXc-unsplash.jpg" },
{ name: "Explicabo", image: "images/trent-erwin-fKImVjUwkXc-unsplash.jpg" },
{ name: "Rchitecto", image: "images/trent-erwin-fKImVjUwkXc-unsplash.jpg" },
{ name: " Beatae", image: "images/trent-erwin-fKImVjUwkXc-unsplash.jpg" },
{ name: " Vitae", image: "images/trent-erwin-fKImVjUwkXc-unsplash.jpg" },
{ name: "Inventore", image: "images/trent-erwin-fKImVjUwkXc-unsplash.jpg" },
{ name: "Veritatis", image: "images/trent-erwin-fKImVjUwkXc-unsplash.jpg" },
{ name: "Accusantium", image: "images/trent-erwin-fKImVjUwkXc-unsplash.jpg" },
]

const showCoffees = () => {
    let output = ""
    coffees.forEach(
        ({ name, image }) =>
            (output += `
                <div class="card">
                <img class="card--avatar" src=${image} />
                <h1 class="card--title">${name}</h1>
                <a class="card--link" href="#">Taste</a>
                </div>
                `)
    )
    container.innerHTML = output
}

document.addEventListener("DOMContentLoaded", showCoffees)

// check if the serviceWorker is supported by the current browser
if ("serviceWorker" in navigator) {
    window.addEventListener("load", function() {
        navigator.serviceWorker
            .register("/serviceWorker.js")
            .then(res => console.log("service worker registered"))
            .catch(err => console.log("service worker not registered", err))
    })
}

