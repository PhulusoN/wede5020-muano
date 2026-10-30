document.addEventListener("DOMContentLoaded", () => {
   

    const toggle = document .querySelector(".menu-toggle");
    const menu = document.getElementById("primary-menu");

    if (toggle && menu) {
        const setOpen = ( open) =>{
            toggle.classList.toggle("open", open);
            menu.classList.toggle("open", open);
            toggle.setAttribute("aria-expanded", String(open));
        };

        toggle.addEventListener("click", () => {
            setOpen(!menu.classList.contains("open"));
        });

        menu.querySelectorAll("a").forEach((link) => {
            link.addEventListener("click", () => {
                setOpen(false);
            });
        });

            //image slider//

    const heroImages = [
        "research/hero2.jpg", 
        "research/heroo1.jpg", 
        "research/heroo2.jpg"
    ];
    
    const aboutImages = [
        "research/about-us2.jpg", 
        "research/mission.jpg", 
        "research/about2.jpg"
    ];
    
    const missionImages = [
        "research/vision2.jpg", 
        "research/hero3.jpg", 
        "research/vision3.jpg"
    ];

   
    const heroImgElement = document.querySelector(".hero-image");
    const aboutImgElement = document.querySelector(".about-us-image");
    const missionImgElement = document.querySelector(".mission-image");

    // 3. Image Slider Controller Function
    function setupSlider(element, imageArray, intervalTime = 3000) {
        if (!element) return; // Guard clause in case element is missing
        
        let currentIndex = 0;

        setInterval(() => {
            // Increment index and loop back to 0 at the end of the array
            currentIndex = (currentIndex + 1) % imageArray.length;
            
            // Change the image source
            element.src = imageArray[currentIndex];
        }, intervalTime);
    }

    // 4. Initialize sliders (Changes every 3 seconds)
    setupSlider(heroImgElement, heroImages, 3000);
    setupSlider(aboutImgElement, aboutImages, 3000);
    setupSlider(missionImgElement, missionImages, 3000);
    }
});
