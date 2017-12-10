<?php
//include "sqlConnect.php"; // I was going to use SQL
$nickname = $_POST["nickname"];
$message = $_POST["message"];

$file = fopen("messages.txt", "a") or die("Error opening file");
fwrite($file, $nickname . ": " . $message . "\n");
fclose($file);
echo "Message submitted";
?>