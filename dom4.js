document.getElementsByTagName("body")[0].style.fontFamily = "roboto";

// memasukkan list

const list = [
    "2 potong ayam",
    "1 butir telur",
    "5 sendok tepung terigu",
    "3 sendok tepung maizena",
    "3 siung bawang putih",
    "Secukupnya merica",
    "Secukupnya garam",
    "Secukupnya minyak goreng",
    "Secukupnya serai",
];

list.forEach(li);

function li(item, index) {
    document.getElementById("resep").innerHTML += `<li>${item}</li>`;
}

const images = document.getElementById('photo');
images.innerHTML = `
<img src="https://img-global.cpcdn.com/recipes/cfe37f82ce72ec3c/751x532cq70/ayam-geprek-pedas-ala-bensu-foto-resep-utama.jpg">
`