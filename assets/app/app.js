function app() {
    var slib = caira();
    var modal = betterModal();
    var $add = $(".players li a");
    var $players = $(".app-players")
    var $player = $(".user");
    var current_players = 0;
    var delete_user = "";

    modal.init();

    //give players new class
    $(".player-add").each(function() {
        $(this).addClass('' + $(this).html() +'');
    });

    $add.click(function() {
        current_players = current_players + 1
        $players.append("<li class='" + $(this).html() + "'><a href='#' class='player'><span class='player-name'>" + $(this).html()  + "</span><p class='text__kick'>-</p></a></li>");
        $(this).addClass("modal-button-disabled");
        console.log(current_players);
    });

    //open modal for adding the new other person
    $(".modal-button-other").click(function() {
            modal.close();
            modal.open(".modal-add-other-player");
            $(".modal-add-other-player input").val("");
            $(".modal-add-other-player p").css("color", "#272727");
            $(".modal-add-other-player p").html("Type the name of the new player");
            $(".modal-button-add").addClass("modal-button-disabled");
            $(".modal-add-other-player input").focus();
    });

    //Check if user already exists on the go
    var add_other_field = $(".modal-add-other-player input");

    add_other_field.keyup(function(event) {
        var inputVal = add_other_field.val();
        var upperCase= new RegExp('[^A-Z]');
        var lowerCase= new RegExp('[^a-z]');

        if ( $(".app-players").html() === "" ) {
            $(".modal-add-other-player p").css("color", "#272727");
            $(".modal-add-other-player p").html("Type the name of the new player");
            $(".modal-button-add").removeClass("modal-button-disabled");

            if ( event.keyCode == 13 && inputVal === "" || inputVal === "" ) {
                $(".modal-button-add").addClass("modal-button-disabled");
            } else if ( event.keyCode == 13 ) {
                $(".modal-button-add").click();
            }
        } else if ( $(".app-players").html() != "" ) {
            if ( inputVal === $(".player-name").html() || inputVal === $(".player-name").html().toUpperCase() || inputVal === $(".player-name").html().toLowerCase() ) { //Input is equal to the playername / error
                $(".modal-add-other-player p").css("color", "#EF4F41");
                $(".modal-add-other-player p").html("User already there");
                $(".modal-button-add").addClass("modal-button-disabled");
            } else { //reset or was not equal
                $(".modal-add-other-player p").css("color", "#272727");
                $(".modal-add-other-player p").html("Type the name of the new player");
                $(".modal-button-add").removeClass("modal-button-disabled");

                if ( event.keyCode == 13 && inputVal === "" || inputVal === "" ) {
                    $(".modal-button-add").addClass("modal-button-disabled");
                } else if ( event.keyCode == 13 ) {
                    $(".modal-button-add").click();
                }
                }
        }
    });

    //Add the new other player
    $(".modal-button-add").click(function() {
        current_players = current_players + 1
        $players.append("<li class='" + $(".modal-add-other-player input").val() + "'><a href='#' class='player'><span class='player-name'>" + $(".modal-add-other-player input").val()   + "</span><p class='text__kick'>-</p></a></li>");      
        modal.close();
        console.log(current_players);
    });
    
    //Modal for selected players to be removed from list
    $(document).on("click", ".player", function() {
        $(".modal-delete p span").html($(this).children(".player-name").html());
        slib.css(".modal-delete p span", { "font-weight": "700" });
        modal.open(".modal-delete");
        delete_user = $(this).children(".player-name").html();
    });

    //delete the person selected on the list
    $(".modal-delete .modal-button-remove").click(function() {
        $(".app-players li." + delete_user).remove();
        modal.close();

        checkPlayers();

        console.log(current_players);

        if ( current_players <= 5 ) {
            console.log(current_players);
            current_players = current_players - 1
            $(".add-user").removeClass("modal-button-disabled");
        } else {
            current_players = 0;
        }

        console.log(current_players);
    });

    //Check if there are too many players allready before adding new
    $(".player-add, .modal-button-add, .add-user").click(function() {
        console.log("The current players " + current_players);

        if ( $(".app-players").length === 0 ) {
            current_players = 0;
        }

        if (current_players === 5 ||  $(".add-user").hasClass("modal-button-disabled")  ) {
            console.log("too many");
            modal.close();
            $(".add-user").addClass("modal-button-disabled");
        } else {
            checkPlayers();
            modal.open(".modal-add");
        }
    });

    //Functions
    var checkPlayers = function() {
        $(".app-players li span").each(function() {
            var player_name = $(this).html();

            console.log(player_name);

            if ( $(".player-add").hasClass('' + player_name + '') ) {
                $(".players ." + player_name).addClass("modal-button-disabled");
                console.log("Got class");
            } else {
                $(".players ." + player_name).removeClass("modal-button-disabled");
                console.log("Didn't get class");
            }
        });
    };
}