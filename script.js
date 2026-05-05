let secret = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const display = function (message) {
	document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
	const guess = Number(document.querySelector(".guess").value);

	if (!guess) {
		display("🛑 Žádné číslo!");
	} else if (guess === secret) {
		display("Číslo je správně🥳");
		document.querySelector(".message").style.color = "#ff00bf";
		document.querySelector(".number").textContent = secret;
		document.querySelector(".number").style.width = "40 rem";
		document.querySelector("body").style.backgroundColor = "#ffcbcb";
		if (score > highscore) {
			highscore = score;
			document.querySelector(".highscore").textContent = highscore;
		}
	} else if (guess !== secret) {
		if (score > 1) {
			display(guess > secret ? "Příliš velké číslo" : "Příliš nízké číslo");
			score--;
			document.querySelector(".score").textContent = score;
		} else {
			display("Prohráváš");
			document.querySelector(".score").textContent = 0;
		}
	}
});

document.querySelector(".btn").addEventListener("click", function () {
	score = 20;
	secret = Math.trunc(Math.random() * 20) + 1;
	display("Začni hádat");
	document.querySelector(".score").textContent = score;
	document.querySelector(".number").textContent = "?";
	document.querySelector(".number").style.width = "17 rem";
	document.querySelector(".guess").value = "";
	document.querySelector("body").style.backgroundColor = "#FFC0CB";
});
