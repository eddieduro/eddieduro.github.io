(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){


$(document).ready(function(){
  var $hamburger = $(".hamburger");
  $hamburger.click(function() {
    if($("#navigation").hasClass("hidden")){
      $hamburger.toggleClass("is-active");
      $('#navigation.hidden').removeClass("hidden");
      $("#navigation").addClass("reveal");
    } else {
      $hamburger.toggleClass("is-active");
      $("#navigation.reveal").addClass("hidden");
    }

    (function() {

    // FORM / CONTACT

    var $contactForm = $('#contactForm');
    // VALIDATE FORM
    $contactForm.validate();
    $contactForm.submit(function(e) {
       if ($(this).valid())
        e.preventDefault();
        $.ajax({
            url: '//formspree.io/myemail@mail.com',
            method: 'POST',
            data: $(this).serialize(),
            dataType: 'json',
            beforeSend: function() {
                $contactForm.append('<div class="message message--loading">Sending message…</div>');
            },
            success: function(data) {
                $contactForm.find('.alert--loading').hide();
                $contactForm.append('<div class="message message--success">Message sent!</div>');
            },
            error: function(err) {
                $contactForm.find('.alert--loading').hide();
                $contactForm.append('<div class="message message--error">Ops, there was an error.</div>');
            }
        });
       return false;
        
    });
})();
  });
});

},{}]},{},[1]);
