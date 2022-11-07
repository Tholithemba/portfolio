
highlight_currentTab();

showMenu();

function highlight_currentTab(){
  const current_li  = document.querySelectorAll(".currentTab");
  const current_section = document.querySelectorAll("section");

  function activeTab(){
  let section_length = current_section.length;

    while(--section_length && window.scrollY - 97 <
      current_section[section_length].offsetTop){}

    current_li.forEach(ltx =>ltx.classList.remove("activ"));
    current_li[section_length].classList.add("activ");
  }
  activeTab();
  window.addEventListener("scroll", activeTab);
}

function showMenu(){
  const menu = document.querySelector('header');

  window.addEventListener('scroll', ()=>{
    if(window.scrollY >= 20){
      menu.classList.add('activeHeader');
    }else {
      menu.classList.remove('activeHeader');
    }
  })
}


window.addEventListener('scroll', middle);
function middle(){
  responsiveContent('.middle');
}

window.addEventListener('scroll', left);
function left(){
  responsiveContent('.left');
}

window.addEventListener('scroll', right);
function right(){
  responsiveContent('.right');
}

window.addEventListener('scroll', background_headers);
function background_headers(){
  responsiveContent('.background_headers');
}

window.addEventListener('scroll', background_par);
function background_par(){
  responsiveContent('.background_par');
}

window.addEventListener('scroll', list);
function list(){
  responsiveContent('.list');
}

function responsiveContent(responsive_content){
  var reveal = document.querySelectorAll(responsive_content);

  for(var i = 0; i < reveal.length; i++){

    var windowheight = window.innerHeight;

    var revealtop = reveal[i].getBoundingClientRect().top;
    revealpoint = 150;

    if(revealtop < windowheight - revealpoint){
      reveal[i].classList.add('active');
    }
    else {
      reveal[i].classList.remove('active');
    }
  }
}
