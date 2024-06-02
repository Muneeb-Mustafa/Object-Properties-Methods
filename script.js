
// let users = []
// function handleSubmit(event) {
//     event.preventDefault();
    
//     let firstName = document.getElementById("firstName").value.trim();
//     let lastName = document.getElementById("lastName").value.trim();
//     let email = document.getElementById("email").value.trim();
//     let dob = document.getElementById("dob").value;
    
//     if (firstName.length < 3) {
//         showToast("Please enter your first name correctly");
//         return;
//     }
//     if (!email.match(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/)) {
//         showToast("Please enter your email correctly");
//         return;
//     }
//     if (!dob) {
//         showToast("Please enter your date of birth");
//         return;
//     }
//     let user = {
//         firstName : firstName,
//         lastName :lastName,
//         email : email,
//         dob: dob
//     }
//     // console.log(user)
    

//     user.id = Math.random().toString(36).slice(2);
//     user.dateCreated = new Date().getTime;
//     user.status = "active";
//     user.role = "student";
//     users.push(user);
//     showToast("New User has been added successfully");
//     showTable();

    
// }
// function showTable(){
//     if (!users.length){
//         showToast("Please enter your single table");
//     }
//     let tablestartingCode = '<div class = "table-responsive"><table class="table">';
//     let tableHead = '<thead><tr><th scope="col">#</th><th scope="col">First Name</th><th scope="col">Last Name</th><th scope="col">Email</th><th scope="col">Date of Birth</th></tr></thead>'
//     let tableEnding = '</table><div>'

//     let tablebody = ''
//     for (let i=0; i<users.length; i++){
//         tablebody += `<tr><th scope="row">${i+1}</th><td>${users[i].firstName}</td><td>${users[i].lastName}</td><td>${users[i].email}</td><td>${users[i].dob}</td></tr>`
//     }
//     let table = tablestartingCode + tableHead + '<tbody>'  + tablebody + '</tbody>' + tableEnding

// getOutput(table)
// }

// document.getElementById("myForm").addEventListener("submit", handleSubmit);


// // Print Users Table
// function printUser(){
//     if (!users.length){
//         showToast("Please enter your single value.");
//     }
//     // for (let i = 0; i < users.length; i){
//     //     let user = users[i];
//     //     console.log(user)
//     //     break
//     // }
//     for(let user of users){
//         console.log(user)
//         showToast("Users has been successfully printed in console");
//     }
    
// }

// function showImage(){
    
// }



// function showToast(message) {
//     Toastify({
//         text: message,
//         duration: 3000,
//         close: true,
//         gravity: "bottom", // `top` or `bottom`
//         position: "bottom-right", // `left`, `center` or `right`
//         stopOnFocus: true, // Prevents dismissing of toast on hover
//         style: {
//             background: "linear-gradient(to right, #0D6EFD, #DC3545)",
//         },
//     }).showToast();
// }

// function getOutput(value){
//     document.getElementById("result").innerHTML = "<h4>" + value + "<h4>";
//   }

//   function clearOutput() {
//     document.getElementById('result').innerHTML = "";
// }

// document.getElementById("clear_output").onclick = function(){

//     document.getElementById('result').innerHTML = ('');
// }






let users = [];

document.getElementById("myForm").addEventListener('submit',handleSubmit);



function handleSubmit(){
    event.preventDefault();
    let firstName = document.getElementById("firstName").value.trim();
    let lastName = document.getElementById("lastName").value.trim();
    let email = document.getElementById("email").value.trim();
    let dob = document.getElementById("dob").value.trim();
    
    if (firstName.length < 3) {
        showToast("Please enter your first name correctly");
        return;
    }
    if (lastName.length < 3) {
        showToast("Please enter your last name correctly");
        return;
    }
    if(!email.match(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/)){
        showToast("Please enter your email correctly");
        return;
    }
    if(!dob){
        showToast("Please enter your date of birth");
        return;
    }


    
    if(users.some(user => user.firstName === firstName)){
        showToast("User already exists");
        return;
    }
    if(users.some(user => user.lastName === lastName)){
        showToast("User already exists");
        return;
    }
    if(users.some(user => user.email === email)){
        showToast("User already exists");
        return;
    }

    let user = {
        firstName,
        lastName,
        email,
        dob
    }

    user.id = Math.random().toString(36).slice(2);
    user.dateCreated = new Date().getTime;
    user.status = "active";
    user.role = "student";
    users.push(user);
    console.log(users);
    showToast("A new user has been successfully added.");
    showTable();
    localStorage.setItem("users", JSON.stringify(users))

}



function showTable(){
    let tablestartingCode = '<div><table class="table">';
    let tablehead = '<thead><tr><th scope="col">#</th><th scope="col">First Name</th><th scope="col">Last Name</th><th scope="col">Email</th><th scope="col">Date of Birth</th></tr></thead>'
    let tableEndingCode = '</table></div>';

    let tablebody = "";
    for(let i=0;i<users.length;i++){
        tablebody += `<tr>
        <th scope="row">${i +1}</th>
        <td>${users[i].firstName}</td>
        <td>${users[i].lastName}</td>
        <td>${users[i].email}</td>
        <td>${users[i].dob}</td>
      </tr>`
    }
    let table = tablestartingCode + tablehead + "<tablebody>" + tablebody + "</tablebody>" + tableEndingCode;

    // document.getElementById("table").innerHTML = getOutput;
    getOutput(table)
 



    
}




function printUser(){
    console.log(users)
}



















function showToast(message) {
    Toastify({
        text: message,
        duration: 3000,
        close: true,
        gravity: "bottom", // `top` or `bottom`
        position: "bottom-right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: "linear-gradient(to right, #0D6EFD, #DC3545)",
        },
    }).showToast();
}

function getOutput(value){
    document.getElementById("result").innerHTML = "<h6>" + value + "<h6>";
  }

  function clearOutput() {
    document.getElementById('result').innerHTML = "";
}

document.getElementById("clear_output").onclick = function(){

    document.getElementById('result').innerHTML = ('');
}