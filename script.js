//<script src="http://code.jquery.com/jquery-1.8.3.js"></script>
//<script src="jquery.js"></script>

var data = {
    score: 0,
    strenghClik: 1,
    strenghAvto: 0,
    shansX5Face: 50, // із 1000
    getRandomInt: function(max) {
      return Math.floor(Math.random() * Math.floor(max));
    },
    dataEditSizeFace: {
      defoultSize: "270px",
      defoultMargin: "25px",
      editSize: "220px",
      editMargin: "50px"
    },
    x: 1,
    animationData: {
      times: 10,
      number: 0,
      symb: '+',
    },
    editFaceTimer: 0,
    animationTimer: 0,
    freazeFaceTimer: 0,
    deistvieTimers: {
      d1:0,
      d2:0
    },
    dataLastClik: new Date(),
    dataAfkTest: new Date()
}

var arrayFaceSetting = [
  function() {
    $('#defoultFace').attr("src", arrayImage[0].src);
    $('#defoultFace').css("width", data.dataEditSizeFace.defoultSize);
    $('#defoultFace').css("height", data.dataEditSizeFace.defoultSize);
    $('#defoultFace').css("margin", data.dataEditSizeFace.defoultMargin);
  },
  function() {
    $('#defoultFace').attr("src", arrayImage[1].src);
    $('#defoultFace').css("width" , data.dataEditSizeFace.editSize);
    $('#defoultFace').css("height" , data.dataEditSizeFace.editSize);
    $('#defoultFace').css("margin" , data.dataEditSizeFace.editMargin);
  },
  function() {
    $('#defoultFace').attr("src", arrayImage[2].src);
    $('#defoultFace').css("width" , data.dataEditSizeFace.editSize);
    $('#defoultFace').css("height" , data.dataEditSizeFace.editSize);
    $('#defoultFace').css("margin" , data.dataEditSizeFace.editMargin);
  },
  function() {
    $('#defoultFace').attr("src", arrayImage[3].src);
    $('#defoultFace').css("width" , data.dataEditSizeFace.editSize);
    $('#defoultFace').css("height" , data.dataEditSizeFace.editSize);
    $('#defoultFace').css("margin" , data.dataEditSizeFace.editMargin);
  },
  function() {
    $('#defoultFace').attr("src", arrayImage[4].src);
    $('#defoultFace').css("width" , data.dataEditSizeFace.editSize);
    $('#defoultFace').css("height" , data.dataEditSizeFace.editSize);
    $('#defoultFace').css("margin" , data.dataEditSizeFace.editMargin);
  },
  function() {
    $('#defoultFace').attr("src", arrayImage[5].src);
    $('#defoultFace').css("width" , data.dataEditSizeFace.editSize);
    $('#defoultFace').css("height" , data.dataEditSizeFace.editSize);
    $('#defoultFace').css("margin" , data.dataEditSizeFace.editMargin);
  },
  function() {
    $('#defoultFace').attr("src", arrayImage[6].src);
    $('#defoultFace').css("width" , data.dataEditSizeFace.editSize);
    $('#defoultFace').css("height" , data.dataEditSizeFace.editSize);
    $('#defoultFace').css("margin" , data.dataEditSizeFace.editMargin);
  },
  function() {
    $('#defoultFace').attr("src", arrayImage[7].src);
    $('#defoultFace').css("width" , data.dataEditSizeFace.editSize);
    $('#defoultFace').css("height" , data.dataEditSizeFace.editSize);
    $('#defoultFace').css("margin" , data.dataEditSizeFace.editMargin);
  }
]

var arrayClikUpdate = [
  {cost: 100,
   up: 2,
   lvl: 0},
  {cost: 500,
   up: 5,
   lvl: 0},
  {cost: 1000,
   up: 10,
   lvl: 0}
]

var arrayAvtoUpdate = [
  {cost: 100,
   up: 3,
   lvl: 0},
  {cost: 500,
   up: 5,
   lvl: 0},
  {cost: 1000,
   up: 10,
   lvl: 0},
  {cost: 3000,
   up: 20,
   lvl: 0},
  {cost: 10000,
   up: 50,
   lvl: 0},
  {cost: 30000,
   up: 100,
   lvl: 0},
  {cost: 80000,
   up: 200,
   lvl: 0}
]

var arrayDeistvie = [
  {culdowntime: 120, // в секундах
   culdown: 0,
   info: 'Маме нужно помогать, респект от паццанов.<br>Куча респекта, количество которого зависит от прокачки и автоматизации Максима.'}, //инфа
  {culdowntime: 30, // в секундах
   culdown: 0,
   info: 'Пойти нахуй, что тут непонятного?<br>Шанс удвоить свой респект. Также вероятно потерять 20 процентов своего респекта...'}
]

var arraySound = [
  {
    id: "ppa",
    src: "media/sound/ppa.mp3"
  },
  {
    id: "x5face",
    src: "media/sound/x5Face.mp3"
  },
  {
    id: "nun",
    src: "media/img/x5face.gif"
  },
  {
    id: "choloviche",
    src: "media/sound/choloviche.mp3"
  },
  {
    id: "garazd",
    src: "media/sound/garazd.mp3"
  },
  {
    id: "agaaga",
    src: "media/sound/agaaga.mp3"
  },
  {
    id: "mayami",
    src: "media/sound/mayami.mp3"
  },
  {
    id: "mother",
    src: "media/sound/mother.mp3"
  },
  {
    id: "fackyouboy",
    src: "media/sound/fackyouboy.mp3"
  }
]

var arrayImage = [
  {
    name: "defoult",
    src: "media/img/defoult.png"
  },
  {
    name: "defoultGif",
    src: "media/img/defoult.gif"
  },
  {
    name: "x5face",
    src: "https://wmpics.pics/di-CR5J.gif"
  },
  {
    name: "choloviche",
    src: "media/img/choloviche33.gif"
  },
  {
    name: "garazd",
    src: "media/img/garazd22.gif"
  },
  {
    name: "agaaga",
    src: "media/img/agaaga21.gif"
  },
  {
    name: "mayami",
    src: "media/img/mayami26.gif"
  },
  {
    name: "mother",
    src: "media/img/mother39.gif"
  }
]

var game = {
  faceClik: function() {
    data.dataLastClik = new Date()
    if (this.dropX5face()) {
      this.editFace.edit("x5face");
      data.score += data.strenghClik * 5;
      data.x = 5;
      game.animationFixed('+',data.strenghClik * 5);
    } else {
      this.editFace.edit("defoult");
      data.score += data.strenghClik;
      data.x = 1;
      game.animationFixed('+',data.strenghClik);
    }
  },
  updateDataScreen: function() {
    $('.scoreData').html(data.score);
    $('.statClik').html("<p>Респект за клик: "+data.strenghClik+"</p>");
    $('.statAvtomat').html("<p>Респект в секунду: "+data.strenghAvto+"</p>");
    $('#updateC1Sale').html("<p>Стоимость <span>"+arrayClikUpdate[0].cost+"</span></p><div class='descr'><p>Уровень "+arrayClikUpdate[0].lvl+"</p></div>");
    $('#updateC2Sale').html("<p>Стоимость <span>"+arrayClikUpdate[1].cost+"</span></p><div class='descr'><p>Уровень "+arrayClikUpdate[1].lvl+"</p></div>");
    $('#updateC3Sale').html("<p>Стоимость <span>"+arrayClikUpdate[2].cost+"</span></p><div class='descr'><p>Уровень "+arrayClikUpdate[2].lvl+"</p></div>");
    $('#updateA1Sale').html("<p>Стоимость <span>"+arrayAvtoUpdate[0].cost+"</span></p><div class='descr'><p>Уровень "+arrayAvtoUpdate[0].lvl+"</p></div>");
    $('#updateA2Sale').html("<p>Стоимость <span>"+arrayAvtoUpdate[1].cost+"</span></p><div class='descr'><p>Уровень "+arrayAvtoUpdate[1].lvl+"</p></div>");
    $('#updateA3Sale').html("<p>Стоимость <span>"+arrayAvtoUpdate[2].cost+"</span></p><div class='descr'><p>Уровень "+arrayAvtoUpdate[2].lvl+"</p></div>");
    $('#updateA4Sale').html("<p>Стоимость <span>"+arrayAvtoUpdate[3].cost+"</span></p><div class='descr'><p>Уровень "+arrayAvtoUpdate[3].lvl+"</p></div>");
    $('#updateA5Sale').html("<p>Стоимость <span>"+arrayAvtoUpdate[4].cost+"</span></p><div class='descr'><p>Уровень "+arrayAvtoUpdate[4].lvl+"</p></div>");
    $('#updateA6Sale').html("<p>Стоимость <span>"+arrayAvtoUpdate[5].cost+"</span></p><div class='descr'><p>Уровень "+arrayAvtoUpdate[5].lvl+"</p></div>");
    $('#updateA7Sale').html("<p>Стоимость <span>"+arrayAvtoUpdate[6].cost+"</span></p><div class='descr'><p>Уровень "+arrayAvtoUpdate[6].lvl+"</p></div>");
    $('#updateD1Sale').html("<p>Информация<span></span></p><div class='descr'><p>"+arrayDeistvie[0].info+"</p></div>");
    $('#updateD2Sale').html("<p>Информация<span></span></p><div class='descr'><p>"+arrayDeistvie[1].info+"</p></div>");

    if (arrayDeistvie[0].culdown > 0) {
      $('#updateD1Culdown').html('<p><span>'+arrayDeistvie[0].culdown+'</span> секунд осталось</p>');
    } else {
      $('#updateD1Culdown').html('<p><span>Юзабельно</span></p>');
    }

    if (arrayDeistvie[1].culdown > 0) {
      $('#updateD2Culdown').html('<p><span>'+arrayDeistvie[1].culdown+'</span> секунд осталось</p>');
    } else {
      $('#updateD2Culdown').html('<p><span>Юзабельно</span></p>');
    }
  },
  dropX5face: function() { // возвращает тру если дропнулся х5
    if(data.getRandomInt(1000) < data.shansX5Face) {
      return true;
    } else {
      return false;
    }
  },
  buyUpdate: function(type, number) { //функция покупки апдейта(Чеки, тесты если все норм проводит)
    if(type=="C") {
      if(data.score > arrayClikUpdate[number].cost) {
        data.score = data.score - arrayClikUpdate[number].cost;
        data.strenghClik += arrayClikUpdate[number].up;
        arrayClikUpdate[number].cost = arrayClikUpdate[number].cost + Math.trunc((arrayClikUpdate[number].cost/4));
        arrayClikUpdate[number].lvl++;
        emotionRandom();
      }
    } else {
        if(data.score > arrayAvtoUpdate[number].cost) {
          data.score = data.score - arrayAvtoUpdate[number].cost;
          data.strenghAvto += arrayAvtoUpdate[number].up;
          arrayAvtoUpdate[number].cost = arrayAvtoUpdate[number].cost + Math.trunc((arrayAvtoUpdate[number].cost/4));
          arrayAvtoUpdate[number].lvl++;
          emotionRandom();
        }
      }
    },
  stopSound: function() { //функция останавливает всю музыку
      $("#ppa").get(0).pause();
      $("#ppa").get(0).currentTime = 0.0;
      $("#x5face").get(0).pause();
      $("#x5face").get(0).currentTime = 0.0;
      $("#choloviche").get(0).pause();
      $("#choloviche").get(0).currentTime = 0.0;
      $("#garazd").get(0).pause();
      $("#garazd").get(0).currentTime = 0.0;
      $("#agaaga").get(0).pause();
      $("#agaaga").get(0).currentTime = 0.0;
      $("#mayami").get(0).pause();
      $("#mayami").get(0).currentTime = 0.0;
      $("#mother").get(0).pause();
      $("#mother").get(0).currentTime = 0.0;
      $("#fackyouboy").get(0).pause();
      $("#fackyouboy").get(0).currentTime = 0.0;
  },
  timerAvtoRespect: setInterval(function() {// таймер каждую секунду добавляет прибиль из секундного дохода
    data.score += data.strenghAvto;
    game.updateDataScreen();
    game.deistvieChekCuldowns();
  }, 1000),
  editFace: {
    edit: function(type) {
      clearTimeout(data.editFaceTimer);
        if(type == "defoult") {
          arrayFaceSetting[1]();
          game.stopSound();
          $('#'+arraySound[0].id).trigger("play");
          data.editFaceTimer = setTimeout(function() {
            arrayFaceSetting[0]();
            }, 1700)
        }
        if(type == "x5face") {
          arrayFaceSetting[2]();
          game.stopSound();
          $('#'+arraySound[1].id).trigger("play");
          data.editFaceTimer = setTimeout(function() {
            arrayFaceSetting[0]();
            }, 2750);
          faceClickActionFreaze(2000);
        }
        if(type == "choloviche") {
          arrayFaceSetting[3]();
          game.stopSound();
          $('#'+arraySound[3].id).trigger("play");
          data.editFaceTimer = setTimeout(function() {
            arrayFaceSetting[0]();
          }, 1650);
          faceClickActionFreaze(1650);
        }
        if(type == "garazd") {
          arrayFaceSetting[4]();
          game.stopSound();
          $('#'+arraySound[4].id).trigger("play");
          data.editFaceTimer = setTimeout(function() {
            arrayFaceSetting[0]();
          }, 1100);
          faceClickActionFreaze(1100);
        }
        if(type == "agaaga") {
          arrayFaceSetting[5]();
          game.stopSound();
          $('#'+arraySound[5].id).trigger("play");
          data.editFaceTimer = setTimeout(function() {
            arrayFaceSetting[0]();
          }, 1050);
          faceClickActionFreaze(1050);
        }
        if(type == "mayami") {
          arrayFaceSetting[6]();
          game.stopSound();
          $('#'+arraySound[6].id).trigger("play");
          data.editFaceTimer = setTimeout(function() {
            arrayFaceSetting[0]();
          }, 1300);
          faceClickActionFreaze(1300);
        }
        if(type == "mother") {
          arrayFaceSetting[7]();
          game.stopSound();
          $('#'+arraySound[7].id).trigger("play");
          data.editFaceTimer = setTimeout(function() {
            arrayFaceSetting[0]();
          }, 1950);
          faceClickActionFreaze(1950);
        }
    }
  },
  afkTest: setInterval(function() {
    data.dataAfkTest = new Date();
    if(data.dataAfkTest-data.dataLastClik > 60000) {
      game.editFace.edit("x5face");
    }
  }, 30000),
  deistvieChekCuldowns: function() {
    if (arrayDeistvie[0].culdown > 0) {
      arrayDeistvie[0].culdown--;
    }
    if (arrayDeistvie[1].culdown > 0) {
      arrayDeistvie[1].culdown--;
    }
  },
  animationFixed: function(syb, number) {
    clearInterval(data.animationTimer);
    data.animationData.times = 10;
    data.animationData.number = number;
    data.animationData.symb = syb;
    $('#fixed').css("opacity","1");
    $('#fixed').css("font-size","42px");
    $('#fixed').css("top","10%");
    $('#fixed').html("<p>"+data.animationData.symb+data.animationData.number+"</p>");
    data.animationTimer = setInterval(function() {
      if(data.animationData.times == 0) {
        clearInterval(data.animationTimer);
        return;
      } else {
        data.animationData.times--;
        $('#fixed').css("opacity", data.animationData.times*0.1);
        $('#fixed').css("top", (10-(10-data.animationData.times))+"%");
        $('#fixed').css("font-size", (42+((10-data.animationData.times)*3))+"px");
      }
    }, 100);
  }
}

$('#menuBtns').click(function(){
  menuBtnsClik();
});

$(window).resize(function(){
  if($(window).height()>1000) {
    $('.main').css("height", ($(window).height()-100)+'px');
  } else {
    $('.main').css("height", "1000px");
  }
  console.log($(window).height());
  console.log($('body').css("height"));
});





$('.defoultFace').click(function(){//событие когда кликаешь на дядю
  if (data.freazeFaceTimer == 0) {
    game.faceClik();
    game.updateDataScreen();
  }
});


game.updateDataScreen();

function faceClickActionFreaze(time) { //на сколько заморозить возможность клинка по фейсу в милисикундах
      data.freazeFaceTimer = setTimeout(function() {
      data.freazeFaceTimer = 0;
      }, time);
};


 //*************Меню функции


function d1Mamka() {
  data.score += (data.strenghAvto+data.strenghClik)*120;
  game.animationFixed('+',(data.strenghAvto+data.strenghClik)*120);
};

function d2Nahuy() {
  if (data.getRandomInt(1000) < 300) {
    game.animationFixed('+',data.score);
    data.score += data.score;
  } else {
    game.animationFixed('-',Math.trunc(data.score/5));
    data.score -= Math.trunc(data.score/5);
  }
};

function emotionRandom() {
  if (data.getRandomInt(1000) < 650) {
    randomNumber = data.getRandomInt(100);
    if(randomNumber<34){
      game.editFace.edit("choloviche");
    }
    if(randomNumber>=34&&randomNumber<67){
      game.editFace.edit("garazd");
    }
    if(randomNumber>=67){
      game.editFace.edit("agaaga");
    }
  }
};
