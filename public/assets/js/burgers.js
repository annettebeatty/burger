// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  console.log("Got in");

  $(".devour-burger").on("click", function(event) {
    var id = $(this).data("id");

    var newBurgerState = {
      devoured: true
    };

    // Send the PUT request.
    $.ajax("/api/burger/" + id, {
      type: "PUT",
      data: newBurgerState
    }).then(
      function() {
        // console.log("burger devoured ", newBurgerState);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    let name = $("#ca").val().trim();

    // Don't let them add a blank burger
    if (name == "")
      return;

    //console.log("Form Adding burger ", $("#ca").val().trim())

    var newBurger = {
      name: name,
      devoured: false
    };

    //console.log("Sending to POST ", newBurger);
    // Send the POST request.
    $.ajax("/api/burger", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        //console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
