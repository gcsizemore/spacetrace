<?php

$mysqli = new mysqli("sql9.freemysqlhosting.net", "sql9171891", "Ncr7ZRIlyR", "sql9171891", 3306);
if ($mysqli->connect_error) {
    die('Connect Error (' . $mysqli->connect_errno . ') '
            . $mysqli->connect_error);
}

function insertMarker($lat,$long,$speciesID){
    echo "In Function\n";
    global $mysqli;
    $stmt = $mysqli->stmt_init();
    $stmt = $mysqli->prepare("INSERT INTO markers (`lat`, `long`, `speciesID`) VALUES (?, ?, ?)");
    $stmt->bind_param("sss", $lat, $long, $speciesID);
    $stmt->execute();
    $mysqli->close();
}

function deleteMarker($id){
    global $mysqli;
    $stmt = $mysqli->stmt_init();
    $stmt->prepare("UPDATE markers SET deleted = 1 WHERE id = ?");
    $stmt->bind_param("i", $id);
    $stmt->execute();
    $mysqli->close();
}

function getAllMarkers($speciesID='0'){
    global $mysqli;
    $stmt = $mysqli->stmt_init();
    $query = "SELECT * FROM markers WHERE deleted = 0";
    if($type != '0'){
        $stmt->prepare($query." AND WHERE speciesID = ?");
        $stmt->bind_param("s", $speciesID);
    }else{
        $stmt->prepare($query);
    }
    $stmt->execute();
    $mysqli->close();
}

switch($_POST['action']){
    case "insertMarker":
        insertMarker($_POST['lat'],$_POST['lng'],$_POST['speciesID']);
        break;
    case "deleteMarker":
        deleteMarker($_POST['id']);
        break;
    case "getAllMarkers":
        getAllMarkers($_POST['speciesID']);
        break;
}

?>