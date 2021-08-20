function seerToMon(seer) {
    var mon = seer / 40; // 40 seer = 1 mon
    return mon;
}
var myseer = 40;
var mon = seerToMon(myseer);
console.log('mon ber korlam', mon);