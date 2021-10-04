<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

$obj = $_POST['pattern'];

// ここに処理を記述してください。
// echo $obj;
$ans = "";
$arr = json_decode($obj, true);

$res = array();
for($i = 1; $i <= 30; $i++){
    $res[$i] = "";
}

foreach($arr["obj"] as $o){
    for($i = 1; $i <= 30; $i++){
        if($i % (int)$o["num"] == 0){
            // echo $o["num"];
            $res[$i] .= $o["text"];
        }
    }
}

for($i = 1; $i <= 30; $i++){
    if($res[$i] == ""){
        echo $i;
    }else{
        echo $res[$i];
    }  
    echo ", ";
}


?>