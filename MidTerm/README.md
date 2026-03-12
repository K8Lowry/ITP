# Midterm Project

I found this project to be a whole lot of Trial and Error to figure out why it wasn't running right. Struggled to pinpoint certain issues, but worked it out in the end.


### Phase 1: Sketch Your Visual Object

I drew a star. My idea started with lines, but ended up just being shapes in the end.


### Phase 2: Translate to P5.js Sketch

I used the star I drew and made it in javaScript out of 3 triangles. I originally had lines drawn, and then attempted to fill the lines with the triangles - then removed the lines for a more concise and less cluttered code. This worked almost right off the bat. No issues with the code


### Phase 3: Function

This is where the problems started occurring:
- I'm still not too sure what the push() and pop() sections of the code do.
- translate() and scale() made total sense
- I also havent entirely figured out what the double drawObject() functions do. Still seemed successful though, so I count it as a win.
- This ended up just translating the item to wherever I requested, and I could scale it to what I wanted.


### Phase 4: Tiling

This took the longest to figure out why it wasnt working:
- One of the previous code attempts had a different background color in each of the two function draw() - causing it to not work correctly.
_ It asked for a "Nested for-loop", and I managed to find it in the 04ControlFlow codealong. Had to tweak my numbers to get what I needed for it to work.
- I made 4 rows and 4 columns (a 4x4 square). My design was 100x100 pixels, so I divided cellW (s) by 100 to get it to line up right. 

