const record = [
    { year: "2015", result: "W" },
    { year: "2014", result: "N/A" },
    { year: "2013", result: "L" },
    //...
];

function superbowlWin(element) {
    const winRecord = element.find((record) => record.result === "W");
    if (winRecord) {
        return winRecord.year;
    } else {
        return undefined;
    }
}

console.log(superbowlWin(record));


