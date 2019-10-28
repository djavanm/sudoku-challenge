## Sudoku Challenge 

# Prompt: 
Create a function that takes in a completed sudoku matrix and returns a boolean depeonds on whether the board 
completed correctly. 

# Process: 

# What is the shape of my input? 
Determined it was one array containing 27 arrays of 3 elements/numbers.
Made notes on the shape of my input to determine if I could recognize any patterns. 
Decided that I needed a way to 'traverse' each "row", "column", and "square" inside the matrix. 

# Why do I want to traverse a row, column, and square? 
I wanted to do this so I could isolate all the digits that made up a row, column, or square so that I could 
iterate through it to determine whether or not each value was unique. 

# How would I create a single array for each row? 
I determined that I would need to create a single array for arrays at index 0-2, 3-5... to index. 26.
Once I had these values in a single array, I would iterate through the row itself to determine whether each value was uniqure. 

# How would I create a single array for each column? 
I would loop over arrays at index 0, 3, 6, 9... 24. THen I would have another loop that grabs the value of each element 
at the same index value, and create a single array which would represent a column. Then follow the same steps of checking for 
unique values. 

# How would I create a single array for each square? 
Isolate each box by getting an array by grabbing matrix at index 0-2, 3-5, ... 26. 