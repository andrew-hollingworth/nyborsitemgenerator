var subType = this.getField("ItemSubType");
var enchantmentType1 = this.getField("Enchantment 1");
var enchantmentType2 = this.getField("Enchantment 2");
var enchantmentType3 = this.getField("Enchantment 3");
var itemName = this.getField("Name1");

// values, prefix/suffix, name, weapon/armor subtype, 
var armorTypes = ["-Seletct Armor-", "Helmet", "Shield", "Breastplate", "Leather Armor", "Amulet"]
var armorEnchantment1 = ["1st Enchantment", ["Absorption", "0-Absorption-0"], ["Adamantine", "1-Adamantine-1"], ["Agathys", "0-Agathys-0"], ["Animation", "0-Animation-2"]]
var armorEnchantment2 = ["2nd Enchantment", ["Absorption", "0-Absorption-0"], ["Adamantine", "1-Adamantine-1"], ["Agathys", "0-Agathys-0"], ["Animation", "0-Animation-2"]]
var armorEnchantment3 = ["3rd Enchantment", ["Absorption", "0-Absorption-0"], ["Adamantine", "1-Adamantine-1"], ["Agathys", "0-Agathys-0"], ["Animation", "0-Animation-2"]]


var weaponTypes = ["-Select Weapon-", "Dagger", "Shortsword", "Longsword", "Great Axe"]

var weaponEnchantment1 = ["1st Enchantment", ["Ally’s", "1-Ally's-0"], ["Ambushing", "1-Ambushing-0"], ["Answering", "1-Answering-0"], ["Antimagic", "0-Antimagic-0"], ["Arcane", "1-Arcane-0"], ["Athlete’s", "1-Athlete's-0"]]
var weaponEnchantment2 = ["2nd Enchantment", ["Ally’s", "1-Ally's"], ["Ambushing", "1-Ambushing"], ["Answering", "1-Answering"], ["Antimagic", "0-Antimagic"], ["Arcane", "1-Arcane"], ["Athlete’s", "1-Athlete's"]]
var weaponEnchantment3 = ["3rd Enchantment", ["Ally’s", "1-Ally's"], ["Ambushing", "1-Ambushing"], ["Answering", "1-Answering"], ["Antimagic", "0-Antimagic"], ["Arcane", "1-Arcane"], ["Athlete’s", "1-Athlete's"]]

if (event.willCommit) {
  switch (event.value) {
    case "Armor":
      subType.setItems(armorTypes);
      enchantmentType1.setItems(armorEnchantment1);
      enchantmentType2.setItems(armorEnchantment2);
      enchantmentType3.setItems(armorEnchantment3);
      itemName.value = " "
      break;
    case "Weapon":
      subType.setItems(weaponTypes);
      enchantmentType1.setItems(weaponEnchantment1);
      enchantmentType2.setItems(weaponEnchantment2);
      enchantmentType3.setItems(weaponEnchantment3);
      itemName.value = " "
      break;
    default:
      subType.setItems(["-Item Subtype-"]);
      enchantmentType1.setItems(["-1st Enchantment-"])
      enchantmentType2.setItems(["-2nd Enchantment-"])
      enchantmentType3.setItems(["-3rd Enchantment-"])
      itemName.value = " "
      break;
  }
}