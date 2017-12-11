var OK, READY, checkKeyEvents, element, init, sendMsg, update, updateScroll, nickname;

OK = 200;

READY = 4;

element = document.getElementById("chat");

init = function() {
  while (true) {
    nickname = prompt('Enter a nickname');
    if (nickname != null) {
      break; 
    }  
  }
  setInterval(update, 3000);
};

sendMsg = function() {
  var msg, xmlhttp;
  msg = document.getElementById('message').value;
  xmlhttp = new XMLHttpRequest;
  xmlhttp.open('POST', 'submit.php', true);
  xmlhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  xmlhttp.send('nickname=' + nickname + '&message=' + msg);
  document.getElementById('message').value = '';
  update();
};

update = function() {
  var xmlhttp;
  xmlhttp = new XMLHttpRequest;
  xmlhttp.onreadystatechange = function() {
    if (this.readyState === READY & this.status === OK) {
      document.getElementById('chat').innerHTML = this.responseText;
    }
  };
  xmlhttp.open('GET', 'read.php', true);
  xmlhttp.send();
  updateScroll();
};

updateScroll = function() {
  var scrolled;
  scrolled = false;
  if (!scrolled) {
    document.getElementById("chat").scrollTop = document.getElementById("chat").scrollHeight;
  }
};

checkScroll = function() {
  var scrolled;
  scrolled = true;
};

checkKeyEvents = function(event) {
  if (event.key === 'Enter') {
    sendMsg();
  }
};