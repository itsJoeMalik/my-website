document.getElementById('dataForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const firstname = document.getElementById('firstname').value;
    const lastname = document.getElementById('lastname').value;
    const email = document.getElementById('email').value;
    const location = document.getElementById('location').value;
    const restaurant = document.getElementById('restaurant').value;
    const dish = document.getElementById('dish').value;

    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = `
        <p>Welcome to our website ${firstname} ${lastname} !</p>
        <p><strong>Your email is :</strong> ${email}</p>
        <p><strong>Your location is :</strong> ${location}</p>
        <p><strong>name of restaurant :</strong> ${restaurant}</p>
        <p><strong>The name of dish is :</strong> ${dish}</p>
    `;
});