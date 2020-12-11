<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
    <html>
        <head>
            <title>Leaderboard</title>
            <style>
                .LBScore {
                    border: 1px solid black;
                    margin: 10px;
                    padding: 5px;
                }
            </style>
        </head>
        <body>
        <h1>Leaderboard</h1>
        <hr/>
            <xsl:for-each select="Leaderboard/highscore">
                <xsl:sort select="score" order="descending"/>
                <div class="LBScore">
                    <h2><xsl:value-of select="name"/>: <xsl:value-of select="score"/></h2>
                </div>
            </xsl:for-each>    
        </body>
    </html>
</xsl:template>
</xsl:stylesheet>