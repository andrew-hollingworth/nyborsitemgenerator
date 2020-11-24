var rarityDrop = this.getField("RarityDrop1").value;
var imageChoice = this.getField("ImageChoice").value;

var rarityEnchant1 = Number(this.getField("Enchantment 1").value.split('--')[3])
var rarityEnchant2 = Number(this.getField("Enchantment 2").value.split('--')[3])
var rarityEnchant3 = Number(this.getField("Enchantment 3").value.split('--')[3])

var rarityValue = (isNaN(rarityEnchant1) ? 0 : rarityEnchant1) + (isNaN(rarityEnchant2) ? 0 : rarityEnchant2) + (isNaN(rarityEnchant3) ? 0 : rarityEnchant3)

// FORMAT 
switch (event.value) {
  case "Auto":
    if (2 <= rarityValue && rarityValue < 4) { //Uncommon
      this.getField("Uncommon").display = display.visible
      this.getField("Rare").display = display.hidden
      this.getField("VeryRare").display = display.hidden
      this.getField("Legendary").display = display.hidden
      this.getField("Artifact").display = display.hidden
    } else if (4 <= rarityValue && rarityValue < 8) { // Rare
      this.getField("Uncommon").display = display.hidden
      this.getField("Rare").display = display.visible
      this.getField("VeryRare").display = display.hidden
      this.getField("Legendary").display = display.hidden
      this.getField("Artifact").display = display.hidden
    } else if (8 <= rarityValue && rarityValue < 16) { // Very Rare
      this.getField("Uncommon").display = display.hidden
      this.getField("Rare").display = display.hidden
      this.getField("VeryRare").display = display.visible
      this.getField("Legendary").display = display.hidden
      this.getField("Artifact").display = display.hidden
    } else if (16 <= rarityValue && rarityValue < 32) { //Legendary
      this.getField("Uncommon").display = display.hidden
      this.getField("Rare").display = display.hidden
      this.getField("VeryRare").display = display.hidden
      this.getField("Legendary").display = display.visible
      this.getField("Artifact").display = display.hidden
    } else if (32 <= rarityValue) { //Artifact
      this.getField("Uncommon").display = display.hidden
      this.getField("Rare").display = display.hidden
      this.getField("VeryRare").display = display.hidden
      this.getField("Legendary").display = display.hidden
      this.getField("Artifact").display = display.visible
    } else { //Common
      this.getField("Uncommon").display = display.hidden
      this.getField("Rare").display = display.hidden
      this.getField("VeryRare").display = display.hidden
      this.getField("Legendary").display = display.hidden
      this.getField("Artifact").display = display.hidden
    }
    break;
  case "– Rarity –":
    if (2 <= rarityValue && rarityValue < 4) { //Uncommon
      this.getField("Uncommon").display = display.visible
      this.getField("Rare").display = display.hidden
      this.getField("VeryRare").display = display.hidden
      this.getField("Legendary").display = display.hidden
      this.getField("Artifact").display = display.hidden
    } else if (4 <= rarityValue && rarityValue < 8) { // Rare
      this.getField("Uncommon").display = display.hidden
      this.getField("Rare").display = display.visible
      this.getField("VeryRare").display = display.hidden
      this.getField("Legendary").display = display.hidden
      this.getField("Artifact").display = display.hidden
    } else if (8 <= rarityValue && rarityValue < 16) { // Very Rare
      this.getField("Uncommon").display = display.hidden
      this.getField("Rare").display = display.hidden
      this.getField("VeryRare").display = display.visible
      this.getField("Legendary").display = display.hidden
      this.getField("Artifact").display = display.hidden
    } else if (16 <= rarityValue && rarityValue < 32) { //Legendary
      this.getField("Uncommon").display = display.hidden
      this.getField("Rare").display = display.hidden
      this.getField("VeryRare").display = display.hidden
      this.getField("Legendary").display = display.visible
      this.getField("Artifact").display = display.hidden
    } else if (32 <= rarityValue) { //Artifact
      this.getField("Uncommon").display = display.hidden
      this.getField("Rare").display = display.hidden
      this.getField("VeryRare").display = display.hidden
      this.getField("Legendary").display = display.hidden
      this.getField("Artifact").display = display.visible
    } else { //Common
      this.getField("Uncommon").display = display.hidden
      this.getField("Rare").display = display.hidden
      this.getField("VeryRare").display = display.hidden
      this.getField("Legendary").display = display.hidden
      this.getField("Artifact").display = display.hidden
    }
    break;
  case "Common":
    this.getField("Uncommon").display = display.hidden
    this.getField("Rare").display = display.hidden
    this.getField("VeryRare").display = display.hidden
    this.getField("Legendary").display = display.hidden
    this.getField("Artifact").display = display.hidden
    break;
  case "Uncommon":
    this.getField("Uncommon").display = display.visible
    this.getField("Rare").display = display.hidden
    this.getField("VeryRare").display = display.hidden
    this.getField("Legendary").display = display.hidden
    this.getField("Artifact").display = display.hidden
    break;
  case "Rare":
    this.getField("Uncommon").display = display.hidden
    this.getField("Rare").display = display.visible
    this.getField("VeryRare").display = display.hidden
    this.getField("Legendary").display = display.hidden
    this.getField("Artifact").display = display.hidden
    break;
  case "Very Rare":
    this.getField("Uncommon").display = display.hidden
    this.getField("Rare").display = display.hidden
    this.getField("VeryRare").display = display.visible
    this.getField("Legendary").display = display.hidden
    this.getField("Artifact").display = display.hidden
    break;
  case "Legendary":
    this.getField("Uncommon").display = display.hidden
    this.getField("Rare").display = display.hidden
    this.getField("VeryRare").display = display.hidden
    this.getField("Legendary").display = display.visible
    this.getField("Artifact").display = display.hidden
    break;
  case "Artifact":
    this.getField("Uncommon").display = display.hidden
    this.getField("Rare").display = display.hidden
    this.getField("VeryRare").display = display.hidden
    this.getField("Legendary").display = display.hidden
    this.getField("Artifact").display = display.visible
    break;
}