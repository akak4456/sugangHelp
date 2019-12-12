<?php
   $filename = "inha.txt";
   $fp = fopen($filename, "r") or die("파일열기에 실패하였습니다");
   $buffer = fread($fp, filesize($filename));
    echo $buffer;
   fclose($fp);
?>