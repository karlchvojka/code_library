var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];

function compare(key, order){
    return function(a, b) {
        if (a[key] == b[key]) {
            if (a.age == b.age) {
                return 0
            } else {
                return compare("age", "desc")(a, b)
            }
        } else if (order === "desc"){
            return (a[key] < b[key]) ? 1 : -1 ;
        } else if (order === "asc"){
            return (a[key] > b[key]) ? 1 : -1 ;
        }
    }
}
console.log(students.sort( compare("name", "asc") ));
