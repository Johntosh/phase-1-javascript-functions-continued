function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}
console.log(saturdayFun("go to the Gym"));

function mondayWork(task = "go to the office") {
    return `This Monday, I will ${task}.`;
}
console.log(mondayWork("go to space"));

function wrapAdjective(flair = "*") {
    return function(adjective = "special") {
        return `You are ${flair}${adjective}${flair}!`;
    };
}
