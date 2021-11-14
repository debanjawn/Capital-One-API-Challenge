const searchFrom = document.querySelector(".search");
const input = document.querySelector(".input");
const newsList = document.querySelector(".news-list");
const camList = document.querySelector(".cam-list");
const topicImage = document.querySelector(".topic-image");

searchFrom.addEventListener("submit", retrieve);

 


const apiData = {
  url2: 'https://developer.nps.gov/api/v1/events?',
  url3: 'https://developer.nps.gov/api/v1/webcams?',
  lan: "", 
  cate: "",
  q: "",

  apiK: 'PiTfEjcXj1jK2gweTuhLewJAbHZo1xNph18K8G22',
};

/* Types:
Guided Tour, Other, Hike, Talk, Walk
*/

let currTopic = "";



function retrieve(e) {
  e.preventDefault();
  if (currTopic === "") {
    document.getElementById("error-handle").innerHTML =
      "Choose one of the four categories first!";
  } else {
    document.getElementById("error-handle").innerHTML = "";
    apiData.q = `q=${input.value}&`;
    console.log("input value", apiData.q);
    console.log("topic ", currTopic);
    buttonHandler(currTopic);
    console.log(apiData.q);
  }
}

function buttonHandler(topic) {
 
  apiData.eventType = 'eventType='+topic+'&';

  newsList.innerHTML = "";
  apiData.q = '';
    const { url2, lan, cate, q, apiK } = apiData;
    const apiKey = 'api_key='; 
    const apiUrl = `${url2}${lan}${cate}${q}${apiKey}${apiK}`; 
    console.log(apiUrl);
    
    let picFlag = 0;
    fetch(apiUrl)
      .then((result) => result.json())
      .then((data) => {
        console.log(data); 
        
        data.data.forEach((article) => {
          console.log(article);
          let D = document.createElement("li");
          
          let a = document.createElement("a");
          let i = document.createElement("img");
          if(article.infourl != '') {
            a.setAttribute("href", article.infourl);
            a.setAttribute('class', 'has_url');
            a.setAttribute("target", "_blank");
            console.log(article.infourl);
          } else {
            a.setAttribute("href", "#");
            a.setAttribute("class", "no_url");
          }
          
          a.setAttribute("rel", "noopener noreferrer");
          a.setAttribute("style", "margin-left: 15px;");
          a.textContent = article.title;
          if(article.images.length) {
            console.log('image present');
           
            i.setAttribute("style", "float:left; width: 100px; height: 50px;");
        
              i.setAttribute("src", `http://nps.gov${article.images[0].path}`);
              console.log(`http://nps.gov${article.images[0].path}`);
         
            i.setAttribute("alt", "image");
            picFlag = 1;
        } else {
    
          i.setAttribute("src", "pictures/placeholder.png");
          picFlag = 0;
        }
          
          let date = document.createElement("span");
          date.textContent = 'Date start: '+ article.datestart;
       
          date.className = "news-date";
          
          D.className = "news-links";
          D.appendChild(a);
          if(picFlag) D.appendChild(i);
          D.appendChild(document.createElement("br"));
          D.appendChild(date);
          console.log(D);
          newsList.appendChild(D);
        });
      });
 

}

  function getInfo(e) {
    e.preventDefault();
    if (currTopic === "") {
      document.getElementById("error-handle").innerHTML =
        "Choose one of the four categories first!";
    } else {
      document.getElementById("error-handle").innerHTML = "";
   
      console.log("input value", apiData.q);
      console.log("topic ", currTopic);
      parkHandler(currTopic);
      console.log(apiData.q);
    }
  }

  /*
  parkCode

cahi: Capitol Hill Parks
grsa: Great Sand Dunes
goga: Golden Gate National Recreation Area
yell: Yellowstone 
yose: Yosemite National Park
*/

function parkHandler(topic) {

  apiData.parkCode = 'parkCode='+topic+'&';
 
  camList.innerHTML = "";
  apiData.q = `q=${input.value}&`;
  const { url3, lan, parkCode, q, apiK } = apiData;
  const apiKey = 'api_key='; 
  const apiUrl = `${url3}${parkCode}&${apiKey}${apiK}`; 
  console.log(apiUrl);
  let picFlag = 0;
  fetch(apiUrl)
    .then((result) => result.json())
    .then((data) => {
      console.log(data);
      data.data.forEach((article) => {
        console.log(article);
        let D = document.createElement("li");
        let a = document.createElement("a");
        let i = document.createElement("img");
        if(article.url != '') {
          a.setAttribute("href", article.url);
          a.setAttribute('class', 'has_url');
          a.setAttribute("target", "_blank");
          console.log(article.infourl);
        } else {
          a.setAttribute("href", "#");
          a.setAttribute("class", "no_url");
        }
        
        a.setAttribute("rel", "noopener noreferrer");
        a.setAttribute("style", "margin-left: 15px;");
        a.textContent = article.title;
        if(article.images.length) {
          console.log('image present');
          i.setAttribute("style", "float:left; width: 100px; height: 50px;");
            i.setAttribute('src', article.images[0].url);
            console.log(article.images[0].url);
    
          i.setAttribute("alt", "image");
          picFlag = 1;
      } else {
  
        i.setAttribute("src", "pictures/placeholder.png");
        picFlag = 0;
      }
     
        let date = document.createElement("div");
        date.innerHTML = 'Description: '+ article.description;

        date.className = "cam-description";
       
        D.className = "news-links";
        D.appendChild(a);
        if(picFlag) D.appendChild(i);
        D.appendChild(document.createElement("br"));
        D.appendChild(date);
        console.log(D);
        camList.appendChild(D);
      });
    });
}
