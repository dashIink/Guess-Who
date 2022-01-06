<html>

    <header>
        <!-- CSS only -->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <link rel = "stylesheet" type="text/css" href ="..\styles\main.css">
    </header>

    <body>
        <div class="jumbotron jumbotron-fluid">
            <div class="container-top">
              <center><h1 class="display-4-header">Guess who?</h1></center>
            </div>
        </div>
        <?php
         $slots = $_POST["slots"];
         echo $slots;
        ?>
        <div class = "container">
            <?php
                for ($y = 0; $y <= $slots/5; $y++){
                    echo "<div class = \"row\">";
                    for ($i = $y*5; $i < $y*5+5 and $i < $slots; $i++){
                        echo "<div class = \"col\">";
                            echo "<div class = \"image\">";
                                echo "<form>";
                                    echo "<input type = \"file\" class =  name = \"img".$i."\"  id = \"img".$i."\" hidden>";
                                    echo "<label for = \"img".$i."\" class = \"upload\">Choose Image</label>";
                                echo "</form>";
                            echo "</div>";
                        echo "</div>";
                        
                    }
                    echo "</div>";
                }
            ?>
        </div>
    </body>

</html>