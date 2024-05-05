let handlekurv = {};

function leggTilIVarekurv(vareNavn, pris) {
    if (handlekurv[vareNavn]) {
        handlekurv[vareNavn].antall++;
    } else {
        handlekurv[vareNavn] = {
            pris: pris,
            antall: 1
        };
    }
    oppdaterHandlekurv();
}

function oppdaterHandlekurv() {
    const handlekurvElementer = document.getElementById('handlekurv');
    const handlekurvTotal = document.getElementById('handlekurv-totalt');
    handlekurvElementer.innerHTML = '';
    let totaltBeløp = 0;
    for (const vareNavn in handlekurv) {
        const { pris, antall } = handlekurv[vareNavn];
        const vareTotal = pris * antall;
        totaltBeløp += vareTotal;
        const vareElement = document.createElement('div');
        vareElement.classList.add('handlevare');
        vareElement.textContent = `${antall} x ${vareNavn} (${pris.toFixed(2)} kr)`;
        handlekurvElementer.appendChild(vareElement);
    }
    handlekurvTotal.textContent = `Totalpris: ${totaltBeløp.toFixed(2)} kr`;
    document.getElementById('handlekurv').style.display = 'block';
}
