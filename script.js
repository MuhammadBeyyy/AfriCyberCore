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



const newsArray =   [
  {
      "source": {
          "id": "wired",
          "name": "Wired"
      },
      "author": "Eric Geller",
      "title": "More Spyware, Fewer Rules: What Trump’s Return Means for US Cybersecurity",
      "description": "Experts expect Donald Trump’s next administration to relax cybersecurity rules on businesses, abandon concerns around human rights, and take an aggressive stance against the cyber armies of US adversaries.",
      "url": "https://www.wired.com/story/trump-administration-cybersecurity-policy-reversals/",
      "urlToImage": "https://media.wired.com/photos/6735e10f310e865b05b94244/191:100/w_1280,c_limit/Security_Animation_GettyImages.jpg",
      "publishedAt": "2024-11-14T10:30:00Z",
      "content": "Trump is also unlikely to continue the Biden administrations campaign to limit the proliferation of commercial spyware technologies, which authoritarian governments have used to harass journalists, c… [+2985 chars]"
  },
  {
      "source": {
          "id": "wired",
          "name": "Wired"
      },
      "author": "Lily Hay Newman",
      "title": "Exposed United Nations Database Left Sensitive Information Accessible Online",
      "description": "More than 115,000 files related to UN Women included detailed financial disclosures from organizations around the world—and personal details and testimonials from vulnerable individuals.",
      "url": "https://www.wired.com/story/un-women-database-exposure/",
      "urlToImage": "https://media.wired.com/photos/6716e75d4579622521b74821/191:100/w_1280,c_limit/Security_UNW_Leak_GettyImages-1988694804.jpg",
      "publishedAt": "2024-10-22T17:49:01Z",
      "content": "A database containing sensitive, sometimes personal information from the United Nations Trust Fund to End Violence Against Women was openly accessible on the internet, revealing more than 115,000 fil… [+2630 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "Slashdot.org"
      },
      "author": "BeauHD",
      "title": "Ex-Palantir CISO Dane Stuckey Joins OpenAI To Lead Cybersecurity",
      "description": "wiredmikey shares a report from SecurityWeek: Dane Stuckey, the former Chief Information Security Officer (CISO) of big data analytics and AI firm Palantir, has joined OpenAI CISO. Stuckey served in senior security roles at Palantir for more than ten years, i…",
      "url": "https://it.slashdot.org/story/24/10/16/2120225/ex-palantir-ciso-dane-stuckey-joins-openai-to-lead-cybersecurity",
      "urlToImage": "https://a.fsdn.com/sd/topics/security_64.png",
      "publishedAt": "2024-10-17T00:40:00Z",
      "content": "wiredmikey shares a report from SecurityWeek: Dane Stuckey, the former Chief Information Security Officer (CISO) of big data analytics and AI firm Palantir, has joined OpenAI CISO. Stuckey served in … [+669 chars]"
  },
  {
      "source": {
          "id": "business-insider",
          "name": "Business Insider"
      },
      "author": "Katherine Tangalakis-Lippert",
      "title": "Chelsea Manning avoids Google and Microsoft — and says she prefers Apple products for cybersecurity",
      "description": "Chelsea Manning is the face of a new VPN called Nym. She's also speaking out about cybersecurity in general, saying she deems Apple products the best.",
      "url": "https://www.businessinsider.com/cybersecurity-chelsea-manning-avoid-google-microsoft-favor-apple-vpn-privacy-2024-10",
      "urlToImage": "https://i.insider.com/670f034da70318649282a9d8?width=1024&format=jpeg",
      "publishedAt": "2024-10-16T00:24:50Z",
      "content": "Chelsea Manning says she thinks Apple has the best security among Big Tech companies — and says she avoids Microsoft and Google products.Getty Images\r\n<ul><li>Chelsea Manning is the face of a new VPN… [+5126 chars]"
  },
  {
      "source": {
          "id": "business-insider",
          "name": "Business Insider"
      },
      "author": "Ana Altchek",
      "title": "I'm a Google Cloud director who spent decades in the FBI. If you want a tech job, cybersecurity is the place to be.",
      "description": "Google Cloud director MK Palmore says that cybersecurity is one of the most dynamic and in-demand career fields in the industry right now.",
      "url": "https://www.businessinsider.com/google-director-cybersecurity-jobs-in-demand-2024-11",
      "urlToImage": "https://i.insider.com/672554ca9b3250dbbcebcb40?width=800&format=jpeg",
      "publishedAt": "2024-11-03T15:08:02Z",
      "content": "Google Cloud director MK Palmore said that he's seen the relative importance of the role of cybersecurity practitioners rise across major industries.MK Palmore\r\n<ul><li>MK Palmore worked in the FBI f… [+5226 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "Slashdot.org"
      },
      "author": "BeauHD",
      "title": "Fake Google Meet Conference Errors Push Infostealing Malware",
      "description": "An anonymous reader quotes a report from BleepingComputer: A new ClickFix campaign is luring users to fraudulent Google Meet conference pages showing fake connectivity errors that deliver info-stealing malware for Windows and macOS operating systems. ClickFix…",
      "url": "https://it.slashdot.org/story/24/10/17/2156214/fake-google-meet-conference-errors-push-infostealing-malware",
      "urlToImage": "https://a.fsdn.com/sd/topics/security_64.png",
      "publishedAt": "2024-10-17T23:30:00Z",
      "content": "A new ClickFix campaign is luring users to fraudulent Google Meet conference pages showing fake connectivity errors that deliver info-stealing malware for Windows and macOS operating systems. ClickFi… [+1159 chars]"
  },
  {
      "source": {
          "id": "wired",
          "name": "Wired"
      },
      "author": "Andy Greenberg",
      "title": "Hacker Charged With Seeking to Kill Using Cyberattacks on Hospitals",
      "description": "The US has accused two brothers of being part of the hacker group Anonymous Sudan, which allegedly went on a wild cyberattack spree that hit thousands of targets—and, for one of the two men, even put lives at risk.",
      "url": "https://www.wired.com/story/anonymous-sudan-ddos-indictment-takedown/",
      "urlToImage": "https://media.wired.com/photos/66037e388cf5a938af0153e6/191:100/w_1280,c_limit/FBI-Sudan-Hacker-Group-Israel-Security-1482460958.jpg",
      "publishedAt": "2024-10-16T17:44:44Z",
      "content": "We will continue targeting ChatGPT until the genocide supporter, Tal Broda, is fired and ChatGPT stops having dehumanizing views of Palestinians,\" Anonymous Sudan responded in a Telegram post explain… [+3061 chars]"
  },
  {
      "source": {
          "id": "wired",
          "name": "Wired"
      },
      "author": "Lily Hay Newman, Tess Owen",
      "title": "Russia Is Going All Out on Election Day Interference",
      "description": "Along with other foreign influence operations—including from Iran—Kremlin-backed campaigns to stoke division and fear have gone into overdrive.",
      "url": "https://www.wired.com/story/russia-election-disinformation-2024-election-day/",
      "urlToImage": "https://media.wired.com/photos/672a7169889c531778153f5c/191:100/w_1280,c_limit/russia-election-disinfo-%201152460187.jpg",
      "publishedAt": "2024-11-05T21:04:35Z",
      "content": "As the 2024 US presidential election comes to a close, and with Donald Trump on the ballot once again, Russian actors are spreading disinformation with unprecedented and alarming intensityand US offi… [+3512 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "Gizmodo.com"
      },
      "author": "Gizmodo Deals",
      "title": "At $1.29 Per Month, Our Favorite Password Manager is 56% Off Ahead of Black Friday",
      "description": "There’s also a bundle with NordVPN that offers incredible value.",
      "url": "https://gizmodo.com/at-1-29-per-month-our-favorite-password-manager-is-56-off-ahead-of-black-friday-2000517390",
      "urlToImage": "https://gizmodo.com/app/uploads/2024/09/nordpass-app.jpg",
      "publishedAt": "2024-10-28T16:30:03Z",
      "content": "Imagine a world where you never have to rack your brain for forgotten passwords again: that’s the reality NordPass promises and now it’s more accessible than ever. As part of Nord Security’s early Bl… [+1913 chars]"
  },
  {
      "source": {
          "id": "fox-news",
          "name": "Fox News"
      },
      "author": "Kurt Knutsson, CyberGuy Report",
      "title": "Deception in democracy: Beware the most common types of election-related scams",
      "description": "Cybersecurity risks are ramping up as the Nov. 5 U.S. general election approaches. Social media and the internet are used to spread propaganda.",
      "url": "https://www.foxnews.com/tech/deception-democracy-beware-most-common-types-election-related-scams",
      "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2024/10/3-deception-in-democracy-the-misinformation-minefield-ahead-of-election-day-outro.jpg",
      "publishedAt": "2024-10-23T14:00:44Z",
      "content": "Elections are one of the most crucial parts of any democracy, and unfortunately that also means bad actors try to twist things for their own gain. \r\nWith the U.S. general elections just around the co… [+11085 chars]"
  }
]


    const slidesContainer = document.querySelector('.slides');
    slidesContainer.innerHTML = newsArray.map(article => `
      <div class="slide" style="background-image: url(${article.urlToImage});">
        <div class="content">
          <h2>${article.title}</h2>
          <p>${article.description || 'No description available.'}</p>
          <p class="author">By: ${article.author}</p>
          <a href="${article.url}" target="_blank" class="read-more">Read More</a>
        </div>
      </div>
    `).join('');

  
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
  
