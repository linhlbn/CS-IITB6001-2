
$(document).ready(function(){
    $(".divs div").each(function(e) {
        if (e != 0)
            $(this).hide();
    });
    
    $("#next").click(function(){
        if ($(".divs div:visible").next().length != 0)
            $(".divs div:visible").next().show().prev().hide();
        else {
            $(".divs div:visible").hide();
            $(".divs div:first").show();
        }
        return false;
    });

    $("#prev").click(function(){
        if ($(".divs div:visible").prev().length != 0)
            $(".divs div:visible").prev().show().next().hide();
        else {
            $(".divs div:visible").hide();
            $(".divs div:last").show();
        }
        return false;
    });
});



function toEnglish() {
    document.getElementById("h1Vaasa").innerText = "Survey form for collecting user feedback regarding the quality of life in Vaasa";
    document.getElementById("part1").innerText = "Part 1 - Basic information";
    document.getElementById("Gender").innerText = "Gender";
    document.getElementById("Male").innerText = "Male";
    document.getElementById("Female").innerText = "Female";
    document.getElementById("First name").innerText = "First name";
    document.getElementById("Last name").innerText = "Last name";
    document.getElementById("Age").innerText = "Age";
    document.getElementById("Education").innerText = "Education";
    document.getElementById("Primary School").innerText = "Primary School";
    document.getElementById("Secondary School").innerText = "Secondary School";
    document.getElementById("High School").innerText = "High School";
    document.getElementById("University").innerText = "University";
    document.getElementById("part2").innerText = "Part 2 - Feedback on infrastructure";
    document.getElementById("part3").innerText = "Part 3 - Feedback on accommodation";
    document.getElementById("part4").innerText = "Part 4 - Feedback on transportation";
    document.getElementById("part5").innerText = "Part 5 - Feedback on education";
    document.getElementById("part6").innerText = "Part 6 - Feedback on recruitment";
    document.getElementById("part7").innerText = "Part 7 - Feedback on culture, sports and recreation possibilities";
    document.getElementById("prev").innerText = "PREVIOUS";
    document.getElementById("next").innerText = "NEXT";
    document.getElementById("Confirm").innerText = "Confirm your form";
}

function toFinnish() {
    document.getElementById("h1Vaasa").innerText = "Kyselylomake, jossa kerätään Vaasan elämänlaatuun liittyvää palautetta";
    document.getElementById("part1").innerText = "Osa 1 - Perustiedot";
    document.getElementById("Gender").innerText = "sukupuoli";
    document.getElementById("Male").innerText = "Uros";
    document.getElementById("Female").innerText = "Female";
    document.getElementById("First name").innerText = "Nainen";
    document.getElementById("Last name").innerText = "Sukunimi";
    document.getElementById("Age").innerText = "Ikä";
    document.getElementById("Education").innerText = "koulutus";
    document.getElementById("Primary School").innerText = "Ala-aste";
    document.getElementById("Secondary School").innerText = "Yläaste";
    document.getElementById("High School").innerText = "Lukio";
    document.getElementById("University").innerText = "Yliopisto";
    document.getElementById("part2").innerText = "Osa 2 - Palaute infrastruktuurista";
    document.getElementById("part3").innerText = "Osa 3 - Palaute majoituksesta";
    document.getElementById("part4").innerText = "Osa 4 - Palaute kuljetuksesta";
    document.getElementById("part5").innerText = "Osa 5 - Palaute koulutuksesta";
    document.getElementById("part6").innerText = "Osa 6 - Palaute rekrytoinnista";
    document.getElementById("part7").innerText = "Osa 7 - Palaute kulttuuri-, urheilu- ja virkistysmahdollisuuksista";
    document.getElementById("prev").innerText = "EDELLINEN";
    document.getElementById("next").innerText = "SEURAAVA";
    document.getElementById("Confirm").innerText = "Vahvista lomake";
}
