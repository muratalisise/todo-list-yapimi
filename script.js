var input = document.getElementById("isim"); 
var button = document.getElementById("buton");

var list = document.getElementById("tasklistbox");
var deleteBtn = document.getElementById("hepsinisil");
let elemanSilmeButonu = document.querySelectorAll(".fa-times");
let items; 


checkItem();
// localStorage.setItem('session', JSON.stringify(a));
// localStorage.setItem('session', JSON.stringify(a));


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

        SaveDataToLocalStorage(input.value);
        
        console.log(li);
        

        input.value="";

        var silinecekler = document.querySelectorAll(".fa-times");
        for (let i = 0; i < silinecekler.length; i++) {
            silinecekler[i].addEventListener("click", deletesItem);
            
        }

    }

  
}

function checkItem(){
    a = JSON.parse(localStorage.getItem('session')) || [];
    a.forEach(element => {
         var li = document.createElement("li");
            li.innerText=element;

            var i = document.createElement("i");
            i.classList="fas fa-times";
            li.appendChild(i);

            list.appendChild(li);

                  var silinecekler = document.querySelectorAll(".fa-times");
            for (let i = 0; i < silinecekler.length; i++) {
                silinecekler[i].addEventListener("click", deletesItem);
                
            }
    });

    
    // var li = document.createElement("li");
    //     li.innerText=input.value;

    //     var i = document.createElement("i");
    //     i.classList="fas fa-times";
    //     li.appendChild(i);

    //     list.appendChild(li);

    //     SaveDataToLocalStorage(input.value);
        
    //     console.log(li);
        

    //     input.value="";

    //     var silinecekler = document.querySelectorAll(".fa-times");
    //     for (let i = 0; i < silinecekler.length; i++) {
    //         silinecekler[i].addEventListener("click", deletesItem);
            
    //     }

}
function deletesItem() {
    var secim = confirm("Silmek istediğinize eminmisiniz?");
    if (secim == true) {
        var silinecek = this.parentElement;
        // console.log();
        RemoveDataToLocalStorage(this.parentElement.innerText);
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

function SaveDataToLocalStorage(data)
{
    var a = [];
    // Parse the serialized data back into an aray of objects
    a = JSON.parse(localStorage.getItem('session')) || [];
    // Push the new data (whether it be an object or anything else) onto the array
    a.push(data);
    // Alert the array value
    // alert(a);  // Should be something like [Object array]
    // Re-serialize the array back into a string and store it in localStorage
    localStorage.setItem('session', JSON.stringify(a));
}


function RemoveDataToLocalStorage(data)
{
    var a = [];
    // Parse the serialized data back into an aray of objects
    a = JSON.parse(localStorage.getItem('session')) || [];
    // Push the new data (whether it be an object or anything else) onto the array
    const index = a.indexOf(data);
    if (index > -1) { // only splice array when item is found
    a.splice(index, 1); // 2nd parameter means remove one item only
    }
    // Alert the array value
    // alert(a);  // Should be something like [Object array]
    // Re-serialize the array back into a string and store it in localStorage
    localStorage.setItem('session', JSON.stringify(a));
}

