


 setInterval( digiClock = () => {
    let Time = document.getElementById("one");
    let Datee = document.getElementById("two");
    let Year = document.getElementById("three");
    let Day = document.getElementById("four");

    let all = new Date();
    let time = `${all.getHours()} : ${all.getMinutes()} : ${all.getSeconds()}`
    Time.innerHTML = time;
    let month=["january","february","march","april","may","june","july","august","september","october","november","december"]
    let day=["sunday","monday","tuesday","wednesday","thursday","friday","saturday"]

    let date = ` ${all.getFullYear()}`
    Datee.innerHTML = date;
    Year.innerHTML=month[all.getMonth()];
    Day.innerHTML=day[all.getDay()]
}, 1000)