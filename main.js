const searchFrom = document.querySelector(".search");
const input = document.querySelector(".input");
const newsList = document.querySelector(".news-list");
const camList = document.querySelector(".cam-list");
const topicImage = document.querySelector(".topic-image");

searchFrom.addEventListener("submit", retrieve);

// nps key: PiTfEjcXj1jK2gweTuhLewJAbHZo1xNph18K8G22 


const apiData = {
  //url: "https://newsapi.org/v2/top-headlines?",
  url2: 'https://developer.nps.gov/api/v1/events?',
  url3: 'https://developer.nps.gov/api/v1/webcams?',
  lan: "", //"country=us&language=en&",
  cate: "",
  q: "",
  // apiK: "apiKey=3680b889e3fe4c128f994a74da6f98db", my personal
  //apiK: "apiKey=78b9d599c4f94f8fa3afb1a5458928d6",
 // apiK: "937ec2fe509c4a6f941dab9c6105c5a7", // James's API key
  apiK: 'PiTfEjcXj1jK2gweTuhLewJAbHZo1xNph18K8G22',
};

/* Types:
Guided Tour, Other, Hike, Talk, Walk
*/

let currTopic = "";

/*
var months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
]; */

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
 // alert(topic); 
  apiData.eventType = 'eventType='+topic+'&';
 /* const sportKey = "eventType=Hike&";
  const eKey = "eventType=Guided Tour&";
  const techKey = "eventType=Talk&";
  const otherKey = "eventType=Other&";
  currTopic = topic;
  if (topic === "sports") {
    apiData.cate = sportKey;
 //   document.getElementById("topic-image").innerHTML =
 //     "<img src='pictures/sport-banner.jpg' alt='sportpic' width='100%' />";
  } else if (topic === "entertainment") {
    apiData.cate = eKey;
//    document.getElementById("topic-image").innerHTML =
//      "<img src='pictures/entertainment-banner.jpg' alt='sportpic' width='100%'/>";
  } else if (topic === "technology") {
    apiData.cate = techKey;
  //  document.getElementById("topic-image").innerHTML =
  //    "<img src='pictures/tech-banner.jpg' alt='sportpic' width='100%' />";
  } else if (topic === "other") {
    apiData.cate = otherKey;
 //   document.getElementById("topic-image").innerHTML =
  //    "<img src='pictures/tech-banner.jpg' alt='sportpic' width='100%' />";
  }*/
  newsList.innerHTML = "";
  //  apiData.q = `q=${input.value}&`;
  apiData.q = '';
    const { url2, lan, cate, q, apiK } = apiData;
    const apiKey = 'api_key='; // added
    const apiUrl = `${url2}${lan}${cate}${q}${apiKey}${apiK}`; // modded
    console.log(apiUrl);
    //apiData.q = "";
    let picFlag = 0;
    fetch(apiUrl)
      .then((result) => result.json())
      .then((data) => {
        console.log(data); 
        //data.articles.forEach((article) => {
       // data.forEach((article) => {
        //var i = document.createElement("img");
        data.data.forEach((article) => {
          console.log(article);
          let D = document.createElement("li");
          // News Link
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
          // News Image
           // let i = document.createElement("img");
            i.setAttribute("style", "float:left; width: 100px; height: 50px;");
            //i.setAttribute("src", `${article.urlToImage}`);
       //     article.urlToImage
            //  ? 
              i.setAttribute("src", `http://nps.gov${article.images[0].path}`);
              console.log(`http://nps.gov${article.images[0].path}`);
         //     : i.setAttribute("src", `http://nps.gov${article.images[0].path}`);
            i.setAttribute("alt", "image");
            picFlag = 1;
        } else {
       //   let i = document.createElement("img");
          i.setAttribute("src", "pictures/placeholder.png");
          picFlag = 0;
        }
          // News Date
          let date = document.createElement("span");
          date.textContent = 'Date start: '+ article.datestart;
       /*   date.textContent = `Published: ${
            months[article.publishedAt.slice(5, 7) - 1]
          }/${article.publishedAt.slice(
            8,
            article.publishedAt.length - 10
          )}/${article.publishedAt.slice(0, 4)}`;*/
          date.className = "news-date";
          // Finalizing the Div element
          D.className = "news-links";
          D.appendChild(a);
          if(picFlag) D.appendChild(i);
          D.appendChild(document.createElement("br"));
          D.appendChild(date);
          console.log(D);
          newsList.appendChild(D);
        });
      });
 // }

}

  function getInfo(e) {
    e.preventDefault();
    if (currTopic === "") {
      document.getElementById("error-handle").innerHTML =
        "Choose one of the four categories first!";
    } else {
      document.getElementById("error-handle").innerHTML = "";
      //apiData.q = `q=${input.value}&`;
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
 // alert('hello' + topic);
  //return;
  apiData.parkCode = 'parkCode='+topic+'&';
  /*
    const cahi = "parkCode=cahi&";
    const grsa = "parkCode=grsa&";
    const goga = "parkCode=goga&";
    const yell = "parkCode=yell";
    const yose = "parkCode=yose";
    const seki = "parkCode=seki";
    currTopic = topic;
    if (topic === "cahi") {
      apiData.parkCode = seki;
   //   document.getElementById("topic-image").innerHTML =
   //     "<img src='pictures/sport-banner.jpg' alt='sportpic' width='100%' />";
    } else if (topic === "grsa") {
      apiData.parkCode = grsa;
  //    document.getElementById("topic-image").innerHTML =
  //      "<img src='pictures/entertainment-banner.jpg' alt='sportpic' width='100%'/>";
    } else if (topic === "goga") {
      apiData.parkCode = goga;
    //  document.getElementById("topic-image").innerHTML =
    //    "<img src='pictures/tech-banner.jpg' alt='sportpic' width='100%' />";
    } else if (topic === "yell") {
      apiData.parkCode = yell;
   //   document.getElementById("topic-image").innerHTML =
    //    "<img src='pictures/tech-banner.jpg' alt='sportpic' width='100%' />";
    } else if (topic === "yose") {
      apiData.parkCode = yose;
   //   document.getElementById("topic-image").innerHTML =
    //    "<img src='pictures/tech-banner.jpg' alt='sportpic' width='100%' />";
    }
*/
  camList.innerHTML = "";
  apiData.q = `q=${input.value}&`;
  const { url3, lan, parkCode, q, apiK } = apiData;
  const apiKey = 'api_key='; // added
  //const apiUrl = `${url2}${lan}${cate}${q}${apiKey}${apiK}`; // modded
  const apiUrl = `${url3}${parkCode}&${apiKey}${apiK}`; // modded
  console.log(apiUrl);
  //apiData.q = "";
  let picFlag = 0;
  fetch(apiUrl)
    .then((result) => result.json())
    .then((data) => {
      console.log(data);
      //return; 
      //data.articles.forEach((article) => {
     // data.forEach((article) => {
      //var i = document.createElement("img");
      data.data.forEach((article) => {
        console.log(article);
        //continue;
        let D = document.createElement("li");
        // News Link
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
        // News Image
         // let i = document.createElement("img");
          i.setAttribute("style", "float:left; width: 100px; height: 50px;");
          //i.setAttribute("src", `${article.urlToImage}`);
     //     article.urlToImage
          //  ? 
            //i.setAttribute("src", `http://nps.gov${article.images[0].path}`);
            i.setAttribute('src', article.images[0].url);
            console.log(article.images[0].url);
       //     : i.setAttribute("src", `http://nps.gov${article.images[0].path}`);
          i.setAttribute("alt", "image");
          picFlag = 1;
      } else {
     //   let i = document.createElement("img");
        i.setAttribute("src", "pictures/placeholder.png");
        picFlag = 0;
      }
        // News Date
        let date = document.createElement("div");
        date.innerHTML = 'Description: '+ article.description;

        date.className = "cam-description";
        // Finalizing the Div element
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
