const elements = document.querySelectorAll('btn')

elements.forEach(element =>{
    Element.addEventListenner('click', () => {
        let command = element.dataset['x']

        document.execCommand(command, false, null)
        
    })
})