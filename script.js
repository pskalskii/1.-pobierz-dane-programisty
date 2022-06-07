$(document).ready(function () {
  let userData = $('<div id="dane-programisty"></div>');
  let jqueryBody = $(`body`);
  jqueryBody.append(userData);

  $("#get-data").click(function () {
    $.getJSON(
      "https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php"
    ).done(function (data) {
      let pUser = $(`<p></p>`).text(
        `Name: ${data.imie}, Surname: ${data.nazwisko}, Profession: ${data.zawod}, Firm: ${data.firma}`
      );

      $("#dane-programisty").append(pUser);

      console.log("#dane-programisty");
    });
  });
});
