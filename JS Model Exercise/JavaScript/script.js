function loading() { // Define uma função chamada loading
    const messageElement = window.document.getElementById('message'); // Seleciona o elemento 'message' na página HTML
    const periodOfDayPictureElement = window.document.getElementById('period-of-day-picture'); // Seleciona o elemento 'period-of-day-picture' na página HTML
    const date = new Date(); // Cria um novo objeto Date para obter a hora atual
    const hour = date.getHours(); // Obtém a hora atual do objeto Date
    
    if (!messageElement) { // Verifica se o elemento 'message' foi encontrado na página HTML
      console.error("Element 'message' not found"); // Exibe uma mensagem de erro no console do navegador
      return; // Encerra a função
    }
    
    if (!periodOfDayPictureElement) { // Verifica se o elemento 'period-of-day-picture' foi encontrado na página HTML
      console.error("Element 'period-of-day-picture' not found"); // Exibe uma mensagem de erro no console do navegador
      return; // Encerra a função
    }
    
    if (hour >= 0 && hour < 12) { // Verifica se a hora atual é entre 0h e 12h
      const morningText = "Good morning!"; // Define o texto a ser exibido para o período da manhã
      messageElement.innerHTML = morningText; // Define o conteúdo do elemento 'message' como 'Good morning!'
      periodOfDayPictureElement.innerHTML = `<img src="../CSS/morning.png" alt="${morningText}">`; // Define o conteúdo do elemento 'period-of-day-picture' como a imagem da manhã
      document.body.style.backgroundColor = "#fdd835"; // Define a cor de fundo do corpo do documento como amarelo claro
    } else if (hour >= 12 && hour < 18) { // Verifica se a hora atual é entre 12h e 18h
      const afternoonText = "Good afternoon!"; // Define o texto a ser exibido para o período da tarde
      messageElement.innerHTML = afternoonText; // Define o conteúdo do elemento 'message' como 'Good afternoon!'
      periodOfDayPictureElement.innerHTML = `<img src="../CSS/afternoon.png" alt="${afternoonText}">`; // Define o conteúdo do elemento 'period-of-day-picture' como a imagem da tarde
      document.body.style.backgroundColor = "#ff5722"; // Define a cor de fundo do corpo do documento como laranja escuro
    } else { // Se a hora atual não é nenhuma das anteriores, deve ser a noite
      const eveningText = "Good evening!"; // Define o texto a ser exibido para o período da noite
      messageElement.innerHTML = eveningText; // Define o conteúdo do elemento 'message' como 'Good evening!'
      periodOfDayPictureElement.innerHTML = `<img src="../CSS/evening.png" alt="${eveningText}">`; // Define o conteúdo do elemento 'period-of-day-picture' como a imagem da noite
      document.body.style.backgroundColor = "#1976d2"; // Define a cor de fundo do corpo do documento como azul escuro
    }
  }

  function updateTime() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
  
    // Adiciona um zero na frente dos números menores que 10
    hours = (hours < 10 ? "0" : "") + hours;
    minutes = (minutes < 10 ? "0" : "") + minutes;
    seconds = (seconds < 10 ? "0" : "") + seconds;
  
    const timeString = `${hours}:${minutes}:${seconds}`;
    document.getElementById('current-time').textContent = timeString;
  }
  
  // Atualize a hora a cada segundo
  setInterval(updateTime, 1000);
  
  