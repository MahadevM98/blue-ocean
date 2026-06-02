/* The Blue Ocean — light interactivity, no dependencies */
(function () {
  // Mobile nav
  var toggle = document.querySelector('.menu-toggle');
  var links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      links.classList.toggle('open');
    });
  }

  // Scroll reveal
  var reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && reveals.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.14 });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('in'); });
  }

  // Contact form (static, no backend) — graceful confirmation
  var form = document.getElementById('ocean-scan-form');
  if (form) {
    form.addEventListener('submit', function (ev) {
      ev.preventDefault();
      var ok = document.getElementById('form-success');
      if (ok) {
        ok.style.display = 'block';
        ok.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      form.reset();
    });
  }
})();
