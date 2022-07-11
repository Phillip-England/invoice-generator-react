export default function sortArray(array, sortProperty){
    let props = []
    let sortedArray = []
    array.forEach(item => 
        props.includes(item[sortProperty]) ? null : props.push(item[sortProperty]) 
    )
    let alphabatizedProps = props.sort()
    for (let x = 0; x < alphabatizedProps.length; x++) {
        for (let y = 0; y < array.length; y++){
            if (alphabatizedProps[x] === array[y][sortProperty]){
                sortedArray.push(array[y])
            }
        }
    }
    return {
        props: alphabatizedProps,
        array: sortedArray
    }
}