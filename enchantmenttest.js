event.value = this.getField("Enchantment 1");


switch (this.getField("Enchantment 1").value.split('-')[0]) {
  case "0":
    event.value = this.getField("ItemSubType").value + " of " + this.getField("Enchantment 1").value.split('-')[1];
    break;
  case "1":
    event.value = this.getField("Enchantment 1").value.split('-')[1] + " " + this.getField("ItemSubType").value;
    break;
  default:
    event.value = "";
    break;
};
