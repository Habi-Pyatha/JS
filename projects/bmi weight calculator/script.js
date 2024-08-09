const form = document.querySelector('form');
//this use case will give you empty value
// const weight=parseInt(document.querySelector('#weight').value)

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid height ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    // results.innerHTML=`${height}`
    //show the bmi result
    results.innerHTML = `<span>${bmi}</span>`;
    const status=document.querySelector('.status')
    if(bmi<18.6)
    {
      status.innerHTML="<span>Underweight</span>"
    }
    else if(bmi >18.6 &&bmi< 24.9){
      status.innerHTML="<span>Normal Range</span>"

    }
    else{
      status.innerHTML="<span>Greater than</span>"

    }
  }
});
