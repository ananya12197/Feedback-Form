document.getElementById('surveyForm').onsubmit = function(event) {
  event.preventDefault();
  document.getElementById('thankYou').textContent = 'Thank you for your feedback, ' + document.getElementById('name').value + '!';
  this.reset();
};
