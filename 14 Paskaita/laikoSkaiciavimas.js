function skaiciuotiLaika(param1, param2) {
	let pradziosLaikas = new Date();
	let laikasMilisekundemis = 45 * 60 * 1000;
	let pabaigosLaikas = new Date();
	pabaigosLaikas.setTime(pradziosLaikas.getTime() + laikasMilisekundemis);

	let intervalas = setInterval(() => {
		let dabartinisLaikas = new Date();

		if (pabaigosLaikas.getTime() - dabartinisLaikas.getTime() < 0) {
			alert("Laikas pasibaige");
			clearInterval(intervalas);
		}

		let skirtumas = dabartinisLaikas.getTime() - pradziosLaikas.getTime();

		let laikasMinutemis =
			44 - Math.floor((skirtumas % (1000 * 60 * 60)) / (1000 * 60));
		let laikasSekundemis = 60 - Math.floor((skirtumas % (1000 * 60)) / 1000);

		document.getElementById("laikrodis").textContent =
			laikasMinutemis + ":" + laikasSekundemis;
	}, 1000);
	return "jsjsj";
}

document
	.getElementById("pradetiSkaiciuoti")
	.addEventListener("click", skaiciuotiLaika, { once: true });
