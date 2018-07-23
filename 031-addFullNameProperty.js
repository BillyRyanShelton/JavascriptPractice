/*Write a function called “addFullNameProperty”.
Given an object that has a “firstName” property and a “lastName” property, 
“addFullNameProperty” adds a “fullName” property whose value is a string 
with the first name and last name separated by a space.*/



function addFullNameProperty(obj) {
  // your code here
  /* START SOLUTION */
    obj.fullName = obj.firstName + ' ' + obj.lastName;
  /* END SOLUTION */
}
