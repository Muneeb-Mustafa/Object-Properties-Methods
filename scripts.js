// function submit_handle(){
//     let firstName = document.getElementById('firstName').value.trim();
//     let lastName = document.getElementById('lastName').value.trim();
//     let email = document.getElementById('email').value.trim();
//     let dob = document.getElementById('dob').value.trim();

//     if(firstName.length < 3){
//         showToast("Please enter your first name correctly");
//         return
//     }

//     if(!email.match(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/)){
//         showToast("Please enter your first name correctly");
//         return
//     }
//     if(!dob){
//         showToast("Please enter your first name correctly");
//         return
//     }

//     let user = {
//         firstName,
//         lastName,
//         email,
//         dob
//     }
//     user.id = Math.random.toString(36).slice(2)
//     user.dateCreated = new Date().getTime();
//     user.status = "active"
//     user.role = "student"
//     users.push(user)
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
//     for(let i=0;i<users.length;i++){
//         tablebody += '<tr>'
//     }

// }




