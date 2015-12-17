/*Javascript lets you re-open classes so you can add new functionality to
existing classes and objects.
 In this kata, you'll have to add a new method in the String class that calls the
 upcase method (toUpperCase()), so that:
 "abc".myNewMethod();
 returns
 "ABC" */


String.prototype.myNewMethod = String.prototype.toUpperCase;
