var form = document.getElementById("contact-form");
    
async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById("my-form-status");
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
        'Accept': 'application/json'
    }
  }).then(response => {
    status.innerHTML = "Thanks for getting in touch, I'll contact you shortly";
    form.reset()
  }).catch(error => {
    status.innerHTML = "Oh! That doesn't seem to have been sent, please try again"
  });
}
form.addEventListener("submit", handleSubmit)