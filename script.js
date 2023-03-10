// const swiper = new Swiper(".swiper-container", {
//   direction: "vertical",
//   mousewheel: {},
//   effect: "cube",
//   keyboard: {
//     enabled: true,
//     onlyInViewport: false,
//   },
// });

$("[data-github]").each(function () {
  var _this = this;
  var repo = $(_this).data("github");

  fetch("https://api.github.com/repos/" + repo)
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      $(_this).find("[data-forks]").text(response.forks);
      $(_this).find("[data-stars]").text(response.stargazers_count);
    });
});

console.log("hi");
