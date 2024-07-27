// Get the modal
var modal = document.getElementById("myModal");

// Get the modal content elements
var modalImg = document.getElementById("img01");
var modalVid = document.getElementById("vid01");
var captionText = document.getElementById("caption");

// Get all date links
var dateLinks = document.getElementsByClassName("date-link");

// Attach click event to each date link
for (var i = 0; i < dateLinks.length; i++) {
    dateLinks[i].onclick = function(event) {
        event.preventDefault();
        modal.style.display = "block";
        
        var message = this.getAttribute("data-message");
        var imageSrc = this.getAttribute("data-image");
        var videoSrc = this.getAttribute("data-video");
        
        if (message && imageSrc) 
            {
            modalImg.style.display = "block";
            modalVid.style.display = "none";
            modalImg.src = imageSrc;
            captionText.innerHTML = message;
            }

        else if(message && videoSrc)
            {
            modalImg.style.display = "none";
            modalVid.style.display = "block";
            modalVid.src = videoSrc;
            modalVid.play();
            captionText.innerHTML = message;
            }  

         else if (message) 
            {
            modalImg.style.display = "none";
            modalVid.style.display = "none";
            captionText.innerHTML = message;
            } 

        else if (imageSrc)
            {
            modalImg.style.display = "block";
            modalVid.style.display = "none";
            modalImg.src = imageSrc;
            captionText.innerHTML = message;
            }
    }
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}
