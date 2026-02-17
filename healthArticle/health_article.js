var xhr = new XMLHttpRequest();
xhr.open('GET', url, true); // true(asynchronous) false(synchronous)
xhr.responseType = 'json';

/**
 * SKELETON STRUCTURE (Single List Element)
 * ----------------------------------------

"articles": [
        "title": "string",
        "description": "string",
        "ways_to_achieve": [ "string" ],
        "benefits": [ "string" ]
    ]
**/
xhr.onload = function() {
    var articles = xhr.response.articles;
    var articlesDiv = document.getElementById('articles');

    articles.forEach(function(article) {
        // create a <div> element with artile class
        var articleDiv = document.createElement('div');
        articleDiv.classList.add('article');
  
        // create a <h2> element for the title
        var title = document.createElement('h2');
        title.textContent = article.title;
  
        // create a <p> element for the description
        var description = document.createElement('p');
        description.textContent = article.description;
  
        // create a <h3> element  for header 
        var waysHeader = document.createElement('h3');
        waysHeader.textContent = 'Ways to Achieve:';
  
        // create unordered list with each way to achieve
        var waysList = document.createElement('ul');
        article.ways_to_achieve.forEach(function(way) {
          var listItem = document.createElement('li');
          listItem.textContent = way;
          waysList.appendChild(listItem);
        });
  
        // create heading for benefits
        var benefitsHeader = document.createElement('h3');
        benefitsHeader.textContent = 'Benefits:';
  
        // create unordered list for each benefit
        var benefitsList = document.createElement('ul');
        article.benefits.forEach(function(benefit) {
          var listItem = document.createElement('li');
          listItem.textContent = benefit;
          benefitsList.appendChild(listItem);
        });
  
        // complete the <div> element with all information for an article
        articleDiv.appendChild(title);
        articleDiv.appendChild(description);
        articleDiv.appendChild(waysHeader);
        articleDiv.appendChild(waysList);
        articleDiv.appendChild(benefitsHeader);
        articleDiv.appendChild(benefitsList);
        
        // add article to the container
        articlesDiv.appendChild(articleDiv);
      });
}

xhr.send();
