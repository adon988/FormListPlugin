/** Form List Created plugin v1.0.1
*
*   Copyright 2014 ASTRO corp . All Rights Reserved.
*
*   This plugin will according different search condiction to loading relative data.
*   Public varial as v1, v2, v3...., will be identified and translated in relative php file.
*
*   Basic used:
*     $("#form_list").form_list_data();
*
*   Custom used: (Some Element will defined. But you can modify it)
*     $("#form_list").form_list_data({
*       form_list:"#form_list_name",
*       refresh_time: ".refresh_time_name",
*       icon_btn_search: ".icon_btn_search_name"
*     })
*
**/

(function ( $ ) {
  $.fn.form_list_data = function(elem){
      //Default element name defined
      if(elem=='' || typeof(elem)=='undefined'){
        var elem = new Object({
           form_list:"#form_list",
           refresh_time: ".refresh_time",
           icon_btn_search: ".icon_btn_search"
        });
      }

      //Check the form has existence
      var tg = $(this);
      if(tg.length==0){
      	console.log('Please check the form_list id is isset');
      	return;
      }

      //Get Data: Submit input data and return data table form;
      tg.get_list = function(){
          var form_data = $(elem.form_list).  serialize();
          console.log(form_data);
          console.log(tg.find(elem.refresh_time).val());
      }

      //search buttom: binding a click   EventListener, will call get_list();
      tg.find(elem.icon_btn_search).on('click',  function(){
          tg.get_list();
      })

      //Set Refresh Timmer
      tg.refresh_fn = function(){
          var t = tg.find(elem.refresh_time);
          if(t.length>0){
          	tg.get_list()
            window.setTimeout(function(){tg.refresh_fn();},t.val());
          }
      }; tg.refresh_fn();

      
  }
}( jQuery ));


$("#form_list").form_list_data();
