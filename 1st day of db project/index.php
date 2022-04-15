<?php

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Personal details </title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <form action="database.php" method="post" >
    <h2>fill Your details</h2>
    <hr>
    <div class="container">
        <p>Name: <input type="text" name="name" id="name"></p>
        <p>Age: <input type="text" name="age"></p>
        <fieldset>       
            <legend> <p>Gender: </p></legend>

        <span>Male<input type="radio" name="gender" id="Male" value="male"></span>
        <span>FeMale<input type="radio" name="gender" id="Female" value ="female"></span>
    </fieldset>
    <p>Phone no: <input type="number" name="phoneNumber" id="phoneNo"></p>
    <input type="submit" value="submit">
    </div>
</form>
    
</body>
</html>
