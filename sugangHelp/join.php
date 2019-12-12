<?
$id = $_POST['ID'];
$pw = $_POST['PW'];
$university = $_POST['UNIVERSITY'];
$connect = mysql_connect("localhost","akak4456","password");
$select = mysql_select_db("akak4456",$connect);

mysql_query("set session character_set_connection=utf8;");
mysql_query("set session character_set_results=utf8;");
mysql_query("set session character_set_client=utf8;");
if ( !ctype_alnum($id) ) {
    echo "!FALSE1";
}else{
    $a = 0;
    $mysql = "select * from universitydata";
    $done = mysql_query($mysql,$connect);
    while($db = mysql_fetch_array($done)){
	   if($id == $db[id]){
		  echo "!FALSE2";
		  $a = 1;
		  break;
	   }
    }
    if($a != 1){
	   echo "!TRUE";
        $mysql = "insert into universitydata (id, pw, university,content) values ('".$id."', '".$pw."','".$university."', '') ; ";
        $done = mysql_query($mysql,$connect);
    }
}
$close=mysql_close($connect);
?>