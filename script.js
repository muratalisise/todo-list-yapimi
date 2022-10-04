var input = document.getElementById("isim"); 
var button = document.getElementById("buton");
var list = document.getElementById("tasklistbox");
var deleteBtn = document.getElementById("hepsinisil");
let elemanSilmeButonu = document.querySelectorAll(".fa-times");


button.addEventListener("click", addItem);
deleteBtn.addEventListener("click", dellItem);

function addItem() {
    if (input.value === "") {
        alert("Lütfen geçerli bir değer giriniz");
    }else{
        var li = document.createElement("li");
        li.innerText=input.value;

        var i = document.createElement("i");
        i.classList="fas fa-times";
        li.appendChild(i);

        list.appendChild(li);

        input.value="";


        var silinecekler = document.querySelectorAll(".fa-times");
        for (let i = 0; i < silinecekler.length; i++) {
            silinecekler[i].addEventListener("click", deletesItem);
            
        }

    }
}


function deletesItem() {
    console.log("tıklandı");
    var secim = confirm("Silmek istediğinize eminmisiniz?");
    if (secim == true) {
        var silinecek = this.parentElement;
        silinecek.remove();
    }
}


function dellItem() {
    var sec = confirm("Kalıcı Olarak Hepsini Silmek İstediğinize Eminmisiniz");
    if (sec == true) {
        var sil = document.querySelectorAll("li");
        for (let i = 0; i < sil.length; i++) {
            sil[i].remove();
        }     
    }
}

