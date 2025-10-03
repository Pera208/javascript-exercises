const findTheOldest = function(people) {
    let oldestp;
    let oldestage = 0;

    for (const person of people) {
        if (!("yearOfDeath" in person)) curryear = new Date().getFullYear();
        else curryear = person.yearOfDeath

        if ((curryear - person.yearOfBirth) > oldestage) {
            oldestage = curryear - person.yearOfBirth;
            oldestp = person;
        }
    }

    return oldestp;

};

// Do not edit below this line
module.exports = findTheOldest;
