<!--This is register.php file -->
<!DOCTYPE html>

<head>
  <title>
    Registration Summary</title>
</head>

<body>
  <h2>
    Feedback Summary</h2>
      <?php
        $fbs=$_GET["Feedback"];
        $name = $_GET["first_name"] . ' ' . $_GET["last_name"];
        echo "Hello " . $name . ". We received your information. You has sent us &#34;" . $fbs . "&#34;. ";
        if ($fbs == "Unacceptable") {
            echo "Thank you for your feedback. Kindly tell us that which services are unacceptable, then we will improve our services!";
        }
        elseif ($fbs == "Satisfactory") {
          echo "Thank you for your feedback. We will continue to improve our services to make you have more great experiences!";
      } elseif ($fbs == "Good") {
          echo "Thank you for your feedback. We hope you continue to enjoy our services!";
      } else {
          echo "Thank you for your feedback. We happy to know that you are our loyal clients!";
      }
      $contentFB=$_GET["contentFB"];
      echo "<br><br> here is your feedback - just a test: <br>" . $contentFB;
      

      ?> <br><br>
  <a href="index.html">Back</a>
</body>

</html>