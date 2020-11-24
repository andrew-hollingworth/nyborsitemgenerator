let array = ["0--Absorption--When you take acid, cold, fire, lightning, or thunder damage while wearing this armor, you can choose to take no damage instead. Once used, this property can’t be used again until the next dawn.--1--yes",
  "1--Adamantine--While wearing this armor, any critical hit against you becomes a normal hit.--4--FALSE",
  "0--Agathys--While wearing this armor, you can use an action to cast armor of Agathys. Once used, this property can’t be used again until the next dawn.--2--yes",
  "0--Animation--While holding this magic shield, you can speak its command word as a bonus action to cause it to animate. The shield leaps into the air and hovers vertically in your space to protect you as if you were wielding it, leaving your hands free. The shield remains animated for 1 minute, until you use a bonus action to end this effect, or until you are incapacitated or die, at which point the shield falls to the ground or into your hand if you have one free. Once used, this property can’t be used again until the next dawn.--2--yes",
  "0--Antimagic--While wearing this armor, you can use an action to surround yourself with a 10-foot-radius invisible sphere of antimagic, as if you had cast the spell antimagic field. This effect lasts until the end of your next turn. Once used, this property can’t be used again until the next dawn.--2--yes"]

let formatted = []

let format = (input) => {
  input.forEach(e => {
    let split = e.split('--')
    let temp = [split[1], e]
    formatted.push(temp)
  })
}

format(array)
console.log("Copy everything inside (but not including), these brackets:", formatted)