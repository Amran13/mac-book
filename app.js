function updateCosst(id, value) {
    const Cost = document.getElementById(id);
    Cost.innerText = value;
}

function updateTotal() {
    const bestPrice = document.getElementById('best-price');
    const extraMemoryCost = document.getElementById('extra-memory-cost');
    const extraStorageCost = document.getElementById('extra-storage-cost');
    const deliveryCost = document.getElementById('delivery-cost');
    const totalPrice = document.getElementById('total-price');
    totalPrice.innerText = parseInt(bestPrice.innerText) + parseInt(extraMemoryCost.innerText) + parseInt(extraStorageCost.innerText) + parseInt(deliveryCost.innerText);
    const totalCenter = document.getElementById('total-center');
    document.getElementById('apply-btn').addEventListener('click', function(){
        const promoCode = document.getElementById('promo-code');
        if(promoCode.value == 'stevekaku'){
            totalCenter.innerText = parseInt(parseInt(totalPrice.innerText) - (parseInt(totalPrice.innerText) * 20)/100);
            promoCode.value = '';
        }
    })
    totalCenter.innerText = totalPrice.innerText;
}

document.getElementById('memory-8gb').addEventListener('click', function () {
    updateCosst('extra-memory-cost', 0);
    updateTotal();
})
document.getElementById('memory-16gb').addEventListener('click', function () {
    updateCosst('extra-memory-cost', 180);
    updateTotal();
})
document.getElementById('ssd-256gb').addEventListener('click', function () {
    updateCosst('extra-storage-cost', 0);
    updateTotal();
})
document.getElementById('ssd-512gb').addEventListener('click', function () {
    updateCosst('extra-storage-cost', 100);
    updateTotal();
})
document.getElementById('ssd-1tb').addEventListener('click', function () {
    updateCosst('extra-storage-cost', 180);
    updateTotal();
})
document.getElementById('normal-delivery').addEventListener('click', function () {
    updateCosst('delivery-cost', 0);
    updateTotal();
})
document.getElementById('fast-delivery').addEventListener('click', function () {
    updateCosst('delivery-cost', 20);
    updateTotal();
})




