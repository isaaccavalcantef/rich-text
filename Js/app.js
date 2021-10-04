let output = document.getElementById('output')
let buttons = document.getElementsByClassName('tool--btn')



console.log(buttons)

for(let btn of buttons) {
    btn.addEventListener('click', () => {
        let cmd = btn.dataset['x']

      

        document.execCommand(cmd, false, null)

        
        
    })
}


function onlynumber(evt) {
   var theEvent = evt || window.event;
   var key = theEvent.keyCode || theEvent.which;
   key = String.fromCharCode( key );
   //var regex = /^[0-9.,]+$/;
   var regex = /^[0-9.]+$/;
   if( !regex.test(key) ) {
      theEvent.returnValue = false;
      if(theEvent.preventDefault) theEvent.preventDefault();
   }
}
