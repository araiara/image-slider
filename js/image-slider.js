var count = 0;
function nextSlide() {
    count++;
    document.getElementById('previous').disabled = false;

    switch (count) {
        case 1:
            document.getElementById('preview').src="./img/2.JPG";
            break;
        case 2:
            document.getElementById('preview').src= "./img/3.JPG";
            break;
        default:
            document.getElementById('preview').src= "./img/1.jpg";
            break;
    }

    if (count >= 3) {
        count = 0;
    }   

    // console.log(count, "Next");
}

function previousSlide() {
    count--;
    
    if (count <= -1) {
        count = 2;
    } 

    switch (count) {
        case 1:
            document.getElementById('preview').src="./img/2.JPG";
            break;
        case 2:
            document.getElementById('preview').src= "./img/3.JPG";
            break;
        default:
            document.getElementById('preview').src= "./img/1.jpg";
            break;
    }
    // console.log(count, "Previous");
}

