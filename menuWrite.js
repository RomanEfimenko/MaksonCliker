function menuWrite(text) {
  $('.menu').empty();
  $('.menu').html(text);
  updateActions();

  $('#navigationBtn1').css("background", "#e2cd98");
  $('#navigationBtn2').css("background", "#e2cd98");
};

function menuHtml1() {
  var result = '';
  result = result + h4Write('Прокачка Максима');
  result = result + postcWrite(1, 'media/img/c1.png', 2, 'Прокачать чуство юмора');
  result = result + postcWrite(2, 'media/img/c2.png', 5, 'Записаться на курсы английского языка');
  result = result + postcWrite(3, 'media/img/c3.png', 10, 'Почитать');
  result = result + h4Write('Автоматизация Максима');
  result = result + postaWrite(1, 'media/img/a1.png', 3, 'Обновить канал на ютубе и твичи ');
  result = result + postaWrite(2, 'media/img/a2.png', 5, 'Купить рэкламы у контакте');
  result = result + postaWrite(3, 'media/img/a3.png', 10, 'Почитать на стриме');
  return result;
};

function menuHtml2() {
  var result = '';
  result = result + h4Write('Автоматизация Максима');
  result = result + postaWrite(4, 'media/img/a4.png', 20, 'Сделать каминг аут');
  result = result + postaWrite(5, 'media/img/a5.png', 50, 'Посетить стримерский фест');
  result = result + postaWrite(6, 'media/img/a6.png', 100, 'Своя игра с Собакой');
  result = result + postaWrite(7, 'media/img/a7.png', 200, 'Нейролингвистическое программирование');
  result = result + h4Write('Действия');
  result = result + postdWrite(1, 'media/img/d1.png', arrayDeistvie[0].culdown, 'Помочь маме');
  result = result + postdWrite(2, 'media/img/d2.png', arrayDeistvie[1].culdown, 'Идти нахуй');
  return result;
};

function postcWrite(id, imgSrc, up, name) {
  return '<div id="updateC'+id+'" class="postUpdate"><div class="postUpdateImage"><img src="'+imgSrc+'" alt=""></div><div class="postUpdateInfo"><div class="postUpdateName"><p>'+name+'</p></div><div class="postUpdateCosts"><div id="updateC'+id+'Sale" class="postUpdateSale"></div><div class="postUpdateUp"><p><span>+'+up+'</span> за клик</p></div></div></div></div>';
};

function postaWrite(id, imgSrc, up, name) {
  return '<div id="updateA'+id+'" class="postUpdate"><div class="postUpdateImage"><img src="'+imgSrc+'" alt=""></div><div class="postUpdateInfo"><div class="postUpdateName"><p>'+name+'</p></div><div class="postUpdateCosts"><div id="updateA'+id+'Sale" class="postUpdateSale"></div><div class="postUpdateUp"><p><span>+'+up+'</span> в секунду</p></div></div></div></div>';
};

function postdWrite(id, imgSrc, culdown, name, info) {
  if (culdown > 0) {
    return '<div id="updateD'+id+'" class="postUpdate"><div class="postUpdateImage"><img src="'+imgSrc+'" alt=""></div><div class="postUpdateInfo"><div class="postUpdateName"><p>'+name+'</p></div><div class="postUpdateCosts"><div id="updateD'+id+'Sale" class="postUpdateSale"><p>Информация<span></span></p><div class="descr"><p>'+info+'</p></div></div><div id="updateD'+id+'Culdown" class="postUpdateUp"><p><span>+'+culdown+'</span> секунд осталось</p></div></div></div></div>';
  } else {
    return '<div id="updateD'+id+'" class="postUpdate"><div class="postUpdateImage"><img src="'+imgSrc+'" alt=""></div><div class="postUpdateInfo"><div class="postUpdateName"><p>'+name+'</p></div><div class="postUpdateCosts"><div id="updateD'+id+'Sale" class="postUpdateSale"><p>Информация<span></span></p><div class="descr"><p>'+info+'</p></div></div><div id="updateD'+id+'Culdown" class="postUpdateUp"><p><span>Юзабельно</span></p></div></div></div></div>';
  }
};

function h4Write(text) {
  return '<h4>'+text+'</h4>';
};

function updateActions() {
  $('#updateC1').click(function(){
    game.buyUpdate("C",0);
    game.updateDataScreen();
  }); //события когда кликаешь на апдейт

  $('#updateC2').click(function(){
    game.buyUpdate("C",1);
    game.updateDataScreen();
  });

  $('#updateC3').click(function(){
    game.buyUpdate("C",2);
    game.updateDataScreen();
  });

  $('#updateA1').click(function(){
    game.buyUpdate("A",0);
    game.updateDataScreen();
  });

  $('#updateA2').click(function(){
    game.buyUpdate("A",1);
    game.updateDataScreen();
  });

  $('#updateA3').click(function(){
    game.buyUpdate("A",2);
    game.updateDataScreen();
  });


  $('#updateA4').click(function(){
    game.buyUpdate("A",3);
    game.updateDataScreen();
  });

  $('#updateA5').click(function(){
    game.buyUpdate("A",4);
    game.updateDataScreen();
  });

  $('#updateA6').click(function(){
    game.buyUpdate("A",5);
    game.updateDataScreen();
  });

  $('#updateA7').click(function(){
    game.buyUpdate("A",6);
    game.updateDataScreen();
  });

  $('#updateD1').click(function(){
    if (arrayDeistvie[0].culdown == 0) {
      arrayDeistvie[0].culdown = arrayDeistvie[0].culdowntime;
      $('#updateD1').css("color", "#8e8e8e");
      game.editFace.edit("mother");
      data.deistvieTimers.d1 = setTimeout(function() {
        $('#updateD1').css("color", "#000");
      }, 120000);
      d1Mamka();
    };
    game.updateDataScreen();
  });

  $('#updateD2').click(function(){
    if (arrayDeistvie[1].culdown == 0) {
      arrayDeistvie[1].culdown = arrayDeistvie[1].culdowntime;
      $('#updateD2').css("color", "#8e8e8e");
      $('#'+arraySound[8].id).trigger("play");
      data.deistvieTimers.d2 = setTimeout(function() {
        $('#updateD2').css("color", "#000");
      }, 30000);
      d2Nahuy();
    }
    game.updateDataScreen();
  });

};

$('#navigationBtn1').click(function(){
  menuWrite(menuHtml1());
  $('#navigationBtn1').css("background", "#ff8949");
  game.updateDataScreen();
});

$('#navigationBtn2').click(function(){
  menuWrite(menuHtml2());
  $('#navigationBtn2').css("background", "#ff8949");
  game.updateDataScreen();
});

menuWrite(menuHtml1());
$('#navigationBtn1').css("background", "#ff8949");
