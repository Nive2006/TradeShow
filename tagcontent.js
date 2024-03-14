let tags = [
    {
        description: "This tag serves as a counter element that can be used for e-commerce to facilitate quantity selection.",
        attributes: [
            { name: "min", description: "It sets the minimum number as the value, for example, if the value specified is 0, it will be available in the 'val' attribute in the tag, and the user won't be able to reduce the value less than that. If the attribute is not specified, it will take 0 as default.", example: "Example: <num-counter min='5'></num-counter>" },
            { name: "max", description: "When this attribute is given, the user won't be able to increase past the value set in the max attribute.", example: "Example: <num-counter max='10'></num-counter>" },
            { name: "step", description: "This attribute sets how much the increase or decrease should happen.", example: "Example:<num-counter step='2'></num-counter>" },
            { name: "width", description: "The attribute sets the width of the button for both increase and decrease.", example: "Example:<num-counter width='50px'></num-counter>" },
            { name: "height", description: "The attribute sets the height of the button for both increase and decrease.", example: "Example:<num-counter height='30px'></num-counter>" },
            { name: "bg", description: "This attribute sets the background color for the button for both increase and decrease.", example: "Example:<num-counter bg='#3498db'></num-counter>" },
            { name: "sym-color", description: "This attribute sets the color of the symbol inside the button for both increase and decrease.", example: "Example:<num-counter sym-color='#ffffff'></num-counter>" },
            { name: "font-color", description: "This attribute sets the text color for the value which is available after an action of increase or decrease is done.", example: "Example:<num-counter font-color='#333333'></num-counter>" },
            { name: "val", description: "Val is an attribute, which need not be set, because it's used to retrieve the value of the count.", example: "Example:<num-counter val='7'></num-counter>" }
        ]
    },
    {
        description:"Status bar is a visual indicator which can be used to monitor the progress of a task or process in real time and also provide immediate feedback. Some of these attributes are not compulsory since they are already assigned default values",
        attributes:[
            {
                name: "width",
                description: "The attribute sets the width of the container, if the attribute is not specified, it takes 300 pixels as default.",
                example: "<status-bar width='250px'></status-bar>"
            },
            {
                name: "height",
                description: "The attribute sets the height of the container, if the attribute is not specified, it takes 40 pixels as default.",
                example: "<status-bar height='40px'></status-bar>"
            },
            {
                name: "bg",
                description: "This attribute sets background color for the status percentage, if the attribute is not specified, it sets default background color as pink.",
                example: "<status-bar bg=\"teal\"></status-bar>"
            },
            {
                name: "status",
                description: "This attribute sets how many of the status is done, meaning that if the given value is 50%, it will fill the first 50% of the container by 50%, with the background-color mentioned above. If this attribute is not specified, the default value is 0.",
                example: "<status-bar status=\"60%\"></status-bar>"
            },
            {
                name: "border",
                description: "This attribute sets the border for the entire container, for example, if the given value is \"1px solid black\", the border for the container will be in black in color and 1 pixel thick. If not specified, the default value is \"1px solid black\".",
                example: "<status-bar border=\"1px solid yellow\"></status-bar>"
            },
            {
                name: "text",
                description: "This attribute sets color for the text inside the container which displays the percentage of status, for example, if the given value is white, the color of the text will be white. If not specified, the default value is black;",
                example: "<status-bar text=\"black\"></status-bar>"
            }
        ]
        
    },
    {
            description: "This tag helps in highlighting text as it allows us to quickly identify significant content.",
            attributes: [
                {
                    name: "bg",
                    description: "It sets the background color for the content, if not specified, it takes yellow as default color.",
                    example: "<high-light bg=\"gold\"></high-light>"
                },
                {
                    name: "color",
                    description: "It sets the text color for the content, if not specified, it takes black as default color.",
                    example: "<high-light color=\"black\"></high-light>"
                },
                {
                    name:"content",
                    description: "The text inside the <high-light></high-light> tag is considered as the content to be highlighted.",
                    example: "<high-light>Content goes here...</high-light>"
                  
                }
            ],
    },
    {
        
            description: "Navigate to the top of the page from bottom using this tag.",
            attributes: [
                {
                    name: "bg",
                    description: "It sets the background color for the container, if not specified, it takes pink as default color.",
                    example: "<go-to-top bg=\"black\"></go-to-top>"
                },
                {
                    name: "color",
                    description: "It sets the color for the icon, if not specified, it takes black as default color.",
                    example: "<go-to-top color=\"white\"></go-to-top>"
                }
            ]
        
        
    },
    {
        description: "Easily toggle between different themes using this tag.",
        attributes: [
            {
                name: "original",
                description: "Specifies the function to be called when the toggle is off.",
                example: "<toggle-btn original=\"helloWorld\"></toggle-btn>"
            },
            {
                name: "tochange",
                description: "Specifies the function to be called when the toggle is on.",
                example: "<toggle-btn tochange=\"goodbyeWorld\"></toggle-btn>"
            },
            {
                name: "originalbg",
                description: "Sets the background color for the container for the toggle switch when it's in original function, if not specified, it sets the color charcoal gray.",
                example: "<toggle-btn originalbg=\"gray\"></toggle-btn>"
            },
            {
                name: "changingbg",
                description: "Sets the background color for the container for the toggle switch when it's in the changed function, if not specified, it sets the color lime green.",
                example: "<toggle-btn changingbg=\"lime\"></toggle-btn>"
            }
        ]
    },
    {
        description: "Develop a homepage for your project using this tag.",
        attributes: [
            {
                name: "title",
                description: "Sets the heading for the page, if not specified, it takes the default value of 'Welcome To Our Website'.",
                example: "<screen-view title=\"Welcome to our website\"></screen-view>"
            },
            {
                name: "desc",
                description: "Sets the description for the page below the title, if not specified, it takes the default value of 'Thank You For Choosing Our Website'.",
                example: "<screen-view desc=\"We offer a lot of solution in our product\"></screen-view>"
            },
            {
                name: "link",
                description: "Sets the URL which redirects the user when the link is clicked. Default value is '#', which means staying in the same page if attribute is not used.",
                example: "<screen-view link=\"https://example.com\"></screen-view>"
            },
            {
                name: "linkContent",
                description: "Sets the content for the link, if not specified, it takes the default value of 'More'.",
                example: "<screen-view linkContent=\"Click here\"></screen-view>"
            },
            {
                name: "image1",
                description: "Sets a small image on the page. This attribute must be specified.",
                example: "<screen-view image1=\"images/image.png\"></screen-view>"
            },
            {
                name: "image2",
                description: "Sets a frame for image1 on the page. Default frame is available if not specified.",
                example: "<screen-view image2=\"images/frame.png\"></screen-view>"
            },
            {
                name: "backgroundImage",
                description: "Sets the background image for the entire viewport for the home page. Default image is used if not specified.",
                example: "<screen-view backgroundImage=\"images/background.png\"></screen-view>"
            }
        ]
    },
    {
        description: "Design a navigation menu for your website using this tag.",
        attributes: [
            {
                name: "tags",
                description: "Specifies the names of the paths in the navbar. Must be space-separated.",
                example: "<nav-bar tags=\"home about contact\"></nav-bar>"
            },
            {
                name: "logo",
                description: "Specifies the logo to be placed in the navigation menu.",
                example: "<nav-bar logo=\"images/logo.png\"></nav-bar>"
            },
            {
                name: "bg",
                description: "Sets the background color for the container.",
                example: "<nav-bar bg=\"green\"></nav-bar>"
            },
            {
                name: "link",
                description: "Takes the links for the names of the paths specified in tags. Must be space-separated.",
                example: "<nav-bar link=\"home.html about.html contact.html\"></nav-bar>"
            },
            {
                name: "mob-bg",
                description: "Specifies the background color for the dropdown menu in mobile view.",
                example: "<nav-bar mob-bg=\"lime\"></nav-bar>"
            },
            {
                name: "color",
                description: "Sets the text color for the content and the hamburger menu (for the mobile view).",
                example: "<nav-bar color=\"white\"></nav-bar>"
            },
            {
                name: "border-color",
                description: "Sets the color for the border for the anchor tags in the mobile view.",
                example: "<nav-bar border-color=\"gray\"></nav-bar>"
            }
        ]
    },
    {
        description: "Create a card element for your website using this tag.",
        attributes: [
            {
                name: "height",
                description: "Sets the height of the entire card.",
                example: "<my-card height=\"500px\"></my-card>"
            },
            {
                name: "width",
                description: "Sets the width of the entire card.",
                example: "<my-card width=\"300px\"></my-card>"
            },
            {
                name: "image",
                description: "Sets an image on the top section of the card.",
                example: "<my-card image=\"images/image.png\"></my-card>"
            },
            {
                name: "topColor",
                description: "Sets the background color for the top section of the card.",
                example: "<my-card topColor=\"blue\"></my-card>"
            },
            {
                name: "bottomColor",
                description: "Sets the background color for the bottom section of the card.",
                example: "<my-card bottomColor=\"pink\"></my-card>"
            },
            {
                name: "title",
                description: "Sets the title for your card on the top section.",
                example: "<my-card title=\"Hello World!\"></my-card>"
            },
            {
                name: "TitleFontColor",
                description: "Sets the font color for the title.",
                example: "<my-card TitleFontColor=\"black\"></my-card>"
            },
            {
                name: "ContentFontColor",
                description: "Sets the font color for the content.",
                example: "<my-card ContentFontColor=\"black\"></my-card>"
            }
        ]
    },
    {
        description: "Incorporate a footer in your website using this tag.",
        attributes: [
            {
                name: "year",
                description: "Specifies the year to be displayed in the footer. Default is the current year.",
                example: "<foo-ter year=\"2020\"></foo-ter>"
            },
            {
                name: "bg",
                description: "Sets the background color for the footer.",
                example: "<foo-ter bg=\"black\"></foo-ter>"
            },
            {
                name: "color",
                description: "Sets the text color for the content in the footer.",
                example: "<foo-ter color=\"white\"></foo-ter>"
            }
        ]
    },
    {
        description: "Create an exceptional button that can effortlessly elevate your website.",
        attributes: [
            {
                name: "backgroundColor",
                description: "Sets the background color for the button.",
                example: "<my-button backgroundColor=\"teal\"></my-button>"
            },
            {
                name: "borderRadius",
                description: "Sets the border radius (curve) for the button.",
                example: "<my-button borderRadius=\"30px\"></my-button>"
            },
            {
                name: "font-color",
                description: "Sets the color for the content inside the button.",
                example: "<my-button font-color=\"white\"></my-button>"
            },
            {
                name: "font-size",
                description: "Sets the size of the font inside the button.",
                example: "<my-button font-size=\"20px\"></my-button>"
            }
        ],
    },
    {
        description: "Easily create a notification tag or like popups for your needed situations ",
        attributes: [
            {
                 name: "bgColor",
                 description: "It sets the background color for the alert window. If not specified, the default value is white.",
                
             },
            {
                 name: "fontColor",
                 description: "It sets the font color for the content inside alert window. If not specified, the default value is black.",
                 
             },
             {
                 name: "function",
                 description: "The value here must be the same as the id of button in which the action must be triggered, this attribute must be passed.",
                 
               
             },
             {
                 name: "popup-img",
                 description: "It sets a small image on the window. If not specified, there is a default thumbs up image.",
                
             },
             {
                 name: "msgContent",
                 description: "It sets the content for the alert window. If not specified, the default value is `Welcome to our website`.",
                
             }
            ],
    },
    {
        
            description: "An FAQ section is a must-have for a website, now it can just be created with one line of code!",
            attributes: [
                {
                    name: "questions",
                    description: "The questions to be displayed in the FAQ section, separated by '|$|'.",
                    example: "<f-a-q questions=\"Are you doing good? |$| You okay? |$| How's life?\"></f-a-q>"
                },
                {
                    name: "answers",
                    description: "The answers corresponding to the questions, separated by '|$|'.",
                    example: "<f-a-q answers=\"Yes i am doing good. |$| Yes, i am okay. |$| Life goes on and on and on...\"></f-a-q>"
                },
                {
                    name: "total-border",
                    description: "Sets border for the entire question and answer container.",
                    example: "<f-a-q total-border=\"1px solid red\"></f-a-q>"
                },
                {
                    name: "q-bg",
                    description: "Sets background color for question container.",
                    example: "<f-a-q q-bg=\"blue\"></f-a-q>"
                },
                {
                    name: "a-bg",
                    description: "Sets background color for answer container.",
                    example: "<f-a-q a-bg=\"white\"></f-a-q>"
                },
                {
                    name: "hover-bg",
                    description: "Sets background color for question container when it's hovered or selected.",
                    example: "<f-a-q hover-bg=\"blue\"></f-a-q>"
                },
                {
                    name: "border",
                    description: "Sets border between the question and answer containers.",
                    example: "<f-a-q border=\"1px solid black\"></f-a-q>"
                },
                {
                    name: "q-color",
                    description: "Sets text color for the texts inside question container.",
                    example: "<f-a-q q-color=\"white\"></f-a-q>"
                },
                {
                    name: "hover-color",
                    description: "Sets text color for the texts inside question container when the question container is hovered.",
                    example: "<f-a-q hover-color=\"white\"></f-a-q>"
                },
                {
                    name: "a-color",
                    description: "Sets text color for the texts inside answer container.",
                    example: "<f-a-q a-color=\"black\"></f-a-q>"
                },
                {
                    name: "width",
                    description: "Sets the width for the entire container of question and answer.",
                    example: "<f-a-q width=\"400px\"></f-a-q>"
                },
                {
                    name: "transition",
                    description: "Specifies the duration of transition when the question container is clicked to make the answer show up.",
                    example: "<f-a-q transition=\"0.6s\"></f-a-q>"
                },
                {
                    name: "space",
                    description: "Sets the space between each of the question containers.",
                    example: "<f-a-q space=\"20px\"></f-a-q>"
                },
                {
                    name: "icon-color",
                    description: "Sets the color for the arrow icon in the question container.",
                    example: "<f-a-q icon-color=\"white\"></f-a-q>"
                }
            ]
        },
        {
            description: "Collecting emails from potential customers is required for a successful business. Our tag will make it simple, with just 1 line of code, you can create a newsletter section!",
            attributes: [
                {
                    name: "width",
                    description: "Sets the width for your newsletter.",
                    example: "<news-letter width=\"450px\"></news-letter>"
                },
                {
                    name: "height",
                    description: "Sets the height for your newsletter.",
                    example: "<news-letter height=\"350px\"></news-letter>"
                },
                {
                    name: "img",
                    description: "Sets the background image for your newsletter. If not specified, default white background will be used.",
                    example: "<news-letter img=\"source.svg\"></news-letter>"
                },
                {
                    name: "inputs",
                    description: "Specifies the input fields for collecting data from clients. Multiple inputs can be specified, separated by spaces.",
                    example: "<news-letter inputs=\"name email\"></news-letter>"
                },
                {
                    name: "subscribe-bg",
                    description: "Sets the background color for the subscribe button.",
                    example: "<news-letter subscribe-bg=\"yellow\"></news-letter>"
                },
                {
                    name: "color",
                    description: "Sets the font color for the newsletter.",
                    example: "<news-letter color=\"white\"></news-letter>"
                },
                {
                    name: "bg",
                    description: "Specifies the background color for the newsletter if no background image is provided. Default is white.",
                    example: "<news-letter bg=\"grey\"></news-letter>"
                },
                {
                    name: "heading",
                    description: "Specifies the heading/headline for the newsletter.",
                    example: "<news-letter heading=\"Subscribe to Our Newsletter\"></news-letter>"
                }
            ]
        },
        {
            description: "Making a card which shows the glimpse of your project made easier with only one line of code!",
            attributes: [
                {
                    name: "width",
                    description: "Sets the width for your card.",
                    example: "<project-card width=\"300px\"></project-card>"
                },
                {
                    name: "height",
                    description: "Sets the height for your card.",
                    example: "<project-card height=\"300px\"></project-card>"
                },
                {
                    name: "image",
                    description: "Sets the image for the background of the card.",
                    example: "<project-card image=\"images/image.png\"></project-card>"
                },
                {
                    name: "title",
                    description: "Sets the text for the card.",
                    example: "<project-card title=\"Project unkown\"></project-card>"
                },
                {
                    name: "link",
                    description: "Specifies the link where the user will be redirected when the card is clicked.",
                    example: "<project-card link=\"https://example.com\"></project-card>"
                }
            ]
        },
        {
            description: "Either for displaying proficiency in a field or adding ratings and reviews for customers, this tag provides all that are needed for it.",
            attributes: [
                {
                    name: "width",
                    description: "Sets the width for each of star element inside the rating box.",
                    example: "<star-rating width=\"20px\"></star-rating>"
                },
                {
                    name: "originalbg",
                    description: "Sets the background color for the star when it's empty.",
                    example: "<star-rating originalbg=\"white\"></star-rating>"
                },
                {
                    name: "changingbg",
                    description: "Sets the background color for the star when it's clicked.",
                    example: "<star-rating changingbg=\"pink\"></star-rating>"
                },
                {
                    name: "default",
                    description: "Sets how many stars should be filled at the starting.",
                    example: "<star-rating default=\"3\"></star-rating>"
                },
                {
                    name: "clickable",
                    description: "Sets if the stars must be static or dynamic.",
                    example: "<star-rating clickable=\"yes\"></star-rating>"
                },
                {
                    name: "margin",
                    description: "Sets how much space should be between each star element.",
                    example: "<star-rating margin=\"5px\"></star-rating>"
                },
                {
                    name: "form-text",
                    description: "Sets the heading for the review form.",
                    example: "<star-rating form-text=\"write your review here : \"></star-rating>"
                },
                {
                    name: "input-color",
                    description: "Sets text color for the content written inside the input fields.",
                    example: "<star-rating input-color=\"black\"></star-rating>"
                },
                {
                    name: "input-bg",
                    description: "Sets the background color for the input fields inside the form.",
                    example: "<star-rating input-bg=\"white\"></star-rating>"
                },
                {
                    name: "inp-name",
                    description: "Sets the placeholder for the name input field.",
                    example: "<star-rating input-name=\"Email or Name\"></star-rating>"
                },
                {
                    name: "inp-review",
                    description: "Sets the placeholder for the review textarea field.",
                    example: "<star-rating input-review=\"What do you think about the product?\"></star-rating>"
                },
                {
                    "name": "inp-width",
                    "description": "Sets the width for both the text fields inside the form.",
                    "example": "<star-rating input-width=\"290px\"></star-rating>"
                },
                {
                    "name": "inp-height",
                    "description": "Sets the height for the input field inside the form.",
                    "example": "<star-rating inp-height=\"30px\"></star-rating>"
                },
                {
                    "name": "text-height",
                    "description": "Sets the height for the textarea field inside the form.",
                    "example": "<star-rating inp-height=\"60px\"></star-rating>"
                },
                {
                    "name": "border",
                    "description": "Sets border for both the rating box and the input fields in it.",
                    "example": "<star-rating border=\"1px solid black\"></star-rating>"
                },
                {
                    "name": "btn-width",
                    "description": "Sets the width for the submit button for the review.",
                    "example": "<star-rating btn-width=\"40px\"></star-rating>"
                },
                {
                    "name": "btn-text",
                    "description": "Sets the text for the submit button for the review.",
                    "example": "<star-rating btn-text=\"Click here\"></star-rating>"
                },
                {
                    "name": "btn-height",
                    "description": "Sets the height for the submit button for the review.",
                    "example": "<star-rating btn-height=\"20px\"></star-rating>"
                },
                {
                    "name": "btn-font",
                    "description": "Sets the font size for the text inside submit button for the review.",
                    "example": "<star-rating btn-font=\"10px\"></star-rating>"
                },
                {
                    "name": "btn-bg",
                    "description": "Sets the background color for the submit button for the review.",
                    "example": "<star-rating btn-bg=\"black\"></star-rating>"
                },
                {
                    "name": "btn-hover-bg",
                    "description": "Sets the background color for the submit button when it's hovered.",
                    "example": "<star-rating btn-hover-bg=\"white\"></star-rating>"
                },
                {
                    name: "btn-color",
                    description: "Sets the text color for the submit button for the review.",
                    example: "<star-rating btn-color=\"white\"></star-rating>"
                },
                {
                    name: "btn-hover-color",
                    description: "Sets the text color for the submit button when it's hovered.",
                    example: "<star-rating btn-hover-color=\"black\"></star-rating>"
                },
                {
                    name: "button-click",
                    description: "Specifies the function to be called after all the validation is done.",
                    example: "<star-rating button-click=\"goToThisFunction\"></star-rating>"
                },
                {
                    name: "err-text",
                    description: "Sets the error message when the user submits without any content.",
                    example: "<star-rating err-text=\"Please enter something in the fields\"></star-rating>"
                },
                {
                    name: "err-color",
                    description: "Sets the text color of the error message.",
                    example: "<star-rating err-color=\"red\"></star-rating>"
                }
            ]
        },
        {
            description: "Making a search bar for your website is easy with this one tag!",
            attributes: [
                {
                    name: "width",
                    description: "Sets the width of the search bar.",
                    example: "<search-bar width=\"300px\"></search-bar>"
                },
                {
                    name: "height",
                    description: "Sets the height of the search bar.",
                    example: "<search-bar height=\"60px\"></search-bar>"
                },
                {
                    name: "border",
                    description: "Sets the border for the entire search bar.",
                    example: "<search-bar border=\"1px solid teal\"></search-bar>"
                },
                {
                    name: "radius",
                    description: "Sets the border radius for the entire search bar.",
                    example: "<search-bar radius=\"25px\"></search-bar>"
                },
                {
                    name: "icon-color",
                    description: "Sets the color for the search icon.",
                    example: "<search-bar icon-color=\"green\"></search-bar>"
                },
                {
                    name: "fn",
                    description: "Specifies the function to be called when the search icon is pressed.",
                    example: "<search-bar fn=\"searchInDatabase\"></search-bar>"
                }
            ]
        }
];

// Function to generate HTML for tags
function generateTagHTML(tag) {
    let html = `<div class="description">
                  <h1 class="descriptionContent">${tag.description}</h1>
                    <ul class="attribute">`;
                    console.log('tag attr : ' , tag.attributes);
    tag.attributes.forEach(attr => {
        html += `<li class="desc-elements">${attr.name}</li>`;
    });
    html += `   </ul>`;
    tag.attributes.forEach(attr1 => {
        html += `<div class="attribute-title">
        <h1 class="attrSpan">${attr1.name}</h1>
        <p class="attrP">${attr1.description}</p>
        </div>
        
        
    `;
    })

    html += `</div>`;

    return html;
}

// Append HTML for each tag to the tagsContainer
let tagsContainer = document.querySelector('.description-container');
tags.forEach(tag => {
    tagsContainer.innerHTML += generateTagHTML(tag);
});

function showDescription(here) {
    let ind = here || 0;
    for (let i = 0; i < 16; i++) {
        if (i == ind) {
            console.log('here came');
            document.querySelector(`#e${i}`).style.fontSize = "21px";
            document.querySelector(`#e${i}`).style.backgroundColor = "white";

        } else {
            document.querySelector(`#e${i}`).style.fontSize = "18px";
            document.querySelector(`#e${i}`).style.backgroundColor = "#EAEAFD";
        }
    }

    document.querySelector('.description').innerHTML = generateTagHTML(tags[ind]);
}

showDescription(0);
