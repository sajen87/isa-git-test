$(function () {
    var patientsList = [
        { firstName: "Jan", lastName: "Kowalski" },
        { firstName: "Adam", lastName: "Nowak" },
        { firstName: "Andrzej", lastName: "Kielcz" }
        { firstName: "Pawel", lastName: "Kielcz" }
        { firstName: "Franek", lastName: "Kielcz" }
        { firstName: "Marian", lastName: "Kielcz" }
        { firstName: "Gerwazy", lastName: "Kielcz" }
    ];

    patientsList.forEach(function (patient) {
        addPatient(patient);
    })
});

function addPatient(patient) {
    $("#patients-list")
        .append(
        $("<li/>")
            .text(patient.firstName + " " + patient.lastName)
        );
}