When does React's Virtual DOM update the real DOM?

### Answer:

After react has compared the most recent Virtual DOM snap-shot to the real DOM and deteced that an object has changed, and then only updates what has been changed.