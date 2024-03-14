// let a = [`                  This tag serves as a counter element that can be used for e-commerce  to facilitate quantity selection.
//  Some of these attributes are not compulsory since they are already assigned default values


// * min
// * max
// * step
// * width
// * height
// * bg
// * sym-color
// * font-color
// * val

// min - It sets the minimum number as the value, for example, if the value specified is 0, it will be available in the 'val' attribute in the tag, and the user
// won't be able to reduce the value less than that. If the attribute is not specified, it will take 0 as default.
// Example : <num-counter min="5"></num-counter>

// max - When this attribute is given, the user won't be able to increase past the value set in the max attribute. If the attribute is not specified, it
// will take min+30 as its default value.
// Example : <num-counter max="75"></num-counter>

// step - This attribute sets how much the increase or decrease should happen, for example, if 2 is given in step, the increases by 2 or decreases by 2.
// Example : <num-counter step="5"></num-counter>

// width - The attribute sets the width of the button for both increase and decrease, if the attribute is not specified, it takes 50 pixels as default.
// Example : <num-counter width="50px"></num-counter>

// height - The attribute sets the height of the button for both increase and decrease, if the attribute is not specified, it takes 50 pixels as default.
// Example : <num-counter height="50px"></num-counter>

// bg - This attribute sets background color for the button for both increase and decrease, if the attribute is not specified, it sets default background 
// color as blue.
// Example : <num-counter bg="pink"></num-counter>

// sym-color - This attribute sets color of the symbol inside the button for both increase and decrease, if the attribute is not specified, it sets default
// color as white.
// Example : <num-counter sym-color="white"></num-counter>

// font-color - This attribute sets text color for the value which is available after an action of increase or decrease is done, if the attribute is not specified, 
// it sets default color as black.
// Example : <num-counter font-color="black"></num-counter>

// val - val is an attribute, which need not be set, because it's used to retreive the value of the count.` , `Status bar is a visual indicator which can be used to monitor the progress of a task or process in real time and also provide immediate feedback.
// Some of these attributes are not compulsory since they are already assigned default values

// The tag has multiple attributes, such as the following : 


//                   * width
//                   * height
//                   * bg
//                   * status
//                   * border
//                   * text


// width - The attribute sets the width of the container, if the attribute is not specified, it takes 300 pixels as default.
// Example : <status-bar width="250px"></status-bar>

// height - The attribute sets the height of the container, if the attribute is not specified, it takes 40 pixels as default.
// Example : <status-bar height="40px"></status-bar>

// bg - This attribute sets background color for the status percentage, if the attribute is not specified, it sets default background 
//      color as pink.
// Example : <status-bar bg="teal"></status-bar>

// status - This attribute sets how many of the status is done, meaning that if the given value is 50%, it will fill the first 50% of 
//          the container by 50%, with the background-color mentioned above. If this attribute is not specified, the default value is 0.
// Example : <status-bar status="60%"></status-bar>

// border - This attribute sets the border for the entire container, for example, if the given value is "1px solid black", the border for 
//          the container will be in black in color and 1 pixel thick. If not specified, the default value is "1px solid black".
// Example : <status-bar border="1px solid yellow"></status-bar>

// text - This attribute sets color for the text inside the container which displays the percentage of status, for example, if the given 
//        value is white, the color of the text will be white. If not specified, the default value is black;
// Example : <status-bar text="black"></status-bar>


// `, `This tag helps in highlighting text as it allows us to quickly identify significant content.

// The tag has multiple attributes, such as the following : 

//                   * bg
//                   * color
//                   * content

//   content is not a attribute, but it takes the value from the text given inside the <high-light></high-light> tag.
//   content must have a value, as it has no default value.
// Example : <high-light>Content goes here...</high-light>

// bg - it sets the background color for the content, if not specified, it takes yellow as default color.
// Example : <high-light bg="gold"></high-light>

// color - it sets the text color for the content, if not specified, it takes black as default color.
// Example : <high-light color="black"></high-light>`, `Navigate to the top of the page from bottom using this tag.

// This tag has multiple attributes such as the following : 


//                   * bg
//                   * color

// bg - it sets the background color for the container, if not specified, it takes pink as default color.
// Example : <go-to-top bg="black"></go-to-top>

// color - it sets the color for the icon, if not specified, it takes black as default color.
// Example : <go-to-top color="white"></go-to-top>
// `, `Easily toggle betweeen different themes using this tag.

// This tag comes with multiple attributes such as the following : 


//                   * original
//                   * tochange
//                   * originalbg
//                   * changingbg

// The attributes 'original' and 'tochange' are to be given compulsorily, as both of them mentions which function should be called when
// the toggle happens.

// The function specified in the original attribute, for example, (<toggle-btn original="helloWorld"></toggle-btn>), the function 
// helloWorld() is called when the toggle is off.

// When the toggle is on, the function specified in the attribute tochange, for example, (<toggle-btn tochange="goodbyeWorld"></toggle-btn>), 
// the function goodbyeWorld() is called when the toggle is on.

// originalbg - it sets the background color for the container for the toggle switch when it's in original function, if not specified, 
//              it sets the color charcoal gray.
// Example : <toggle-btn originalbg="gray"></toggle-btn>

// changinbg - it sets the background color for the container for the toggle switch when it's in the changed function, if not specified, 
//             it sets the color lime green.
// Example : <toggle-btn changingbg="lime"></toggle-btn>`, `Develop a homepage for your project using this tag.

// This tag comes with two attributes : 

//                   * img
//                   * bg

// The attribute 'img' doesn't come with default value, so it must be specified.

// img - This attribute sets the background image for the home page.

// bg - This attribute sets an overlapping color for the image to make it look good, if not specified, it sets the color as deep turquoise.

// `, `Design a navigation menu for your website using this tag

// This tag comes with multiple attributes such as the following : 


//                   * tags
//                   * logo
//                   * bg
//                   * link
//                   * mob-bg
//                   * color
//                   * border-color

// All these attributes comes with default values, so not all of them are necessary, but for a navbar, it all must be specified so it works
// properly.

// tags - This attribute helps to specify the name of the path in the nav bar. It has default values which are dummy, so it has to be specified.
//        The names must be given space seperated, so that it seperates each of the path.
// Example : <nav-bar tags="home about contact"></nav-bar>

// logo - This attribute specifies the logo to be placed in the navigation menu, it comes with a default image which is dummy, so it has to be specified.
// Example : <nav-bar logo="images/logo.png"></nav-bar>

// bg - It sets the background color for the container, if not specified, it takes green as default color.
// Example : <nav-bar bg="green"></nav-bar>

// link - This attribute takes the link for the name of the path specified in tags, the dafault values for all is a '#' so it just stays in the same page,
//        it is recommended to specify the path.
//        The links must be given space seperated, so that it seperates each of the links.
// Example : <nav-bar link="home.html about.html contact.html"></nav-bar>

// mob-bg - This attribute specifies the background color for the dropdown menu in mobile view, if not specified, it takes lime as default color.
// Example : <nav-bar mob-bg="lime"></nav-bar>

// color - This attribute sets the text color for the content and the hamburger menu (for the mobile view), if not specified, it takes white as default 
//         color.
// Example : <nav-bar color="white"></nav-bar>

// border-color - This attribute sets the color for the border for the anchor tags in the mobile view , if not specified, it takes gray as default color.
// Example : <nav-bar border-color="gray"></nav-bar>
// `, `Create a card element for your website using this tag.
// NOTE : Ensure to enter content for this tag as it does not contain preset value.

// This tag comes with multiple attributes such as the following : 


//                   * height
//                   * width
//                   * image
//                   * topColor
//                   * bottomColor
//                   * title
//                   * TitleFontColor
//                   * ContentFontColor

// Content must be given inside the tags, for example : '<my-card>Content goes here....</my-card>'.

// All of the attributes not needed as it comes with default value, but if you want modification, you can use it.

// height - It sets the height of the entire card, if not specified, it takes the default value of 500 pixels.
// Example : <my-card height="500px"></my-card>

// width - It sets the width of the entire card, if not specified, it takes the default value of 300 pixels.
// Example : <my-card width="300px"></my-card>

// image - It sets a image on the top section of the card, it comes with a dummy image as default, but its recommended to specify.
// Example : <my-card image="images/image.png"></my-card>

// topColor - It sets the background color for the top section of the card, if not specified, it takes the default value of skyblue.
// Example : <my-card topColor="blue"></my-card>

// bottomColor - It sets the background color for the bottom section of the card, if not specified, it takes the default value of lightblue.
// Example : <my-card bottomColor="pink"></my-card>

// title - This attribute sets the title for your card on the top section, it comes with a dummy default value, so its recommended to specify.
// Example : <my-card title="Hello World!"></my-card>

// TitleFontColor - This attribute sets the font color for the title, if not specified, it takes black as default and uses it.
// Example : <my-card TitleFontColor="black"></my-card>

// ContentFontColor - This attribute sets the font color for the content, if not specified, it takes black as default and uses it.
// Example : <my-card ContentFontColor="black"></my-card>

// `,  `Incorporate a footer in your website using this tag.

// This tag comes with multiple attributes such as the following : 


//                   * year
//                   * bg
//                   * color

// year - The year you have to mention in your footer, for example, if the value specified is 2010, and the current year is 2024, it will print 2010-2024.
//        If not specified it takes 2022 as default. So it is recommended to specify.
// Example : <foo-ter year="2020"></foo-ter>

// bg - It sets the background color for the footer, if not specified, it takes black as default color.
// Example : <foo-ter bg="black"></foo-ter>

// color - It sets the text color for the content in the footer, if not specified, it takes white as default color.
// Example : <foo-ter color="white"></foo-ter>


// `, `
// Create a exceptional button that can effortlessly elevate your website.

// This tag comes with multiple attributes such as the following : 


//                   * backgroundColor
//                   * borderRadius
//                   * font-color
//                   * font-size

// backgroundColor - It sets the background color for the button, if not specified, it takes teal green and midnight blue as a gradiant.
// Example : <my-button backgroundColor="teal"></my-button>

// borderRadius - It sets the border radius (curve) for the button, if not specified, it takes 30 pixels as default.
// Example : <my-button borderRadius="30px"></my-button>

// font-color - It sets the color for the content inside the button, if not specified, it takes white as default.
// Example : <my-button font-color="white"></my-button>

// font-size - This attribute sets the size of the font inside the button, if not specified, it takes 20 pixels as default.
// Example : <my-button font-size="20px"></my-button>

// For the text inside the button, you have to give it within the tag, for example : '<my-button>Click here!</my-button>', if not specified, 
// it takes the text 'Click Me' as default.

// `, `alert yet`, `An FAQ is section is a must one for a website, now it can just be created with one line of code!


// This tag comes with multiple attributes such as the following : 


//                   * questions
//                   * answers
//                   * total-border
//                   * q-bg
//                   * a-bg
//                   * hover-bg
//                   * border
//                   * q-color
//                   * hover-color
//                   * a-color
//                   * width
//                   * transition
//                   * space
//                   * icon-color

// questions - The questions that are to be asked should be given in this attribute, the questions are seperated by a |$|.
// Example : <f-a-q questions="Are you doing good? |$| You okay? |$| How's life?"></f-a-q>

// answers - The answers that are to be said for the question (given in the same order) should be given in this attribute, the values 
//           are seperated by a |$|.
// Example : <f-a-q answers="Yes i am doing good. |$| Yes, i am okay. |$| Life goes on and on and on..."></f-a-q>

// total-border - This attribute sets border for the entire question and answer container, if not specified, it sets a border of 1 pixels 
//                with black color.
// Example : <f-a-q total-border="1px solid red"></f-a-q>

// q-bg - This attribute sets background color for question container, if not specified, it uses the default value of a bright blue shade color.
// Example : <f-a-q q-bg="blue"></f-a-q>

// a-bg - This attribute sets background color for answer container, if not specified, it uses the default value of white color.
// Example : <f-a-q a-bg="white"></f-a-q>

// hover-bg - This attribute sets background color for question container when it's hovered or selected, if not specified, it uses the default 
// 	   value of deep blue color.
// Example : <f-a-q hover-bg="blue"></f-a-q>

// border - This attribute sets border which seperated the question and answer containers, if not specified, it sets a border of 1 pixels 
//          with black color.
// Example : <f-a-q border="1px solid black"></f-a-q>

// q-color - This attribute sets text color for the texts inside question container, if not specified, it takes white as default value.
// Example : <f-a-q q-color="white"></f-a-q>

// hover-color - This attribute sets text color for the texts inside question container when the question container is hovered, if not specified, 
// 	      it inherits the value from q-color.
// Example : <f-a-q hover-color="white"></f-a-q>

// a - color - This attribute sets text color for the texts inside answer container, if not specified, it takes black as default value.
// Example : <f-a-q a-color="black"></f-a-q>

// width - As it says in it's name, it sets the width for the entire container of question and answer, if not specified, it takes 400 pixels 
// 	as default.
// Example : <f-a-q width="400px"></f-a-q>

// transition - This attribute will specify the duration of transition when the question container is clicked to make the answer show up, 
// 	     if not specified, it takes 0.4s as default.
// Example : <f-a-q transition="0.6s"></f-a-q>

// space - This attribute sets the space between each of the questions container, if not specified, it takes 25 pixels as default.
// Example : <f-a-q space="20px"></f-a-q>

// icon-color - This attribute sets the color for the arrow icon in the question container, if not specified, it takes white as default.
// Example : <f-a-q icon-color="white"></f-a-q>
// `, `Collecting emails from potential customers are required for a successful business,  our tag will make it simple, with just 1 line of code, you 
// can create a newsletter section!

// This tag comes with multiple attributes such as:

// 	    * width
// 	    * height
// 	    * img
// 	    * inputs
// 	    * subscribe-bg 
// 	    * color
// 	    * bg 
// 	    * heading
	
// width - It sets the width for your news-letter, if not specified it will take 100% as default width.

// height - It sets the heigth for your news-letter, if not specified it will take 100% as default width.

// img - It sets back-ground image for your news-letter if not given back-ground will be default white.

// inputs - It will set the input fields what you want to take input as (inputs="name, email") you can give multiple input fields whatever data you wqnt to collect from your clients.

// subscribe-bg - It sets the background color for subscribe button.

// color - It sets the font color for news-letter.

// bg - If you don't want to give any image for background for news-letter, than it can be used, it specify background color, it takes white as default color.

// heading - It is used for giving heading/headline for news-letter;`, `Making a card which shows the glimpse of your project made easier with only one line of code!

// This tag comes with multiple attributes such as:

// 	    * width
// 	    * height
// 	    * image
// 	    * title
// 	    * link 

// width - This attribute sets the width for your card, if not specified, it takes 300 pixels as default.
// Example : <project-card width="300px"></project-card>

// height - This attribute sets the height for your card, if not specified, it takes 300 pixels as default.
// Example : <project-card height="300px"></project-card>

// image - This attribute sets the image for the background of the image, there is a dummy image placed there as default, so it is recommended 
// 	to use this attribute.
// Example : <project-card image="images/image.png"></project-card>

// title - This attribute sets the text for the card, which will be placed in the card. Default value is a dummy one, so it is recommended to 
// 	use this attribute.
// Example : <project-card title="Project unkown"></project-card>

// link - A link must be given in this attribute, so it will redirect the user to the specified path or url. There is no default value, so this must be
//        specified.
// Example : <project-card link="https://example.com"></project-card>

// `, `star yet `, `Making a search bar for your website is easy with this one tag!

// This tag comes with multiple attributes such as:

// 	    * width
// 	    * height
// 	    * border
// 	    * radius
// 	    * icon-color
// 	    * fn
// 	    * value

// width - This attribute sets the width of the search bar, if not mentioned, it will take 300 pixels as default.
// Example : <search-bar width="300px"></search-bar>

// height - This attribute sets the height of the search bar, if not mentioned, it will take 50 pixels as default.
// Example : <search-bar height="60px"></search-bar>

// border - This attribute sets the border for the entire search bar, if not mentioned, it sets color as black and take thickness of 2 pixels.
// Example : <search-bar border="1px solid teal"></search-bar>

// radius - This attribute sets the border radius for the entire search bar, how much it should have curved, if not mentioned, it takes the default value of 30 pixels.
// Example : <search-bar radius="25px"></search-bar>

// icon-color - This attribute sets the color for the search icon, if not specified, it takes black as default.
// Example : <search-bar icon-color="green"></search-bar>

// value - This attribute must not be set, because it is used to retreive the data from the input field.

// fn - In this attribute, the function which has to be called when the search icon is pressed must be passed, it's must since there is no default value for it.
// Example : <search-bar fn="searchInDatabase"></search-bar>

// `];
// function showDescription(here) {
//     let ind = here || 0;
//     for(let i=0; i<16; i++) {
//         if (i==ind) {
//             document.querySelector(`#e${i}`).style.fontSize = "21px";
//             // document.querySelector(`#e${i}`).style.textDecoration = "underline";
//             document.querySelector(`#e${i}`).style.backgroundColor = "#a393eb";

//         }

//         else {
//             document.querySelector(`#e${i}`).style.fontSize = "18px";
//             // document.querySelector(`#e${i}`).style.textDecoration = "none";
//             document.querySelector(`#e${i}`).style.backgroundColor = "#EAEAFD";
//         }
//     }

//     document.querySelector('.description').innerText = a[ind];
// }

// showDescription(0);




window.addEventListener("scroll",function(){
    if(window.scrollY>0){
        document.getElementById("nav").style.height = "90px"
    }
    else{
        document.getElementById("nav").style.height = "94px"
    }  
})


let curentViewingElement = document.getElementById("home")
document.querySelector(".ul").addEventListener("click",function(event){
    if(event.target.className == "nav"){
        curentViewingElement.classList.remove("Highlight")
        let clickedElement = document.querySelector(`#${event.target.id}`)
        clickedElement.classList.add("Highlight")
        curentViewingElement = clickedElement;
    }
})

document.querySelector(".button").addEventListener("click",function(event){
    curentViewingElement.classList.remove("Highlight")
    document.getElementById("Setup").classList.add("Highlight");
    curentViewingElement = document.getElementById("Setup");
})

document.querySelector(".gotag").addEventListener("click",function(event){
    curentViewingElement.classList.remove("Highlight")
    document.getElementById("Tags").classList.add("Highlight");
    curentViewingElement = document.getElementById("Tags");
})

window.addEventListener("DOMContentLoaded",function(){
    window.location.hash = "#lp"
})