## grid key operations
# grid display functions - css
display: grid; // display as grid block
dispplay: inline-grid; // display as inline grid block
# columns
grid-template-columns: 20px 50% auto; // set as columns structure with # number of column depending on the # argument provided
grid-template-colums: repeat(3, 15%) auto; //repeat(x,y) - x: the amount of values to repeat; y - the size per repeated values. example: 15% 15% 15% 15% 40%
grid-column-start: 2; reorder the fisical location of element to # position
grid-column-start: 1; [+] grid-column-end: span 2; // can make element span from start as 1 all the way through end of 2
# rows
grid-template-rows: # # // set as rows structure with # number of row depending on the # argument provided
# areas
grid-template-area: [named] [named2] // defining defines grid area names for each [named] template in a layout
grid-area: [named] // reference grid template