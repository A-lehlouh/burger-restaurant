window.alert("Special discount code: Dr.sumaya                                                         that discounts 90%")
function calculateTotal() {
    
    var menuOptions = document.querySelectorAll(".menu-option");
    var discountCodeInput = document.getElementById("discount-code");
    var totalDisplay = document.getElementById("total");

    var total = 0;

    menuOptions.forEach(option => {
        if (option.checked) {
            total += parseFloat(option.value);
        }
    });
    
    var { value: discountCode } = discountCodeInput;
    
    if (discountCode === "Dr.sumaya") {
        total *= 0.1;
    }

    totalDisplay.innerHTML = '<h3>Total Amount:</h3> '+ total.toFixed(2);
}