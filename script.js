var arr = [
    {
        dp: "https://media.istockphoto.com/id/1939649518/photo/bad-news.webp?b=1&s=612x612&w=0&k=20&c=wa1BVYsQFBnqDOz4PHWlJBROKUkI3GPlmSU0Dvh36Gs=",
        story:
          "https://media.istockphoto.com/id/1296588321/photo/portrait-of-three-sisters-lying-on-the-grass.webp?a=1&b=1&s=612x612&w=0&k=20&c=Yr85Z3bueuCqBEjhBq3eO3NRX21003Mfqbhiyp0RONo=",
    },
    {
        dp: "https://media.istockphoto.com/id/1138350039/photo/girl-child-doing-victory-sign-with-her-hand.webp?a=1&b=1&s=612x612&w=0&k=20&c=-QNcAzW7ifQBaFiTTAF_m2ndd7uy27NosQ5mTi6pZUU=",
        story:
          "https://media.istockphoto.com/id/1567361035/photo/two-young-pre-teen-best-friend-girl-on-studio-white.webp?a=1&b=1&s=612x612&w=0&k=20&c=qSZAOEM73LthNyqBPN4hEpoj8AGf3ZXCTlcCZn_N3a4=",
    },
    {
        dp: "https://images.unsplash.com/photo-1456412684996-31507d7d17b6?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1vc3QlMjBiZWF1dGlmdWxsJTIwZ2lybHN8ZW58MHx8MHx8fDA%3D",
        story:
          "https://media.istockphoto.com/id/1567361035/photo/two-young-pre-teen-best-friend-girl-on-studio-white.webp?a=1&b=1&s=612x612&w=0&k=20&c=qSZAOEM73LthNyqBPN4hEpoj8AGf3ZXCTlcCZn_N3a4=",
    },
    {
        dp: "https://images.unsplash.com/photo-1517708777192-0ab95e4fc80e?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1vc3QlMjBiZWF1dGlmdWxsJTIwZ2lybHN8ZW58MHx8MHx8fDA%3D",
        story:
          "https://images.unsplash.com/photo-1528916451049-e5d097b61db2?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1vc3QlMjBiZWF1dGlmdWxsJTIwZ2lybHN8ZW58MHx8MHx8fDA%3D",
    },
];

var storyx = document.querySelector("#storybox");
var clutter = "";

arr.forEach(function (elem, index) {
    clutter += `
        <div class="story" data-index="${index}">
            <img src="${elem.dp}" alt="Story image">
        </div>
    `;
});

storyx.innerHTML = clutter;

storyx.addEventListener("click", function (event) {
    var target = event.target;

    if (target.tagName === 'IMG') {
        var storyDiv = target.parentElement;
        var index = storyDiv.getAttribute('data-index');

        console.log('Clicked image index:', index);

        var fullscreen = document.querySelector("#fullscreen");
        fullscreen.style.display = "flex";
        fullscreen.style.backgroundImage = `url(${arr[index].story})`;
        storyx.style.display = "none";
       

    }
  
    setTimeout(function(){
        fullscreen.style.display = "none";
        storyx.style.display = "block";
       
    },3000)
});
