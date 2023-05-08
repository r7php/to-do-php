$(document).ready(function() {
    
let btn = document.getElementById('confirm-btn')

if ( !!btn ) {
    btn.addEventListener('click', function(e) {

        e.preventDefault();
        
        //$('#awesome-modal').modal('hide');

        var form = $('#form')[0];   
        var data = new FormData(form);                  
        
        var arq = $('#file').val();


        if(arq){

            $.ajax({

                url:'processamento/moverSFTP.php',
                cache: false,
                contentType: false,
                processData: false,
                data: data,                         
                type:'POST',
    
                beforeSend:function(){
                    $('#wait').show();
                },

                complete:function(){
                    $('#wait').hide();
                },

                success:function(e){    
                    alert(e);
                },

            });


        }
        else{
            alert("Escolha todas as opções");
        }
        
       

    }, false)
}
});




