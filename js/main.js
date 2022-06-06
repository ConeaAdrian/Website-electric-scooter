$(function () {
  $("#myBtn").click(function () {
    $("#myModal").modal();
  });

  $("#MyBtn").click(function () {
    $("#MyModal").modal();
  });

  $(".indicator").click(function () {
    $(".logo").css("transform", "scale(0.7)");
  });
  $("#first-indicator").click(function () {
    $(".logo").css("transform", "scale(1)");
  });

  if ($(window).width() < 1300) {
    $(".pers-container").slick({
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 6,
      slidesToScroll: 8,
      prevArrow:
        "<img class='a-left control-c prev slick-prev' src='assets/img/arrow_left.png'>",
      nextArrow:
        "<img class='a-right control-c next slick-next' src='assets/img/arrow_right.png'>",
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
      ],
    });
  } else {
    $(".pers-container").slick("unslick");
  }
  //Burger
  $(".header_burger").click(function (event) {
    $(".header_burger").toggleClass("active");
    $(".menu").toggleClass("menu_active");
    $(".navbar").toggleClass("navbar_active");
    $("body").toggleClass("body_active");
  });
});

$(document).ready(function () {
  $(document).ready(function () {
    $(".card-header").click(function () {
      // self clicking close

      $(".card .card-body").removeClass("active").slideUp();
      $(".card .card-header span").removeClass("fa-minus").addClass("fa-plus");
      $(this).next(".card-body").addClass("active").slideDown();
      $(this).children("span").removeClass("fa-plus").addClass("fa-minus");
    });
  });

  $("#switcher").change(function () {
    if ($(this).is(":checked")) {
      $("body").attr("data-theme", "dark");
    } else {
      $("body").attr("data-theme", "light");
    }
  });
});

(function () {
  var words = [
      "Toți cei care afirmă că violența e în regulă, se referă la ea doar ca la o modalitate de a atinge pacea și dreptatea. Dar pacea și dreptatea sunt nonviolente… adică sfârșitul istoriei. Cei care abandonează nonviolența nu au niciun simț al istoriei. Mai degrabă ei trec prin istorie trădând-o.",
      "Oamenii pot fi făcuţi să urmeze o cale de acţiune, dar se poate să nu fie făcuţi şi pentru a o înţelege.",
      "„A-ți cunoaște neștiința este partea cea mai bună a cunoașterii.”",
      "Istoria este martorul care confirmă trecerea timpului, iluminează realitatea, vitalizează memoria, oferă călăuzire în viața de zi cu zi și ne aduce știri din antichitate.",
      "Vine o vreme, care vine, dar mai rar în istorie, când passim din lumea veche în cea nouă, când o epocă se sfârșește, și când sunetul unei națiuni, de mult oprimate, își găsește forța de expresie.",
    ],
    i = 0;
  setInterval(function () {
    $(".citat").fadeOut(function () {
      $(this)
        .html(words[(i = (i + 1) % words.length)])
        .fadeIn();
    });
  }, 10000);
})();

(function () {
  var words = [
      "Andre Trocme",
      "Confucius",
      "Confucius",
      "Marcus Tullius Cicero",
      "Jawaharial Nehru",
    ],
    i = 0;
  setInterval(function () {
    $(".autor").fadeOut(function () {
      $(this)
        .html(words[(i = (i + 1) % words.length)])
        .fadeIn();
    });
  }, 10000);
})();


//Pagina de logare
$(document).ready(function () {
  var submitBtn = $("#submit-btn");
  var query;
  var API_KEY = "26884950-9bff0307598610d047d34164e";
  var imgURL;

  submitBtn.click(function (event) {
    event.preventDefault(); // asta folosim pentru a preveni refresh la pagina dupa ce apasam pe buton submit

    var name = $("#name").val();
    query = $("#fruit").val();

    var URL =
      "https://pixabay.com/api/?key=" +
      API_KEY +
      "&category=food" +
      "&q=" +
      query;

    $.ajax({
      url: URL,
      type: "GET",
      async: true,
      success: function (data) {
        imgURL = data.hits[1].largeImageURL;
        $("#fruitForm").hide();


        var div = $('<div class="image-wrapper"></div>');
        var text = $(`<h1 class="message-text">Thank you,  ${name}!</h1>`); // crearea
        var imgElem = $(
          `<img class="message-image" src="${imgURL}" alt="${data.hits[1].tags}">`
        );
        div.append(text); // afisam text
        div.append(imgElem);

        $(".message .container").append(div);
      },
      error: function (xhr, exception) {
        var msg = "";
        if (xhr.status === 0) {
          msg = "Not connect.\n Verify Network." + xhr.responseText;
        } else if (xhr.status == 404) {
          msg = "Requested page not found. [404]" + xhr.responseText;
        } else if (xhr.status == 500) {
          msg = "Internal Server Error [500]." + xhr.responseText;
        } else if (exception === "parsererror") {
          msg = "Requested JSON parse failed.";
        } else if (exception === "timeout") {
          msg = "Time out error." + xhr.responseText;
        } else if (exception === "abort") {
          msg = "Ajax request aborted.";
        } else {
          msg = "Error:" + xhr.status + " " + xhr.responseText;
        }
      },
    });
  });
  //Sfarsit pagina 

});

