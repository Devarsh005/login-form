// if (validateForm() == true) {
    
// function saveData() {
    //     var username = document.getElementById('name').value
    //     var userEmail = document.getElementById('email').value
    //     var password = document.getElementById('pwd').value
    //     var confirmpassword = document.getElementById('cpwd').value
    
    
    //         // console.log(username)
    //         // console.log(userEmail)
    //         // console.log(password)
    //         // console.log(confirmpassword)
    //         // x.push(username, userEmail, password)
    //         // console.log(x)
    //         if (x == []) {
        //             x.push(username, userEmail, password)
        //         }
        //         else {
            //             for (let a of x) {
                //                 if (a == userEmail) {
                    //                     alert('you have already an account , then click on login now!')
                    //                     break;
                    //                 }
                    //             }
                    //         }
                    //     }
                    // document.getElementById('dump').innerText = x
                    // if (x.includes()) {
                        //     alert('you have already an account , then click on login now!')
                        // }
                        // else if (password != cpassword) {
                            //     alert('password not match')
                            // }
                            // else {
                                //     arr.push(username, userEmail, pwd)
                                // }
                                
                                // }
                                // console.log(nam)
                                // var ema = document.getElementById('email').innerText
                                // var pss = document.getElementById('pwd').innerText
                                // var cpss = document.getElementById('cpwd').innerText
                                
                                // const emailbutton = document.getElementById('email')
                                // emailbutton.addEventListener('mouseout',verifyEmail())
                                
var x = new Array();
// function saveData() {
//     var username = document.getElementById('name').value
//     var userEmail = document.getElementById('email').value
//     var password = document.getElementById('pwd').value;
//     // var confirmpassword = document.getElementById('cpwd').value

//     localStorage.setItem('name',username)
//     localStorage.setItem('email',userEmail)
//     localStorage.setItem('password',password)
//     alert('successfully saved!')

//     // console.log(username)
//     // console.log(userEmail)
//     // console.log(password)
//     // console.log(confirmpassword)
//     // x.push(username, userEmail, password)
//     // console.log(x)
//     // if (x == []) {
//     //     x.push(username, userEmail, password)
//     // }
//     // else {
//     //     for (let a of x) {
//     //         if (a == userEmail) {
//     //             alert('you have already an account , then click on login now!')
//     //             break;
//     //         }
//     //         else {
//     //             x.push(username, userEmail, password)
//     //         }
//     //     }
//     // }
// }



function saveData() {
    const username = document.getElementById('name').value;
    const userEmail = document.getElementById('email').value;
    const password = document.getElementById('pwd').value;

    // Get existing users string and split into an array
    let usersData = localStorage.getItem("users");
    let users = usersData ? usersData.split(";") : [];

    // Check if user with this email already exists
    for (let user of users) {
        let parts = user.split(",");
        if (parts[1] === userEmail) {
            alert("Account already exists. Please login.");
            return;
        }
    }

    // Save new user as "username,email,password"
    users.push(`${username},${userEmail},${password}`);
    localStorage.setItem("users", users.join(";"));
    alert("Successfully registered!");
}   


function validateForm() {
    var isFormValid = true;
    isFormValid &= verifyName();
    isFormValid &= verifyEmail();
    isFormValid &= verifyPassword();
    isFormValid &= verifyConfirmPwd();
    return isFormValid ? true : false;
}

function verifyEmail() {
    ema = document.getElementById('email').value
    const rex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (ema ===""){
        document.getElementById('emailError').innerText = ''
    }
    else if (!rex.test(ema)) {
        document.getElementById('emailError').innerText = 'invalid email!'
    }
    else {
        document.getElementById('emailError').innerText = ''
    }
}
function verifyPassword() {
    const passwordRegx = /^.*[a-zA-z0-9]+.*[!#$%&? ]$/
    pass = document.getElementById('pwd').value
    if (passwordRegx.test(pass)) {
        document.getElementById('passError').innerText = ''
    }
    else {
        document.getElementById('passError').innerText = 'create a strong password'
    }
    // strong password ->> dev56278R$&
}
function verifyConfirmPwd() {
    password = document.getElementById('pwd').value
    cpassword = document.getElementById('cpwd').value
    if (cpassword != password) {
        document.getElementById('cpwderror').innerText = 'confirm password doesn\'t match';
    }
    else{
        document.getElementById('passError').innerText = ''
    }
}
function verifyName() {
    userName = document.getElementById('name').value
    userNameRegx = /.*[a-zA-Z]/
    if (userName == '') {
        document.getElementById('usernameError').innerText = 'username can\'t be blank'
    }
    // else if(userNameRegx.test(userName)){
    //     document.getElementById('usernameError').innerText = 'username don\'t have digit'
    // }
    else{
        document.getElementById('passError').innerText = ''
    }
}
// function myThirdFunction() {
//   ema    = document.getElementById('email').value
// const rex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//     if(rex.test(ema)){
//         document.getElementById("demo").innerText += ""
//     }
//     else{
//         document.getElementById("demo").innerText += "invalid Email"
//     }
// }