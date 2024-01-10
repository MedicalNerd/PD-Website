
const worksInfo = {
    "movie-website": {
        "title": "Movie Website GA",
        "desc": "A Movie Website I designed for my assignment that involves a user creating an account that is saved into an external database which can be called again to login or delete the account. Furthermore,The Design of the website is losely based on Golden Villages Design with a review function that allows the account holder to display their reviews depending on the specific movie and will display their username and the ability to edit and delete their own reviews while not allowing others to change the review.",
        "images": ["images/movie.png","images/C203GAHome.png","images/register.png","images/login.png"],
        "icons":["icons/html.png","icons/PHP-logo.svg.png"],
        
    }, 

    "digital-book-service": {
        "title": "Book Service",
        "desc": "My company's homepage and concept combine a passion for music and reading, modeled after Amazon Audible. With a nod to yin and yang and a blue color scheme for contrast, the logo, which features headphones and a book face, represents the harmony between reading and music. The green bar gives a contemporary touch and is evocative of Leo 2.0. The portfolio page features transparent pieces centered around a central shape, emulating the design of Scrom parcels. The CV, which draws inspiration from Scrom, emphasizes your advantages to draw in possible backers. To establish your reputation, your about me section features a professional photo along with mentions of your collaborations with well-known authors and performers. The design of the home page, which includes a search bar and a free trial button, is similar to Audible",
        "images": ["images/T252GA.png","images/T252GAAbout.png","images/T252GAPort.png","images/T252GAResume.png"],
        "icons":["icons/illustrator.png"]
    },
    "Name-card":{
        "title": "Name Card",
        "desc": "I designed this Namecard using illustrator by using some references from the internet about using lines in Typography to create a Y and a L since it is a nickname people I know call me by with the circle around it to add more content to the name card and to have people's attention be focused onto the YL. The back I used gray as i think it helps dull the background so much to allow the logo and the text  to be highlighted and allow for the audience to focus their attention onto it. Overall my Design is inspired by the more modern design of some namecards and is simple and clean like modern designs in general.",
        "images": ["images/Asset 1.png","images/Asset 2.png"],
        "icons":["icons/illustrator.png","icons/photoshop.png"],
    },
    "module-app":{
        "title": "Module App",
        "desc": "During My Android Development Class I designed the background using Adobe Illustrator and import it into Android Studios and used Java to coded it out for each individual sections. Each part of the module page is a different Activity. I would say the  ",
        "images": ["images/moduleapp.png"],
        "icons":["icons/illustrator.png","icons/android-icon.png"],
        "videos":[],
    },

}

document.addEventListener("DOMContentLoaded", () => {
    let id = sessionStorage.getItem("id");
    if (worksInfo[id]) {
        document.querySelector(".desc").innerText = worksInfo[id].desc;
        document.querySelector(".title").innerText = worksInfo[id].title;
        worksInfo[id].images.forEach((e) => {
            let card = document.createElement("div");
            card.classList.add("card");
            
            let image = document.createElement("img");
            image.src = e;
            image.classList.add("gallery");

            card.appendChild(image);
            // document.getElementById("yessir").appendChild(card);
        })
        worksInfo[id].icons.forEach((e) => {
            let card = document.createElement("div");
            card.classList.add("card-skills");
    
            let image = document.createElement("img");
            image.src = e;
            image.classList.add("card-img");

            card.appendChild(image);
            document.getElementById("skills-container").appendChild(card);
        })
        worksInfo[id].images.forEach((e) => {
            let card = document.createElement("div");
            card.classList.add("card-skills");
    
            let image = document.createElement("img");
            image.src = e;
            image.classList.add("popup");
            
            card.appendChild(image);
       
            document.getElementById("gallery").appendChild(card);
            
        })
       
        
    } else {
        console.log("does not exists")
    }
})