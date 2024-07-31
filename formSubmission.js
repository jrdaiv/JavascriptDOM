
// function handleSubmit(event){
//     event.preventDefault();
//     const fullName = document.getElementById("name").value;
//     const email = document.getElementById("email").value;
//     alert(`Hello, ${fullName} with the email ${email} Form was submitted successfully`);
//     document.getElementById("myForm").reset();
// }

document.getElementById('myBtn').addEventListener('click', function(event){
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const userInput = {
        name: name,
        email: email,
        message: message,
    };

    console.log('User Input', userInput);
    alert('Form was successfully submitted');
    document.getElementById('myForm').reset();
})





















