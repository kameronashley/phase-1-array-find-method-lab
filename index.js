function superbowlWin (array) {
    let yearWon = array.find(resultIsWin);
if (yearWon) {
    return yearWon.year
} else {
    return yearWon};
}

function resultIsWin(teamObject) {
    return teamObject.result === "W"
}
