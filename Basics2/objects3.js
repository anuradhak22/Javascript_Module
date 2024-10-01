// destructuring the objects.
const course = {
  coursename : "Javascript",
  id : 4
}
const {coursename} = course;
console.log(coursename);
// or
const {coursename:name} = course;
console.log(name);
