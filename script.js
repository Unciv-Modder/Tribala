// Tribal Times based



sShow = false


function d(a) {
  
  if (!a < 0 && !a > 0) {
    
    return 0;
    
  }
  else {
    
    return a;
    
  }
  
}

function rep(item, times) {
  
  var ret = [], i = 0;
  while (i < times) {
    ret.push(item(i));
    i++;
  }
  return ret;
  
}
var get = {
  
  total: function (list, key = game) {
    
    ret = 0
    for (i in list) {
      
      if (list[i].hasOwnProperty(key)) {
        
        ret += list[i][key].a;
        
      }
      
    }
    
    return ret;
    
  }
  
}

function Capitalize (string) {
  
  return string.slice(0,1).toUpperCase() + string.slice(1)
  
}
function assign (a) {
  
  if (a.slice(0,1) == '+') {
    
    civs[0][a.slice(1)].a = Math.round((civs[0][a.slice(1)].a + 0.01) * 100) / 100;
    
  }
  
  if (a.slice(0,1) == '-') {
    
    civs[0][a.slice(1)].a = Math.round((civs[0][a.slice(1)].a - 0.01) * 100) / 100;
    
  }
  update();
  
}
function setScene (scene, id) {
  
  if (scene.population.a > 0) {
  
    for (i in scene) {
    
      if (scene[i].hasOwnProperty('b')) {
          
        var anus = scene[i].b(scene);
        if (anus != undefined) {
          document.getElementById('game').innerHTML += `<div>${anus}</div>`;
          document.getElementById('game').innerHTML += '<br><br>';
        }
      
      }
    
    }
    
  }
  
  else {
    
    document.getElementById('game').innerHTML += `${scene.name.b(scene)}<br>`;
    document.getElementById('game').innerHTML += 'This Tribe is dead.';
    
  }
  
}
function button (condition, stuff) {
  
  if (condition) {
    
    return `<button onclick='${stuff[0]}'>${stuff[1]}</button>`;
    
  }
  else {
    
    return '<br>';
    
  }
  
}
var linguo = {
  
  word: function (syls) {
    
    $('bleed linguo')
    var i = 0,
        ret = o[Math.round(Math.random() * (o.length - 1))].replace("'", '') + n[Math.round(Math.random() * (n.length - 1))] + c[Math.round(Math.random() * (c.length - 1))];
    while (i < syls-1) {
      
      ret +=o[Math.round(Math.random() * (o.length - 1))] + n[Math.round(Math.random() * (n.length - 1))] + c[Math.round(Math.random() * (c.length - 1))].replace("'", '').replace('kw','k').replace('ky','k');
      i++;
      
    }
    return ret;
    
  },
  
  o: [
    'p',
    't',
    'k',
    'f',
    's',
    'sh',
    'h',
    'ch',
    'j',
    'ky',
    'kw',
    'w',
    'y',
    'm',
    'n',
    'd',
    'g',
    'r'
   ],
  
  c: [
    'p',
    't',
    'k',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    'm',
    'n',
    'ng'
   ],
   n: [
     'a',
     'a',
     'a',
     'a',
     'a',
     'e',
     'e',
     'e',
     'e',
     'e',
     'i',
     'i',
     'i',
     'i',
     'i',
     'o',
     'o',
     'o',
     'o',
     'o',
     'u',
     'u',
     'u',
     'u',
     'u',
     'aa',
     'ai',
     'au',
     'ee',
     'ei',
     'ii',
     'iu',
     'oo',
     'ou',
     'ua',
     'ui',
     'uu'
   ]
  
},
game ={
  discoveries: {
  
    Hunting: function (a) {
    
      return [true, 'Hunting'];
    
    },
  
    bCrafting: function (a) {
    
      if (a.soldiers.a > 0.04 || a.discoveries.a.includes('Basic Crafting')) {
      
        return [true, 'Basic Crafting'];
      
      }
      else {
      
        return [false, 'Basic Crafting'];
      
      }
    
    },
  
    Bronze: function (a) {
    
      if (a.sCollectors.a > 0.29 && Math.floor(Math.random() * 100) > 65) {
      
        return [true, 'Bronze'];
      
      }
      else if (a.discoveries.a.includes('Bronze')) {
      
        return [true, 'Bronze'];
      
      }
    
      else {
      
        return [false, 'Bronze'];
      
      } 
    
    },
  
    Agriculture: function (a) {
    
      if (a.discoveries.a.includes('Agriculture') || Math.floor(Math.random() * 100) > 45) {
      
        return [true, 'Agriculture']
      
      }
    
      else {
      
        return [false, 'Agriculture']
      
      }
    
    
    }
  
  }
  
}
function newCiv(count) {
  
  var bruh = {
    
    id:count,
    
    name:{a:Capitalize(linguo.word(3)), b:function (a) {
      
      return `<h1>Welcome to ${a.name.a}</h1>`;
    
    }},
    
    leader:{a:`chief ${Capitalize(linguo.word(3))}`, b:function (a) {
    
      return `${a.name.a} is led by ${a.leader.a}.`
      
    }},
    
    discoveries: {a:[], b:function(a) {
    
      aa = `${a.name.a} has discovered`
      if (a.discoveries.a.length > 1) {
      
        for (i in a.discoveries.a) {
        
          if (i < a.discoveries.a.length-1) {
          
            aa = `${aa}, ${game.discoveries[a.discoveries.a[i]](a)[1]}`;
            
          }
          else {
          
            aa = `${aa}, and ${game.discoveries[a.discoveries.a[i]](a)[1]}`;
            
          }
          
        }
        
      }
      else if (a.discoveries.a.length > 0){
        
        return `${a.name.a} has discovered ${game.discoveries[a.discoveries.a[0]](a)[1]}.`
        
      }
      
    }},
    
    bronze:{a:0, b:function (a) {
      
      if (a.discoveries.a.includes('Bronze')) {
        
        return `${a.name.a} has ${abr(a.bronze.a)} bronze <img src='bronze.png' style='width:25px;height:25px;'/>`
        
      }
      
    }},
    
    stone:{a:0, b:function (a) {
    
      return `${a.name.a} has ${abr(a.stone.a)} stones <img src='rock.png' style='width:25px;height:25px;'/>`
    
    }},
    
    food:{a:50, b:function (a) {
    
      return `${a.name.a} has enough food to sustain ${abr(a.food.a)} people this week <img src='https://github.com/Unciv-Modder/Tribala/blob/main/food.png' style='width:25px;height:25px;'/>`
    
    }},
    
    sWeapons:{a:0, b:function (a) {
      
      if (a.sWeapons.a > 0) {
        
        return `${a.name.a} has ${abr(a.sWeapons.a)} stone age weapons`
        
      }
      
    }},
    
    
    population:{a:10, b:function (a) {
      return `<h2>--- POPULATION: ${abr(a.population.a)} ---</h2>`;
      
    }},
    
    hunters:{a:0.5, b:function (a) {
   
      unused = 1 - (a.hunters.a + a.farmers.a + a.soldiers.a + a.sCollectors.a + a.crafters.a + a.bMiners.a)
      return `${button(unused > 0 && a.id == 0, ['assign("+hunters"), 0', '+'])}<p>${abr(a.hunters.a * 100)}% are hunting (${abr(a.hunters.a * a.population.a)})</p>${button(a.hunters.a > 0 && a.id == 0, ['assign("-hunters"), 0', '-'])}`;
      
    }},
    
    farmers:{a:0, b:function (a) {
    
      if (a.discoveries.a.includes('Agriculture')) {
        used = 1 - (a.hunters.a + a.farmers.a + a.soldiers.a  + a.sCollectors.a + a.crafters.a + a.bMiners.a)
        return `<br><br>${button(unused > 0 && a.id == 0, [`assign("+farmers")`, '+'])}<p>${abr(a.farmers.a * 100)}% are farming (${abr(a.farmers.a * a.population.a)})</p>${button(a.farmers.a > 0 && a.id == 0, ['assign("-farmers")', '-'])}`;
      }
      
    }},
    
    bMiners:{a:0, b:function (a) {
      if (a.discoveries.a.includes('Bronze')) {
       unused = 1 - (a.hunters.a + a.farmers.a + a.soldiers.a + a.sCollectors.a + a.crafters.a + a.bMiners.a)
       return `<br><br>${button(unused > 0 && a.id == 0, ['assign("+bMiners")', '+'])}<p>${abr(a.bMiners.a * 100)}% of them are mining (${abr(a.bMiners.a * a.population.a)})</p>${button(a.bMiners.a > 0 && a.id == 0, ['assign("-bMiners")', '-'])}`;
      }
      
    }},
    
    sCollectors:{a:0.5, b:function (a) {
      
       unused = 1 - (a.hunters.a + a.farmers.a + a.soldiers.a + a.sCollectors.a + a.crafters.a + a.bMiners.a)
       return `<br><br>${button(unused > 0 && a.id == 0, ['assign("+sCollectors")', '+'])}<p>${abr(a.sCollectors.a * 100)}% of them are collecting stones (${abr(a.sCollectors.a * a.population.a)})</p>${button(a.sCollectors.a > 0 && a.id == 0, ['assign("-sCollectors")', '-'])}`;
      
    }},
    
    crafters:{a:0, b:function (a) {
        
      if (a.discoveries.a.includes('bCrafting')) {
        used = 1 - (a.hunters.a + a.farmers.a + a.soldiers.a +  + a.sCollectors.a + a.crafters.a + a.bMiners.a)
        return `<br><br>${button(unused > 0 && a.id == 0, [`assign("+crafters")`, '+'])}<h4>--- ${abr(a.crafters.a * 100)}% are crafting (${abr(a.crafters.a * a.population.a)}) ---</h4>${button(a.crafters.a > 0 && a.id == 0, ['assign("-crafters")', '-'])}`;
      }
      
    }},
    
    sWeaponers:{a:0, b:function (a) {
    
      if (a.discoveries.a.includes('bCrafting')) {
        
        unused = 1 - (a.sWeaponers.a)
        return `<br><br>${button(unused > 0 && a.id == 0, ['assign("+sWeaponers")', '+'])}<p>${abr(a.sWeaponers.a * 100)}% of ${a.name.a}'s crafters are crafting weapons from stone (${abr(a.sWeaponers.a * (a.crafters.a * a.population.a))})</p>${button(a.soldiers.a > 0 && a.id == 0, ['assign(-sWeaponers")', '-'])}`;
        
      }
      
    }},
    
    settlements:{a:[{name:Capitalize(linguo.word(3)), population:{a:1, b:{}}}], b:function (a) {
    
      var aaaa = `<h3>${a.name.a} has ${a.settlements.a.length} settlements</h3> ${button(!sShow, ['sShow=true;update()', 'Show'])} ${button(sShow, ['sShow=false;update()', 'Hide'])}`
      if (sShow) {
         
         for (i in a.settlements.a) {
            
            aaaa = `${aaaa}<br>${a.settlements.a[i].name} has a population of ${abr(a.settlements.a[i].population.a * a.population.a)} and is ${a.settlements.a[i].population.b[a.name.a] * 100}% Natively ${a.name.a}`;
            
         }
         
      }
      
      else {
        
        aaaa = `${aaaa}`;
        
      }
      
      
      return `${aaaa}`;
      
    }},
    
    
    soldiers:{a:0, b:function (a) {
      
      unused = 1 - (a.hunters.a + a.farmers.a + a.soldiers.a +  + a.sCollectors.a + a.crafters.a + a.bMiners.a)
      return `<br><br>${button(unused > 0 && a.id == 0, ['assign("+soldiers")', '+'])}<h4>--- ${abr(a.soldiers.a * 100)}% of them are serving in the military (${abr(a.soldiers.a * a.population.a)}) ---</h4>${button(a.soldiers.a > 0 && a.id == 0, ['assign("-soldiers")', '-'])}`;
      
    }}
    
  }
  
  bruh.settlements.a[0].population.b[bruh.name.a] = 1;
  return bruh;
  
}

function abr (amount) {
  
  if (amount > 1000000000000) {
    return `${Math.round(amount/100000000000)/10}T`;
  }
  if (amount > 1000000000) {
    return `${Math.round(amount/100000000)/10}B`;
  }
  if (amount > 1000000) {
    return `${Math.round(amount/100000)/10}M`;
  }
  if (amount > 1000) {
    return `${Math.round(amount/100)/10}K`;
  }
  else {
    return Math.round(amount);
  }
  
}
function If (condition) {
  
  return function (then) {
    
    if (condition) {
      
      then();
      
    }
    
  };
  
}


// time
time = 15;

// income values
function income (a) {
  
  var user = civs[a];
  civs[a].food.a += ((user.farmers.a * user.population.a * 10) + (user.hunters.a * user.population.a * (d(user.stone.a / d(user.hunters.a * user.population.a / 5)) + d(user.sWeapons.a / (user.hunters.a * user.population.a))))) - user.population.a;
  civs[a].population.a += Math.ceil((user.food.a - user.population.a) / user.population.a);
  civs[a].stone.a += ((user.sCollectors.a * user.population.a * 2) + (user.bMiners.a * user.population.a * 5)) - ((user.crafters.a * user.population.a * 3) + (user.hunters.a * user.population.a));
  civs[a].bronze.a += (user.bMiners.a * user.population.a);
  if (civs[a].sWeapons.a > 0) {
    
    civs[a].sWeapons.a += (user.sWeaponers.a * user.crafters.a * user.population.a) - (user.hunters.a * user.population.a / 10);
    
  }
  else {
    
    civs[a].sWeapons.a = 0;
    
  }
  
  for (i in game.discoveries) {
    
    if (!user.discoveries.a.includes(i) && game.discoveries[i](user)[0]) {
      
      civs[a].discoveries.a.push(i);
      
    }
    
    else if (user.discoveries.a.includes(i) && !game.discoveries[i](user)[0]) {
      
      civs[a].discoveries.a.pop(i);
      
    }
    
  }
  
}

// Make the body so we can add our elements
document.body = $('html new body');
var a = $('html new center');
a.id = 'uIn';
$('html add a')

// second counter
var a = $('html new center');
a.id = 'a';
$('html add a');
var seconds = 0;

// some variables that are important
var wi = 0,
wc = 0;
function plural (amount, noun, retA = true) {
  if (amount != 1 && noun.slice(noun.length-1) == 'y') {
    
      noun = `${noun.slice(0,noun.length-1)}ie`;
    
  }
  if (retA) {
    if (amount == 1) {
    
      return `${amount} ${noun}`;
    
    }
  
    else if (amount < 1 && amount > 0) {
    
      return `${amount} of a ${noun}`;
    
    }
  
    else {
    
      return `${amount} ${noun}s`;
    
    }
    
  }
  else {
    if (amount == 1) {
    
      return `${noun}`;
    
    }
  
    else if (amount < 1 && amount > 0) {
    
      return `of a ${noun}`;
    
    }
  
    else {
    
      return `${noun}s`;
    
    }
    
  }
  
}

var select = 0, currentciv = 0;

function update (civ = 0) {
  if (civs[civ].population.a > 0) {
    
    html.a.innerHTML = `<button onclick='time+=1;update();'>+</button><br>${time - seconds} seconds left until week automatically ends (${Math.round(15 / time * 100) / 100}x speed)<br>${button(time > 1, ['time-=1;update()', '-'])}`;
    seconds = 0;
    html.game.innerHTML =  `
      <h1>week ${wc}</h1>
      <h2>${plural(wc/4, 'month')}</h2>
    `;
    setScene(civs[0]);
    html.game.innerHTML += `<button onclick='start()'>Next Week</button>`
    html.game.innerHTML += `<h4>Look at another Tribe (set to 0 to clear)</h4>${button(select < civs.length-1, ['select+=1;update()', '+'])}<p>${select}/${civs.length-1}</p>${button(select > 0, ['select-=1;update()', '-'])}`
    if (select != 0) {
    
      setScene(civs[select])
    
    }
    
  }
  
  else {
    
    clearInterval(sc)
    
    html.a.innerHTML = `<p>look at the handbook before playing noob</p>`
    
    html.game.innerHTML = `<h2>Haha you lost pee pee poo poo</h2>`
    html.game.innerHTML += `<button onclick='mainMenu();html.game.innerHTML=""'>Back to Main Menu</button>`
    
  }
  
}

function week () {
  
  wc += 1;
  that = income;
  for (civ in civs) {
    
    income(civ);
    
  }
  update();
  
}

function startstart (x) {
  
  civs = rep(function (a) { return newCiv(a); }, x+1);
  sc = setInterval(function () {
  
    seconds += 1;
    $('html id a').innerHTML = `<button onclick='time+=1;update();'>+</button><br>${time - seconds} seconds left until week automatically ends<br><button onclick='time-=1;update();'>-</button>`;
    if (seconds > time-5) {
      
      $('html id a').innerHTML = `<p style='{color:red;}'>${plural(30 - seconds, 'second')} left until week automatically ends</p>`;
      
    }
    if (seconds > time-5) {
      
      week();
      
    }
  },1000);
  
  start();
  
}

function start () {
  
  week();
  
}



// E
a = $('html new center');
a.id = 'game';
$('html add a');
var html = {
  a:document.getElementById('a'),
  game:document.getElementById('game')
},

civnum = 15,
help = [
  
  `
  <p>this handbook will let you know what you need to know in order to play the game without wanting to blow your brains out.</p>
  <h4>1: Food</h4>
  <p>Your population needs to eat. You start off with 50% of your population being hunters, which will bring your population to 50.   Hunters hunt food w, Farmers (which require Agriculture) produce enough for 10 people per week. You can see the amount of Hunters/Farmers you have by looking at the number in brackets, like this:</p>
  <p>50% of your population are hunting. (7)</p>
  <p>the next page will explain discoveries.</p>
  `,
  `
  <h4>2: Discoveries</h4>
  <p>Discoveries in this game are like technology, but instead of selecting which discovery you want to discover you have to reach a list of conditions before you get the effects of the discovery</p>
<p>the next page will explain resources.</p>
  `,
  `
  <h4>3: Resources</h4>
  <p>Soldiers require extra food, they also may need payment depending on what you've discovered. Stone Collectors collect 2 stone, Miners mine 5 stone and 1 gold. Stone Weapon Crafters turn 3 stone into a weapon. Hunting takes up a lot of stones.
</p>
<p>the next page gives you a cheat sheet</p>
  `,
  `
<h4>Cheat Sheet</h4>
<p>You need 30% or more stone collectors to discover Bronze (it might take a bit).</p>
<p>You need to have soldiers to discover Crafting</p>
<p>You need weapons to train Soldiers</p>
  `
  
],
pageNum = 0,
con = {milTurns:0, huntTurns:0};
function handbook () {
  
  html.a.innerHTML = help[pageNum];
  html.a.innerHTML += `${button(pageNum < help.length-1, ['pageNum+=1;handbook()', '+'])}<p>pg. ${pageNum+1}</p>${button(pageNum > 0, ['pageNum-=1;handbook()', '-'])}<br>
  <button onclick='mainMenu()'>Back to Main Menu</button>
  `;
  
}
function mainMenu () {
  $('html id title').innerHTML = Capitalize(linguo.word(2));
  html.a.innerHTML = `
    <h1>Tribe (${$('html id title').innerHTML})</h1><br>
    ${button(civnum < 150, ['civnum+=1;mainMenu()', '+'])}<p>${plural(civnum, 'opponent')}</p>${button(civnum > 0, ['civnum-=1;mainMenu()', '-'])}
    <br><br><br>
    <button onclick="startstart(civnum)">Start</button><br><br><br>
    <button onclick='handbook()'>Handbook</button>

    <br>
  `;
}
background = $('html new div');
background.id = 'background';
$('html add background');
html.bg = $('html id background');
var frame1 = 0, frame2 = 0, frame3 = 0;
setInterval(function() {
  html.bg.innerHTML = `<img id=bg1 src='bg1.png' hide/><img id=bg2 src='bg2.png' hide/><img id=bg3 src='bg3.png' hide/><img id=bg4 src='bg4.png' hide/><img id=bg5 src='bg5.png' hide/><img id=bg6 src='bg6.png' hide/><canvas id="c" width=${window.innerWidth} height=${window.innerHeight}/>`;
  var c = $('html id c').getContext('2d')
  ,img = [
    $('html id bg1'),
    $('html id bg2'),
    $('html id bg3'),
    $('html id bg4'),
    $('html id bg5'),
    $('html id bg6')
  ];
  
  bruh = 2
  c.clearRect(0,0,window.innerWidth,window.innerHeight);
  
  c.drawImage(img[2],window.innerWidth+frame3,0,window.innerWidth,window.innerHeight);
  c.drawImage(img[5],window.innerWidth+frame3-window.innerWidth,0,window.innerWidth,window.innerHeight);
  c.drawImage(img[2],window.innerWidth+frame3-window.innerWidth*2,0,window.innerWidth,window.innerHeight);
  c.drawImage(img[1],window.innerWidth+frame2,0,window.innerWidth,window.innerHeight);
  c.drawImage(img[4],window.innerWidth+frame2-window.innerWidth,0,window.innerWidth,window.innerHeight);
  c.drawImage(img[1],window.innerWidth+frame2-window.innerWidth*2,0,window.innerWidth,window.innerHeight);
  c.drawImage(img[0],window.innerWidth+frame1,0,window.innerWidth,window.innerHeight);
  c.drawImage(img[3],window.innerWidth+frame1-window.innerWidth,0,window.innerWidth,window.innerHeight);
  c.drawImage(img[0],window.innerWidth+frame1-window.innerWidth*2,0,window.innerWidth,window.innerHeight);
  frame1 += window.innerWidth/500;
  frame2 += window.innerWidth/500;
  frame3 += window.innerWidth/500;
  if (window.innerWidth+frame3-window.innerWidth > window.innerWidth+1) {
    frame3 = -window.innerWidth
  }
  if (window.innerWidth+frame2-window.innerWidth > window.innerWidth) {
    frame2 = -window.innerWidth
  }
  if (window.innerWidth+frame1-window.innerWidth > window.innerWidth) {
    frame1 = -window.innerWidth
  }
  console.log(window.innerWidth/500, window.innerWidth/250, window.innerWidth/100)
}, 1000/15);

mainMenu();
