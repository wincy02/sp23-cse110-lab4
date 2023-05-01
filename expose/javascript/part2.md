1. At line 12, it prints out ***3***, which is the length of the ```prices``` array. Since ```i``` is declared with a ```var``` keyword, it is accessible outside the ```for``` loop
2. At line 13, it prints out ***150***, which is the ```discountedPrice``` when ```i=2```. ```discountedPrice``` is declarated with the ```var``` keyword inside the ```for``` loop and it will be updated as ```i``` being increamented. when ```i==2```, ```discountedPrice``` will not be updated again and it will be assigned to the value of ```prices[2]*(1-0.5) = 150``` 
3. At line 14, it prints out ***150***, which is the ```finalPrice``` when ```i=2```. Same as ```discountedPrice``` on question2, it is declaraed with a ```var``` keyword and will not be updated again and will be assgined to the rounded value of ```discountedPrice```.
4. This function will return the ```discounted``` array, which is ```[50,100,150]```. The function takes ```prices``` array and ```discount``` as inputs, iterate through the ```prices``` array and calculate the ```discountedPrice``` by multiplying the original price by ```(1-discount)```. Then it rounds the price to two decimal places and assign to ```finalPrice```. It then push ```finalPrice``` to the array ```discounted``` and return ```discounted``` .
5. ```i``` is not defined. It is declared with a ```let``` keyword inside the ```for``` loop, which make it not accessible outside the loop.
6. ```discountedPrice``` is not defined. Same as ```i``` in q5, variable ```discountedPrice``` is declared inside the ```for``` loop with a ```let``` keyword, which make it unaccessible once the loop finishes executing.
7. It will prints out ```150```. It is the last rounded discounted price in the ```for``` loop. The variable ```finalPrice``` is declared with a ```let``` keyword and is accessible within the function body, which will not cause any error.
8. This function will return the ```discounted``` array, which is ```[50,100,150]```. The function takes ```prices``` array and ```discount``` as inputs, iterate through the ```prices``` array and calculate the ```discountedPrice``` by multiplying the original price by ```(1-discount)```. Then it rounds the price to two decimal places and assign to ```finalPrice```. It then push ```finalPrice``` to the array ```discounted``` and return ```discounted``` .
9. ```i``` is not defined. It is declared with a ```let``` keyword inside the ```for``` loop, which make it not accessible outside the loop.
10. It prints out the length of array ```prices```, which is **3**. It is declared as a constant variable at the beginning and assign to ```prices.length```. There is no error because it did not reassign to any other value (it is not allowed to reassign since it is ```const```).
11. It will return the ```discounted``` array, which is ```[50,100,150]```. The function takes ```prices``` array and ```discount``` as inputs, then iterates through the ```prices``` array and calculates the prices after discount by multiplying ```(1-discount)```. The calculated prices will then be pushed to the ```discounted``` array and the array will be returned at the end.  
12.
 - student.name
 - student["Grad Year"]
 - student.greeting
 - student["Favorite Teacher"].name
 - student.courseLoad[0]
13.
 - '32': ```'3'``` is a string since it is enclosed within single quote, ```+``` means concatenation in this case, and ```2``` will be converted to a string then concat with ```'3'``` and output ```'32'```
 - 1:```-``` is used for subtraction, in this case, the string ```'3'``` is converted into a number, then perform subtraction as usual (subtract ```2``` from it).
 - 3:```null``` is ```0``` in JavaScript;```3+0=3```
 - '3null':```'3'``` is a string since it is enclosed within single quote, ```+``` means concatenation in this case, and ```null``` is treated as a string (will not treated as ```0```), then string concatenation perform as usual.
 - 4:```true``` becaomes ```1``` and addtion performs as usual, ```1+3 =4```
 - 0:```false``` becomes ```0``` and ```null``` is treated as number ```0``` and addition performs as usual(```0+0=0```)
 - '3undefined':```'3'``` is a string since it is enclosed within single quote, ```+``` means concatenation in this case.```undefined```  does not becomes```NaN``` and is treated as a string, then cencatentaed with string ```'3'```.
 - NaN: with the ```-``` operator, ```3``` is converted to a number and ```undefined``` becomes ```NaN```. ```NaN''' is not a number, subtraction cannot perform, so the output is ```NaN```.
14.
 - true:when comparing a string with a number, the string will be converted to a number. In this case, string ```'2'``` converted to number ```2```, and ```2``` is greater than ```1```, which is ```true```
 - false:the first character (```'2'```) from the first string (```'2'```) is greater than the first character (```'1'```) from the other string (```'12'```), which should output ```false``` 
 - true: when comparing strings with numbers, strings will be converted to numbers. In this case, string ```'2'``` is converted to number ```2```,then ```2==2``` will return ```true```
 - false:'''===''' is a strict equality operator that checks the equality without type conversion. ```2==='2'``` retur```false``` since we are trying to compare a number with a string.
 - false:```true``` in this case is converted to number ```1```, ```1``` is not equal to ```2```, which will return ```false```.
 - true:```Boolean``` function convert any non-zero numbers to ```true```. The comparsion with ```===``` operator is made between same variable types, it will retur ```true```
15. ```===``` is a strict equality operator that checks the equality between two values without type conversion, while ```==``` is a non-strict equality operator that checks the equality with type conversion. if we want to compare two values that are different types with ```===``` operator, it will immediately returns ```false```. 
17. The function will return the array ```[2,4,6]```. Function ```modifyArray``` takes an array and a function as inputs. It first initialize the empty array ```newArr``` to store the modified array, then iterate through the input array; for each element in the input array, the input ```callback``` will call the function ```doSomething```, in this case, the value from the input array will be modified by ```doSomething``` function before being push to the ```newArr```. In the ```doSomething``` function, it takes a number as the input, and it will return ```sum*2```. Therefore, each element in the original array will be multiplied by 2.
19. The output is ```1```
                  ```4```
                  ```3```
                  ```2```
