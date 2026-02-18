// machine id> hide all > show all
function showOnly(id){
    // console.log('Show only clicked');
    const addMoney = document.getElementById("add-money")
    const cashMoney = document.getElementById("cashout")

    // all item hidden
    addMoney.classList.add("hidden")
    cashMoney.classList.add("hidden")
    //id wala element ta ke show koro
    const selected = document.getElementById(id);
    selected.classList.remove("hidden")
}