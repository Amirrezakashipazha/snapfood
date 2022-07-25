function functionsearch() {
    let safhetar = document.getElementById("safhe-tar");
    let pform = document.getElementById("p-form");
    let formheader = document.getElementById("form-header");
    pform.style.display = "inline";
    formheader.style.border = "1px solid #000";
    safhetar.style.display = "inline";

}

function formworod() {
    let formworod = document.getElementById("form-worod");
    formworod.style.display = "inline";
    let safhetar = document.getElementById("safhe-tar");
    safhetar.style.display = "inline";
    document.getElementById("body").style.overflow = "hidden";
    let formheader = document.getElementById("d-2-sec-1-header");
    formheader.style.zIndex = "999";

    setTimeout(funtranslate, 10);

    function funtranslate() {
        formworod.style.transition = "0.3s";
        formworod.style.transform = "translateY(-20px)";
    }

    setTimeout(funtranslate2, 200);

    function funtranslate2() {
        formworod.style.transition = "0.2s";
        formworod.style.transform = "translateY(-13px)";
    }

}

function closeform() {
    let formworod = document.getElementById("form-worod");
    formworod.style.display = "none";
    let safhetar = document.getElementById("safhe-tar");
    safhetar.style.display = "none";
    document.getElementById("body").style.overflow = "scroll";
    let formheaderr = document.getElementById("d-2-sec-1-header");
    formworod.style.transform = "translateY(20px)";
    formheaderr.style.zIndex = "10000000";
}

function locationheader() {
    let location = document.getElementById("location-header");
    location.style.display = "inline";
    let safhetar = document.getElementById("safhe-tar");
    safhetar.style.display = "inline";
    let formheader = document.getElementById("d-2-sec-1-header");
    formheader.style.zIndex = "999";

    setTimeout(funtranslate2, 10);

    function funtranslate2() {
        location.style.transition = "0.3s";
        location.style.transform = "translateY(30px)";
    }

    setTimeout(funtranslate3, 200);

    function funtranslate3() {
        location.style.transition = "0.2s";
        location.style.transform = "translateY(20px)";
    }
}

function closelocation() {
    let location = document.getElementById("location-header");
    location.style.display = "none";
    let safhetar = document.getElementById("safhe-tar");
    safhetar.style.display = "none";
    location.style.transform = "translateY(-30px)";
}

function functionsearch2() {
    let formh = document.getElementById("form-h-header");
    formh.style.display="inline";
    let safhetar = document.getElementById("safhe-tar");
    safhetar.style.display = "inline";
}

function closetar() {
    let safhetar = document.getElementById("safhe-tar");
    let pform = document.getElementById("p-form");
    let formheader = document.getElementById("form-header");
    let formworod = document.getElementById("form-worod");
    let formheaderr = document.getElementById("d-2-sec-1-header");
    let location = document.getElementById("location-header");
    let formh = document.getElementById("form-h-header");
    formh.style.display="none";
    location.style.display = "none";
    formheaderr.style.zIndex = "10000000";
    safhetar.style.display = "none";
    pform.style.display = "none";
    formheader.style.border = "none";
    formworod.style.display = "none";
    formworod.style.transform = "translateY(20px)";
    location.style.transform = "translateY(-30px)";
    if (formworod.style.display === "none") {
        document.getElementById("body").style.overflow = "scroll";
    }
}

