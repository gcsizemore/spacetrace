<?php

$mysqli = new mysqli("sql9.freemysqlhosting.net", "sql9171891", "Ncr7ZRIlyR", "sql9171891", 3306);

function insertMarker($lat,$long,$icon){
    $stmt = $mysqli->stmt_init();
    $stmt->prepare("INSERT INTO markers (lat,long,icon), (?,?,?)");
    $stmt->bind_param("sss", $lat, $long, $icon);
    $stmt->execute();
}

function deleteMarker($id){
    $stmt = $mysqli->stmt_init();
    $stmt->prepare("UPDATE markers SET deleted = 1 WHERE id = ?");
    $stmt->bind_param("i", $id);
    $stmt->execute();
}

function getAllMarkers($type='all'){
    $stmt = $mysqli->stmt_init();
    $query = "SELECT * FROM markers WHERE deleted = 0";
    if($type != 'all'){
        $stmt->prepare($query." AND WHERE type = ?");
        $stmt->bind_param("s", $type);
    }else{
        $stmt->prepare($query);
    }
    $stmt->execute();
}

?>