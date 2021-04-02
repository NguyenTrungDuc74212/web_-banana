var cong = document.querySelector('.inc');
var tru = document.querySelector('.dec');
var valueElement = document.querySelector('.value_qty').value;
var inputElement = document.querySelector('.value_qty');
cong.onclick = function()
{
    valueElement = parseInt(valueElement)+1;
    inputElement.value = valueElement;
}
tru.onclick = function()
{
    valueElement = parseInt(valueElement)-1;
    if (valueElement<0) {
        valueElement=0;
    }
    else {
        inputElement.value = valueElement;
    }
}