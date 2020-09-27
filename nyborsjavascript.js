var subType = this.getField("ItemSubType");
var enchantmentType1 = this.getField("Enchantment 1");
var enchantmentType2 = this.getField("Enchantment 2");
var enchantmentType3 = this.getField("Enchantment 3");

var armorTypes = ["-Seletct Armor-", "Helmet", "Shield", "Breastplate", "Leather Armor", "Amulet"]
var armorEnchantment1 = ["-1st Enchantment-", ["Absorption", 0], "Adamantine", "Agathys", "Animation"]
var armorEnchantment2 = ["-2nd Enchantment-", ["Absorption", 0], "Adamantine", "Agathys", "Animation"]
var armorEnchantment3 = ["-3rd Enchantment-", ["Absorption", 0], "Adamantine", "Agathys", "Animation"]


var weaponTypes = ["-Select Weapon-", "Dagger", "Shortsword", "Longsword", "Great Axe"]

var weaponEnchantment1 = ["-1st Enchantment-", "Ally’s", "Ambushing", "Answering", "Antimagic", "Arcane", "Athlete’s"]
var weaponEnchantment2 = ["-2nd Enchantment-", "Ally’s", "Ambushing", "Answering", "Antimagic", "Arcane", "Athlete’s"]
var weaponEnchantment3 = ["-3rd Enchantment-", "Ally’s", "Ambushing", "Answering", "Antimagic", "Arcane", "Athlete’s"]

if (event.willCommit) {
  switch (event.value) {
    case "Armor":
      subType.setItems(armorTypes);
      enchantmentType1.setItems(armorEnchantment1);
      enchantmentType2.setItems(armorEnchantment2);
      enchantmentType3.setItems(armorEnchantment3);
      break;
    case "Weapon":
      subType.setItems(weaponTypes);
      enchantmentType1.setItems(weaponEnchantment1);
      enchantmentType2.setItems(weaponEnchantment2);
      enchantmentType3.setItems(weaponEnchantment3);
      break;
    default:
      subType.setItems(["-Item Subtype-"]);
      enchantmentType1.setItems("-1st Enchantment-")
      enchantmentType2.setItems("-2nd Enchantment-")
      enchantmentType3.setItems("-3rd Enchantment-")
      break;
  }

}