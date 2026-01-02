__Keyboard Events__

<script>
    let itemInput = document.querySelector('input[type="text"]');
    let form = document.querySelector('form');

    let doesWhatitdoes = (e) => {
      console.log(e.target.value);
      console.log('Event Type: ' +e.type);
      document.querySelector('#box').innerHTML = '<h3> '+e.target.value+' </h3>';

    };

        itemInput.addEventListener('keydown', doesWhatitdoes);

    box.addEventListener('mousemove', doesWhatitdoes);

</script>


The code above was used to illustrate the 'keydown' Keyboard event. This event takes effect after a click activity is completed on the keyboard.

Keyup - keyup --> Works when the key is released 
Key press --> keypress

focus and blur --> used for getting that blinking effect when interacting with a text box

select list

+ many others. 

3RD video completed. I'm so happy. 


