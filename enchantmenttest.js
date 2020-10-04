var enchant1 = this.getField("Enchantment 1").value.split('--')
var enchant2 = this.getField("Enchantment 2").value.split('--')
var enchant3 = this.getField("Enchantment 3").value.split('--')

if ((enchant1[0] + enchant2[0] >= 1) && enchant1[0] != enchant2[0]) {
  switch (enchant1[0]) {
    case "0":
      event.value = enchant2[1] + " " + this.getField("ItemSubType").value + " of " + enchant1[1];
      break;
    case "1":
      event.value = enchant1[1] + " " + this.getField(" ItemSubType").value + " of " + enchant2[1];
      break;
  };
} else if (enchant3[0] >= 0 && (enchant1[0] === enchant2[0] && enchant1[0] != enchant3[0])) {
  switch (enchant1[0]) {
    case "0":
      event.value = enchant3[1] + " " + this.getField("ItemSubType").value + " of " + enchant1[1];
      break;
    case "1":
      event.value = enchant1[1] + " " + this.getField("ItemSubType").value + " of " + enchant3[1];
      break;
  };
} else if (0 <= enchant1[0] <= 1) {
  switch (this.getField("Enchantment 1").value.split('--')[0]) {
    case "0":
      event.value = this.getField("ItemSubType").value + " of " + this.getField("Enchantment 1").value.split('--')[1];
      break;
    case "1":
      event.value = this.getField("Enchantment 1").value.split('--')[1] + " " + this.getField("ItemSubType").value;
      break;
  };
}