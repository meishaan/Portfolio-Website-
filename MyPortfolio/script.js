const element = document.getElementById('first');

element.addEventListener('mouseover', function() {
  element.textContent = 'About';
});

element.addEventListener('mouseout', function() {
  element.textContent = 'Hello!';
});


const secondelement = document.getElementById('second');

secondelement.addEventListener('mouseover', function() {
  secondelement.textContent = 'Resume';
});

secondelement.addEventListener('mouseout', function() {
  secondelement.textContent = 'I am';
});

const thirdelement = document.getElementById('third');

thirdelement.addEventListener('mouseover', function() {
  thirdelement.textContent = 'Contact';
});

thirdelement.addEventListener('mouseout', function() {
  thirdelement.textContent = 'Ishan';
});