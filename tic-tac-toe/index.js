const menuDiv = document.querySelector(".menu");
const menuVsPlayerButton = document.querySelector(".PLAYER");
const pagMain = document.querySelector("main");

menuVsPlayerButton.addEventListener("click", () => {
	menuDiv.remove();
});

function createBandrole(player1, player2) {
	const banderoleDiv = document.createElement("div");

	const matchDiv = document.createElement("div");
	matchDiv.classList.add("rematche");

	const matchNulDiv = document.createElement("div");
	matchNulDiv.classList.add("match-nul");

	const resartGameH1 = document.createElement("h1");
	resartGameH1.textContent = "RESTART GAME?";

	const buttonDiv = document.createElement("div");
	buttonDiv.classList.add("button");

	const quitButton = document.createElement("button");
	quitButton.classList.add("QUIT", "grand");
	quitButton.textContent = "QUIT";

	const nextRoundButton = document.createElement("button");
	nextRoundButton.classList.add("NEXT-ROUND", "grand");
	nextRoundButton.textContent = "NEXT-ROUND";

	if (player1 == true || player2 == true) {
		const gagneP = document.createElement("p");

		const CroitRondImg = document.createElement("img");

		matchDiv.appendChild(gagneP);
		matchNulDiv.appendChild(CroitRondImg);
		if (player1 == true){
			matchNulDiv.classList.add("croit-victoire");
			matchNulDiv.classList.remove("match-nul");

			gagneP.textContent = "YOU WON!";

			CroitRondImg.src = "./asset/croit.svg"

			resartGameH1.textContent = "TAKES THE ROUND";
		} else {
			matchNulDiv.classList.add("croit-defaite");
			matchNulDiv.classList.remove("match-nul");

			gagneP.textContent = "OH NO, YOU LOST…";

			CroitRondImg.src = "./asset/rond.svg"

			resartGameH1.textContent = "TAKES THE ROUND";
		}
	}

	matchNulDiv.appendChild(resartGameH1);
	matchDiv.appendChild(matchNulDiv);
	matchDiv.appendChild(buttonDiv);
	banderoleDiv.appendChild(matchDiv);
	buttonDiv.appendChild(quitButton);
	buttonDiv.appendChild(nextRoundButton);

	return banderoleDiv;
}

const baderole = createBandrole(true, false);
pagMain.appendChild(baderole);

const CROIT_ID = "CROIT";
const ROND_ID = "ROND";
const AIR_ID = "AIR"

const CROIT_IMG = "./asset/croit.svg";
const ROND_IMG = "./asset/rond.svg";
const AIR_IMG = "./asset/air.webp"


const casseButton = document.querySelectorAll(".casse");

let clickedButton = null;
let clickedImageSrc = "";
let clickedName = "";

for (let i = 0; i < casseButton.length; i++){
	casseButton[i].addEventListener("click", (e) => {
		let conteur = 0
		if (conteur == 0){
			clickedImageSrc = CROIT_IMG
			clickedName = CROIT_ID
			conteur++
		} else {
			clickedImageSrc = ROND_IMG
			clickedName = ROND_ID
			conteur = conteur - 1
		}
		casseButton[i].querySelector("img").src =  clickedImageSrc
		console.log(clickedImageSrc)
	});
}

