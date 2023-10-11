//array of images
let manuImages = [
    "https://ichef.bbci.co.uk/live-experience/cps/160/mcs/media/images/67469000/jpg/_67469942_euro-getty.jpg",
    "https://img.a.transfermarkt.technology/portrait/header/182877-1595947846.jpg?lm=1",
    "https://network-new.punditarena.com/uploads/2021/09/jones-1.jpg",
    "https://e0.365dm.com/21/09/384x216/skysports-ole-gunnar-solskjaer_5512875.jpg?20210914205143",
];

//reverse through array of images
//getting random image from the array we created before (we use math.floor and math.random to grab a random index in the array)
const imgs = document.getElementsByTagName("img");
for(let i = 0; i < imgs.length; i++) {
    const randomImg = Math.floor(Math.random() * manuImages.length)
    imgs[i].src = manuImages[randomImg]
}
//do the same for h1 elements
const headers = document.getElementsByTagName("h1");
for (let i = 0; i < headers.length; i++){
    headers[i].innerText = "Manchester United is the greatest football club.";
}
//do the same for p elements
const p = document.getElementsByTagName("p");
for (let i = 0; i < p.length; i++){
    p[i].innerText = "Manchester United are incredable and will win the premier league this year.";
}
