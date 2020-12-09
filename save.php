<?php
    var_dump($_SERVER['REQUEST_METHOD']);
    var_dump($_GET);
    $name = $_GET['Name'];
    $score = $_GET['Score'];

    include_once 'my_functions.php';
    saveDataToXML($_GET);

    header('Location: leaderboard.xml');
?>