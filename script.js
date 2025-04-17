const form = document.getElementById('contactForm');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const enquiry = document.getElementById('enquiry').value;

  const message = `Name: ${name}%0AEnquiry: ${enquiry}`;
  const whatsappNumber = '917011804911'; // Correct format: country code + number

  const url = `https://wa.me/${whatsappNumber}?text=${message}`;

  window.open(url, '_blank');
});
