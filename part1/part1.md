1. 3 will be printed because i stops incrementing after i=prices.length, and it's visible becuase it's a function-level variable declared by 'var'. 

2. 150 will be printed because discountedPrice is a function-level variable declared using 'var', and it's last updated value was 150.

3. 150 will be printed because finalPrice is a function-level variable decalred using 'var', and it's last updated value was 150.

4. [50, 100, 150], because the function iterates over each price and discount them, store them in a new array, and return the new array.

5. Error: "i is not defined", because 'i' was declared by 'let', so it's only visible inside its scope, and line 11 is out of the block in which i was defined.

6. Error: "discountedPrice is not defined", because 'discountedPrice' was declared by 'let', so it's only visible inside its scope, and line 12 is out of the block in which i was defined.

7. Error: "finalPrice is not defined", because 'finalPrice' was declared by 'let', so it's only visible inside its scope, and line 13 is out of the block in which i was defined.

8. [50, 100, 150], because the function iterates over each price and discount them, store them in a new array, and return the new array.

9. It won't reach line 11 becuase line 6 will give the error "Assignment to const variable".

 
10. It won't reach line 12 becuase line 6 will give the error "Assignment to const variable".

11. It won't reach line 11 becuase line 6 will give the error "Assignment to const variable".

12. It won't return  becuase line 6 will give the error "Assignment to const variable".

13. 

	a. student.name

	b. student['Grad Year']

	c. student.greeting()

	d. student['Favorite Teacher'].name

	e. student.courseLoad[0]
14.

	a. '32', 2 is converted to a string, and '+' means concatonate.

	b. 1, "3" is converted to a number, and '-' is arithmatic substraction.

	c. 3, null is converted to 0, and 3 + 0 = 3

	d. "3null", null is converted to a string "null", and "3" + "null" = "3null"

	e. 4, true is converted to number 1, and 1 + 3 = 4.

	f. 0, false and null are both converted to 0, and 0 + 0 = 0

	g. "3undefined", undefined is converted to "undefined" string, and "3" + "undefined" = "3undefined"

	h. NaN, “3” is converted to numeric 3, and undefined is NaN, so 3 - NaN = NaN 

15.

	a. true, '2' is converted to the numeric 2, and 2 > 1.

	b. false, '2' and '12' are converted to the numeric 2 and 12, and 2 < 12
	
	c. true, '2' is converted to the numeric 2, and 2 == 2.

	d. false, 2 and '2' are not the same type, so === returns false.

	e. false, true is converted to 1, and 1 == 2 is false.

	f. true, Boolean(2) becomes true, and true === true since they are the same type and have the same value.

16. '==' first do typecheck. Two sides are converted to number if type mismatch. After type conversion, it returns true if two sides have the same value, false otherwise.
'===' will return false immediately if two sides are of different types, otherwise it checks if two sides have the same value.

17. "How are you", becuase (2 == true) is false becuase true will be converted to 1, and 2 == 1 is false. The next statement (2) is true because 2 will be converetd to true. Thus the else if is executed.


19. [6,8,10]. for each element, modifyArray calls and stores the result of doSometing(num ,callback), and doSomething return the result of callback(num + 2). So each number is added 2 and multiplied by 2. 1 => (1+2)*2 = 6 and etc. 

21. 1 4 3 2 
