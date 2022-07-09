export default function getAllProperties(array, property){
    let categoryNames = []
    array.map((item) => 
        categoryNames.includes(item[property]) 
            ? null 
            : categoryNames.push(item[property])
    )
    return categoryNames
}