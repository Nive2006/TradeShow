//.#1  <num-counter min="0" max="30" step="1" width="50px" height="50px" bg="red" sym-color="white" font-color="black"></num-counter>

  class NumCounter extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    let min = this.getAttribute('min');
    min = parseInt(min) || 0;
    let max = this.getAttribute('max');
    max = parseInt(max) || min + 30;
    let step = this.getAttribute('step');
    step = parseInt(step) || 1;
    let width = this.getAttribute('width') || "50px";
    let height = this.getAttribute('height') || "50px";
    let bg = this.getAttribute('bg') || "blue";
    let symColor = this.getAttribute('symColor') || "white";
    let fontColor = this.getAttribute('fontColor') || "black";


    let font = width.length - 2;
    let j = "";
    for (let i = 0; i < font; i++) {
      j += width[i];
    }
    let n = min;

    let contain = document.createElement('section');
    let reduce = document.createElement('button');
    reduce.textContent = "-";
    reduce.setAttribute("class", "reduce");
    let val = document.createElement('p');
    val.setAttribute('class', 'para');
    val.innerText = n;
    let increase = document.createElement('button');
    increase.textContent = '+';
    increase.setAttribute("class", "increase");

    contain.appendChild(reduce);
    contain.appendChild(val);
    contain.appendChild(increase);
    this.shadowRoot.appendChild(contain);
    const thisElement = this;

    function reduceFn(ele) {

      if (n - step >= min) {
        n -= step;
        ele.shadowRoot.querySelector('section').querySelector("p").innerText = n;
        setValueInAttribute();
      }
    }

    function increaseFn(ele) {
      if (n + step <= max) {
        n += step;
        ele.shadowRoot.querySelector('section').querySelector("p").innerText = n;
        setValueInAttribute();
      }
    }

    function setValueInAttribute(){
      const shadowRoot = thisElement.shadowRoot;
      const shadowElement = shadowRoot.querySelector('.para');
      thisElement.setAttribute('val', shadowElement.textContent);
    }

	   setValueInAttribute();


    let styles = `

<style>
section {
  display : flex;
  align-items : center;
  width : ${j * 4}px;
  justify-content : space-between;
  padding : 5px;
  border-radius : 25px;
}

button {
  cursor : pointer;
  border : none;
  background-color : ${bg};
  color : ${symColor};
  display : flex;
  align-items : center;
  justify-content : center;
  font-size : 30px;
  width : ${width};
  height : ${height};
  border-radius : 50%;
}

p {
  width : ${width};
  height : ${height};
  text-align : center;
  line-height : ${height};
  font-size : ${j / 2}px;
  margin-block-start : 0;
  margin-block-end : 0;
  color : ${fontColor};
}

</style>`;

    this.shadowRoot.innerHTML += styles;

    this.shadowRoot.querySelector(".reduce").addEventListener('click', (e) => {
      reduceFn(this);
    });

    this.shadowRoot.querySelector(".increase").addEventListener('click', (e) => {
      increaseFn(this);
    });
  }
}
customElements.define("num-counter", NumCounter);

//.#2   <status-bar width="100px" height="40px" bg="pink" text-color="black" status="80%" border="10px solid black"></status-bar>

class StatusBar extends HTMLElement{
  constructor(){
    super();
    this.attachShadow({mode:'open'});
  }
  connectedCallback(){
        let width = this.getAttribute('width') || "300px";
        let height = this.getAttribute('height') || "40px";
        let bg = this.getAttribute('bg') || "pink";
        let status = this.getAttribute('status') || 0;
        let border = this.getAttribute('border') || "1px solid black";
        let text = this.getAttribute('text-color') || "black";



      let div = document.createElement('div');
      div.className = "div";
      let bar = document.createElement('div');
      bar.className = "bar";
      bar.innerHTML = status;
      div.appendChild(bar);
      let style = `
        <style>
            .div{
                width : ${width};
                height : ${height};
                border : ${border};
            }
            .bar{
                width : ${status};
                height : ${height};
                background-color:${bg};
                display : flex;
                align-items : center;
                justify-content : center;
                color: ${text};
            }

        </style>
        `
    this.shadowRoot.innerHTML+=style;
    this.shadowRoot.appendChild(div);
  }
}

customElements.define("status-bar", StatusBar);


//. #3 <high-light bg="cyan" text-color="red">Hello</high-light> 

class HighLight extends HTMLElement{
  constructor(){
    super();
    this.attachShadow({mode:'open'});
  }
  connectedCallback(){
    let bg = this.getAttribute('bg') || "yellow";
    let color = this.getAttribute('text-color') || "black";
    let content = this.textContent;

    let span = document.createElement('span');
    span.textContent = content;

    let style= `<style>
    span{
      background-color: ${bg};
      color: ${color};
    }
    </style>`

    this.shadowRoot.innerHTML+=style;
    this.shadowRoot.appendChild(span);
  }
}

customElements.define("high-light", HighLight);

//. #4 <goto-top bg="red" icon-color="white"></goto-top>


class GotoTop extends HTMLElement{
  constructor(){
    super();
    this.attachShadow({mode:'open'});
  }
  connectedCallback(){

    let link = document.createElement('link');
    link.setAttribute('rel', 'stylesheet');
    link.setAttribute('href', 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css');
    document.head.appendChild(link);

    let bg = this.getAttribute('bg') || "pink";
    let color = this.getAttribute('icon-color') || "black";

    function goToTop() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }


    let div = document.createElement('div');
    let arrow = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"/></svg>`;
    div.innerHTML = arrow;

    let style = 
    `<style>
        svg{
            width:20px;
            color:${color};
        }
        svg path{
            fill: ${color};

        }
        div{
            background-color:${bg};
            font-size:1rem;
            width:50px;
            height:50px;
            position:fixed;
            bottom:20px;
            right:30px;
            display:none;
            align-items:center;
            justify-content:center;
            cursor:pointer;
            border-radius:50%;
            border:1px solid ${color};

            }
    </style>`;
    this.shadowRoot.innerHTML += style;
    this.shadowRoot.appendChild(div);

    this.shadowRoot.querySelector("div").addEventListener('click', goToTop);

    document.documentElement.style.scrollBehavior = "smooth";

    window.addEventListener('scroll', showBtn);

    function showBtn() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        div.style.display = "flex";
      } else {
        div.style.display = "none";
      }
  }
}
}

customElements.define("goto-top", GotoTop);

//. #5  <toggle-btn original="originalFn" originalbg="red" changingbg="lime" tochange="changeFn"></toggle-btn>

class ToggleBtn extends HTMLElement{
  constructor(){
    super();
    this.attachShadow({mode:'open'});
  }
  connectedCallback(){

    let toggleContainer = document.createElement('section');
    toggleContainer.setAttribute('class', 'toggle-container');
    let innerCircle = document.createElement('div');
    innerCircle.setAttribute('class', 'inner-circle');
    toggleContainer.appendChild(innerCircle);

    let original = this.getAttribute('original');
    let tochange = this.getAttribute('tochange');
    let originalbg = this.getAttribute('originalbg') || "rgb(167, 167, 167)";
    let changingbg = this.getAttribute('changingbg') || "#00FF00";

    let styles = `<style>
    .toggle-container{
    background-color: ${originalbg};
    border-radius :20px; ;
    width: 53px;
    height: 30px;
    display: flex;
    align-items: center;  
    cursor : pointer;
}
.inner-circle{
    position: relative;
    padding: 2px;
    background-color: white;
    border-radius:50% ;
    width: 20px;
    height: 20px;
    margin-left :2px; 
}



</style>`;



    function changing() {
      let circle = innerCircle;
      let isClicked = false;
      toggleContainer.addEventListener("click",function(){
          if(!isClicked){
              toggleContainer.style.backgroundColor = changingbg;
              circle.style.transition = "0.4s"
              circle.style.transform = "translateX(100%)";
              isClicked = true;
            window[tochange]();
          }
          else{
              toggleContainer.style.backgroundColor = originalbg;
              circle.style.transition = "0.4s"
              circle.style.transform = "translateX(0%)";
              isClicked = false;
              window[original]();
          }
      });

    }

    changing();


    this.shadowRoot.innerHTML += styles;    
    this.shadowRoot.appendChild(toggleContainer);
  }
}

customElements.define("toggle-btn", ToggleBtn);



//. #6 <screen-view img="man.png" bg="pink"></screen-view>

class ScreenView extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {

    let img = this.getAttribute("img");
    let bg = this.getAttribute("bg");
    let section = document.createElement('section');
    section.setAttribute('class', 'sec-one');
    let secondSection = document.createElement('section');
    secondSection.setAttribute('class', 'sec-two');




    function ifElse() {
      if (!bg) {
        bg = "rgb(0, 76, 76)";
      }
    }
    ifElse();

    let styles = `<style>


    .sec-one {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100vh;
      background-image: url(${img});
      background-size: cover;
      background-position: center;
      z-index: -2;
    }

    .sec-two {
      width: 100%;
      height: 100vh;
      background-color: ${bg};
      opacity : 0.5;
      z-index: -1;
    }
    </style>`;
    this.shadowRoot.innerHTML += styles;
    this.shadowRoot.appendChild(section);
    this.shadowRoot.appendChild(secondSection);
  }
}

customElements.define("screen-view", ScreenView);


// #7) <nav-bar tags="Home About Services Contact"  navBarlogo="650-6503651_navbar-logo-hd-png-download-removebg-preview.png" link="" bgColor="#FFE4C9"></nav-bar>


class NavBar extends HTMLElement {
	constructor() {
		super();
		this.shadow = this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		const title = this.getAttribute('tags')
		const titletags = title ? title.split(" ") : ["0ne", "two", "three"]
		const links = this.getAttribute("link")
		const linktag = links ? links.split(" ") : []
		const backgroundColor = this.getAttribute('bgColor') || "green"


		let section = document.createElement('section')
		section.classname = "wrapper"
		let navDiv = document.createElement('div')
		navDiv.className = "nav-bar"
		let tagDiv = document.createElement('div')
		tagDiv.className = "tags"
		let isClicked = true;
		let logo = document.createElement('img')
		logo.className = "logo"
		logo.src = this.getAttribute("navBarlogo") || "650-6503651_navbar-logo-hd-png-download-removebg-preview.png"
		let HamMenu = document.createElement('img')
		HamMenu.className = "hamburgerMenu"
		HamMenu.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1024px-Hamburger_icon.svg.png"
		titletags.forEach(function(navItems, Index) {
			const a = document.createElement("a")
			a.textContent = navItems;
			a.className = "anchorTags"
			a.href = linktag[Index] || "#"
			a.target = "_blank"
			tagDiv.appendChild(a);

		})
		navDiv.appendChild(logo)
		navDiv.appendChild(HamMenu)
		section.appendChild(navDiv)
		section.appendChild(tagDiv)
		this.shadowRoot.appendChild(section)

		const style = `
		<style>
		
		section{
			border:1px solid black;
			background-color: ${backgroundColor};
			display: flex;
			justify-content: space-between;
		}

		.nav-bar{
		background-color: ${backgroundColor};

		}
		.logo{
			height: 100px;
			width: 100px;
		}
		.hamburgerMenu{
			display: none;
		}
		.tags{
			display: flex;
		}
		.anchorTags{
			color:black;
			margin: auto;
			padding:0.5rem 1rem;
			font-size: 1.8rem;
			text-decoration: none;
		}

		.anchorTags:hover{
			border-bottom: 1px solid black;
		}


		@media screen and (max-width:768px) {
		.hamburgerMenu{
			display: block;
			height: 50px;
			width:60px;
		}

		section{
		flex-direction: column;
		border:none;
		overflow:hidden;
		background-color:transparent;

		}
		.nav-bar{
			border:1px solid black;
			padding:10px;
			display: flex;
			z-index:10;
			align-items:center;
			justify-content: space-between;
			overflow:hidden;
		}
		.tags{
			z-index:8;
			background-color:white;
			text-align: center;
			flex-direction: column;
			transition: 1s;
			border:1px solid gray;
			transform :translateY(-140%);
		}
		.moveup{
		transform :translateY(-140%);
		}
		.moveDown{
		transform :translateY(0%);

		}
		.anchorTags{
			margin:10px;
			padding:10px;
			border-bottom:1px solid gray;
			font-size: 1.5rem;
		}
		.logo{
			height:70px;
			width:70px;
		
		}
		a:last-child{
			border-bottom:none;
			padding-bottom:0px;
		}
		</style>
		`

		this.shadowRoot.innerHTML += style;

		this.shadowRoot.querySelector(".hamburgerMenu").addEventListener("click", () => {

			if (!isClicked) {
				isClicked = true;
				console.log(isClicked)
				this.shadowRoot.querySelector('.tags').classList.remove('moveDown');
			}
			else {
				isClicked = false;
				console.log(isClicked)
				this.shadowRoot.querySelector('.tags').classList.add('moveDown');
			}
		})

	}

}

customElements.define("nav-bar", NavBar)

// #8)  <my-card image="https://images.freeimages.com/images/large-previews/610/random-1574391.jpg?fmt=webp&w=500" height="570px" width="350px" topColor="#A076F9" bottomColor="#D7BBF5" title="Hello Title" desc="In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content." TitleFontColor="grey" DescFontColor="black"></my-card>


class MyCard extends HTMLElement {
	constructor() {
			super();
			this.attachShadow({mode: 'open'});
	}

	connectedCallback() {
			const height=this.getAttribute('height') || "500px";
			const width=this.getAttribute('width') || "300px";
			const firstColor= this.getAttribute('topColor') || "#7FB5FF";
			const secondColor=this.getAttribute('bottomColor') || "#C4DDFF";
			const TitleFontColor=this.getAttribute("TitleFontColor") || "black  ";
			const DescFontColor=this.getAttribute('DescFontColor') || "black";

			let wrapper = document.createElement('section');
			wrapper.className = "card-container";
			let firstDiv = document.createElement('div');
			firstDiv.className = 'img-container';
			let image = document.createElement('img');
			image.className = 'org-img';
			image.src = this.getAttribute("image") ||'https://images.unsplash.com/photo-1493612276216-ee3925520721?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tfGVufDB8fDB8fHww';
			let secondDiv = document.createElement('div');
			secondDiv.className = 'content';
			let h1 = document.createElement('h1');
			h1.className = 'con-title';
			h1.textContent=this.getAttribute('title') || "Lorem Ipsum";
			let p = document.createElement('p');
			p.className = "con-desc";
			p.textContent=this.getAttribute('desc') || "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.";

			firstDiv.appendChild(image);
			secondDiv.appendChild(h1);
			secondDiv.appendChild(p);
			wrapper.appendChild(firstDiv);
			wrapper.appendChild(secondDiv);

			let style=`<style>
			.card-container {
					width: ${width} ;
					height: ${height};
					display: flex;
					flex-direction: column;
					border-radius: 30px ;
					margin:1rem;
					transition:1s
			}

			.card-container:hover{
					transform: scale(1.07); 
			}
			.img-container {
					border-radius: 30px 30px 0 0;
					background-color: ${firstColor};
					height: calc(40%);
					display: flex;
					justify-content: center;
					align-items: center;
			}

			.content {
					border-radius: 0 0 30px 30px;
					height: calc(50%);
					display: flex;
					justify-content: space-evenly;
					align-items: center;
					flex-direction: column;
					text-align: center;
					background-color: ${secondColor};
			}
			.org-img{
					box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;
					height: calc(70%);
					width: calc(45%);
					border-radius: 100%;

			}
			.con-title{
					height: calc(8%);
					width: 80%;
					color:${TitleFontColor};
					margin: 0;
			}
			.con-desc{
					height: calc(58%);
					width: 80%;
					margin: 0;
					color: ${DescFontColor};
					padding-bottom:1rem;
					font-size:1.3rem;
					overflow:scroll;
			}
			.con-desc::-webkit-scrollbar{
			display:none;
			}
			.org-img :hover{
					transform: scale(110%);
			}

			@media screen and (max-width:600px){
				.con-desc{
				font-size:1.2rem;
				}
			}
			</style>`
			this.shadowRoot.innerHTML+=style
			this.shadowRoot.appendChild(wrapper);
	}
}

customElements.define('my-card', MyCard);

// #9) <foo-ter bg="maroon" color="white" year="2020"></foo-ter>

class Footer extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    let userYear = this.getAttribute('year') || "2022";
    let d = new Date();
    let bg = this.getAttribute('bg') || "black";
    let color = this.getAttribute('color') || "white";
    let year = d.getFullYear();
    let div = document.createElement('div');
    let domain = window.location.hostname;
    let para = `Copyright © ${userYear} - ${year} | All Rights Reserved | ${domain}`;
    div.textContent = para;

    this.shadowRoot.appendChild(div);

    let styles = `

    <style>

    *{
      margin : 0;
      padding : 0;
      box-sizing : border-box;
    }
  
      div {
        width : 100%;
        background-color : ${bg};
        color : ${color};
        padding : 25px;
        text-align : center;
        word-wrap : break-word;
      }

    </style>
    
    `;

    this.shadowRoot.innerHTML += styles;

  }
}

customElements.define("foo-ter", Footer);

// #10) <my-button backgroundColor="linear-gradient(to right, #d2ffff, #0694c6)" borderRadius="50px" buttonContent="Click me" font-color="black" font-size="20px"></my-button>

class MyButton extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}
	connectedCallback() {
		const backgroundColor = this.getAttribute('backgroundColor') || "linear-gradient(to right, #34E89E, #0F3443)";
		const borderRadius = this.getAttribute('borderRadius') || "30px";
		const buttonContent = this.getAttribute('buttonContent') || "Click Me";
		const fontColor = this.getAttribute('font-color') || "white";
		const fontSize = this.getAttribute('font-size') || "20px";
		
		let template = document.createElement('template');
		template.innerHTML = `
				<button class="button">${buttonContent}
				</button>
				<style>

				button{
            height: 48px;
            width: 210px;
						padding: 10px;
						margin: auto;
						letter-spacing: 0.5px;
						position: relative;
						border-radius: ${borderRadius};
						background: ${backgroundColor};
						border: none;
						overflow: hidden;
						font-size: ${fontSize};
						color:${fontColor};
						transition: 1s;
            font-weight:500;
				}
				span{
						position:absolute;
						background: #fff;
						transform: translate(-50%,-50%);
						pointer-events: none;
						border-radius:50%;
						animation:animate 1s linear infinite;
				}

				button:active{
						transform: scale(0.9);
				}


				@keyframes animate{
						0%{
								width:0px;
								height:0px;
								opacity: 0.45;
						}
						100%{
								width: 250px;
								height: 250px;
								opacity: 0;
						}
				}
				</style>

		 `
		this.shadowRoot.appendChild(template.content.cloneNode(true));
		this.shadowRoot.querySelector('button').addEventListener('click', (ev) => {
			let x = ev.clientX - ev.target.offsetLeft;
			let y = ev.clientY - ev.target.offsetTop;

			let ripples = document.createElement('span');
			ripples.style.left = x + 'px';
			ripples.style.top = y + 'px';
			this.shadowRoot.querySelector('button').appendChild(ripples);

			setTimeout(() => {
				ripples.remove();
			}, 1000);
		})
	}

}

customElements.define('my-button', MyButton);


// #11) <my-alert logo="https://www.gifcen.com/wp-content/uploads/2022/05/thumbs-up-gif-12.gif" msgContent="This person follows you" bgColor="white" fontColor="black" function="one"></my-alert> <button id="one"></button>
 class MyAlert extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode:'open'});
    }

    connectedCallback(){
        const backgroundColor=this.getAttribute('bgColor') || "white";
        const fontColor=this.getAttribute('fontColor') || "black";
        const Function = this.getAttribute('function');
        const EventFunction = document.getElementById(`${Function}`);


        let section= document.createElement('section');
        section.className="container";
        let div1=document.createElement('div');
        div1.className="logo";
        let img= document.createElement('img');
        img.className='userImage';
        img.src=this.getAttribute('logo');
        let div2=document.createElement('div');
        div2.className="content";
        div2.textContent=this.getAttribute('msgContent');
        section.classList.add("goinup")
     
     
        EventFunction.addEventListener("click",function(ev){
            setTimeout(() => {
                section.classList.remove("goinup")  
            },0);
            setTimeout(() => {
                section.classList.add("goinup")
            },1500);
        })


        let style=`<style>

        .container{
            position:absolute;
            top:2%;
            left: 50%;
            transform: translateX(-50%);
            background-color: ${backgroundColor};
            height: 7vh;
            width: 15vw;
            border: 0.5px solidrgb(0, 0, 0);
            display: flex;
            align-items: center;
            margin:auto;
            border-radius: 10px;
            box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
            transition: 1s;
            color: ${fontColor};
            font-size:1.2rem;

        }
        .logo img{
            height: 40px ;
            width: 60px;
            margin: 5px;
            border-radius: 50%;
            background-position: center;
            background-size: cover;
            background-repeat: no-repeat;
    
        }
        .content{
            display: flex;
            justify-content: center;
            align-items: center;
            height: 30px;
            width: 30vw;
            text-align: center;
        }
        .goinup{
            position:absolute;
            top:-10%;
        }
    </style>`
        div1.appendChild(img);
        section.appendChild(div1);
        section.appendChild(div2);
        this.shadowRoot.innerHTML+=style;
        this.shadowRoot.appendChild(section);
        
    }
}
customElements.define('my-alert', MyAlert);


// #12)   <f-a-q questions="Why are you hi ho hopw are you hey man now you are here and whattttt efdfjhf fds? |$| Who says? |$| How should i call you?" answers="Who says |$| i say |$| hatt" icon-color="white" total-border="1px solid black" q-bg="red" a-bg="white" hover-bg="maroon" border="1px solid teal" q-color="white" hover-color="white" a-color="black" width="450px" transition="0.4s" space="20px" icon-color="white"></f-a-q>

class FAQ extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({mode: 'open'});
    }
    connectedCallback() {
      let q = this.getAttribute('questions');
      let questions = q ? q.split("|$|") : ["What is your name?", "What is your age?", "How are you?"];
      questions = questions.map(str => str.trim());

      let a = this.getAttribute('answers');
      let answers = a ? a.split("|$|") : ["My name is FAQ container", "Around 0 LOL", "I'm good, what about you?"];
      answers = answers.map(str => str.trim());

      let containBorder = this.getAttribute("total-border") || "1px solid black";
      let questionBG = this.getAttribute("q-bg") || "#4287f5";
      let answerBG = this.getAttribute("a-bg") || "white";
      let qHoverBg = this.getAttribute("hover-bg") || "#295bab";
      let seperateBorder = this.getAttribute("border") || "1px solid black";
      let qColor = this.getAttribute("q-color") || "white";
      let qHoverColor = this.getAttribute("hover-color") || qColor;
      let aColor = this.getAttribute("a-color") || "black";
      let width = this.getAttribute("width") || "400px";
      let transition = this.getAttribute("transition") || "0.4s";
      let space = this.getAttribute("space") || "25px";
      let iconColor = this.getAttribute("icon-color") || "white";

      let inHTML = "";
      function render() {
        for (let i = 0; i < questions.length; i++) {
          inHTML += `
            <section class="container">
            <div id="q_a">
                <div class="question-wrapper">
                    ${questions[i]}
                </div>
                     <svg class="pin" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path fill="${iconColor}" d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/></svg>
               </div>
                <div class="answer-wrapper">
                    ${answers[i]}
                </div>
            </section>
          `;

        }
      }

      render();

      let styles = `

          <style>

              .container{
                  border: ${containBorder};
                  display: flex;
                  flex-direction: column;
                  color: black;
                  width: ${width};
                  margin: ${space} auto;
                  background-color: rgb(66, 135, 245);
              }
              .answer-wrapper{
                  height: 0;
                  transition: ${transition};
                  overflow: hidden;
                  padding-left: 10px;
                  background-color : ${answerBG};
                  color : ${aColor};

              }
              .shrink{
                  padding: 10px;
              }
              .question-wrapper{
                  width:90%;
              }
              
              .pin{
                  transition: ${transition};
                 
              }
              #q_a{
              padding : 10px;
              display:flex;
              align-items : center;
              justify-content: space-between;
              background-color : ${questionBG};
              color : ${qColor};
              }

              #q_a:hover{
                cursor : pointer;
                background-color : ${qHoverBg} !important;
                color : ${qHoverColor};
              }

              svg{
                  width:30px;
                  max-width : 20px;
                  max-height:20px;
                }

          </style>
        
        `;

      let div = document.createElement('div');
      div.innerHTML += inHTML;

      this.shadowRoot.appendChild(div);
      this.shadowRoot.innerHTML += styles;

      const ction = this.shadowRoot.querySelectorAll("#q_a");
      const elem = this.shadowRoot.querySelectorAll(".answer-wrapper");
      const pinElement = this.shadowRoot.querySelectorAll(".pin");

      for (let i = 0; i < ction.length; i++) {
        ction[i].addEventListener("click", function () {
          if (elem[i].classList.contains("shrink")) {
            elem[i].style.height = "0";
            elem[i].classList.remove("shrink");
            pinElement[i].style.transform = "rotate(0deg)";
            ction[i].style.backgroundColor = questionBG;
            ction[i].style.border = "none";
          }
          else {
            elem[i].style.height = `${elem[i].scrollHeight}px`;
            elem[i].classList.add("shrink");
            pinElement[i].style.transform = "rotate(90deg)";
            ction[i].style.backgroundColor = qHoverBg;
            ction[i].style.borderBottom = seperateBorder;
          }
        });
      }

    }
  }

  customElements.define("f-a-q", FAQ);


// #13) <news-letter subscribed="helloWorld" width="750px" height="450px" img="background.jpg" inputs="name email" subscribe-bg="#FDBF60" color="white" bg="black" heading="KING KOHLI">
        // Virat Kohli is the best cricketer, Virat Kohli (Hindi pronunciation: [ʋɪˈɾɑːʈ ˈkoːɦli] ⓘ; born 5 November 1988) is an Indian international cricketer and the former captain of the Indian national cricket team. He is a right-handed batsman and an occasional medium-fast bowler. He currently represents Royal Challengers Bangalore in the IPL and Delhi in domestic cricket. Kohli is widely regarded as one of the greatest batsmen in the history of cricket and the best of the 21st century.[3] He holds the record as the highest run-scorer in T20I and IPL, ranks third in ODI, and stands as the fourth-highest in international cricket.[4] He also holds the record for scoring the most centuries in ODI cricket and stands second in the list of most international centuries scored.
    // </news-letter>

class NewsLetter extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: 'open'});
    }

    connectedCallback(){
        let newsLetter = document.createElement("div");
        let width = this.getAttribute("width") || "90%";
        let height = this.getAttribute("height") || "100%";
        let title = this.getAttribute("heading")
        let textContent = this.textContent;
        let imgSrc = this.getAttribute("img");
        let bgColor = this.getAttribute("bg") || "black";
        let bg;
        if(imgSrc){
            bg = `url(${imgSrc})`;
        }else{
            bg = bgColor;
        }

        let inputs = this.getAttribute("inputs");
        let subBtnClr = this.getAttribute("subscribe-bg") || "white";
        let fontClr = this.getAttribute("color") || "white";
        let allInputs = inputs ? inputs.split(" ") : [text]


        let titleElem = document.createElement("h1");
        titleElem.innerText = title;

        let textContentElement = document.createElement("p");
        textContentElement.innerText = textContent;

        let AllinputDiv = document.createElement("form");
        let inputDivs = document.createElement("div");
        allInputs.forEach(element => {
            let eachInput = document.createElement("input");
            eachInput.setAttribute("placeholder", `Enter your ${element}`)

            if(element == "name"){
                element = "text";
            }

            eachInput.setAttribute("type", element);
            eachInput.setAttribute("required", 'true');

            let eachInputStyles = {
                padding: "5px",
                paddingLeft: "8px",
                borderRadius: "5px",
                border: "none",
                color: "grey"
            }

            Object.assign(eachInput.style, eachInputStyles);
            inputDivs.appendChild(eachInput);

        });

        let subscribe = document.createElement("button");
        subscribe.setAttribute("type", "submit");
        subscribe.setAttribute("class", "subs");
        subscribe.innerText="Subscribe";

        let subscribeStyles = {
            display: "block",
            width: "100px",
            marginTop: "20px",
            padding: "8px",
            borderRadius: "5px",
            border: "none",
            outline: "none",
            backgroundColor: `${subBtnClr}`,
        }
        Object.assign(subscribe.style, subscribeStyles)

        AllinputDiv.appendChild(inputDivs);
        AllinputDiv.appendChild(subscribe);
        subscribe.onmousedown = (e) => {
            let btn = e.target;
            btn.style.scale = "95%";
            setTimeout(() => {
                btn.style.scale = "100%"
            }, 200);
        }

        AllinputDiv.addEventListener("submit", (e) => {
            e.preventDefault();
            alert("Thanks for subscribing!");
          });

        let styles = {
            width: `${width}`,
            height: `${height}`,
            border: "1px solid black",
            margin: "50px auto",
            padding: "25px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-evenly",
            textAlign: "center",
            background: `${bg}`,
            backgroundSize: "cover",
            color: `${fontClr}`
        }

        let inputDivsStyles = {
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
        }

        Object.assign(inputDivs.style, inputDivsStyles);

        let allInputsStyles = {
            width: "75%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-evenly"
        }

        Object.assign(AllinputDiv.style, allInputsStyles)
        var fn = this.getAttribute('subscribed');
        subscribe.addEventListener("click", window[fn]);
        newsLetter.appendChild(titleElem);
        newsLetter.appendChild(textContentElement);
        newsLetter.appendChild(AllinputDiv);
        Object.assign(newsLetter.style, styles);
        this.shadowRoot.appendChild(newsLetter);
    }
    
}

customElements.define("news-letter", NewsLetter);


// #14) <project-card width="400px" height="400px"></project-card>


class ProjectCard extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		const image = this.getAttribute('image') || "https://media.istockphoto.com/id/183819034/photo/two-dices.jpg?s=612x612&w=0&k=20&c=sawA-Q6tAlmzm37EiFViPCr9AT3f-PnwCM8qXrQzR2w=";
		const height = this.getAttribute('height') || "300px";
		const width = this.getAttribute('width') || "300px";

		let section = document.createElement('section');
		section.className = 'wrapper';
		let div = document.createElement('div');
		div.className = "image";
		let h1 = document.createElement('h1');
		h1.className = "title";

		h1.textContent = this.getAttribute('title') || "Title";
		let a = document.createElement('a');
		a.textContent = '🔗';
		a.className = "link";
		a.target = "_blank";
		a.href = this.getAttribute('link') || "";
		div.appendChild(h1);

		div.appendChild(a);

		section.appendChild(div);

		let style = `
		<style>
				.wrapper{
					width:${width};
					height:${height};
				  border:1px solid black;
					background-image: url(${image});
					background-size:contain;
					background-position:center;
					background-repeat:no-repeat;
				}
				.image{
					width:${width};
					height:${height};
					background-color:rgba(0,0,0,0.3);
					// border:1px solid black;
					display:flex;
					align-items:center;
					justify-content:center;
					flex-direction:column;
					opacity:0;
					transition:0.5s;
				}
				.title {
					font-size:3rem;
					color:black;
				}
				.link{
				text-decoration:none;
				font-size:20px;
				}
				.wrapper:hover .image{
				opacity:1;
				}

		</style>`

		this.shadowRoot.innerHTML += style;
		this.shadowRoot.appendChild(section);
	}
}

customElements.define('project-card', ProjectCard);        


// #15) 

class StarRating extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }


  connectedCallback() {

    let width = this.getAttribute('width') || "20px";
    let bg = this.getAttribute('originalbg') || "white";
    let color = this.getAttribute('changingbg') || "gold";
    let boxes = document.createElement('div');
    let def = this.getAttribute('default');
    let clickable = this.getAttribute('clickable') || "no";
    let margin = this.getAttribute('margin') || "7px";
    let formText = this.getAttribute('form-text') || "Tell us what you think : ";
    let inpCol = this.getAttribute('input-color') || "black";
    let inpBg = this.getAttribute('input-bg') || "white";
    let inpName = this.getAttribute('inp-name') || "Name";
    let inpReview = this.getAttribute('inp-review') || "Write your review here";
    let inpWidth = this.getAttribute('input-width') || "300px";
    let inpHeight = this.getAttribute('inp-height') || "25px";
    let textHeight = this.getAttribute('text-height') || "50px";
    let border = this.getAttribute('border') || "1px solid black";
    let btnWidth = this.getAttribute('btn-width') || "50px";
    let btnText = this.getAttribute('btn-text') || "Submit";
    let btnHeight = this.getAttribute('btn-height') || "25px";
    let btnFont = this.getAttribute('btn-font') || "12px";
    let btnBg = this.getAttribute('btn-bg') || "black";
    let btnHoverBg = this.getAttribute('btn-hover-bg') || "white";
    let btnColor = this.getAttribute('btn-color') || "white";
    let btnHoverColor = this.getAttribute('btn-hover-color') || "black";
    let fn = this.getAttribute('button-click');
    let errorText = this.getAttribute('err-text') || "Fields cannot be empty";
    let errorColor = this.getAttribute('err-color') || "red";


    let rateBox = document.createElement('div');
    let inp = document.createElement('input');
    inp.classList.add('inputs');
    inp.setAttribute('placeholder', inpName);
    let inpTwo = document.createElement('textarea');
    inpTwo.classList.add('inputs');
    inpTwo.setAttribute('placeholder', inpReview);

    let para = document.createElement('p');
    para.innerText = formText;

    let err = document.createElement('p');
    err.innerText = errorText;
    err.classList.add("error");

    let btn = document.createElement('button');
    btn.classList.add('button');
    btn.innerText = btnText;
    

    rateBox.appendChild(para);
    rateBox.appendChild(err);
    rateBox.appendChild(inp);
    rateBox.appendChild(inpTwo);
    rateBox.appendChild(btn);

    



    
    boxes.setAttribute("class", "stars_box");
    rateBox.setAttribute("class", "rate_box");

    

    def = parseInt(def) - 1;

    let star;

    function printStars() {
      for (let i = 0; i < 5; i++) {
        star = `<svg id="st${i}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path fill="${bg}" d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>`;
        boxes.innerHTML += star;

      }
    }

    printStars();

    this.shadowRoot.appendChild(boxes);
    this.shadowRoot.appendChild(rateBox);

    function defaultStars(e, n) {
      const box = e.closest(".stars_box");

      for (let i = 0; i < 5; i++) {
        let iD = `st${i}`;
        box.querySelector(`#${iD} path`).setAttribute("fill", bg);
      }

      for (let i = 0; i <= n; i++) {
        let iD = `st${i}`;
        box.querySelector(`#${iD} path`).setAttribute("fill", color);
      }

    }

    const thisElement = this;

    function ev(ele) {
      const box = ele.closest(".stars_box");
      const rateBox = box.nextSibling;
      let element = (ele.id);
      let len = (ele.id.length - 1);
      let loop = (element[len]);
      
      for (let i = 0; i < 5; i++) {
        let iD = `st${i}`;
        box.querySelector(`#${iD} path`).setAttribute("fill", bg);
      }

      for (let i = 0; i <= loop; i++) {
        let iD = `st${i}`;
        box.querySelector(`#${iD} path`).setAttribute("fill", color);
      }
        rateBox.style.display = "block";
        thisElement.setAttribute('stars', loop+1);
    }

    function validate(e) {
      const parent = e.target.closest(".rate_box");
      const box = parent.previousSibling;
      const rateBox = box.nextSibling;
      let val = parent.querySelector(".error");
      let inpone = parent.querySelector("input");
      let inptwo = parent.querySelector("textarea");
      if(inpone.value === "" || !inptwo.value) {
        val.style.opacity = "1";
      }
      else {
        val.style.opacity = "0";
        window[fn]();
        rateBox.style.display = "none";
        setValueInAttribute(inptwo, inpone);
      }      
    }

    let styles = `

  <style>
    


    .stars_box svg {
      width : ${width};
      cursor : pointer;
      margin : ${margin};
    }
    .stars_box svg path{
      stroke: black;
      stroke-width: 10px;
    }

    .inputs {
      margin-bottom : 5px;
      width : ${inpWidth};
      color : ${inpCol};
      background-color : ${inpBg};
      border : ${border};
      outline : none;
    }

    input {
      height : ${inpHeight};
    }

    textarea {
      height : ${textHeight};
    }

    .rate_box {
      width : ${inpWidth};
      padding : 10px;
      border : ${border};
      display : none;
    }

    .button {
      width : ${btnWidth};
      height : ${btnHeight};
      color : ${btnColor};
      background-color : ${btnBg};
      border : none;
      cursor : pointer;
      font-size : ${btnFont};
    }

    .button:hover {
      color : ${btnHoverColor};
      background-color : ${btnHoverBg};
      border : none;
    }

    .error {
      color : ${errorColor};
      opacity : 0;
    }
    
      </style>
  `;


    this.shadowRoot.innerHTML += styles;
    this.shadowRoot.querySelector('button').addEventListener("click", validate);
    this.shadowRoot.querySelectorAll("svg").forEach((ele) => {
      defaultStars(ele, def);
      if (clickable === "yes") {
        ele.onclick = function() {
          ev(ele);
        }
      }
    });
    
    function setValueInAttribute(inptwo, inpone){
      thisElement.setAttribute('review', inptwo.value);
      thisElement.setAttribute('title', inpone.value);
    }
    
  }
}

customElements.define("star-rating", StarRating);


// #16)   <search-bar icon-color="red" width="300px" height="50px" border="2px solid green" radius="30px" button-click="ok"></search-bar>

class SearchBar extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {


    let width = this.getAttribute('width') || "300px";
    let height = this.getAttribute('height') || "50px";
    let border = this.getAttribute('border') || "2px solid black";
    let radius = this.getAttribute('radius') || "30px";
    let iconColor = this.getAttribute('icon-color') || 'black';
    let fn = this.getAttribute('button-click');

    let div = document.createElement('div');
    div.innerHTML = ` 
    <div class="wrapper">
        <input type="text" class="input" placeholder="Search" >
        <svg class="search-img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path fill="${iconColor}" d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
    </div>`;

    let styles = `<style>
    *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
.wrapper{
    width: ${width};
    height: ${height};
    border: ${border};
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-radius: ${radius} ;
}
.search-img{
    width: 40px;
    height: inherit;
    padding: 10px;
    border-left:inherit ;
    cursor : pointer;
}
.input{
    width: calc(80%);
    font-size: 1.2rem;
    border-radius: inherit;
    padding: 10px;
    border: none;
}
input:focus{
    outline:none;
    border: none;
}




</style>`;

    this.shadowRoot.innerHTML += styles;
    this.shadowRoot.appendChild(div);

    this.shadowRoot.querySelector('svg').addEventListener('click' , () =>{
      let value = this.shadowRoot.querySelector('.input').value;
      this.setAttribute('value', value);
      window[fn]();
    });

  }
}

customElements.define("search-bar", SearchBar);