<!-- Mini Exercise
Here is a hands-on exercise for you:

Create a variable with a string value that looks like a number, e.g., "42".
Display its type and value.
Convert it to an integer (using either type casting or settype).
Display its new type and value. -->

<!-- <?php
 $var = "42";
 echo gettype($var)."<br>";
var_dump($var)."<br>";
$var = (int)$var;
var_dump($var)."<br>";
?> -->

<?php
$var = "42";
echo "Before conversion: ";
echo gettype($var) . "<br>";
var_dump($var);

$var = (int)$var;

echo "<br>After conversion: ";
echo gettype($var) . "<br>";
var_dump($var);
?>