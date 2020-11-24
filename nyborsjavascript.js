var subType = this.getField("ItemSubType");
var enchantmentType1 = this.getField("Enchantment 1");
var enchantmentType2 = this.getField("Enchantment 2");
var enchantmentType3 = this.getField("Enchantment 3");
var itemName = this.getField("Name1");

// values: prefix/suffix, name, description, rarity, attunement
var armorTypes = ["-Select Armor-", "Helmet", "Shield", "Breastplate", "Leather Armor", "Amulet"]
var armorEnchantment = ["1st Enchantment",
  ["Absorption", "0--Absorption--When you take acid, cold, fire, lightning, or thunder damage while wearing this armor, you can choose to take no damage instead. Once used, this property can’t be used again until the next dawn.--1--yes"],
  ["Adamantine", "1--Adamantine--While wearing this armor, any critical hit against you becomes a normal hit.--4--false"],
  ["Agathys", "0--Agathys--While wearing this armor, you can use an action to cast armor of Agathys. Once used, this property can’t be used again until the next dawn.--2--yes"],
  ["Animation", "0--Animation--While holding this magic shield, you can speak its command word as a bonus action to cause it to animate. The shield leaps into the air and hovers vertically in your space to protect you as if you were wielding it, leaving your hands free. The shield remains animated for 1 minute, until you use a bonus action to end this effect, or until you are incapacitated or die, at which point the shield falls to the ground or into your hand if you have one free. Once used, this property can’t be used again until the next dawn.--2--yes"],
  ["Antimagic", "0--Antimagic--While wearing this armor, you can use an action to surround yourself with a 10-foot-radius invisible sphere of antimagic, as if you had cast the spell antimagic field. This effect lasts until the end of your next turn. Once used, this property can’t be used again until the next dawn.--2--cleric"]
]

var weaponTypes = ["-Select Weapon-", "Dagger", "Shortsword", "Longsword", "Great Axe"]

var weaponEnchantment = ["1st Enchantment", ["Ally’s", "1--Ally's--0"], ["Ambushing", "1--Ambushing--0"], ["Answering", "1--Answering-0"], ["Antimagic", "0--Antimagic--0"], ["Arcane", "1--Arcane--0"], ["Athlete’s", "1--Athlete's--0"]]

if (event.willCommit) {
  switch (event.value) {
    case "Armor":
      subType.setItems(armorTypes);
      enchantmentType1.setItems(armorEnchantment);
      enchantmentType2.setItems(armorEnchantment);
      enchantmentType3.setItems(armorEnchantment);
      itemName.value = " "
      break;
    case "Weapon":
      subType.setItems(weaponTypes);
      enchantmentType1.setItems(weaponEnchantment);
      enchantmentType2.setItems(weaponEnchantment);
      enchantmentType3.setItems(weaponEnchantment);
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