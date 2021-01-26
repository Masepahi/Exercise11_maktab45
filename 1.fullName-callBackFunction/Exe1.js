function fullName(firstName, lastName, concater) {
    let fullName = firstName + ' ' + lastName;
    concater(fullName);
}

fullName("Reza", "Mahdavi", function (response) {
    console.log(response);
})