// var x = new Array()
// function saveData(){
//     var email = document.getElementById('email').value
//     var password = document.getElementById('pwd').value
//     // i just created an empty array and put the data which is not in array
//     // create a empty array
//     x.push(email,password)
//     // console.log(arr)
//     document.getElementById('fff').innerText='array is '+x
//     console.log(x)
// }

// function emailValidator(){
//     x = document.getElementById('email').value
//     atsymbol = x.indexOf('@')
//     dotsymbol = x.lastIndexOf('.')
//     space = x.indexOf(' ')
//     doubledot = x.indexOf('..')

//     console.log(atsymbol)
//     if(x==""){
//         document.getElementById('emailError').innerText='email cannot be blank'
//         // break;
//     }
//     else if(atsymbol==-1){
//         document.getElementById('emailError').innerText='email must have one @'
//     }
//     else if(atsymbol==0){
//         document.getElementById('emailError').innerText ='@ does not at the starting'
//     }
//     else if(dotsymbol==-1){
//         document.getElementById('emailError').innerText = 'must be one .'
//     }
//     else if(dotsymbol==0){
//         document.getElementById('emailError').innerText = '. does not at the starting'
//     }
//     else if(dotsymbol<atsymbol+1){
//         document.getElementById('emailError').innerText = '. does not before @'
//     }
//     else if(space>=0){
//         document.getElementById('emailError').innerText = 'space not allowed'
//     }
//     else if(doubledot>=0){
//         document.getElementById('emailError').innerText='doubledot not allowed'
//     }
//     else{
//         document.getElementById('emailError').innerText=''
//     }
// }
// function passwordValidator(){
//     x = document.getElementById('pwd').value
//     if(x.length<=8){
//         document.getElementById('pwderror').innerText='length must be 8 or greater'
//     }
//     else{
//         document.getElementById('pwderror').innerText=''
//     }
// }
// document.getElementById('pwd').addEventListener(passwordValidator,mouseOut)

// email validation using regex
// let emailid = document.getElementById('email').value
// var isvalid = emailid.match(regex)
// const element = document.getElementById('email')
// element.addEventListener('mouseout',emailValidator)
// element.addEventListener('mouseover',emailValidator)
// function emailValidator(){
//     let emailid = document.getElementById('email').value
//     const emailregex =/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//     if(!emailregex.test(emailid)){
//         // document.getElementById('emailError').innerText='email is not valid!'
//         console.log('not valid')
//     }
// }


// function verifyEmail() {
//     let ema = document.getElementById('email').value
//     const rex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//     if (rex.test(ema)) {
//         document.getElementById('passError').innerText = ''
//     }
//     else {
//         document.getElementById('emailError').innerText = 'invalid email!'
//     }
// }
// function verifyPassword() {
//     const passwordRegx = /^.*[a-zA-z0-9]+.*[!#$%&? ]$/
//     pass = document.getElementById('pwd').value
//     if (passwordRegx.test(pass)) {
//         document.getElementById('pwderror').innerText = ''
//     }
//     else {
//         document.getElementById('pwderror').innerText = 'create a strong password'
//     }
//     // strong password ->> dev56278R$&
// }

// function check(){
//    userEmail= document.getElementById('email').value;
//    userPassword= document.getElementById('pwd').value

//     // already stored data
//     x=localStorage.getItem('email')
//     y = localStorage.getItem('pwd')
//     if(userEmail ==x && userPassword==y){
//         alert('you are logged in');
//     }
// }

function verifyEmail() {
    const email = document.getElementById('email').value.trim();
    const emailError = document.getElementById('emailError');
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (email === '') {
        emailError.innerText = '';
    } else if (!regex.test(email)) {
        emailError.innerText = 'Invalid email!';
    } else {
        emailError.innerText = '';
    }
}

function verifyPassword() {
    const password = document.getElementById('pwd').value;
    const passwordError = document.getElementById('pwderror');
    const regex = /^.*[a-zA-Z0-9]+.*[!#$%&? ]+.*$/;

    if (password === '') {
        passwordError.innerText = '';
    } else if (!regex.test(password)) {
        passwordError.innerText = 'Create a strong password';
    } else {
        passwordError.innerText = '';
    }
}


// Store dummy data in localStorage (for testing)
function check() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("pwd").value;
    // const emailError = document.getElementById('emailError');
    // const passwordError = document.getElementById('pwderror');
    if ((email == "") && (password == "")) {
        emailError = document.getElementById('emailError').innerText = "email cannot be blank"
        passwordError = document.getElementById('passwordError').innerText = "password cannot be blank"
    }
    else {
        let usersData = localStorage.getItem("users");
        let users = usersData ? usersData.split(";") : [];

        for (let user of users) {
            let parts = user.split(",");
            if (parts[1] === email && parts[2] === password) {
                alert("You are logged in!");
                return;
            }
        }
    }
}

// validate form
// function validateform(){
//      isright = true;
//      isright &= verifyEmail();
//      isright &= verifyPassword();
//      return isright ? true:false;
// }