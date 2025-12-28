(function () {
  "use strict";

  // iPad and iPod detection
  var isiPad = function () {
    return navigator.platform.indexOf("iPad") != -1;
  };

  var isiPhone = function () {
    return (
      navigator.platform.indexOf("iPhone") != -1 ||
      navigator.platform.indexOf("iPod") != -1
    );
  };

  var fullHeight = function () {
    $(".js-fullheight").css("height", $(window).height());
    $(window).resize(function () {
      $(".js-fullheight").css("height", $(window).height());
    });
  };

  var burgerMenu = function () {
    $(".js-colorlib-nav-toggle").on("click", function (event) {
      event.preventDefault();
      var $this = $(this);
      if ($("body").hasClass("menu-show")) {
        $("body").removeClass("menu-show");
        $("#colorlib-main-nav > .js-colorlib-nav-toggle").removeClass("show");
      } else {
        $("body").addClass("menu-show");
        setTimeout(function () {
          $("#colorlib-main-nav > .js-colorlib-nav-toggle").addClass("show");
        }, 900);
      }
    });
  };

  // Animations

  var contentWayPoint = function () {
    var i = 0;
    $(".animate-box").waypoint(
      function (direction) {
        if (direction === "down" && !$(this.element).hasClass("animated")) {
          i++;

          $(this.element).addClass("item-animate");
          setTimeout(function () {
            $("body .animate-box.item-animate").each(function (k) {
              var el = $(this);
              setTimeout(
                function () {
                  var effect = el.data("animate-effect");
                  if (effect === "fadeIn") {
                    el.addClass("fadeIn animated");
                  } else {
                    el.addClass("fadeInUp animated");
                  }

                  el.removeClass("item-animate");
                },
                k * 200,
                "easeInOutExpo"
              );
            });
          }, 100);
        }
      },
      { offset: "85%" }
    );
  };

  var counter = function () {
    $(".js-counter").countTo({
      formatter: function (value, options) {
        return value.toFixed(options.decimals);
      },
    });
  };

  var counterWayPoint = function () {
    if ($("#colorlib-counter").length > 0) {
      $("#colorlib-counter").waypoint(
        function (direction) {
          if (direction === "down" && !$(this.element).hasClass("animated")) {
            setTimeout(counter, 400);
            $(this.element).addClass("animated");
          }
        },
        { offset: "90%" }
      );
    }
  };

  // Owl Carousel
  var owlCarouselFeatureSlide = function () {
    var owl = $(".owl-carousel1");
    owl.owlCarousel({
      animateOut: "fadeOut",
      animateIn: "fadeIn",
      autoplay: true,
      loop: true,
      margin: 0,
      nav: true,
      dots: false,
      autoHeight: true,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 2,
        },
        1000: {
          items: 3,
        },
      },
      navText: [
        "<i class='icon-arrow-left3 owl-direction'></i>",
        "<i class='icon-arrow-right3 owl-direction'></i>",
      ],
    });
    var owl2 = $(".owl-carousel");
    owl2.owlCarousel({
      animateOut: "fadeOut",
      animateIn: "fadeIn",
      autoplay: true,
      loop: true,
      margin: 0,
      nav: false,
      dots: true,
      autoHeight: true,
      items: 1,
      navText: [
        "<i class='icon-arrow-left3 owl-direction'></i>",
        "<i class='icon-arrow-right3 owl-direction'></i>",
      ],
    });
    var owl3 = $(".owl-carousel3");
    owl3.owlCarousel({
      animateOut: "fadeOut",
      animateIn: "fadeIn",
      autoplay: true,
      loop: true,
      margin: 0,
      nav: false,
      dots: false,
      autoHeight: true,
      items: 1,
      navText: [
        "<i class='icon-arrow-left3 owl-direction'></i>",
        "<i class='icon-arrow-right3 owl-direction'></i>",
      ],
    });
  };

  /* mobile menu
   * ---------------------------------------------------- */
  const ssMobileMenu = function () {
    console.log("Step 1: Function ssMobileMenu is starting");
    const toggleButton = document.querySelector(".s-header__menu-toggle");
    const mainNavWrap = document.querySelector(".s-header__nav");
    const siteBody = document.querySelector("body");
    console.log("Step 2: Function ssMobileMenu is starting");
    if (!(toggleButton && mainNavWrap)) {
      console.error("Step 3: FAILED. One of the elements was not found.");
      return;
    }
    console.log("Step 3: SUCCESS. Elements found, adding click listener.");

    toggleButton.addEventListener("click", function (e) {
      e.preventDefault();
      toggleButton.classList.toggle("is-clicked");
      siteBody.classList.toggle("menu-is-open");
    });

    mainNavWrap.querySelectorAll(".s-header__nav a").forEach(function (link) {
      link.addEventListener("click", function (event) {
        // at 900px and below
        if (window.matchMedia("(max-width: 900px)").matches) {
          toggleButton.classList.toggle("is-clicked");
          siteBody.classList.toggle("menu-is-open");
        }
      });
    });

    window.addEventListener("resize", function () {
      // above 900px
      if (window.matchMedia("(min-width: 901px)").matches) {
        if (siteBody.classList.contains("menu-is-open"))
          siteBody.classList.remove("menu-is-open");
        if (toggleButton.classList.contains("is-clicked"))
          toggleButton.classList.remove("is-clicked");
      }
    });
  }; // end ssMobileMenu

  // Document on load.
  $(function () {
    fullHeight();
    burgerMenu();
    counterWayPoint();
    contentWayPoint();
    owlCarouselFeatureSlide();
    ssMobileMenu();
  });
})(document.documentElement);

$(document).ready(function () {
  $(".circle").each(function () {
    var $this = $(this);
    var percent = $this.data("percent");

    $this.circleProgress({
      value: percent / 100,
      size: 125, // CRITICAL: This MUST match the CSS width/height
      startAngle: -Math.PI / 4, // Starts at 12 o'clock
      thickness: 5, // Adjust the width of the colored arc
      lineCap: "round", // Makes the ends rounded

      // This is how you set the color of the progress arc
      fill: {
        color: "#2f4f4f", // Use your desired color
      },
    });
  });
});
