1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?


 getElementById selects a single element by its unique id. It returns only one element. Example: document.getElementById("title").
   getElementsByClassName selects all elements with a given class. It returns HTML Collection. Example: document.getElementsByClassName("card"),
   querySelector selects the first element that matches with the CSS selectors.Example: document.querySelector(".card");
   querySelectorAll selects all elements that match the CSS selectors, it returns a static NodeList.



2. How do you create and insert a new element into the DOM?
   
   Steps of creating and inserting a new element into the DOM:
       -Create new elements using document.createElement(),
       - Add content/attributes using .innerText, .innerHTML, .setAttribute(),
       - Insert the element into the DOM using methods like .appendChild(), .append(), .prepend(), .insertBefore(),



3. What is Event Bubbling and how does it work?

 Event bubbling is the process where an event starts from the target element and then bubbles up through its parent     elements in the DOM tree until it reaches the document. It’s the default flow of most DOM events.
      Event Bubbling = Event goes from child → parent → grandparent → document.
    //html code : 
     <div id="grandparent" style="padding:20px; border:2px solid red;">
      <div id="parent" style="padding:20px; border:2px solid green;">
      <button id="child">Click Me</button>
      </div>
      </div>

     //JS CODE
    document.getElementById("grandparent").addEventListener("click", () => {
    console.log("Grandparent clicked!");
    });

    document.getElementById("parent").addEventListener("click", () => {
    console.log("Parent clicked!");
    });

    document.getElementById("child").addEventListener("click", () => {
      console.log("Child clicked!");
    });

  When you click the button (#child):
    -The event first happens on the child element → logs Child clicked!.
    -Then it bubbles up to the parent → logs Parent clicked!.
    -Then it bubbles up to the grandparent → logs Grandparent clicked!.
    - It bubbles up to document.


4. What is Event Delegation in JavaScript? Why is it useful?

  Event Delegation is a technique where you attach an event listener to a parent element, and use it to handle events    that happen on its child elements.
       Event Delegation is useful because:
           -Saves memory,
           -Handles dynamically added elements.


5. What is the difference between preventDefault() and stopPropagation() methods?

   preventDefault()
      -Prevents the default action of an element,
      -Stops default browser behaviour.
   stopPropagation()
       -Stops the event from bubbling up to parent elements,
       -Stops the event from travelling up the DOM tree.


  


