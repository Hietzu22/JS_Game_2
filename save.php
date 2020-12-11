<?php
    var_dump($_SERVER['REQUEST_METHOD']);
    var_dump($_GET);
    $name = $_GET['name'];
    $score = $_GET['score'];

    include_once 'my_functions.php';
    saveDataToXML($_GET);

    header('Location: leaderboard.php');
?>