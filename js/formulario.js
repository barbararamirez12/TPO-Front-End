function Validar() { 
    var nombre = document.querySelector('input[type=text]'); 
    var email = document.querySelector('input[type=email]');
    var numeros = "^[0-9]+$";
   
    
    
    
        if(nombre.value.length == "" ) {
            alert('El campo nombre no puede quedar vacio');
            return false;
        } else if(email.value.length < 6 ) {
                alert('Ingrese una dirección de email válida');
                return false;
        }else if(comentario.value.length == "" ) {
                    alert('El campo nombre no puede quedar vacio');
                    return false;   
        }else if(telefono.value.length < 8 ) {
                alert('Ingrese un número de teléfono válido');
                return false;  
        }else if(telefono.value.match(numeros)) {
            return true;
            } else {
                alert("¡En el campo teléfono solo se aceptan números!");
                telefono.focus();
                return false;
        }
    
      }

