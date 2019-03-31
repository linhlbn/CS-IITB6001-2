<!DOCTYPE html>

<head>
  <title>
    Search info</title>
</head>

<body>

<?php
    // ...
    echo "<table border='1' style='margin-left:auto;margin-right:auto;'>";
    $file_name = "../uploads/data/salaryCalculated.txt";
    $search = file($file_name);
    $count = 0;
    $results = "";
    foreach($search as $find){
        if(strpos($find, $_POST["nameSearch"])){
            $results = $results . $find . "<br>";
        }
    }
    if (empty($results)) {
        echo 'No results found';
    } else {
        echo $results . '</table>';
    }
    echo file_get_contents($file_path_name);    
  ?>

<a href='index.html'>Main Page</a>
</body>

</html>