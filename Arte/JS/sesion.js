const form = document.getElementById("formi")
const nombrei = document.getElementById("nombrei")
const emaili = document.getElementById("emaili")
const passi = document.getElementById("pwdi")
const parrafo = document.getElementById("warningsi")
const img=document.getElementById("imagen")
var c=1;
imagnes();
form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ""
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
	let regnombre= /^[a-zA-ZÀ-ÿ\s]{6,40}$/ // Letras y espacios, pueden llevar acentos.
	let regpassword=/^.{8,12}$/ // 4 a 12 digitos.
    parrafo.innerHTML = ""
    
    if(!regnombre.test(nombrei.value)){
        warnings += `El nombre no pude tenere simbolos, numeros y debe ser mayor a 6<br>`
        entrar = true
    }
    if(!regexEmail.test(emaili.value)){
        warnings += `El email no es valido <br>`
        entrar = true
    }
    if(passi.value.length < 8){
        warnings += `la contraseña debe de ser mayor a 8 <br>`
        entrar = true
    }

    if(entrar){
        parrafo.innerHTML = warnings
    }else{
        location.href="../index.html";
  }
})
function imagnes(){
    setInterval(()=>{
        switch (c){
            case 1:
                img.src="/IMAGENES/Paginas/fondo2.jpeg"
                c+=1
                return c;
                break;
                case 2:
                img.src="/IMAGENES/Paginas/fondo3.jpeg"
                c+=1
                return c;
                break;
                case 3:
                img.src="/IMAGENES/Paginas/fondo4.jpeg"
                c+=1
                return c;
                break;
        }
if(c>3){
c=1
}
imagnes(c);
},4000);
}

function mandar(){
    location.href="/HTML/singup.html"
}
function mandarsi(){
    location.href="/HTML/Login.html"
}