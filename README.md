1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
--> getElementById is used to selects a single element based on its unique id attribute, getElementsByClassName is used to selects elements based on their class attribute and querySelector is used to Selects the first element or querySelectorAll is used to selects the all element that matches a specified CSS selector (example: #id, .class, tag, [attribute], or complex combinations).
2.  How do you create and insert a new element into the DOM?
 -> First I will use document.createElement() method to create a new HTML element node and then takes a string representating tag like div, p, span tag.
3. What is Event Bubbling and how does it work?
-->Event Bubbling is an event triggered on a specific HTML element first triggers that element's event handler, then propagates upwards through its parent elements to the root of the Document Object Model (DOM) tree.
   How it works:
   1. An event, such as a user click, occurs on a specific element in the HTML, known as the target element.
   2. The event handler attached directly to that target element is executed first.
   3. After the target element's handler is finished, the event "bubbles up" to the element's parent element.
   4. If the parent element has an event handler, it is then executed.
   5. This process continues, with the event moving up through the DOM tree (to the grandparent, great-grandparent, and so on), triggering event handlers on each ancestor element it encounters.
   6. The bubbling stops when the event reaches the root of the document (example: the window object) or if the event propagation is explicitly stopped.
4. What is Event Delegation in JavaScript? Why is it useful?
--> Event delegation in JavaScript is a technique for handling events efficiently by attaching a single event listener to a parent element, rather than attaching individual listeners to multiple child elements.
   How it is useful:
   1. Performance Optimization
   2. Handling Dynamic Content
   3. Simplified Code and Maintainability
   4. Reduced Complexity
5. What is the difference between preventDefault() and stopPropagation() methods?
--> preventDefault() controls the default action of an event.
stopPropagation() controls the propagation of an event through the DOM.
