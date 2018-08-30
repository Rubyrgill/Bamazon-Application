
//Connecting mysql/inquirer
var mysql = require('mysql');
var inquirer = require('inquirer');

//linking to database
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "bamazon"
})

connection.connect(function (err) {
    if (err) throw err;

    //checking connected
    // console.log("successful")
    createTable()
})

var createTable = function () {
    //display data for user 
    connection.query("Select * from products", function (err, res) {

        for (var i = 0; i < res.length; i++) {
            console.log(res[i].itemid + "|--|" + res[i].productname + "|--|" + res[i].departmentname + "|--|" + res[i].price + "|--|" + res[i].stockquantity + "\n");
        }
        //Upond display, ask user if they want to buy a product listed
        promptCustomer(res);
    })
}

var promptCustomer = function (res) {
    //take user input for question 1
    inquirer.prompt([{
        type: 'input',
        name: 'choice',
        message: "What Product Would You Like To Buy? [Press C to Cancel]",
    }]).then(function (answer) {
        var correct = false;
        //If user wants to cancel they can press C
        if (answer.choice.toUpperCase() == "C") {
            process.exit();
        }
        //if input matches item listed as next question
        for (var i = 0; i < res.length; i++) {
            if (res[i].productname == answer.choice) {
                correct = true;
                var product = answer.choice;
                var id = i;
                inquirer.prompt({
                    type: "input",
                    name: "quant",
                    message: "How Many Would You Like to Buy?",
                    validate: function (value) {
                        if (isNaN(value) == false) {
                            return true;

                        } else {
                            return false;
                        }
                    }
                    //If the stockquanitity is not less then zero then minus amount ordered from the total 
                }).then(function (answer) {
                    if ((res[id].stockquantity - answer.quant) > 0) {
                        connection.query("UPDATE products SET stockquantity='" + (res[id].stockquantity - answer.quant) + "'WHERE productname='" + product + "'", function (err, res2) {
                            createTable();
                            console.log("\n" + "--------------------------------" + "\n");
                            console.log("YOU BOUGHT A PRODUCT" + "\n");
                            console.log("--------------------------------" + "\n");
                        })
                        //if zero quanitity, let user know...
                    } else {
                        console.log("\n" + "--------------------------------" + "\n");
                        console.log("ITEM IS SOLD OUT!" + "\n");
                        console.log("--------------------------------" + "\n");
                        promptCustomer(res);
                    }

                })
            }
        }
        //If input does not match item listed...
        if (i == res.length && correct == false) {
            console.log("\n" + "--------------------------------" + "\n");
            console.log("INVALID CHOICE!" + "\n");
            console.log("--------------------------------" + "\n");
            promptCustomer(res);
        }
    })
}