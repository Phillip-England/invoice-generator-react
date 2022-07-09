export default function groupByProperty(arrayToSort, propertyToSort, arrayOfProperties){
    let sorted = []
    for (let x = 0; x < arrayOfProperties.length; x++){
        sorted.push(arrayToSort.filter((item) => 
            item[propertyToSort] === arrayOfProperties[x]
        ))
    }
    return sorted
}