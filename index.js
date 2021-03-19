//
//
// var form = document.querySelector('.needs-validation');
//
// form.addEventListener('submit', function(event) {
//   if (form.checkValidity() === false) {
//     event.preventDefault();
//     event.stopPropagation();
//   }
//   form.classList.add('was-validated');
// })


// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation');
  var errorMessage = document.getElementById("errorClass");

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
          // errorMessage.classList.remove("error-message-hidden")
        }
        form.classList.add('was-validated')


      }, false)
    })
})()
