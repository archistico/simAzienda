function arrotonda(importo) {
    return +(Math.round(importo + "e+2")  + "e-2");
}

function calcolaIRPEF(fatturato) {
    // due valori limMinimo, limMassimo, aliquota
    let aliquote = {
        scaglioni : [
            { limMinimo: 0, limMassimo: 15000, aliquota: 0.23 },
            { limMinimo: 15000, limMassimo: 28000, aliquota: 0.27 },
            { limMinimo: 28000, limMassimo: 55000, aliquota: 0.38 },
            { limMinimo: 55000, limMassimo: 75000, aliquota: 0.41 },
            { limMinimo: 75000, limMassimo: "inf", aliquota: 0.43 },
        ]
    }
    let tassa = 0    

    aliquote.scaglioni.forEach(scaglione => {
        // Due casi, o lo scaglione è completamente da conteggiare o no
        
        // Scaglione da conteggiare per intero
        if ((fatturato>scaglione.limMassimo) && scaglione.limMassimo!="inf")  {
            tassa+=(scaglione.limMassimo-scaglione.limMinimo)*scaglione.aliquota
        }
              
        // Scaglione da conteggiare solo per la parte compresa nello scaglione
        if ((fatturato>scaglione.limMinimo) && (fatturato<=scaglione.limMassimo) && scaglione.limMassimo!="inf")  {
            tassa+=(fatturato-scaglione.limMinimo)*scaglione.aliquota
        }

        // Se siamo nell'ultimo scaglione e fatturato > limite minimo
        if ((fatturato>scaglione.limMinimo) && scaglione.limMassimo=="inf")  {
            tassa+=(fatturato-scaglione.limMinimo)*scaglione.aliquota
        }

    });

    return arrotonda(tassa);
}

function calcolaIVA(fatturato, agevolata) {
    const IVA = 0.22;
    const IVA_AGEVOLATA = 0.10;
    let netto = 0;

    if(agevolata) {
        // IVA AGEVOLATA
        netto = fatturato / (1+IVA_AGEVOLATA);
        return arrotonda(fatturato-netto);
    } else {
        // IVA NON AGEVOLATA
        netto = fatturato / (1+IVA);
        return arrotonda(fatturato-netto);
    }

}

function tasse(fatturato, tipologiaTassa) {
    if(fatturato == 0) {
        return 0;
    }

    switch (tipologiaTassa) {
        case "IRPEF":
            return calcolaIRPEF(fatturato); break;
        case "IVA":
            return calcolaIVA(fatturato, false); break;
        case "IVA-AGEVOLATA":
            return calcolaIVA(fatturato, true); break; 
    }
}

module.exports = tasse;