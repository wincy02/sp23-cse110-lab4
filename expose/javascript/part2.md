1. On line 12, it prints out ***3***, which is the length of the ```prices``` array. Since ```i``` is declared with a ```var``` keyword, it is accessible outside the ```for``` loop
2. On line 13, it prints out ***150***, which is the ```discountedPrice``` when ```i=2```. ```discountedPrice``` is declarated with the ```var``` keyword inside the ```for``` loop and it will be updated as ```i``` being increamented. when ```i==2```, ```discountedPrice``` will not be updated again and it will be assigned to the value of ```prices[2]*(1-0.5) = 150``` 
3. On line 14, it prints out ***150***, which is the ```finalPrice``` when ```i=2```. Same as ```discountedPrice``` on question2, it is declaraed with a ```var``` keyword and will not be updated again and will be assgined to the rounded value of ```discountedPrice```.
4. This function will return the ```discounted``` array, which is ```[50,100,150]```. The function takes ```prices``` array and ```discount``` as inputs, iterate through the ```prices``` array and calculate the ```discountedPrice``` by multiplying the original price by ```(1-discount)```. Then it rounds the price to two decimal places and assign to ```finalPrice```. It then push ```finalPrice``` to the array ```discounted``` and return ```discounted``` .
5. ```i``` is not defined. It is declared with a ```let``` keyword inside the ```for``` loop, which make it not accessible aout 
6. 
7.
8.
9.
10.
11.
12.
13.
 - '32'
 - 1
 - 3
 - '3null'
 - 4
 - 0
 - '3undefined'
 - NaN
14.
 - true
 - false
 - true
 - false
 - false
 - true
15.
