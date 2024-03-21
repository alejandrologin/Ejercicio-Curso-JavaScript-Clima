
let api_key = '2c4bae45a2ee5918b0c231a1bdf02a5b'
let urlBase = 'https://api.openweathermap.org/data/2.5/weather'
let difKelvin = 273.15





document.getElementById('botonBusqueda').addEventListener('click', ()=>{
    const ciudad = document.getElementById('ciudadEntrada').value
    if(ciudad){
        fetchDatosClima(ciudad)
    }

});


function fetchDatosClima(ciudad){
    fetch(`${urlBase}?q=${ciudad}&appid=${api_key}`)
        .then(data => data.json())
        .then(data => mostrarDatosClima(data))
        

}



function mostrarDatosClima (data){

    console.log(data)
    const divDatosClima = document.getElementById('datosClima')
    divDatosClima.innerHTML=''
    
    const ciudadNombre = data.name
    const temperatura = data.main.temp
    const humedad = data.main.humidity 
    const icono = data.weather[0].icon
    const descripcion = data.weather[0].description

    const ciudadTitulo = document.createElement('h2')
          ciudadTitulo.textContent = ciudadNombre

    const temperaturaTitulo = document.createElement('p')
          temperaturaTitulo.textContent = `la temperatura es: ${Math.floor(temperatura - difKelvin)}°C`

    const humedadTitulo = document.createElement('p')
          humedadTitulo.textContent = `la humedad es de : ${humedad}%`  
    
    const iconoInfo = document.createElement('img')      
          iconoInfo.src = `https://openweathermap.org/img/wn/${icono}.png`      

    const descripcionTitulo = document.createElement('p')
          descripcionTitulo.textContent = `la descripcion meteorologica es: ${descripcion}`
    

    
    divDatosClima.appendChild(ciudadTitulo)
    divDatosClima.appendChild(temperaturaTitulo)
    divDatosClima.appendChild(humedadTitulo)
    divDatosClima.appendChild(iconoInfo)
    divDatosClima.appendChild(descripcionTitulo)
    
}
