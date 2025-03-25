
// about
let CurrentSlider=0
ShowSlider(CurrentSlider)
let clearInterval1=setInterval(automoveslide,4000)

function ShowSlider(index){
    let slides=document.getElementsByClassName('slide')

    if(index>=slides.length){
        CurrentSlider=0
    }
    else if(index<0){
        CurrentSlider=slides.length-1
    }
    else{
        CurrentSlider=index
    }

     for(i=0;i<slides.length;i++){
        slides[i].style.display='none'
    }
    slides[CurrentSlider].style.display='block'
}

function automoveslide(){
    ShowSlider(CurrentSlider + 1)
}

// course

 const swiper = new Swiper('.swiper', {
      slidesPerView: 4, // Show 4 cards at a time
      spaceBetween: 20, // Space between cards (in px)
      loop: true, // Loop through slides
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      autoplay: {
        delay: 3000, // Auto-slide every 3 seconds
        disableOnInteraction: false,
      },
      breakpoints: {
        320: {
          slidesPerView: 1, // Show 1 card for small screens
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 2, // Show 2 cards for tablets
          spaceBetween: 15,
        },
        1024: {
          slidesPerView: 4, // Show 4 cards for desktops
          spaceBetween: 20,
        },
      },
    });

 // stats

        // Define the start and end numbers1
        const startNumber = 1;
        const endNumber = 100;
        let currentNumber = startNumber; // Initialize the current number to start number

        const counterElement = document.getElementById('counter');

        // Function to increment the counter every second until the end number
        function startCounter() {
            const interval = setInterval(() => {
                counterElement.textContent = currentNumber; // Display the current number
                currentNumber++; // Increment the number

                // Stop the counter once the end number is reached
                if (currentNumber > endNumber) {
                    clearInterval(interval); // Stop the interval
                }
            }, 50); // 1000 milliseconds = 1 second
        }

        // Start the counter when the page loads

         
      startCounter(); // Start the counter based on scroll position

        // startCounter();


    // Define the start and end numbers2
        const startNumber1 = 1;
        const endNumber1 = 29;
        let currentNumber1 = startNumber1; // Initialize the current number to start number

        const counterElement1 = document.getElementById('counter1');

        // Function to increment the counter every second until the end number
        function startCounter1() {
            const interval1 = setInterval(() => {
                counterElement1.textContent = currentNumber1; // Display the current number
                currentNumber1++; // Increment the number

                // Stop the counter once the end number is reached
                if (currentNumber1 > endNumber1) {
                    clearInterval(interval1); // Stop the interval
                }
            }, 100); // 1000 milliseconds = 1 second
        }

        // Start the counter when the page loads
   
      startCounter1(); // Start the counter based on scroll position
    
        // startCounter1();


        // Define the start and end numbers3
        const startNumber2 = 1;
        const endNumber2 = 32;
        let currentNumber2 = startNumber2; // Initialize the current number to start number

        const counterElement2 = document.getElementById('counter2');

        // Function to increment the counter every second until the end number
        function startCounter2() {
            const interval2 = setInterval(() => {
                counterElement2.textContent = currentNumber2; // Display the current number
                currentNumber2++; // Increment the number

                // Stop the counter once the end number is reached
                if (currentNumber2 > endNumber2) {
                    clearInterval(interval2); // Stop the interval
                }
            }, 100); // 1000 milliseconds = 1 second
        }

        // Start the counter when the page loads
        startCounter2();


        // Define the start and end numbers4
        const startNumber3 = 1;
        const endNumber3 = 354;
        let currentNumber3 = startNumber3; // Initialize the current number to start number

        const counterElement3 = document.getElementById('counter3');

        // Function to increment the counter every second until the end number
        function startCounter3() {
            const interval3 = setInterval(() => {
                counterElement3.textContent = currentNumber3; // Display the current number
                currentNumber3++; // Increment the number

                // Stop the counter once the end number is reached
                if (currentNumber3 > endNumber3) {
                    clearInterval(interval3); // Stop the interval
                }
            }, 20); // 1000 milliseconds = 1 second
        }

        // Start the counter when the page loads
        startCounter3();

    // form
        function validateForm()
  {
    let isValid=true

    document.getElementById('nameError').textContent=''
    document.getElementById('emailError').textContent=''
    document.getElementById('classError').textContent=''
   

    let name=document.getElementById('name').value
    if(name === '')
    {
      document.getElementById('nameError').textContent="Enter a name"
      isValid=false
    }

    let email=document.getElementById('email').value
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(email === '')
    {
      document.getElementById('emailError').textContent="Enter  a Email"
      isValid=false
    }
    else if(!emailPattern.test(email))
    {
      document.getElementById('emailError').textContent="Enter the email Format"
      isValid=false
    }

    let classes=document.getElementById('classes').value
    if(classes === '')
    {
      document.getElementById('classError').textContent="Enter a classes"
      isValid=false
    }

    let submit=document.getElementById('submit').value
    if(name !=='' && email !=='' && classes !==''){
        alert('Form Submit successfully')
        isValid=true

    }
   
    

    return isValid
  }





