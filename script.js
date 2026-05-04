const form = document.getElementById("myForm");

form.addEventListener("submit", function(event) {
  event.preventDefault();

    let name = document.getElementById("name").value;
      let email = document.getElementById("email").value;

        // Validation
          if (name === "" || email === "") {
              alert("Please fill all fields");
                  return;
                    }

                      if (!email.includes("@")) {
                          alert("Enter valid email");
                              return;
                                }

                                  // Show popup
                                    document.getElementById("popup").style.display = "block";
                                    });

                                    function closePopup() {
                                      document.getElementById("popup").style.display = "none";
                                      }