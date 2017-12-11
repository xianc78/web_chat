<?php
//include "sqlConnect.php"; // I was going to use SQL
$nickname = strip_tags($_POST["nickname"]);
$message = strip_tags($_POST["message"]);

$file = fopen("messages.txt", "a") or die("Error opening file");
fwrite($file, "<b>" . $nickname . "</b>: " . $message . "\n");
fclose($file);
//echo "Message submitted";
?>