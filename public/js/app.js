console.log('Client side javascript file is loaded!')

const weatherData = document.querySelector('form')
const searchText = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

messageOne.textContent = ''
messageTwo.textContent = ''

weatherData.addEventListener('submit', (event) => {
    event.preventDefault();

    const location = searchText.value
    messageOne.textContent = "loading..."
    messageTwo.textContent = ''

    if(location.length){
        const url = ('http://localhost:3000/weather?address=' + location.toLowerCase())

        fetch(url).then((response) => {
            response.json().then((data) => {
                
                if(data.error) {
                    messageOne.textContent = data.error
                } else {
                    messageOne.textContent = data.location
                    messageTwo.textContent = data.forecast
                }
            })
        })
    } else {
        messageOne.textContent = "Enter location"
    }
})