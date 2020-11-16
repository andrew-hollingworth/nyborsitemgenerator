var enchant1 = this.getField("Enchantment 1").value.split('--')
var enchant2 = this.getField("Enchantment 2").value.split('--')
var enchant3 = this.getField("Enchantment 3").value.split('--')

// event.value = (enchant1[2] ? "   " + enchant1[1] + " " + enchant1[2] + '\n\n' : "") + (enchant2[2] ? enchant2[2] + '\n\n' : "") + (enchant3[2] ? enchant3[2] : "")

// Now build up an array of Span objects
var spans = new Array();
spans[0] = new Object();
spans[0].text = (enchant1[2] ? "   " + enchant1[1] : "")
spans[0].fontWeight = 800;  // bold
spans[1] = new Object();
spans[1].text = (enchant1[2] ? "  " + enchant1[2] : "")
spans[1].fontWeight = 400;  // normal weight
spans[2] = new Object();
spans[2].text = (enchant2[2] ? "\n\n   " + enchant2[1] : "")
spans[2].fontWeight = 800;  // bold
spans[3] = new Object();
spans[3].text = (enchant2[2] ? "  " + enchant2[2] : "")
spans[3].fontWeight = 400;  // normal weight
spans[4] = new Object();
spans[4].text = (enchant3[2] ? "\n\n   " + enchant3[1] : "")
spans[4].fontWeight = 800;  // bold
spans[5] = new Object();
spans[5].text = (enchant3[2] ? "  " + enchant3[2] : "")
spans[5].fontWeight = 400;  // normal weight

var f = this.getField("Description WithImage"); // this is the field that we are modifying
f.richText = true;   // make sure we are dealing with a rich text field
f.richValue = spans;

if (event.value.length < 100) {
  event.target.textSize = 10
} else if (event.value.length >= 100 && f.value.length < 250) {
  event.target.textSize = 8
} else if (event.value.length >= 250) {
  event.target.textSize = 4
} else {
  event.target.textSize = 40
}
