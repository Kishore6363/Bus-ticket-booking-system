// Initialize AOS (Animate on Scroll)
AOS.init();

// Form submission handler
const form = document.getElementById('booking-form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get values from the form inputs
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const departure = document.getElementById('departure').value;
    const destination = document.getElementById('destination').value;
    const date = document.getElementById('date').value;
    const seats = document.getElementById('seats').value;

    // Validate that all fields are filled in
    if (!name || !email || !departure || !destination || !date || !seats) {
        alert("Incomplete Form\nPlease ensure all fields are filled correctly!");
        return;
    }

    // Use SweetAlert for the confirmation message
    Swal.fire({
        title: 'Booking Confirmed!',
        html: `
            <b>Name:</b> ${name}<br>
            <b>Email:</b> ${email}<br>
            <b>From:</b> ${departure} <b>to</b> ${destination}<br>
            <b>Date:</b> ${date}<br>
            <b>Seats:</b> ${seats}
        `,
        icon: 'success',
        confirmButtonText: 'OK'
    });

    // Reset the form after successful submission
    form.reset();
});

// Smooth scroll function to bring the form into view when "Get Your Ticket" button is clicked
function scrollToForm() {
    document.querySelector('.form-container').scrollIntoView({ behavior: 'smooth' });
}


