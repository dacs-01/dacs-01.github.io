var people = [];
var salaries = [];
var $ = function (id) { return document.getElementById(id); };

window.onload = function () 
{
    $("display_results").onclick = displayResults;
    $("add_salary").onclick = addSalary;
    $("display_salary").onclick = displaySalary;
    $("people").focus();
};

function addSalary()
{
    var person = $("people").value;
    var salary = $("salary").value;
    
   if (salary < 30000 || salary == "" || isNaN(salary))
   {
       alert("You must enter a valid salary");
       salary = "";
       $("people").focus();
   }
   else
   {
    salary = parseInt(salary);
    if(people.includes(person))
    {
       var index =  people.indexOf(person);
       salaries[index] = salary;
       $("people").focus();
    }
    else
    {
        people.push(person);
        salaries.push(salary);
    }
       $("salaries").innerHTML = "" ;
   }
}

function displayResults()
{
    var avg = 0, sum = 0, max = 0, highestSal;
    for(i = 0; i < salaries.length; i++)
    {
        sum += salaries[i];
    }
    avg = (sum / salaries.length).toFixed(2);

    for(j = 0; j < salaries.length; j++)
    {
        if(salaries[j] > max){
            max = salaries[j];
            highestSal = j;
        }
    }

    $("results").innerHTML = "<h2>Results</h2>" + "<p>Average of the employees' salaries is $" + avg
        + ".</p>" + "<p>The highest salary of all of the employees is $" + max + ", which is earned by " + people[highestSal] + ".</p>" ;
}

function displaySalary()
{
    var html = "";
    html += "<tr><th>Person</th> <th>Salary (in $USD)</th></tr>"
    for(k = 0; k < salaries.length; k++)
    {
        html+="<tr><td>" + people[k] + "</td><td>" + salaries[k]+"</td></tr>";
    }
    html+="</table>";
    $("results_table").innerHTML = "<h2>Salaries</h2>" + html;
}
