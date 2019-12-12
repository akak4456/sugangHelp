<?php
$id = $_POST['ID'];
$connect = mysql_connect("localhost","akak4456","password");
$select = mysql_select_db("akak4456",$connect);

mysql_query("set session character_set_connection=utf8;");
mysql_query("set session character_set_results=utf8;");
mysql_query("set session character_set_client=utf8;");

$mysql = " update universitydata set content = '$' where id = '".$id."' ; ";
$done = mysql_query($mysql,$connect);
$close=mysql_close($connect);
?>