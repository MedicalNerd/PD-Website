
            window.onload = function() {
                document.getElementById("popup").style.display = "none";
                console.log(document.getElementById("popup").style.display)
                console.log("asd");

                document.querySelectorAll(".popup").forEach(function(e) {
                    e.addEventListener("click", function() {
                      
                    document.getElementById("image-popup-image").src = e.getAttribute("src");
                    document.querySelector(".image-popup").style.display = "block"  
                    })
                })

                document.querySelector(".close-button").addEventListener("click", function() {
                    document.querySelector(".image-popup").style.display = "none"
                })
            }
