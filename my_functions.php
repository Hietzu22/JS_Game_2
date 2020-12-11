<?php

function saveDataToXML($data) {
    $name = $data['name'];
    $score = $data['score'];
    $xml = simplexml_load_file('leaderboard.xml');

    $new_highscore = $xml->addChild('highscore');
    $new_highscore->addChild('name', $name);
    $new_highscore->addChild('score', $score);

    $dom = new DOMDocument("1.0");
    $dom->preserveWhiteSpace = false;
    $dom->formatOutput = true;
    $dom->loadXML($xml->asXML());
    $dom->save('leaderboard.xml');
}