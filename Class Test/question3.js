
 function visibility() {
      const textDiv = document.getElementById('Text');
      const button = event.target;

      if (textDiv.style.display === 'none') {
        textDiv.style.display = 'block';
        button.textContent = 'Hide';
      } else {
        textDiv.style.display = 'none';
        button.textContent = 'Show';
      }
    }