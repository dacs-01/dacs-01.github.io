var isLooping = true;
while (isLooping == true) 
{
    var sides = getNumOfSides();
    validateEntry(sides);
}

function getNumOfSides() 
{
    var numOfSides = parseFloat(prompt("Cisneros Technologies requests a number between 1-10. This will tell you a polygon that corresponds to that amount of sides."));
    return numOfSides;
}

function validateEntry(sides) 
{
    sides = Math.round(Math.abs(sides));
    if (sides > 0 && sides < 11) 
        {
            var shape = getShape(sides);
            alert(shape);
            isLooping = false;
        }
    else 
        {
            alert("Yeah that's not between 1 and 10 bud. Try again.")
        }
}


function getShape(input) 
{
    switch (input) 
    {
        case 1:
            return "A polygon with 1 side is a Monogon";
        case 2:
            return "A polygon with 2 sides is a Bigon";
        case 3:
            return "A polygon with 3 sides is a Triangle";
        case 4:
            return "A polygon with 4 sides is a Quadrilateral";
        case 5:
            return "A polygon with 5 sides is a Pentagon";
        case 6:
            return "A polygon with 6 sides is a Hexagon";
        case 7:
            return "A polygon with 7 sides is a Septagon";
        case 8:
            return "A polygon with 8 sides is a Octagon";
        case 9:
            return "A polygon with 9 sides is a Nonagon";
        case 10:
            return "A polygon with 10 sides is a Decagon";
    }
}




