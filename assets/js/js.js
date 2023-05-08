// $(document).ready(function(){
//    $('[data-toggle="offcanvas"]').click(function(){
//        $("#navigation").toggleClass("hidden-xs");
//    });
// });

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

                url:'processamento/GeracaoEmails.php',
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
        window.location.reload();
       

    }, false)
}
});


$(document).ready(function() {
var pageRefresh = 2000; //5 s
    setInterval(function() {
        refresh();
    }, pageRefresh);
});

// Functions

function refresh() {
    $('#setTime').load(location.href + " #setTime");
    
}

$(document).ready(function(){
                $("#carteiras").change(function () {
                 var selectedVal = $("#carteiras option:selected").val();

                 if(selectedVal == "ITAVEPA"){
                        $('.layout').show();
                  }else{
                        $('.layout').hide();
                  }

                  if(selectedVal == "TELE"){
                     $('#txt').html('Layout:<br><b>NOME;CPF;E-MAIL</b>');
                     $('#theDiv').prepend('<img id="theImg" src="./assets/img/tele/tele.png" width=200 /><br>');
                  }
                   if(selectedVal == "BSS"){
                     $('#txt').html('Layout:<br><b>NOME;CPF;E-MAIL</b>');
                     $('#theDiv').prepend('<img id="theImg" src="./assets/img/bss/bss.png" width=200 /><br>');
                  }
                   if(selectedVal == "LWDD"){
                     $('#txt').html('Layout:<br><b>NOME;CPF;E-MAIL</b>');
                  }
                  //  if(selectedVal == "GAV"){
                  //    $('#txt').html('Layout:<br> <b>NOME;CPF;E-MAIL;VOLUMETRIA_FAIXA;SALDO_CARTEIRA;LAYOUT');
                  // }
                  if(selectedVal == "MAR ABERTO"){
                    
                     $('#txt').html('Layout:<br> <b>NOME;CPF;E-MAIL;VOLUMETRIA_FAIXA;SALDO_CARTEIRA');
                  }
                  if(selectedVal == "DIGITAL"){
                     $('#txt').html('Layout:<br><b>NOME;CPF;E-MAIL</b>');
                     $('#theDiv').prepend('<img id="theImg" src="./assets/img/digital/digital.png" width=200 /><br>');
                  }
                    if(selectedVal == "VIVO"){
                     $('#txt').html('Layout:<br><b>NOME;CPF;E-MAIL</b>');
                     $('#theDiv').prepend('<img id="theImg" src="./assets/img/vivo/vivo.png" width=200 /><br>');
                  }

                  if(selectedVal == "TIM"){

                     //$('#txt').html('Layout:<br><b>NOME;CPF;E-MAIL</b>');
                     $('.layout_tim').show();
                
                     
                  }
                
                 if(selectedVal == "GAV"){
                        $('.layout_gav').show();

                }else{
                        $('.layout_gav').hide();
                }
                 
                 if(selectedVal == "LINX"){
                        $('.layout_inadiplencia').show();

                }else{
                        $('.layout_inadiplencia').hide();
                }

        });
    });


        $(document).ready(function () {
                $(".layout_inadiplencia").change(function () {

                    var selectedVal = $(".layout_inadiplencia option:selected").val();
                    if(selectedVal == "Notificação Extrajudicial"){
                        
                        // $('#txt').html('Layout:<br><b>NOME;CPF;E-MAIL;DESCONTO1;PARCELA1;VALOR1;DESCONTO2;PARCELA2;VALOR2;VALOR_TOTAL;DATA_LIMITE</b>');
                        $('#txt').html('Layout:<br><b>NOME;CPF;E-MAIL</b>');
                        $('#theDiv').prepend('<img id="theImg" src="./assets/img/linx-notificacao_extra/extra.PNG" width=200 /><br>');
                    }
                    else if(selectedVal == "Condições de Negociação Linx"){
                         $('#txt').html('Layout:<br><b>NOME;CPF;E-MAIL;DESCONTO1;PARCELA1;VALOR1;DESCONTO2;PARCELA2;VALOR2;VALOR_TOTAL;DATA_LIMITE</b>');
                         
                         $('#theDiv').prepend('<img id="theImg" src="./assets/img/linx-negocia/negocia.PNG" width=200 /><br>');
                    }
                    else if(selectedVal == "FINAL CAMPANHA LIXN"){
                        $('#txt').html('Layout:<br><b>NOME;CPF;EMAIL;DATA_OFERTA;DESCONTO-A-VISTA%</b>');   
                        $('#theDiv').prepend('<img id="theImg" src="./assets/img/LINX-FINAL_CAMPANHA/final.PNG" width=200 /><br>');
                        
                    }
                    else {
                         $('#txt').html('');
                    }

                });

        

            });


            $(document).ready(function () {
                $(".layout_tim").change(function (){

                    var selectedVal2 = $(".layout_tim option:selected").val();

                    if(selectedVal2 === "TAMPLATE 1"){
                        $('#txt').html('Layout:<br><b>NOME;CPF;E-MAIL</b>');
                        $('#theDiv').prepend('<img id="theImg" src="./assets/img/tim/tim_comum.jpg" width=200 /><br>');
                    }

                  else if(selectedVal2 === "DESCONTO 20%"){
                        $('#txt').html('Layout:<br><b>NOME;CPF;E-MAIL;DATA_DESCONTO</b>');
                        $('#theDiv').prepend('<img id="theImg" src="./assets/img/tim/desconto20.PNG" width=200 /><br>');
                   }

                   else if(selectedVal2 === "DESCONTO 40%"){
                        $('#txt').html('Layout:<br><b>NOME;CPF;E-MAIL;DATA_DESCONTO</b>');
                        $('#theDiv').prepend('<img id="theImg" src="./assets/img/tim/desconto40.PNG" width=200 /><br>');
                   }
                   else if(selectedVal2 === "DESCONTO 60%"){
                        $('#txt').html('Layout:<br><b>NOME;CPF;E-MAIL;DATA_DESCONTO</b>');
                        $('#theDiv').prepend('<img id="theImg" src="./assets/img/tim/desconto60.PNG" width=200 /><br>');
                   }
                   else if(selectedVal2 === "DESCONTO 70%"){
                        $('#txt').html('Layout:<br><b>NOME;CPF;E-MAIL;DATA_DESCONTO</b>');
                        $('#theDiv').prepend('<img id="theImg" src="./assets/img/tim/desconto70.PNG" width=200 /><br>');
                   }
                   else if(selectedVal2 === "DESCONTO 80%"){
                    $('#txt').html('Layout:<br><b>NOME;CPF;E-MAIL;DATA_DESCONTO</b>');
                    $('#theDiv').prepend('<img id="theImg" src="./assets/img/tim/desconto80.PNG" width=200 /><br>');
                  }
                  else if(selectedVal2 === "DESCONTO 90%"){
                        $('#txt').html('Layout:<br><b>NOME;CPF;E-MAIL;DATA_DESCONTO</b>');
                        $('#theDiv').prepend('<img id="theImg" src="./assets/img/tim/desconto90.PNG" width=200 /><br>');
                 }                    

        });

     });



    $(document).ready(function () {
                $(".layout_gav").change(function (){

                  var selectedVal2 = $(".layout_gav option:selected").val();

                if(selectedVal2 === "GAV"){
                        $('#txt').html('Layout:<br> <b>NOME;CPF;E-MAIL;VOLUMETRIA_FAIXA;SALDO_CARTEIRA');
                        $('#theDiv').prepend('<img id="theImg" src="./assets/img/gav/gav.png" width=200 /><br>');
                  }else{
                    $('#txt').html('Layout:<br> <b>NOME;CPF;E-MAIL');
                    $('#theDiv').prepend('<img id="theImg" src="./assets/img/gav/gav.png" width=200 /><br>');
                    //GAV Open Sea
                  }

        });

     });
