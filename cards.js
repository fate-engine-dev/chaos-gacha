// ═══════════════════════════════════════════════
//  FATE ENGINE — CARD DATA  (cards.js)
//
//  Edit this file to add, remove or change cards.
//
//  RARITY VALUES: common / uncommon / rare / epic / legendary
//  STARS:         1=common  2=uncommon  3=rare  4=epic  5=legendary
// ═══════════════════════════════════════════════


// ── CHARACTER CARDS ─────────────────────────────

const CHARACTER_CARDS = [

  // — ABILITIES —
  { type:"Ability", icon:"⚡", name:"Static Pulse", rarity:"common", stars:1,
    desc:"You can release bursts of electrical energy from your palms. Enough to stun a man, or charge a dead phone." },
  { type:"Ability", icon:"🌊", name:"Tidecall", rarity:"uncommon", stars:2,
    desc:"Water within 30 meters bends to your will. Rivers slow, rain lifts upward, and tears freeze mid-cheek." },
  { type:"Ability", icon:"🔥", name:"Soulflame", rarity:"rare", stars:3,
    desc:"You burn — not with fire, but with purpose. Wounds close faster. Fear burns away. So do lies." },
  { type:"Ability", icon:"🌀", name:"Void Step", rarity:"epic", stars:4,
    desc:"Once per hour you may step sideways through space. No sound. No trace. Just the faint smell of absence." },
  { type:"Ability", icon:"☀️", name:"Sunborn", rarity:"legendary", stars:5,
    desc:"You were kissed by something ancient. Light bends around you. Darkness refuses to stay. Gods notice." },
  { type:"Ability", icon:"🧊", name:"Still Air", rarity:"common", stars:1,
    desc:"You can make a room go absolutely silent. Useful in libraries. Terrifying in arguments." },
  { type:"Ability", icon:"🌑", name:"Umbral Touch", rarity:"uncommon", stars:2,
    desc:"Whatever you hold in darkness becomes invisible. The darkness doesn't need to be total. Just enough." },
  { type:"Ability", icon:"🩸", name:"Blood Pact", rarity:"rare", stars:3,
    desc:"A wound made by your hand becomes a contract. The injured party cannot willingly harm you for seven days." },
  { type:"Ability", icon:"💀", name:"Necrospeak", rarity:"epic", stars:4,
    desc:"The recently dead can hear you. They rarely answer. When they do, they are always right." },
  { type:"Ability", icon:"⚗️", name:"The Transmutation", rarity:"legendary", stars:5,
    desc:"You may change one thing about reality per moon. Small things. The size of a lie. The color of grief. The weight of a name." },

  // — TRAITS —
  { type:"Trait", icon:"🧠", name:"Eidetic Memory", rarity:"uncommon", stars:2,
    desc:"You forget nothing. Every face, every insult, every map you glanced at in a dream. A blessing and a curse." },
  { type:"Trait", icon:"🦴", name:"Ironblood", rarity:"common", stars:1,
    desc:"Your bones are harder than they should be. Doctors are confused. You are not." },
  { type:"Trait", icon:"👁️", name:"The Third Sight", rarity:"rare", stars:3,
    desc:"You see intent before action. Not the future — just a half-second delay the world hasn't corrected yet." },
  { type:"Trait", icon:"🌒", name:"Shade-born", rarity:"epic", stars:4,
    desc:"Shadows do not fall on you correctly. They follow a different you — one that moves with more confidence." },
  { type:"Trait", icon:"🕯️", name:"Cursed Luck", rarity:"common", stars:1,
    desc:"Things go wrong for you, then go right, then go wrong in ways that save your life. You've stopped questioning it." },
  { type:"Trait", icon:"🌿", name:"Root Memory", rarity:"uncommon", stars:2,
    desc:"Plants remember you. They lean toward you. Old forests whisper your name to each other when you pass." },
  { type:"Trait", icon:"🐺", name:"Apex Instinct", rarity:"rare", stars:3,
    desc:"You know when something is about to attack. Not through logic. Through something older. You're never wrong." },
  { type:"Trait", icon:"⚖️", name:"Sovereign Will", rarity:"legendary", stars:5,
    desc:"You cannot be compelled. Not by magic, not by torture, not by love. Your choices are entirely your own. This is lonelier than it sounds." },

  // — ITEMS —
  { type:"Item", icon:"🗡️", name:"Forgetful Blade", rarity:"uncommon", stars:2,
    desc:"A knife that makes wounds forget to hurt. Useful in many ways. Dangerous in most of them." },
  { type:"Item", icon:"📿", name:"Waystone Necklace", rarity:"common", stars:1,
    desc:"Always points home. The definition of home is debated." },
  { type:"Item", icon:"📖", name:"The Unwritten Book", rarity:"rare", stars:3,
    desc:"A leather journal with 300 blank pages. Whatever you write in it by morning has happened by noon." },
  { type:"Item", icon:"🪞", name:"Mirror of Becoming", rarity:"legendary", stars:5,
    desc:"Shows you who you could have been. Some people can't put it down. Some smash it immediately. Both are correct." },
  { type:"Item", icon:"🧲", name:"The Binding Coin", rarity:"uncommon", stars:2,
    desc:"Flip it to make a deal. The coin ensures both parties keep their word. It has never been wrong. It has never been kind." },
  { type:"Item", icon:"⌛", name:"Borrowed Hour", rarity:"epic", stars:4,
    desc:"A pocket watch that runs backward. Break it to undo the last hour of your life. It only works once. You've been carrying it for years." },
  { type:"Item", icon:"🎭", name:"The Hollow Mask", rarity:"rare", stars:3,
    desc:"Wear it to become someone else. Not in appearance — in soul. People believe you are them completely. You start to, as well." },
  { type:"Item", icon:"🗺️", name:"Dead Man's Map", rarity:"common", stars:1,
    desc:"A map of a place that doesn't exist yet. The roads look familiar." },

  // — FAMILIARS —
  { type:"Familiar", icon:"🦊", name:"Ember Fox", rarity:"uncommon", stars:2,
    desc:"A small fox with a perpetually warm tail. Loyal, clever, and absolutely uninterested in your enemies." },
  { type:"Familiar", icon:"🦅", name:"The Pale Hawk", rarity:"rare", stars:3,
    desc:"Flies ahead. Returns with information it shouldn't have. Never explains how." },
  { type:"Familiar", icon:"🐉", name:"Ashling", rarity:"legendary", stars:5,
    desc:"A dragon the size of a cat who insists it is not a dragon. Do not argue. It will remember." },
  { type:"Familiar", icon:"🐈‍⬛", name:"The Nameless Cat", rarity:"common", stars:1,
    desc:"Follows you. You did not invite it. It has saved your life twice and you still don't know its name." },
  { type:"Familiar", icon:"🌙", name:"Moonshade Hound", rarity:"epic", stars:4,
    desc:"A wolf made of the space between stars. Only visible at night. Only loyal when it chooses to be." },
  { type:"Familiar", icon:"🦋", name:"The Oracle Moth", rarity:"uncommon", stars:2,
    desc:"Lands on the thing you need to pay attention to. Has never been wrong. Is deeply inconvenient about it." },

  // — TITLES —
  { type:"Title", icon:"👑", name:"The Undefeated", rarity:"epic", stars:4,
    desc:"You have not yet lost. Whether through skill, luck, or the quiet mercy of fate — you are still standing." },
  { type:"Title", icon:"🕊️", name:"Peacemaker", rarity:"common", stars:1,
    desc:"People calm down around you. Wars have ended because you walked into the room. You're tired." },
  { type:"Title", icon:"🔱", name:"Twice-Judged", rarity:"rare", stars:3,
    desc:"You have stood before a court of some kind — mortal, divine, or otherwise — and walked out both times." },
  { type:"Title", icon:"⚰️", name:"The One Who Returns", rarity:"legendary", stars:5,
    desc:"You have died. Officially. There is paperwork. You are inconveniently alive and no one knows what to do with you." },
  { type:"Title", icon:"🎯", name:"The Marked", rarity:"uncommon", stars:2,
    desc:"Something powerful chose you for a reason it has not shared. People can sense it. Most step aside." },
  { type:"Title", icon:"🧩", name:"Wildcard", rarity:"rare", stars:3,
    desc:"You don't fit any prophecy. You don't fit any category. This makes you the most dangerous thing in the room." },

  // — RACES —
  { type:"Race", icon:"🌑", name:"Umbral", rarity:"uncommon", stars:2,
    desc:"Born in places where light never reaches. Your eyes reflect nothing. You navigate by feeling the shape of darkness, which has more texture than most people imagine." },
  { type:"Race", icon:"🌿", name:"Verdathi", rarity:"common", stars:1,
    desc:"A people who grow slowly and live long. Their skin hardens with age. Their elders are indistinguishable from bark. They find this dignified." },
  { type:"Race", icon:"🔥", name:"Cindreborn", rarity:"rare", stars:3,
    desc:"Descended from those who survived a fire that should have killed everything. They run warm. They don't scar. They are immune to smoke and have complicated feelings about flames." },
  { type:"Race", icon:"🌊", name:"Tidewrought", rarity:"uncommon", stars:2,
    desc:"Coastal people shaped by generations of deep-water diving. Their lungs hold more than they should. They hear tides in their sleep. Landlocked cities make them anxious in ways they can't explain." },
  { type:"Race", icon:"⚡", name:"Stormkind", rarity:"rare", stars:3,
    desc:"A people born during storms, marked by static in their hair and a faint hum others can feel but not hear. They attract lightning. Not metaphorically — literally. They have learned to use this." },
  { type:"Race", icon:"👁️", name:"The Eyeless", rarity:"epic", stars:4,
    desc:"A race that lost their eyes generations ago and developed something else in their place. They perceive intent directly. They cannot be lied to. Conversations with them are deeply uncomfortable." },
  { type:"Race", icon:"✨", name:"Stardrift", rarity:"legendary", stars:5,
    desc:"No one knows where they came from. They arrived over centuries, always alone, always already speaking the local language. They age in reverse and have no word for home. Some believe they are not from this world. They neither confirm nor deny this." },

];


// ── WORLD CARDS ──────────────────────────────────

const WORLD_CARDS = [

  // — BIOMES —
  { type:"Biome", icon:"🌋", name:"The Ashfields", rarity:"uncommon", stars:2,
    desc:"A continent of hardened lava and ember-soil where heat-resistant crops grow in volcanic ash. The sky is always orange at noon." },
  { type:"Biome", icon:"🌊", name:"The Drowned Shelf", rarity:"common", stars:1,
    desc:"A shallow sea covering what was once a great plain. Ancient towers still rise above the waterline. Things live in them." },
  { type:"Biome", icon:"🌲", name:"The Mirrorwood", rarity:"rare", stars:3,
    desc:"A forest where every tree grows an exact reflection of the one opposite it. Navigation is impossible. Compasses spin. People return changed." },
  { type:"Biome", icon:"❄️", name:"The Still Tundra", rarity:"common", stars:1,
    desc:"A frozen expanse so silent that speech feels wrong. Hunters here communicate in hand signs passed down for 40 generations." },
  { type:"Biome", icon:"🌌", name:"The Veilsteppe", rarity:"epic", stars:4,
    desc:"A grassland that exists partially in another plane. At dusk, you can see through the ground to a sky below your feet. Travelers go mad or transcendent. Rarely in-between." },
  { type:"Biome", icon:"🏜️", name:"The Glass Desert", rarity:"rare", stars:3,
    desc:"Sand fused into glass by an ancient catastrophe. The surface reflects everything. At noon, the entire desert becomes a mirror and can be seen from space." },
  { type:"Biome", icon:"🌿", name:"The Rootdeep", rarity:"uncommon", stars:2,
    desc:"A subterranean ecosystem built around the roots of ancient trees. Entire civilizations have never seen sunlight. They worship the roots as gods." },
  { type:"Biome", icon:"🌀", name:"The Wound", rarity:"legendary", stars:5,
    desc:"A region where reality was torn and never healed. Physics works differently here. Time is nonlinear. Armies have entered and emerged centuries apart." },

  // — FACTIONS —
  { type:"Faction", icon:"⚜️", name:"The Pale Compact", rarity:"uncommon", stars:2,
    desc:"A merchants' alliance that secretly controls grain supply across six nations. They have never fought a war. They have ended eleven." },
  { type:"Faction", icon:"🔮", name:"The Unbound Circle", rarity:"rare", stars:3,
    desc:"Mages who rejected institutional magic and now practice in secret. Their spells are unpredictable. Their loyalty is to knowledge, not kingdoms." },
  { type:"Faction", icon:"⚔️", name:"The Ironless", rarity:"common", stars:1,
    desc:"A warrior clan that refuses to use metal weapons. They are considered primitive. They have never been conquered." },
  { type:"Faction", icon:"🕯️", name:"Keepers of the Last Name", rarity:"epic", stars:4,
    desc:"A secret order that memorizes the names of every person who has ever died without record. They believe unnamed dead become monsters. They may be right." },
  { type:"Faction", icon:"🌑", name:"The Hollow Court", rarity:"legendary", stars:5,
    desc:"A government that rules from a city no one can find. Their edicts arrive by raven. Their taxes are collected by agents who appear, take what is owed, and vanish. No one has ever refused twice." },
  { type:"Faction", icon:"🌿", name:"The Green Debt", rarity:"uncommon", stars:2,
    desc:"Druids who believe all civilization owes a debt to the land. They collect. Slowly. Patiently. With interest." },

  // — MATERIALS —
  { type:"Material", icon:"💎", name:"Voidglass", rarity:"epic", stars:4,
    desc:"A black transparent mineral that absorbs light. Objects placed inside it become invisible and weightless. The mineral itself is impossible to cut." },
  { type:"Material", icon:"🔩", name:"Ashiron", rarity:"common", stars:1,
    desc:"Metal smelted from volcanic rock. Cheaper than steel, twice as brittle, but it never rusts and holds an edge for decades." },
  { type:"Material", icon:"🌿", name:"Breathmoss", rarity:"uncommon", stars:2,
    desc:"A moss that produces oxygen in extreme quantities. Cities in sealed caverns are built around it. It dies if it hears music." },
  { type:"Material", icon:"⚡", name:"Stormthread", rarity:"rare", stars:3,
    desc:"Fiber harvested from the edge of lightning strikes. Clothing woven from it conducts electricity harmlessly around the body. Extremely difficult to produce. Extremely sought after." },
  { type:"Material", icon:"✨", name:"Mirrorstone", rarity:"legendary", stars:5,
    desc:"A mineral that reflects not light but fate. Look into it and see the most likely version of your death. Banned in most nations. Collected obsessively by others." },
  { type:"Material", icon:"🦴", name:"Deepbone", rarity:"uncommon", stars:2,
    desc:"Fossilized remains of creatures that lived before recorded history. Nearly indestructible. Something about it makes animals uneasy." },

  // — SPECIES —
  { type:"Species", icon:"👁️", name:"The Woven", rarity:"rare", stars:3,
    desc:"Humanoids born with threads of visible light connecting them to nearby people. The threads show emotion. They cannot lie. They are exhausting to be around." },
  { type:"Species", icon:"🌿", name:"Rootkin", rarity:"uncommon", stars:2,
    desc:"Plant-humanoid hybrids that photosynthesize. They sleep standing in sunlight. They do not eat. They are deeply patient and slightly smug about it." },
  { type:"Species", icon:"🦇", name:"The Echoveil", rarity:"common", stars:1,
    desc:"A blind species that navigates entirely by sound. Their cities are built for hearing, not sight. They find silence threatening and are never, ever quiet." },
  { type:"Species", icon:"🌊", name:"Tidecallers", rarity:"epic", stars:4,
    desc:"Aquatic humanoids who can survive on land for up to 40 years before needing to return to deep water. Many have forgotten they are not human. The sea has not forgotten them." },
  { type:"Species", icon:"⚰️", name:"The Twice-Born", rarity:"legendary", stars:5,
    desc:"A species that dies once in youth and resurrects changed. The second life is longer. The memories of death remain. They rule most of the oldest empires." },
  { type:"Species", icon:"🔮", name:"Glassborn", rarity:"rare", stars:3,
    desc:"Creatures with translucent skin through which their organs are clearly visible. They are considered deeply beautiful in some cultures, deeply unsettling in others. Both are right." },

  // — PAST —
  { type:"Past", icon:"🏛️", name:"The First Empire", rarity:"rare", stars:3,
    desc:"Ten thousand years ago a single civilisation ruled every continent. No one knows what ended it. Their roads still exist. Their locks still work. Their language is still spoken in dreams by people who have never learned it." },
  { type:"Past", icon:"🌑", name:"The Long Night", rarity:"uncommon", stars:2,
    desc:"For seventeen years the sun did not rise. No one remembers why. People who were born during it are slightly different — calmer in darkness, unnerved by noon. They rarely speak of it." },
  { type:"Past", icon:"⚔️", name:"The War of Correct Names", rarity:"uncommon", stars:2,
    desc:"A century-long conflict fought entirely over language. What things were called determined what they were allowed to be. It ended when both sides ran out of words they agreed on." },
  { type:"Past", icon:"💀", name:"The Culling Plague", rarity:"rare", stars:3,
    desc:"A disease that killed selectively — only the cruel, only the kind, only the old, accounts vary. The survivors built very different societies depending on which version killed theirs." },
  { type:"Past", icon:"✨", name:"The Age of Answered Prayers", rarity:"epic", stars:4,
    desc:"For one hundred years, every sincere prayer was answered. Exactly as asked. With no interpretation. The theological consequences took centuries to untangle and some argue they still haven't been." },
  { type:"Past", icon:"🌀", name:"The Unmaking", rarity:"legendary", stars:5,
    desc:"Something tried to end the world. It almost succeeded. The records of what it was were deliberately destroyed by the people who stopped it. The method they used to stop it was also destroyed. There are those who spend their lives trying to find out why." },

  // — EVENTS —
  { type:"Event", icon:"🌋", name:"The Awakening of Vel Morroth", rarity:"rare", stars:3,
    desc:"A dormant volcano at the centre of the known world has begun to breathe. Not erupt — breathe. Volcanologists measure the rhythm. Priests argue about what it means. Everyone agrees it means something." },
  { type:"Event", icon:"🌊", name:"The Retreating Sea", rarity:"uncommon", stars:2,
    desc:"The ocean on the eastern coast has pulled back forty miles in the past decade. The exposed seabed is rich, strange, and full of structures that should not exist. People are moving in. The sea is still retreating." },
  { type:"Event", icon:"👑", name:"The Succession of Three", rarity:"uncommon", stars:2,
    desc:"A throne is contested by three claimants, each with equal legal claim, each with a faction, each convinced the other two are wrong. The kingdom functions normally. The tension does not." },
  { type:"Event", icon:"💀", name:"The Quiet Deaths", rarity:"rare", stars:3,
    desc:"People are dying in their sleep across six cities, in sequence, one city at a time, moving south. No cause has been found. Each victim reported the same dream the night before. No one has written the dream down." },
  { type:"Event", icon:"🔮", name:"The Opening of the Sealed Archive", rarity:"epic", stars:4,
    desc:"A library that has been locked for three hundred years has opened on its own. The books inside are written in a language no one recognises, in handwriting that matches no known scholar, dated fifty years from now." },
  { type:"Event", icon:"✨", name:"The Return of the Stardrift", rarity:"legendary", stars:5,
    desc:"After two centuries of absence, members of the Stardrift race have begun appearing again, always alone, always in places of significance, never explaining where they have been. They seem younger than when they left. They ask a lot of questions about what has changed." },

];
