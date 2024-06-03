const courses = [
    {
        name: "Complete ReactJS Courses",
        price: "2.3"
    },
    {
        name: "Complete JavaScript Courses",
        price: "2.1"
    },
    {
        name: "Complete Angular Course",
        price: "4.3"
    },
    {
        name: "Complete MERN Course",
        price: "2.7"
    },
    {
        name: "Complete C++ Course",
        price: "2.8"
    },
    {
        name: "Complete Java Course",
        price: "5.9"
    }
]



function generateList() {

    const ul = document.querySelector(".list-group")

    ul.innerHTML = ""

    courses.forEach(course => {

        //Create a list item 
        const li = document.createElement("li")

        li.classList.add("list-group-item")

        const name = document.createTextNode(course.name)

        li.appendChild(name)

        const span = document.createElement("span")

        span.style.float = "right"

        const price = document.createTextNode("$" + course.price)

        span.appendChild(price)

        li.appendChild(span)

        ul.appendChild(li)

    })
}

// generateList()

// window.onload(generateList());

window.addEventListener("load", generateList);

const abutton = document.querySelector(".sort-btn-ascend");

abutton.addEventListener("click", function () {

    courses.sort((a, b) => a.price - b.price)

    generateList()
})

const dbutton = document.querySelector(".sort-btn-descend");

dbutton.addEventListener("click", function () {

    courses.sort((a, b) => b.price - a.price)

    generateList()
})
