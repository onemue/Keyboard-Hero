// var keycode = keycode = { a: 65, b: 66, c: 67, d: 68, e: 69, f: 70, g: 71, h: 72, i: 73, j: 74, k: 75, l: 76, m: 77, n: 78, o: 79, p: 80, q: 81, r: 82, s: 83, t: 84, u: 85, v: 86, w: 87, x: 88, y: 89, z: 90 }；
var keyList = ['s', 'd', 'a', 'w']
var keyCheckList = []
function start() {
    //清除开始，帮助按钮
    var start = document.getElementById('start');
    var changeMusic = document.getElementById('changeMusic');
    var help = document.getElementById('help');
    start.style.display = 'none';
    changeMusic.style.display = 'none';
    help.style.display = 'none';
    // changeKeyList();
    document.getElementById('topMusicControlAudio').fastSeek(0);
    setInterval("music()", 10);
}

function keyCheck(event) {
    console.log(event.key);
    if (event.key == ' ') {
        terminationDate = new Date();
        terminationTime = terminationDate.getTime();
        console.log(terminationTime);

        console.log(terminationTime - startingTime);
        // console.log(keyCheckList);
        if (keyCheckList.sort().toString() == keyList.sort().toString()) {
            if (terminationTime - startingTime <= 800) {
                document.getElementById('title').style.color = 'red';
                document.getElementById('title').innerHTML = "Perfect";
                // console.log(document.getElementById('title').innerHTML)
                setTimeout(function () { changeKeyList() }, 500);
                keyCheckList = [];
            } else {
                if (terminationTime - startingTime <= 1250) {
                    document.getElementById('title').style.color = 'red';
                    document.getElementById('title').innerHTML = "Great!";
                    console.log(document.getElementById('title').innerHTML)
                    setTimeout(function () { changeKeyList() }, 500);
                    keyCheckList = [];
                } else {
                    if (terminationTime - startingTime <= 2000) {
                        document.getElementById('title').style.color = 'red';
                        document.getElementById('title').innerHTML = "Good!";
                        console.log(document.getElementById('title').innerHTML)
                        setTimeout(function () { changeKeyList() }, 500);
                        keyCheckList = [];
                    } else {
                        if (terminationTime - startingTime <= 3000) {
                            document.getElementById('title').style.color = 'red';
                            document.getElementById('title').innerHTML = "Bad";
                            console.log(document.getElementById('title').innerHTML)
                            setTimeout(function () { changeKeyList() }, 500);
                            keyCheckList = [];
                        } else {
                            document.getElementById('title').style.color = 'red';
                            document.getElementById('title').innerHTML = "Miss";
                            console.log(document.getElementById('title').innerHTML)
                            setTimeout(function () { changeKeyList() }, 500);
                            keyCheckList = [];
                        }
                    }
                }
            }
        } else {
            if (keyCheckList.sort().toString() == [].sort().toString()) {
                keyCheckList = [];
                document.getElementById('title').style.color = 'red';
                document.getElementById('title').innerHTML = "Pass";
                setTimeout(function () { changeKeyList() }, 500);
            } else {
                keyCheckList = [];
                document.getElementById('title').style.color = 'red';
                document.getElementById('title').innerHTML = "Error";
                setTimeout(function () { changeKeyList() }, 500);
            }
            console.log([]);
        }
    } else {
        keyCheckList.push(event.key);
    }
}
function changeKeyList() {
    keyList = [];
    var keycode = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    for (let i = 0; i < 5; i++) {
        keyNum = randomNum(0, 25);
        keyList.push(keycode[keyNum]);
    }
    document.getElementById('title').style.color = '#ffffff';
    document.getElementById('title').innerHTML = keyList;
    startingDate = new Date();
    startingTime = startingDate.getTime();
    // theTime = mytime;
    console.log(startingTime);
}
function randomNum(minNum, maxNum) {
    switch (arguments.length) {
        case 1:
            return parseInt(Math.random() * minNum + 1, 10);
            break;
        case 2:
            return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
            break;
        default:
            return 0;
            break;
    }
} 