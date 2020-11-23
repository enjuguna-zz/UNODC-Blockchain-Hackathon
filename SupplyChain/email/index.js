function sendEmail(email_id) {
  Email.send({
    Host : "smtp.netcube.co.ke",
    Username : "site@netcube.co.ke",
    Password : "Appleste@ldth8214",
    To : email_id,
    From : "site@netcube.co.ke",
    Subject : "Asili Tender",
    Body : "Congratulations, tender is alloted to you Item id: "
   
  })
  .then(function(message){
    alert("mail sent successfully")
  });
}

