var user_name;
var user_feeling;
var price = 0;

function setName(user_name){this.user_name = user_name;}

function setFeeling(user_feeling) {this.user_feeling = user_feeling;}

function getName() {return user_name;}

function getFeeling() {return user_feeling;}

function promptUser() 
{
    setName(prompt("Please enter your name", "Name here"))
    setFeeling(prompt("How are you feeling?", "great"))

    document.getElementById('timedate').innerHTML = 'Today is: ' + getTodaysDate() + ', and the time is: ' + getCurrentTime();
    document.getElementById('wel-msg').innerHTML = 'Cisneros Technologies welcomes you, ' + getName() + '!\n' + 
        "We're glad you are doing " + getFeeling() + '.'; 
}

function getTodaysDate() 
{
    let date = new Date();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return days[date.getDay()] + ', ' + months[date.getMonth()] + ' ' + date.getDate();
}

function getCurrentTime() 
{
    let ahora = new Date();
    let meridiem = ahora.getHours() >= 12 ? 'PM' : 'AM';
    let min = ahora.getMinutes() < 10 ? '0' + ahora.getMinutes() : ahora.getMinutes();
    return ahora.getHours() % 12 + ':' + min + ' ' + meridiem;
}

function one()
{
    var cheetahs = prompt("How many pet cheetahs would you like?")
    parseInt(cheetahs);
    var total = cheetahs * 1000;
    alert('You want ' + cheetahs + ' cheetahs, and they cost $1000 each. Total is: $' + total);
}

function two()
{
    var fuel = prompt('Looks like you need fuel for your new Cheetah vehicle! How many gallons do you need?')
    parseFloat(fuel);
    var tax = 1.07;
    var fuel_price = 3.49;
    var price = (fuel * fuel_price) * tax;
    alert('You want ' + fuel + ' gallons of fuel for your roadster. Fuel is $' + fuel_price + ' per gallon. Total price with tax is: $' + price);

}

function three()
{
    today = new Date();
    var one_day=1000*60*60*24;
    var cheetahDay = new Date(today.getFullYear(), 11, 4);
    if (today.getMonth()==11 && today.getDate()>4) 
    {
        cheetahDay.setFullYear(cheetahDay.getFullYear()+1); 
    } 
    alert(Math.ceil((cheetahDay.getTime()-today.getTime())/(one_day)) + ' days left until Cheetah Day!')
}

function four()
{
    alert("Why can't zoo animals take tests? Because there are too many cheetahs!")
}

function five()
{
    var choice = prompt('So you are interested in purchasing a new Cheetah vehicle. Do you want the Roadster, SUV, or Sedan?');
    if (choice == 'Roadster' || choice == 'roadster')
    {
        alert("Nice choice! The Roadster starts at $58,000 and increases the more features you add to it.")
    }
    else if (choice == 'SUV' || choice == 'suv')
    {
        alert("Must be a family person! The SUV starts at $42,000 and increases the more features you add to it.")

    }
    else if (choice == 'Sedan' || choice == 'sedan')
    {
        alert("That's a great choice! The Sedan starts at $27,000 and increases the more features you add to it.")

    }
    else
    {
        alert("Sorry, incorrect choice. Either we don't offer it or it's discontinued.")
    }
}