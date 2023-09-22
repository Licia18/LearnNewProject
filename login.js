let data={
    id:"licia",
    password:"licia18"
}

function showlogin(){
    $('.container').show();
    $('#content').hide();
    $('#diaryPaper').hide();
    $('#containerDiaryForm').hide();
    $('.menu-logout').hide()
    $('#barbieSelfie').hide();
}

function showHome(){
    $('.container').hide();
    $('#content').show();
    $('#diaryPaper').hide();
    $('#containerDiaryForm').hide();
    $('.menu-logout').show();
    $('#barbieSelfie').hide();
}

function showDiaryPaper(){
    $('.container').hide();
    $('#content').hide();
    $('#diaryPaper').show();
    $('#containerDiaryForm').hide();
    $('.menu-logout').show();
    $('#barbieSelfie').hide();
}

function showDiaryForm(){
    $('.container').hide();
    $('#content').hide();
    $('#diaryPaper').hide();
    $('#containerDiaryForm').show();
    $('.menu-logout').show();
    $('#barbieSelfie').hide();
}

function showSelfie(){
  $('.container').hide();
  $('#content').hide();
  $('#diaryPaper').hide();
  $('#containerDiaryForm').hide();
  $('.menu-logout').show();
  $('#barbieSelfie').show();
}

// function getMovies(){
//   $.ajax({
//     method: 'GET',
//     url: 'https://moviesminidatabase.p.rapidapi.com/movie/order/upcoming/',
//     headers: {
//       'X-RapidAPI-Key': '6a0836bc9fmshbae54a61849b144p126ce8jsn6fa1af45bfed',
//       'X-RapidAPI-Host': 'moviesminidatabase.p.rapidapi.com'
//     }
//   })
//   .then((response)=>{
//     console.log("re", response)
//   })
//   .done(response=>{
//     console.log(response, "<<<ini data")
//   })
//   .fail((err)=>console.log(err))

// }

if(!localStorage.getItem("isLoggedIn")){
    showlogin()
}else{
    showHome()
}

$(document).ready(function() {
  $('#login').on('submit', function(event) {
    event.preventDefault()
    let userid = $('#userIdLogin').val()
    let password = $('#passwordLogin').val()
    if(!userid || !password){
        Swal.fire({
            icon: 'question',
            text: 'Input User ID and Password',
        })
    }else{
        if(data.id != userid){
            Swal.fire({
                  icon: 'error',
                title: 'Oops...',
                text: 'Your Account Not Found, Register First!',
              })
        }else{
          if(password != data.password){
            showlogin()
              Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'ID or Password Wrong!!',
                })
            }else{
                Swal.fire(
                `Selamat datang ${data.id}`)
                localStorage.setItem("isLoggedIn", "true");
                showHome()
            }
        }
    }
  })

  $('#barbieDiary').click(function(){
    showDiaryPaper()
  })

  $('#buttonAddDiary').click(function(){
    showDiaryForm()
  })

  $('.buttonBackToDiaryPaper').click(function(){
    showDiaryPaper()
})

  $('.buttonBack').click(function(){
    showHome()
})

$('#selfie').click(function(){
  showSelfie()
})

//   $('#movies').click(function(){
//   console.log('masuk ni cuyy')
//   getMovies()
// })

  $('.menu-logout').click(function(){
    localStorage.clear(); 
    showlogin()
    $('.menu-logout').hide()
  })
})


// // let tombolLoginEl = document.getElementById("tombolLogin");

// // tombolLoginEl.addEventListener("click", function() {
// //     // konten.innerHTML = "<h2>Selamat datang!</h2>";
// //     alert(`Selamat Datang ${userIdValue}`)
// // });



// let loginButton = document.getElementById("tombolLogin")
// loginButton.addEventListener("click", function(event) {
//     event.preventDefault()
//     // Ambil nilai dari input dengan ID "userId" dan "password"
//     const userIdValue = document.getElementById("userId").value;
//     const passwordValue = document.getElementById("password").value;

    // Lakukan apa yang Anda inginkan dengan nilai yang diperoleh
    // console.log("User ID: ", userIdValue);
    // console.log("Password: ", passwordValue);
    
    // Contoh validasi sederhana
    // if ( data.id === userIdValue  && data.password === passwordValue) {
    //     // Jika User ID dan Password terisi, lakukan login atau aksi lain
    //     alert("Selamat datang " + data.id);
    //     // console.log("Login berhasil!");
    // } else if (data.id !== userIdValue){
    //     alert("Akun anda belum terdaftar silahkan register terlebih dahulu!");
    // } else if (data.id === userIdValue  && data.password !== passwordValue){
    //     // Jika ada input yang kosong, beri peringatan
    //     alert('Password yang anda masukkan salah!');
    //     // console.log("Isi User ID dan Password terlebih dahulu.");
    // }else{
    //     alert("Isi User ID dan Password terlebih dahulu.");

    // }

    // if(!userIdValue || !passwordValue){
    //     alert("Isi User ID dan Password terlebih dahulu.")
    // }else{
    //     if(data.id != userIdValue){
    //         alert("Akun anda belum terdaftar silahkan register terlebih dahulu!")
            
    //     }else{
    //         if(passwordValue != data.password){
    //             alert('ID atau Password yang anda masukkan salah!')
    //         }else{
    //             alert("Selamat datang " + data.id)
    //             sessionStorage.setItem("isLoggedIn", "true");
    //             window.location.href = "home.html"
    //         }
    //     }
    // }
// });
