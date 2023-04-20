function handleRightClick() {
    // Get all the articles
    const articles = document.querySelectorAll('article');
    
    // Find the active article
    const activeArticle = document.querySelector('article[data-status="active"]');
    
    // Find the index of the active article
    const activeIndex = Array.from(articles).indexOf(activeArticle);
    
    // If there is a next article, toggle the data-status attribute to "active"
    if (activeIndex < articles.length - 1) {
      activeArticle.setAttribute('data-status', 'inactive');
      articles[activeIndex + 1].setAttribute('data-status', 'active');
      
      // Show the Prev button if it was hidden
      const prevButton = document.querySelector('.article-nav-button[data-direction="prev"]');
      if (prevButton.hasAttribute('hidden')) {
        prevButton.removeAttribute('hidden');
      }
    }
    
    // Hide the Next button if we reached the last article
    const nextButton = document.querySelector('.article-nav-button[data-direction="next"]');
    if (activeIndex + 1 === articles.length - 1) {
      nextButton.setAttribute('hidden', true);
    }
  }
  
  function handleLeftClick() {
    // Get all the articles
    const articles = document.querySelectorAll('article');
    
    // Find the active article
    const activeArticle = document.querySelector('article[data-status="active"]');
    
    // Find the index of the active article
    const activeIndex = Array.from(articles).indexOf(activeArticle);
    
    // If there is a previous article, toggle the data-status attribute to "active"
    if (activeIndex > 0) {
      activeArticle.setAttribute('data-status', 'inactive');
      articles[activeIndex - 1].setAttribute('data-status', 'active');
      
      // Show the Next button if it was hidden
      const nextButton = document.querySelector('.article-nav-button[data-direction="next"]');
      if (nextButton.hasAttribute('hidden')) {
        nextButton.removeAttribute('hidden');
      }
    }
    
    // Hide the Prev button if we reached the first article
    const prevButton = document.querySelector('.article-nav-button[data-direction="prev"]');
    if (activeIndex - 1 === 0) {
      prevButton.setAttribute('hidden', true);
    }
  }


  




 
  


