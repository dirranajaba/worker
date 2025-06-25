var navigation = responsiveNav("#nav", { // Selector: The ID of the wrapper
    animate: true, // Boolean: Use CSS3 transitions, true or false
    transition: 400, // Integer: Speed of the transition, in milliseconds
    label: "<i class='icon-reorder'></i>", // String: Label for the navigation toggle
    insert: "before", // String: Insert the toggle before or after the navigation
    customToggle: "", // Selector: Specify the ID of a custom toggle
    openPos: "relative", // String: Position of the opened nav, relative or static
    jsClass: "js", // String: 'JS enabled' class which is added to <html> el
    init: function(){}, // Function: Init callback
    open: function(){}, // Function: Open callback
    close: function(){} // Function: Close callback
});
jQuery('.contact-panel-toggle').click(function(){ jQuery('.contact-panel').slideToggle('fast'); });

jQuery(".fancybox").fancybox({
beforeShow : function() {
    var alt = this.element.find('img').attr('alt');

    this.inner.find('img').attr('alt', alt);

    this.title = alt;
},
helpers : {
    title : {
        type : 'inside'
    }
}
});