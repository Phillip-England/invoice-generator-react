export default function getAllByProperty(array, propertyName, propertyValue){
    return array.filter((item) => 
        item[propertyName] === propertyValue
    )
}