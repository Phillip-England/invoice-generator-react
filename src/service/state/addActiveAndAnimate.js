export default function addActiveAndAnimate(arrayOfObjects){
    let copyOfArray = Object.assign([], arrayOfObjects)
    for (let x = 0; x < copyOfArray.length; x++){
        copyOfArray[x].animate = null
        copyOfArray[x].active = false
    }
    return copyOfArray
}