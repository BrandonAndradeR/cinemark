/*------------------------------------------------------------------------------------------------*/ 
//datos nombre
const name = document.querySelectorAll('.nombre');
const arrayname = [];
for (let index = 0; index < name.length; index++) {
    arrayname.push(name[index].innerText); 
}

$(document).ready(function() {
    $('#kill').DataTable();
} );

/*------------------------------------------------------------------------------------------------*/ 
//datos datos
const mesabril = document.querySelectorAll('.mes_abril');
const arraymesa = [];
for (let index = 0; index < mesabril.length; index++) {
    arraymesa.push(mesabril[index].innerText); 
}

/*------------------------------------------------------------------------------------------------*/ 
//colores
const generateRandomColor= ()=>{
    const r= Math.floor(Math.random()* 256);
    const g= Math.floor(Math.random()* 256);
    const b= Math.floor(Math.random()* 256);
    
    const rgbColor = `rgba(${r},${g},${b},0.8)`;
    return rgbColor;
}

const arraycolor = [];
for (let index = 0; index < mesabril.length; index++) {
    const newcolor = generateRandomColor();
    arraycolor[index] = [newcolor];
}
/*------------------------------------------------------------------------------------------------*/ 
//datatable
$(document).ready(function() {
    $('#kill').DataTable();
} );




/*------------------------------------------------------------------------------------------------*/ 
//grafico

var ctx = document.getElementById('myChart');
var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: arrayname,
        datasets: [{
            label: '# of Votes',
            data: arraymesa,
            backgroundColor: arraycolor,
            borderColor: arraycolor,
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});