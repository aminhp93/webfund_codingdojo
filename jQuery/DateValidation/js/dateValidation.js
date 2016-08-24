$( function() {
    var dateFormat = "mm/dd/yy",
      from = $( "#from" )
        .datepicker({
          defaultDate: "+1w",
          changeMonth: true,
          numberOfMonths: 3
        })
        .on( "change", function() {
          to.datepicker( "option", "minDate", getDate( this ) );
        }),
      to = $( "#to" ).datepicker({
        defaultDate: "+1w",
        changeMonth: true,
        numberOfMonths: 3
      })
      .on( "change", function() {
        from.datepicker( "option", "maxDate", getDate( this ) );
      });
 
    function getDate( element ) {
      var date;
      try {
        date = $.datepicker.parseDate( dateFormat, element.value );
      } catch( error ) {
        date = null;
      }
 
      return date;
    }
  } );

$('document').ready(function(){
  $('#submit').click(function(){
    var name = $('#name').val();
    var from = $('#from').val();
    var to = $('#to').val();

    if ((name != "") && (from != "") && (to != "")){
        alert("Thanks " + name + " .Your Cruise leaves on " + from + " and returns on " + to);
      } else {
        $('#submit').css('background-color', 'red');
        // $('#name').after("<h4> Your name can't be blank</h4>");
        $('#warning').show();
      }
    $('#from', '#to', '#name').val("");
  });
});