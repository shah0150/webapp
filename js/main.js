document.addEventListener("DOMContentLoaded", function () {

    var homeLink = document.getElementById("navHome");
    var castLink = document.getElementById("navCast");
    var reviewLink = document.getElementById("navReview");
    var castPage = document.getElementById("castPage");
    var homePage = document.getElementById("homePage");
    var reviewPage = document.getElementById("reviewPage");
    console.log(homeLink);

    castLink.addEventListener("click", function () {

        homePage.className = "inactive-page";
        reviewPage.className = "inactive-page";
        castPage.className = "active-page";

        document.title = "Movie Monkeys";
    });
    console.log(castLink);
    homeLink.addEventListener("click", function () {

        castPage.className = "inactive-page";
        reviewPage.className = "inactive-page";
        homePage.className = "active-page";

        document.title = "Movie Title";
    });

    reviewLink.addEventListener("click", function () {

        castPage.className = "inactive-page";
        homePage.className = "inactive-page";
        reviewPage.className = "active-page";

        document.title = "Movie Reviews";
    });
});
