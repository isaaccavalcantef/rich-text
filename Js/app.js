let output = document.getElementById('output')
let buttons = document.getElementsByClassName('tool--btn')

console.log(buttons);

for(let btn of buttons) {
    btn.addEventListener('click', () => {
        let cmd = btn.dataset['x']
        
        document.execCommand(cmd, false, null)
    })
}