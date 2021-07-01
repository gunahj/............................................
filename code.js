onEvent("button1", "click", function( ) {
  setText("text_input2", getNumber("text_input1") * getNumber("text_input1"));
  setText("text_input3", 4 * getNumber("text_input1"));
});
