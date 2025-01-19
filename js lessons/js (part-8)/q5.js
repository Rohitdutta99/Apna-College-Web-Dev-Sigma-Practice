const object1 = {
    a: 1,
    b:2
};

const object2 = {
    c: 3,
    d:4
};


const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2});

console.log(mergeObjects(object1, object2));