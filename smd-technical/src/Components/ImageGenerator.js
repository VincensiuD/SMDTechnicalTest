import fbIcon from "../images/icon-facebook.svg"
import ytIcon from "../images/icon-youtube.svg"
import instaIcon from "../images/icon-instagram.svg"
import twtIcon from "../images/icon-twitter.svg"
import upIcon from "../images/icon-up.svg"
import downIcon from "../images/icon-down.svg"


const imageDict = {
    fb:fbIcon,
    yt:ytIcon,
    insta: instaIcon,
    twt: twtIcon,
    up: upIcon,
    down: downIcon
}


export function imageGenerator(picName){
    return(

        imageDict[picName]
    );
}