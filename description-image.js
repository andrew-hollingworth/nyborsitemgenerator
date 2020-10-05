var enchant1 = this.getField("Enchantment 1").value.split('--')
var enchant2 = this.getField("Enchantment 2").value.split('--')
var enchant3 = this.getField("Enchantment 3").value.split('--')

if (enchant1[1] === enchant2[1]) {
  event.value = (enchant1[5] ? enchant1[5] : "") + '\n\n' + (enchant3[2] ? enchant3[2] : "")
} else if (enchant1[1] === enchant3[1]) {
  event.value = (enchant1[5] ? enchant1[5] : "") + '\n\n' + (enchant2[2] ? enchant2[2] : "")
} else if (enchant2[1] === enchant3[1]) {
  event.value = (enchant1[2] ? enchant1[2] : "") + '\n\n' + (enchant3[5] ? enchant3[5] : "")
} else {
  event.value = (enchant1[2] ? enchant1[2] : "") + '\n\n' + (enchant2[2] ? enchant2[2] : "") + '\n\n' + (enchant3[2] ? enchant3[2] : "")
}