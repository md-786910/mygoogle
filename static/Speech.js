
// let searchText = document.querySelector("#searchText");

// let searchbtn = document.querySelector("#searchbtn");

// let spinner = document.querySelector("#spinner");

// let putData = document.querySelector("#putData");

// // const api_key = 'c0edb85a72339db961d87d34ba9022b6';  for mdashifreza3@gmail.com renew at 30 april 2021

// const api_key = '21bdf8d4d18411f1e6b19a5223f61420'; // for mdashifr9@gmail.com
// spinner.style.display = "none";

// // here apply for recording voice
// let valueOfText;
// window.SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;

// recognition = new window.SpeechRecognition();
// recognition.onresult = (event) => {
//     const speechToText = event.results[0][0].transcript;

//     if (speechToText = "") {
//         alert("please search query..");
//     }
//     else {
//         searchText.value = speechToText;
//         setTimeout(() => {
//             OurgoogleFunction();
//         }, 3000)
//     }
// }


// let googlerecorder = document.querySelector("#googlerecorder");

// const audio = new Audio();
// audio.src = "record.mp3";
// googlerecorder.addEventListener("click", () => {
//     audio.play();
//     recognition.start();

// })
// // end

// searchbtn.addEventListener("click", OurgoogleFunction)

// function OurgoogleFunction() {
//     valueOfText = searchText.value;

//     if (valueOfText == "") {
//         alert("please search for any query...")
//     }
//     else {
//         console.log(valueOfText)
//         spinner.style.display = 'block';

//         setTimeout(() => {
//             // for spinner
//             spinner.style.display = "none"
//             // for fetching

//         }, 10000)

//         setTimeout(() => {

//             const url = `http://api.serpstack.com/search?access_key=${api_key}&type=web&query=${valueOfText}&engine=google`;
//             fetch(url).then(res => {
//                 return res.json();
//             }).then((data) => {


//                 // console.log(data);


//                 let organicDtata = data.organic_results;
//                 let strData = '';
//                 organicDtata.forEach((element, index) => {
//                     // console.log(element.displayed_url)

//                     // here we give alll value here
//                     strData += `   
//                  <div id="allgoogleSearchData">
//                 <section class="text-gray-600 body-font overflow-hidden" id="spacesection">
//                     <div class="container px-5 py-24 mx-auto">
//                         <div class="-my-8 divide-y-2 divide-gray-100">
//                             <div class="py-8 flex flex-wrap md:flex-nowrap">

//                                 <div class="md:flex-grow">
//                                     <a href=${element.displayed_url}>${element.displayed_url}</a>
//                                     <h1 class="text-2xl font-medium text-gray-900 title-font mb-2"><a href=${element.displayed_url}>${element.title}</a></h1>
//                                     <p class="leading-relaxed">${element.title}.</p>
//                                     <a class="text-indigo-500 inline-flex items-center mt-4" href=${element.displayed_url}>${element.domain}
//                                         <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"
//                                             fill="none" stroke-linecap="round" stroke-linejoin="round">
//                                             <path d="M5 12h14"></path>
//                                             <path d="M12 5l7 7-7 7"></path>
//                                         </svg>
//                                     </a>
//                                 </div>
//                             </div>
//                         </div>
//                 </section>
//             </div> `
//                 });

//                 putData.innerHTML = strData;
//             })


//         }, 3000)

//     }

//     searchText.value = "";
// }