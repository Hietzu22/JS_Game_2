<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Leaderboard</title>
</head>
<body>

<h1>Leaderboard</h1>

<button onclick="location.href='Game.html'">Play Again</button>

    <?php
        $xml = simplexml_load_file('leaderboard.xml');
    ?>

<?php foreach ($xml->highscore as $highscore): ?>
    <div class="HighScoreDisplay">
        <h3><?php echo $highscore->name; ?>: <?php echo $highscore->score; ?></h3>
    </div>
<?php endforeach; ?>

</body>
</html>