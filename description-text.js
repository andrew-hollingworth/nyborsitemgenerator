var enchant1 = this.getField("Enchantment 1").value.split('--')
var enchant2 = this.getField("Enchantment 2").value.split('--')
var enchant3 = this.getField("Enchantment 3").value.split('--')

// Now build up an array of Span objects
var spans = new Array();
spans[0] = new Object();
spans[0].text = (enchant1[2] ? "   " + enchant1[1] + ". " : "")
spans[0].fontWeight = 800;  // bold
spans[0].fontStyle = "italic";
spans[1] = new Object();
spans[1].text = (enchant1[2] ? "  " + enchant1[2] : "")
spans[1].fontWeight = 400;  // normal weight
spans[1].fontStyle = "normal";
spans[2] = new Object();
spans[2].text = (enchant2[2] ? "\n   " + enchant2[1] + ". " : "")
spans[2].fontWeight = 800;  // bold
spans[2].fontStyle = "italic";
spans[3] = new Object();
spans[3].text = (enchant2[2] ? "  " + enchant2[2] : "")
spans[3].fontWeight = 400;  // normal weight
spans[3].fontStyle = "normal";
spans[4] = new Object();
spans[4].text = (enchant3[2] ? "\n   " + enchant3[1] + ". " : "")
spans[4].fontWeight = 800;  // bold
spans[4].fontStyle = "italic";
spans[5] = new Object();
spans[5].text = (enchant3[2] ? "  " + enchant3[2] : "")
spans[5].fontWeight = 400;  // normal weight
spans[5].fontStyle = "normal";

var descText = this.getField("DescriptionTextOnly"); // this is the field that we are modifying
descText.richText = true;   // make sure we are dealing with a rich text field
descText.richValue = spans;

for (var i = 0; i < spans.length; i++) {
  if (descText.value.length < 400) {
    spans[i].textSize = 10
  } else if (descText.value.length >= 400 && f.value.length < 625) {
    spans[i].textSize = 9
  } else if (descText.value.length >= 625 && f.value.length < 800) {
    spans[i].textSize = 8
  } else {
    spans[i].textSize = 7
  }
}
descText.richValue = spans;
