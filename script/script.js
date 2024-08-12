const username = document.querySelector('#username')
const password = document.querySelector('#password')
const form = document.querySelector('.form')
const signOut = document.querySelector('.sign_btn')




form.addEventListener('submit',(e)=>{
    e.preventDefault();

    const usernameValue = username.value;
    const passwordValue = password.value;

    if(usernameValue === '' && passwordValue === ''){
        alert("Please Enter A Username And Password")
    }
    else{
        window.location.href = 'loggedin.html'
    }
})

//sign out
