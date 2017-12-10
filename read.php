<?php
$file = fopen("messages.txt", "r") or die("Error opening file");
while (!feof($file)) {
echo fgets($file) . "<br />";
}
fclose($file);
?>