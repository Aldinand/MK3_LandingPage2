document.getElementById('LoginForm').addEventListener('submit', function(event){
    event.preventDefault();

    const correctUsername = 'aldi';
    const correctpassword = 'aldi';

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if(username === correctUsername && password === correctpassword){
        alert("username atau password tidak susai");
    }
});