// code your solution here


function superbowlWin(array){
    let obj = array.find(array => array.result === "W")
    if (obj){
        return obj.year
    }
    return obj

}
