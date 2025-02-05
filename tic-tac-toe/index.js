// const CROIT_ID = "CROIT";
// const ROND_ID = "ROND";

// const CROIT_IMG = "./asset/croit.svg";
// const ROND_IMG = "./asset/rond.svg";

// const casseButton = document.querySelectorAll("casse");

// let clickedButton = null;
// let clickedImageSrc = "";
// let clickedName = "";

// casseButton.addEventListener("click", (e) => {});

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
	const buttonDiv = document.createElement("div");
	buttonDiv.classList.add("button");

	const quitButton = document.createElement("button");
	quitButton.classList.add("QUIT", "grand");
	const nextRoundButton = document.createElement("button");
	nextRoundButton.classList.add("NEXT-ROUND", "grand");

	if (player1 == true || player2 == true) {
		const gagneP = document.createElement("p");
		const CroitRondImg = document.createElement("img");

		matchDiv.appendChild(gagneP);
		matchNulDiv.appendChild(CroitRondImg);
	}

	banderoleDiv.appendChild(matchDiv);
	matchDiv.appendChild(matchNulDiv, buttonDiv);
	matchNulDiv.appendChild(resartGameH1);
	buttonDiv.appendChild(quitButton, nextRoundButton);

	return banderoleDiv;
}

const baderole = createBandrole(true, false);
pagMain.appendChild(baderole);
