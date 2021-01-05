window.onload = function() {
    Particles.init({
      selector: '.background',
      connectParticles: 'true',
      color: '#0892D0',
    });
  };

  $('.parallax-window').parallax({
    naturalWidth: 600,
    naturalHeight: 400
  });
