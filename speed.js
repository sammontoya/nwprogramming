function isSpeeding (speed, isBirthday){


    if (isBirthday) {  /* this first, because if it's true than the statement will continue using the new speed value. it will subtract 5 first if provided true, then return 0, 1, or 2*/
        speed = speed-5;
    }
    if (speed <=60) {return 0;}
    if (speed > 60 && speed <= 80) {return 1;}
    if (speed > 80) {return 2;}


}
console.log (isSpeeding(60))

console.log (isSpeeding(62,true))

console.log(isSpeeding(62, false))

function isSpeeding (speed, isBirthday, limit) {

    if (!limit) {
        limit = 60;
    }
    if (isBirthday) {
        limit += 5;
    }

    if (speed <= limit) {
        return 0;
    } else if (speed > limit && speed <= (limit + 20)) {
        return 1;
    } else {
        return 2;
    }
}
console.log (isSpeeding (62, true)) /* does the same thing but uses a limit so we can redefine it for a broader range.. meaning we can define a 'new limit' or use the default of 60. default was set by ! because that is saying "if no limit is defined"*/