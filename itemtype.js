var itemType = this.getField("ItemTypeDrop1").value;
var itemSubType = this.getField("ItemSubType").value;
var rarityDrop = this.getField("RarityDrop1").value;

var rarityEnchant1 = Number(this.getField("Enchantment 1").value.split('--')[3])
var rarityEnchant2 = Number(this.getField("Enchantment 2").value.split('--')[3])
var rarityEnchant3 = Number(this.getField("Enchantment 3").value.split('--')[3])

var rarityText = ""

var rarityValue = (isNaN(rarityEnchant1) ? 0 : rarityEnchant1) + (isNaN(rarityEnchant2) ? 0 : rarityEnchant2) + (isNaN(rarityEnchant3) ? 0 : rarityEnchant3)

switch (rarityDrop) {
  case "Auto":
    if (2 <= rarityValue && rarityValue < 4) { //Uncommon
      rarityText = "Uncommon"
    } else if (4 <= rarityValue && rarityValue < 8) { // Rare
      rarityText = "Rare"
    } else if (8 <= rarityValue && rarityValue < 16) { // Very Rare
      rarityText = "Very Rare"
    } else if (16 <= rarityValue && rarityValue < 32) { //Legendary
      rarityText = "Legendary"
    } else if (32 <= rarityValue) { //Artifact
      rarityText = "Artifact"
    } else { //Common
      rarityText = "Common"
    }
    break;
  case "Common":
    rarityText = "Common"
    break;
  case "Uncommon":
    rarityText = "Uncommon"
    break;
  case "Rare":
    rarityText = "Rare"
    break;
  case "Very Rare":
    rarityText = "Very Rare"
    break;
  case "Legendary":
    rarityText = "Legendary"
    break;
  case "Artifact":
    rarityText = "Artifact"
    break;
}

event.value = (itemType == "- Item Type -" ? "" : itemType + (itemSubType == "-Select Armor-" || itemSubType == "-Select Weapon-" ? "" : " (" + itemSubType + ")") + ", " + rarityText) 