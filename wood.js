// calculate total wood needed for make some furniture like chair table bad etc

function woodQuantity(chairQuantity, tableQuantity, bedQuantity) {
    const perChairWood = 3;
    const perTableWood = 10;
    const perBadWood = 50;

    const chairTotalWood = chairQuantity * perChairWood;
    const tableTotalWood = tableQuantity * perTableWood;
    const bedTotalWood = bedQuantity * perBadWood;

    const totalWood = chairTotalWood + tableTotalWood + bedTotalWood;

    return totalWood;

}

const wood = woodQuantity(2, 4, 6);
console.log('wood needed', wood);

//----------------------------------------
//practice problem
/**
 * shirt price --> 500
 * pant price --> 300
 * shoe price --> 900
 */