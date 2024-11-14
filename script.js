
document.querySelectorAll('nav ul li').forEach(item => {
    item.addEventListener('mouseover', () => {
      item.style.backgroundColor = '#ddd';   // Ändra till ljusgrå färg vid hover
    });
    item.addEventListener('mouseout', () => {
      item.style.backgroundColor = '';       // Återställ färgen när musen lämnar
    });
  });

