document.querySelector('.about-btn').addEventListener('mouseover', function() {
    this.style.transform = 'scale(1.1)';
    this.style.transition = 'transform 0.3s';
  });
  
  document.querySelector('.about-btn').addEventListener('mouseout', function() {
    this.style.transform = 'scale(1)';
  });
  
  document.querySelector('.button').addEventListener('click', function() {
    alert("Anda akan diarahkan ke halaman informasi tentang jenis Wisteria.");
  });
  
  document.querySelectorAll('.item img').forEach(function(image) {
    image.addEventListener('click', function() {
        if (this.style.transform === 'scale(1.5)') {
            this.style.transform = 'scale(1)';
        } else {
            this.style.transform = 'scale(1.5)';
        }
        this.style.transition = 'transform 0.3s';
    });
  });
  
  document.querySelector('.about-image').addEventListener('mouseover', function() {
    const message = document.createElement('p');
    message.textContent = 'Menikmati keindahan Wisteria dari dekat!';
    message.style.color = 'blue';
    message.style.fontStyle = 'italic';
    message.style.marginTop = '10px';
    this.parentElement.appendChild(message);
  });
  
  document.querySelector('.about-image').addEventListener('mouseout', function() {
    const message = this.parentElement.querySelector('p:last-child');
    if (message) {
        message.remove();
    }
  });
  
  document.querySelectorAll('.item').forEach(function(item) {
    item.addEventListener('click', function() {
        const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        item.style.backgroundColor = randomColor;
    });
  });