let home = document.querySelector('#home')
let canvas = document.querySelector('#dotsCanvas')
canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;

let ctx = canvas.getContext('2d')

let dots = [];
let arrayColor = ['#789DBC', '#F3C623', '#EB8317', '#10375C', '#347928', '#FF6600', '#604CC3', '#8FD14F']
for (let index = 0; index < 90; index++) {
    dots.push({
        x: Math.floor(Math.random() * canvas.width),
        y: Math.floor(Math.random() * canvas.height),
        size: Math.random() * 3 + 5,
        color: arrayColor[Math.floor(Math.random() * 5)]
    })
} console.log(dots);


const drawDots = () => {
    dots.forEach(dot => {
        ctx.fillStyle = dot.color;
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2);
        ctx.fill();
    })
}
drawDots();
home.addEventListener('mousemove', (event) => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    drawDots();
    let mouse = {
        x: event.pageX - home.getBoundingClientRect().left,
        y: event.pageY - home.getBoundingClientRect().top,

    }
    dots.forEach(dot => {
        let distance = Math.sqrt((mouse.x - dot.x) ** 2 + (mouse.y - dot.y) ** 2);
        if (distance < 300) {
            ctx.StrokeStyle = dot.color;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(dot.x, dot.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
        }
    })
})
home.addEventListener('mouseout', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawDots();
})

// showing products using Json files

let products = null
// Get json files
fetch('product.json')
    .then(response => {
        return response.json();
    })


    .then(data => {
        products = data;
        addDataToHTMl();
    })
// show data in list html

function addDataToHTMl() {
    console.log(products);

    // remove all data
    let productContainer = document.querySelector('.projects');
    productContainer.innerHTML = ''
    // add new data
    if (products != null) {
        // Use slice to show only 6 projects.
        products.slice(0, 6).forEach(product => {
            let project = document.createElement('div');
            project.classList.add('projects');
            //      // Set data attributes
            // project.setAttribute('data-tilt', '');
            // project.setAttribute('data-tilt-scale', '1.01');
            project.innerHTML = `<a href="${product.url}">
                    <div class="project"  >
                    <img src="${product.image}" alt="GitHub-API">
                    <h3>${product.name}</h3>
                    <p>${product.description}</p>
                </div>
                </a>`

            productContainer.appendChild(project)

        })
    }
}

// import profile picture from github using github api.

// const githubApiUrl = 'https://api.github.com/users/amiralamf4'; 
// fetch(githubApiUrl)
// .then(response=>(response.json()))
// .then(data=>{
//     const profilePic=document.querySelector('.card');
//     profilePic.style.backgroundImage = `url(${data.avatar_url})`; // insert pic url as background image
// })


