<!--This is register.php file -->
<!DOCTYPE html>

<head>
  <title>
    Registration Summary</title>
</head>

<body>
  <h2>
    Registration Summary</h2>
  <table border="1">
    <tr>
      <th>
        First name</th>
      <th>
        Last name</th>
      <th>
        Student ID</th>
      <th>
        Phone number</th>
      <th>
        Email</th>  
      <th>
        Services</th>
      <th>
        Feedback</th>
    </tr>
    <tr>
      <td>
        <?php echo $_GET["first_name"] ?>
      </td>
      <td>
        <?php  echo $_GET["last_name"] ?>
      </td>
      <td>
        <?php  echo $_GET["studentID"] ?>
      </td>
      <td>
        <?php  echo $_GET["phoneNumber"] ?>
      </td>
      <td>
        <?php  echo $_GET["email"] ?>
      <td>
        <?php $Services=$_GET["Services"]; foreach($Services as $ss) echo $ss . ' '; ?>
      </td>
      <td>
        <?php $fb=$_GET["Feedback"]; echo $fb; ?>
      </td>
    </tr>
  </table>
  <a href="index.html">Back</a>
</body>

</html>