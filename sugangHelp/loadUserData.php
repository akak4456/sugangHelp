<?
$id = $_POST['ID'];
$connect = mysql_connect("localhost","akak4456","password");
$select = mysql_select_db("akak4456",$connect);

mysql_query("set session character_set_connection=utf8;");
mysql_query("set session character_set_results=utf8;");
mysql_query("set session character_set_client=utf8;");

$mysql = "select * from universitydata";
$done = mysql_query($mysql,$connect);
if ( !ctype_alnum($id) ) {
    echo "!FALSE";
}else{
    $a = 0;
    while($db = mysql_fetch_array($done)){
	   if($id == $db[id]){
		  echo $db[content];
		  $a = 1;
		  break;
	   }
    }
    if($a != 1){
	   echo "!FALSE";
    }
}
$close=mysql_close($connect);
?>