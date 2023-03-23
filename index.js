const record = [
    { year: "2018", result: "N/A"},
    { year: "2017", result: "N/A"},
    { year: "2016", result: "N/A"},
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
]

function superbowlWin (record) {
    const ringYear = record.find(obj => obj.result === 'W');
    const bummerYear = record.find(obj => obj.result === "N/A");
    const seanPaytonYear = record.find(obj => obj.result === "L");
    if (ringYear) {
        return ringYear.year;
    } else {
        if (bummerYear) {
            return undefined;
        }   else {
            if (seanPaytonYear) {
                return seanPaytonYear.year;
            }
        }
    }
}