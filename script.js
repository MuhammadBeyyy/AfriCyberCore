document.addEventListener('DOMContentLoaded', function () {
    const menuButton = document.querySelector('.menu');
    const navList = document.querySelector('nav ul');
  
    menuButton.addEventListener('click', function () {
      navList.classList.toggle('show');
    });
  });


  const slides = document.querySelector('.slides');
  const prevButton = document.querySelector('.prev');
  const nextButton = document.querySelector('.next');


  
  fetch('https://newsapi.org/v2/everything?q=cybersecurity&apiKey=0c9ca387af6042339735a2d73327a60f')
  .then(response => response.json())
  .then(data => {
    
    const slidesContainer = document.querySelector('.slides');

    // Filter articles: exclude those without an author or an image
    const filteredArticles = data.articles.filter(article => article.author && article.urlToImage);
    // console.log(filteredArticles)

    // Map the filtered articles to generate the slides
    slidesContainer.innerHTML = filteredArticles.slice(0, 10).map(article => `
      <div class="slide" style="background-image: url(${article.urlToImage});">
        <div class="content">
          <h2>${article.title}</h2>
          <p>${article.description || 'No description available.'}</p>
          <p class="author">By: ${article.author}</p>
          <a href="${article.url}" target="_blank" class="read-more">Read More</a>
        </div>
      </div>
    `).join('');
  });

  
  let currentIndex = 0;
  
  function showSlide(index) {
    const slideWidth = slides.clientWidth;
    slides.style.transform = `translateX(${-index * slideWidth}px)`;
  }
  
  // Next button event
  nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.children.length;
    showSlide(currentIndex);
  });
  
  // Previous button event
  prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.children.length) % slides.children.length;
    showSlide(currentIndex);
  });
  
  // Auto-slide every 5 seconds
  // setInterval(() => {
  //   nextButton.click();
  // }, 5000);
  