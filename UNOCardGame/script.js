$(document).ready(function() {
  //$(".card").click(function() {
   // $("#color").css("background-color", "red");
  //});

  var gameTurn = {
    deckCount: 40,
    discardPile: {
      color: "yellow",
      rank: "2"
    },
    players: [
      {
        name: "David", //players[0].name
        hand: [
          { color: "yellow", rank: "3" }, //players[0].hand[0].color/rank
          { color: "blue", rank: "3" }, //players[0].hand[1].color/rank
          { color: "red", rank: "4" }, //players[0].hand[2].color/rank
          { color: "black", rank: "w" } //players[0].hand[3].color/rank
        ]
      },
      {
        name: "Dan", //players[1].name
        hand: 4 //players[1].hand
      },
      {
        name: "John", //players[2].name
        hand: 5 //players[2].hand
      },
      {
        name: "Kent", //players[3].name
        hand: 10 //players[3].hand
      }
    ]
  };

  function createCards(game) {
    var currPlayer = game.players[0];
    for (i = 0; i < currPlayer.hand.length; i++) {
      var card = $("<div class='card color'><div></div>");
      card.addClass(".oval-shape");
      var corner1 = $("<div></div>");
      var middle = $("<div></div>");
      var corner2 = $("<div></div>");
      var oval = $("<div></div>")
      corner1.append(currPlayer.hand[i].rank);
      corner1.addClass("corner1");
      middle.append(currPlayer.hand[i].rank);
      middle.addClass("middle");
      oval.addClass("oval-shape");
      card.append(oval);
      corner2.append(currPlayer.hand[i].rank);
      corner2.addClass("corner2");
      card.append(corner1);
      card.append(middle);
      card.append(corner2);
      card.addClass(currPlayer.hand[i].color);
      $(".spread").append(card);
    }
  }
  createCards(gameTurn);
    
    function fan(container, angle) {
        var num = $(container).children().length;
        var rotate = -angle * Math.floor(num / 2);
        $(container).children().each(function () {
            $(this).css("transform", "rotate(" + rotate + "deg)");
            $(this).css("transform-origin", "0 100%");
            rotate += angle;
        });
        
        $(container).children().mouseenter(function() {
           $(this).addClass("slide-out"); 
        });
        $(container).children().mouseleave(function() {
            $(this).removeClass("slide-out");
        });
    }
    fan(".hand", 7);
});