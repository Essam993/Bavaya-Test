const counters = document.querySelectorAll('.counter');
const speed = 100; 

counters.forEach(counter => {
    const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;


        // Check if target is reached
        if (count < target) {
            // Add inc to count and output in counter
            counter.innerText = count + 1;
            // Call function every ms
            setTimeout(updateCount, 1);
        } else {
            counter.innerText = target;
        }
    };

    updateCount();
});





