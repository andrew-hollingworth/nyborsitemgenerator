var enchant1 = this.getField("Enchantment 1").value.split('--')[1];
var enchant2 = this.getField("Enchantment 2").value.split('--')[1];
var enchant3 = this.getField("Enchantment 3").value.split('--')[1];

if (event.value == enchant2 || event.value == enchant3) {
  app.alert("You cannot select duplicate enchantments")
  event.rc = false;
}