const obj1 = {}
if(Object.keys(obj1).length === 0 ){
    console.log('obj1 Object is empty')
}

const obj2 = {}
if(Object.entries(obj2).length === 0 ){ //returns an array of key/values of the enumerable properties of an object
    console.log('obj2 Object is empty')
}

const obj3 = {}
if(JSON.stringify(obj3) === "{}" ){
    console.log('obj3 Object is empty')
}
