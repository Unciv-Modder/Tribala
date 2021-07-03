function $ (__) {
  
  var cmd = __.split(' ')[0];
  var arg = __.split(' ').slice(1);
  if (cmd == "do") {
    
    arg = arg.join(' ').split(';');
    v = [];
    operations = ['+', '-', '*', '/', '^']
    for (ii in arg) {
      i = arg[ii];
      console.log(i, i.split('').slice(1).join(''));
      if (i[0] == '$') {
        
        v.push($(i.split('').slice(1).join('')));
        
      }
      else if (operations.includes(i.replaceAll(' ', ''))) {
        
        op = i;
        
      }
      else {
        
        v.push(i);
        
      }
      
    }
    
    if (op == '+') {
      
      return v[0] + v[1];
      
    }
    if (op == '-') {
      
      return v[0] - v[1];
      
    }
    if (op == '*') {
      
      return v[0] * v[1];
      
    }
    if (op == '/') {
      
      return v[0] + v[1];
      
    }
    if (op == '^') {
      
      return v[0] ^ v[1];
      
    }
    
    
  }
  if (cmd == "hold") {
    
    return function (_) {
      
      return {
        
        
        get:function () {
          
          return $(_);
          
        }
        
      };
      
    };
    
  }
  if (cmd == "loop") {
    
    arg1 = arg.slice(1)
    that = window;
    
    for (item in arg1) {
      
      that = that[arg1[item]];
      
    }
    
    setInterval(that, arg[0])
    
  }
  if (cmd == "src") {
    
    var a = document.createElement(arg[0]);
    a.src = arg[1];
    document.head.appendChild(a);
    
  }
  if (cmd == "bleed") {
    
    that = window;
    
    for (item in arg) {
      
      that = that[arg[item]];
      
    }
    
    for (key in that) {
      
      window[key] = that[key];
      
    }
    
  }
  if (cmd == "get") {
    
    that = window;
    
    for (item in arg) {
      
      that = that[arg[item]]
      
    }
    return that;
    
  }
  if (cmd == "html") {
    
    cmd = arg[0]
    arg = arg.slice(1)
    
    if (cmd == "new") {
      
      return document.createElement(arg.join(' '));
      
    }
    
    if (cmd == "id") {
      
      return document.getElementById(arg.join(' '));
      
    }
    
    if (cmd == "add") {
      
      return document.body.appendChild(window[arg[0]]);
      
    }
    
  }
  
}