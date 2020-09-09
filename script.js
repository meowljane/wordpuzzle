
var addclue = function() {
  var up = [$('div.upclue[data-j=1]').text('L\nI\nN\nD\nS\nA\nY'),
    $('div.upclue[data-j=2]').text('O\nK\nI\nN\nA\nW\nA'),
    $('div.upclue[data-j=3]').text('H\nO\nT\nL\nI\nN\nK'),
    $('div.upclue[data-j=4]').text('S\nY\nM\nB\nO\nL\nE'),
    $('div.upclue[data-j=5]').text('W\nA\nY\nS\nI\nD\nE'),
    $('div.upclue[data-j=6]').text('O\nA\nK\nO\nR\nE\nS'),
    $('div.upclue[data-j=7]').text('D\nE\nG\nR\nE\nE\nS')
  ];
  var left = [$('div.leftclue[data-i=1]').text('LOCKBOX'),
    $('div.leftclue[data-i=2]').text('SKIWEAR'),
    $('div.leftclue[data-i=3]').text('GOT MYTH'),
    $('div.leftclue[data-i=4]').text('ENVELOP'),
    $('div.leftclue[data-i=5]').text('SHUFFLE'),
    $('div.leftclue[data-i=6]').text('A SNUDGE'),
    $('div.leftclue[data-i=7]').text('YES EYES')
  ];
  for (var i = 0; i < 7; i++) {
    up[i].html(up[i].html().replace(/\n/g, '<br/>'));
  }
};

var tagok = function() {
  var ok = [
    [1, 1, 0, 0, 0, 1, 0],
    [0, 1, 0, 0, 0, 1, 0],
    [0, 0, 1, 1, 1, 0, 0],
    [0, 1, 0, 0, 0, 1, 0],
    [1, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 0, 1, 0, 1],
    [1, 0, 0, 1, 0, 0, 1]
  ];
  $.each(ok, function(i, row) {
    $.each(row, function(j, value) {
      var cell = $('div.grid[data-i=' + (i + 1) + '][data-j=' + (j + 1) + ']');
      if (value == 1)
        $(cell).attr('ans', 'ok');
      else
        $(cell).attr('ans', 'notok');
    });
  });
}

var check = function() {
  console.log("check");
  var notok = $('div.grid[ans="notok"]');
  for (i = 0; i < notok.length; i++) {
    var color = $(notok[i]).css('background-color');
    if (color == 'rgb(0, 0, 0)') {
      console.log('notok : ' + i);
$('.no').css('visibility', 'visible');  
return 'no';
    }
  }
  var ok = $('div.grid[ans="ok"]');
  for (i = 0; i < ok.length; i++) {
    var color = $(ok[i]).css('background-color');
    if (color == 'rgb(254, 254, 254)') {
      console.log('ok : ' + i);
$('.no').css('visibility', 'visible');
      return 'no';
    } else if (color == 'rgb(255, 255, 255)') {
      console.log('ok : ' + i);
       $('.no').css('visibility', 'visible');
	return 'no';
    }
  }
  return true;
};

var btn = function() {
  $('#reset').bind('click', function() {
    $('div.grid').each(function() {
      $('.congrats').css('visibility', 'hidden');
$('.no').css('visibility', 'hidden');
      $('#result').text("");
      $(this).css('background-color', 'rgb(255, 255, 255)');
      $(this).text("");
    });
  });
  $('#show').bind('click', function() {
    $('#result').text("");
    $('div.grid').each(function() {
      if ($(this).attr('ans') == 'ok') {
        $(this).css('background-color', 'rgb(0, 0, 0)');
        $(this).text("");
      } else {
        $(this).css('background-color', 'rgb(255, 255, 255)');
        $(this).text("");
      }
    });
  });
  $('#check').bind('click', function() {
    if (check() == true) {
      $('#result').text("");
      alert("그림만 본다고 다 된 것 같나요?");
	    $("body").css("background-color","silver");
alert("이 그림이 그냥 토끼로만 보여요?");
alert("보이는게 다가 아니에요");
alert("민지가 마냥 행복해 보였어요?");
alert("큰 잘못 하고 계신거예요");
alert("빨리 뭐라도 해봐요");
alert("밑에 그리기 기능이라도 켜보라구요");
alert("옆에 글자가 그냥 있는걸로 보여요?");
alert("다시 읽어보세요");
    } else {
      $('#result').text(check());
    }
  });
}

var genGrid = function() {
  for (i = 0; i <= 7; i++) {
    var row = $('<div>').attr('class', 'row');
    for (j = 0; j <= 7; j++) {
      if (i == 0 && j == 0) {} else if (i == 0) {
        var upclue = $('<div>').attr('class', 'upclue');
        $(upclue).attr('data-j', j);
        $(row).append($(upclue));
      } else if (j == 0) {
        var leftclue = $('<div>').attr('class', 'leftclue');
        $(leftclue).attr('data-i', i);
        $(row).append($(leftclue));
      } else {
        var cell = $('<div>').attr('class', 'grid');
        $(cell).attr('data-i', i);
        $(cell).attr('data-j', j);
        $(cell).bind('click', function() {
$('.no').css('visibility', 'hidden');
           var color = $(this).css('background-color');
          if (color == 'rgb(255, 255, 255)') {
            $(this).css('background-color', 'rgb(0, 0, 0)');
          } else if (color == 'rgb(0, 0, 0)') {
            $(this).text('X');
            $(this).css('background-color', 'rgb(254, 254, 254)');
          } else {
            $(this).text('');
            $(this).css('background-color', 'rgb(255, 255, 255)');
          }
          console.log($(this).attr('data-i'));
          console.log($(this).attr('data-j'));
        });
        $(row).append($(cell));
      }
    }
    if (i == 0) {
      $(row).appendTo('div#clue');
    } else {
      $(row).appendTo('div#main');
    }
  }
};

$(document).ready(function() {
  genGrid();
  addclue();
  tagok();
  btn();
});
