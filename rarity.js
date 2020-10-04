var rarityDrop = this.getField("RarityDrop1").value;

var rarityEnchant1 = Number(this.getField("Enchantment 1").value.split('--')[3])
var rarityEnchant2 = Number(this.getField("Enchantment 2").value.split('--')[3])
var rarityEnchant3 = Number(this.getField("Enchantment 3").value.split('--')[3])

var rarityValue = (isNaN(rarityEnchant1) ? 0 : rarityEnchant1) + (isNaN(rarityEnchant2) ? 0 : rarityEnchant2) + (isNaN(rarityEnchant3) ? 0 : rarityEnchant3)

// FORMAT
switch (event.value) {
  case "Auto":
    if (2 <= rarityValue && rarityValue < 4) { //Uncommon
      this.getField("TextTest").value = "uncommon" + rarityValue
      this.getField("Uncommon Name").display = display.visible
      this.getField("Rare Name").display = display.hidden
      this.getField("VeryRare Name").display = display.hidden
      this.getField("Legendary Name").display = display.hidden
      this.getField("Artifact Name").display = display.hidden
    } else if (4 <= rarityValue && rarityValue < 8) { // Rare
      this.getField("TextTest").value = "rare" + rarityValue
      this.getField("Uncommon Name").display = display.hidden
      this.getField("Rare Name").display = display.visible
      this.getField("VeryRare Name").display = display.hidden
      this.getField("Legendary Name").display = display.hidden
      this.getField("Artifact Name").display = display.hidden
    } else if (8 <= rarityValue && rarityValue < 16) { // Very Rare
      this.getField("TextTest").value = "verrare" + rarityValue
      this.getField("Uncommon Name").display = display.hidden
      this.getField("Rare Name").display = display.hidden
      this.getField("VeryRare Name").display = display.visible
      this.getField("Legendary Name").display = display.hidden
      this.getField("Artifact Name").display = display.hidden
    } else if (16 <= rarityValue && rarityValue < 32) { //Legendary
      this.getField("TextTest").value = "leg" + rarityValue
      this.getField("Uncommon Name").display = display.hidden
      this.getField("Rare Name").display = display.hidden
      this.getField("VeryRare Name").display = display.hidden
      this.getField("Legendary Name").display = display.visible
      this.getField("Artifact Name").display = display.hidden
    } else if (32 <= rarityValue) { //Artifact
      this.getField("TextTest").value = "artif" + rarityValue
      this.getField("Uncommon Name").display = display.hidden
      this.getField("Rare Name").display = display.hidden
      this.getField("VeryRare Name").display = display.hidden
      this.getField("Legendary Name").display = display.hidden
      this.getField("Artifact Name").display = display.visible
    } else { //Common
      this.getField("TextTest").value = "else" + rarityValue
      this.getField("Uncommon Name").display = display.hidden
      this.getField("Rare Name").display = display.hidden
      this.getField("VeryRare Name").display = display.hidden
      this.getField("Legendary Name").display = display.hidden
      this.getField("Artifact Name").display = display.hidden
    }
    break;
  case "Common":
    this.getField("Uncommon Name").display = display.hidden
    this.getField("Rare Name").display = display.hidden
    this.getField("VeryRare Name").display = display.hidden
    this.getField("Legendary Name").display = display.hidden
    this.getField("Artifact Name").display = display.hidden
    break;
  case "Uncommon":
    this.getField("Uncommon Name").display = display.visible
    this.getField("Rare Name").display = display.hidden
    this.getField("VeryRare Name").display = display.hidden
    this.getField("Legendary Name").display = display.hidden
    this.getField("Artifact Name").display = display.hidden
    break;
  case "Rare":
    this.getField("Uncommon Name").display = display.hidden
    this.getField("Rare Name").display = display.visible
    this.getField("VeryRare Name").display = display.hidden
    this.getField("Legendary Name").display = display.hidden
    this.getField("Artifact Name").display = display.hidden
    break;
  case "Very Rare":
    this.getField("Uncommon Name").display = display.hidden
    this.getField("Rare Name").display = display.hidden
    this.getField("VeryRare Name").display = display.visible
    this.getField("Legendary Name").display = display.hidden
    this.getField("Artifact Name").display = display.hidden
    break;
  case "Legendary":
    this.getField("Uncommon Name").display = display.hidden
    this.getField("Rare Name").display = display.hidden
    this.getField("VeryRare Name").display = display.hidden
    this.getField("Legendary Name").display = display.visible
    this.getField("Artifact Name").display = display.hidden
    break;
  case "Artifact":
    this.getField("Uncommon Name").display = display.hidden
    this.getField("Rare Name").display = display.hidden
    this.getField("VeryRare Name").display = display.hidden
    this.getField("Legendary Name").display = display.hidden
    this.getField("Artifact Name").display = display.visible
    break;
}
