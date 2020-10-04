var enchant1 = this.getField("Enchantment 1").value.split('--')
var enchant2 = this.getField("Enchantment 2").value.split('--')
var enchant3 = this.getField("Enchantment 3").value.split('--')

event.value = enchant1[2] + '\n\n' + enchant2[2] + '\n\n' + enchant3[2]