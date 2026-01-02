_Mouse events_ are simply actions that occur when a user interact with the webpage with a mouse(a pointing device)

Actions that can be performed with a mouse:

_This example is based on the DOM tutorial used but yeah I get the point_

1. Click - click [button]
2. Double click - dblclick [button]
3. Mousedown - mousedown [button]
4. Mouseup - mouseup [button]
5. Mouse over - mouseover [child in a parent element]
7. Mouse out - mouseout [child in a parent element]
8. Mouse enter - mouseenter [whole parent element]
9. Mouse leave - mouseleave [whole parent element]



Code Example:

    let getEvent = (e) => {
        console.log('Event Type: ' +e.type);
    }


    button.addEventListener('dblclick', getEvent);
    button.addEventListener('click', getEvent)


--- What the above code does is that it displays whatever mouse action is performed on the selected button either click/doubleclick


    let box = document.querySelector('#box');

    let doesWhatitdoes = (e) => {
      console.log('Event Type: ' +e.type);

      box.style.backgroundColor = "rgb("+e.offsetX+", "+e.offsetY+", 40)"; --> This statement does the magic, the offset values are type converted into numbers and are fed to the rgb in real time

    };

    box.addEventListener('mousemove', doesWhatitdoes);
