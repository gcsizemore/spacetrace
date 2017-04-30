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

function getAllMarkers($speciesID='0',$timestamp){
    global $mysqli;
    $outp = "[[";
    $stmt = $mysqli->stmt_init();
    $query = "SELECT * FROM markers WHERE deleted = 0";
    if($type != '0'){
        $stmt->prepare($query." AND WHERE speciesID = ?");
        $stmt->bind_param("s", $speciesID);
    }else{
        $stmt->prepare($query);
    }
    $stmt->execute();
    $stmt->bind_result($id,$lat,$long,$speciesID);
    while ($stmt->fetch()) {
        $outp.="{id:".$id.",lat:".$lat.",lng:".$long.",speciesID:".$speciesID."},";
    }
    $outp.="],[";
    $stmt = $mysqli->stmt_init();
    $query = "SELECT * FROM markers WHERE deleted = 0 AND timestamp > ?";
    if($type != '0'){
        $stmt->prepare($query." AND WHERE speciesID = ?");
        $stmt->bind_param("ss", $timestamp, $speciesID);
    }else{
        $stmt->prepare($query);
        $stmt->bind_param("s", $timestamp);
    }
    $stmt->execute();
    $stmt->bind_result($id,$lat,$long,$speciesID);
    while ($stmt->fetch()) {
        $outp.="{id:".$id.",lat:".$lat.",lng:".$long.",speciesID:".$speciesID."},";
    }
    $outp.="]]";
    echo json_encode($outp);
    $mysqli->close();
}

function getAllSpecies($json){
    global $mysqli;
    $result = $mysqli->query("SELECT * FROM species");
    $outp = $result->fetch_all(MYSQLI_ASSOC);
    echo json_encode($outp);
}

switch($_POST['action']){
    case "insertMarker":
        insertMarker($_POST['lat'],$_POST['lng'],$_POST['speciesID']);
        break;
    case "deleteMarker":
        deleteMarker($_POST['id']);
        break;
    case "getAllMarkers":
        getAllMarkers($_POST['speciesID'],$_POST['timestamp']);
        break;
    case "getAllSpecies":
        getAllSpecies($_POST['json']);
        break;
}

?>