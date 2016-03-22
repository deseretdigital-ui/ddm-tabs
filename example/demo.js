'use strict';

function logActiveTab(tabId) {
  console.log('The tab ' + tabId + ' is now active!');
}

function secretFrogLog() {
  console.log('The frog in the bog sat on a log!');
}

ReactDOM.render(React.createElement(
  TabsResponsive,
  { onTabActive: logActiveTab, collapsibleSpeed: 1200 },
  React.createElement(
    Tab,
    { title: 'Frogs', id: 'funkyFrogs', onTabActive: secretFrogLog },
    React.createElement(
      'p',
      null,
      'Frogs are a diverse and largely carnivorous group of short-bodied, tailless amphibians composing the order Anura (Ancient Greek an-, without + oura, tail). The oldest fossil "proto-frog" appeared in the early Triassic of Madagascar, but molecular clock dating suggests their origins may extend further back to the Permian, 265 million years ago. Frogs are widely distributed, ranging from the tropics to subarctic regions, but the greatest concentration of species diversity is found in tropical rainforests. There are approximately 4,800 recorded species, accounting for over 85% of extant amphibian species. They are also one of the five most diverse vertebrate orders.'
    ),
    React.createElement(
      'p',
      null,
      'The body plan of an adult frog is generally characterized by a stout body, protruding eyes, cleft tongue, limbs folded underneath and the absence of a tail in adults. Besides living in fresh water and on dry land, the adults of some species are adapted for living underground or in trees. The skin of the frog is glandular, with secretions ranging from distasteful to toxic. Warty species of frog tend to be called toads but the distinction between frogs and toads is based on informal naming conventions concentrating on the warts rather than taxonomy or evolutionary history; some toads are more closely related to frogs than to other toads. Frogs\' skins vary in colour from well-camouflaged dappled brown, grey and green to vivid patterns of bright red or yellow and black to advertise toxicity and warn off predators.'
    ),
    React.createElement(
      'p',
      null,
      'Frogs typically lay their eggs in water. The eggs hatch into aquatic larvae called tadpoles that have tails and internal gills. They have highly specialized rasping mouth parts suitable for herbivorous, omnivorous or planktivorous diets. The life cycle is completed when they metamorphose into adults. A few species deposit eggs on land or bypass the tadpole stage. Adult frogs generally have a carnivorous diet consisting of small invertebrates, but omnivorous species exist and a few feed on fruit. Frogs are extremely efficient at converting what they eat into body mass, which makes them an important food source for predators. Frogs are a keystone group in the food web dynamics of many of the world\'s ecosystems. The skin is semi-permeable, making them susceptible to dehydration, so they either live in moist places or have special adaptations to deal with dry habitats. Frogs produce a wide range of vocalizations, particularly in their breeding season, and exhibit many different kinds of complex behaviours to attract mates, to fend off predators and to generally survive.'
    ),
    React.createElement(
      'p',
      null,
      'Frog populations have declined significantly since the 1950s. More than one third of species are considered to be threatened with extinction and over one hundred and twenty are believed to have become extinct since the 1980s.[1] The number of malformations among frogs is on the rise and an emerging fungal disease, chytridiomycosis, has spread around the world. Conservation biologists are working to understand the causes of these problems and to resolve them. Frogs are valued as food by humans and also have many cultural roles in literature, symbolism and religion.'
    ),
    React.createElement(TabDivider, null),
    React.createElement(
      'p',
      null,
      'The name frog derives from Old English frogga, abbreviated to frox, forsc, and frosc, probably deriving from Proto-Indo-European preu = "to jump".[2] About 88% of amphibian species are classified in the order Anura.[3] These include around 4,810 species in 33 families, of which the Leptodactylidae (1,100 spp.), Hylidae (800 spp.) and Ranidae (750 spp.) are the richest in species.[3]'
    )
  ),
  React.createElement(
    Tab,
    { title: 'Turtles', id: 'funkyTurtles' },
    React.createElement(
      'p',
      null,
      'Turtles are reptiles of the order Chelonii[2] or Testudines characterised by a special bony or cartilaginous shell developed from their ribs and acting as a shield.[3] Turtle may refer to the chelonian order as a whole (American English) or to fresh-water and sea-dwelling chelonians (British English).[4]'
    ),
    React.createElement(
      'p',
      null,
      'The order Chelonii or Testudines includes both extant (living) and extinct species. The earliest known turtles date from 220 million years ago,[5] making turtles one of the oldest reptile groups and a more ancient group than lizards, snakes or crocodiles. Of the 327 known species alive today, some are highly endangered.[6][7]'
    ),
    React.createElement(
      'p',
      null,
      'Turtles are ectotherms—their internal temperature varies according to the ambient environment, commonly called cold-blooded. However, because of their high metabolic rate, leatherback sea turtles have a body temperature that is noticeably higher than that of the surrounding water.'
    ),
    React.createElement(
      'p',
      null,
      'Turtles are classified as amniotes, along with other reptiles, birds, and mammals. Like other amniotes, turtles breathe air and do not lay eggs underwater, although many species live in or around water.'
    )
  ),
  React.createElement(
    Tab,
    { title: 'Salamander', id: 'funkySalamander', active: true },
    React.createElement(
      'p',
      null,
      'Salamanders are any of the approximately 655 extant and all the extinct species of amphibians within the order Caudata. The present-day species are often grouped together under the term Urodela. They are typically characterized by a superficially lizard-like appearance, with slender bodies, blunt snouts, short limbs projecting at right angles to the body, and the presence of a tail in both larva and adult. Salamanders are almost entirely restricted to the northern hemisphere and are found in the Holarctic ecozone with a few species present in the Neotropical zone.'
    ),
    React.createElement(
      'p',
      null,
      'Salamanders never have more than four toes on their front legs and five on their rear legs, but some species have fewer digits and others lack hind limbs. Their permeable skin usually makes them reliant on habitats in or near water or other cool, damp places. Some salamander species are fully aquatic throughout their life, some take to the water intermittently, and others are entirely terrestrial as adults. Unique among vertebrates, they are capable of regenerating lost limbs, as well as other damaged parts of the body. Members of the Salamandridae family are mostly known as newts and lack the costal grooves along the sides of their bodies typical of other groups. The skin of some species contains the powerful poison tetrodotoxin and these salamanders tend to be slow-moving and have bright warning coloration to advertise their toxicity. Salamanders typically lay eggs in water and have aquatic larvae but there is great variation in the life cycle. In some species and in some harsh environments, salamanders reproduce while still in the larval state.'
    ),
    React.createElement(
      'p',
      null,
      'In literature and legend, the salamander is associated with fire, being supposedly unharmed by the flames, while clothes made from its skins or \'wool\' were believed to be incombustible. More plausibly, salamanders were said to be intensely poisonous. Despite this, salamander brandy, a drink prepared by dunking live salamanders in fermenting fruit juices, is reputed to have hallucinogenic and aphrodisiac properties. The salamander\'s ability to regenerate lost body parts is being investigated and research is ongoing into any applications this may have for human medicine.'
    )
  )
), document.getElementById('tabCollapsibleExample'));

ReactDOM.render(React.createElement(
  Tabs,
  null,
  React.createElement(
    Tab,
    { title: 'Frogs', id: 'frogs' },
    React.createElement(
      'p',
      null,
      'Frogs are a diverse and largely carnivorous group of short-bodied, tailless amphibians composing the order Anura (Ancient Greek an-, without + oura, tail). The oldest fossil "proto-frog" appeared in the early Triassic of Madagascar, but molecular clock dating suggests their origins may extend further back to the Permian, 265 million years ago. Frogs are widely distributed, ranging from the tropics to subarctic regions, but the greatest concentration of species diversity is found in tropical rainforests. There are approximately 4,800 recorded species, accounting for over 85% of extant amphibian species. They are also one of the five most diverse vertebrate orders.'
    ),
    React.createElement(
      'p',
      null,
      'The body plan of an adult frog is generally characterized by a stout body, protruding eyes, cleft tongue, limbs folded underneath and the absence of a tail in adults. Besides living in fresh water and on dry land, the adults of some species are adapted for living underground or in trees. The skin of the frog is glandular, with secretions ranging from distasteful to toxic. Warty species of frog tend to be called toads but the distinction between frogs and toads is based on informal naming conventions concentrating on the warts rather than taxonomy or evolutionary history; some toads are more closely related to frogs than to other toads. Frogs\' skins vary in colour from well-camouflaged dappled brown, grey and green to vivid patterns of bright red or yellow and black to advertise toxicity and warn off predators.'
    ),
    React.createElement(
      'p',
      null,
      'Frogs typically lay their eggs in water. The eggs hatch into aquatic larvae called tadpoles that have tails and internal gills. They have highly specialized rasping mouth parts suitable for herbivorous, omnivorous or planktivorous diets. The life cycle is completed when they metamorphose into adults. A few species deposit eggs on land or bypass the tadpole stage. Adult frogs generally have a carnivorous diet consisting of small invertebrates, but omnivorous species exist and a few feed on fruit. Frogs are extremely efficient at converting what they eat into body mass, which makes them an important food source for predators. Frogs are a keystone group in the food web dynamics of many of the world\'s ecosystems. The skin is semi-permeable, making them susceptible to dehydration, so they either live in moist places or have special adaptations to deal with dry habitats. Frogs produce a wide range of vocalizations, particularly in their breeding season, and exhibit many different kinds of complex behaviours to attract mates, to fend off predators and to generally survive.'
    ),
    React.createElement(
      'p',
      null,
      'Frog populations have declined significantly since the 1950s. More than one third of species are considered to be threatened with extinction and over one hundred and twenty are believed to have become extinct since the 1980s.[1] The number of malformations among frogs is on the rise and an emerging fungal disease, chytridiomycosis, has spread around the world. Conservation biologists are working to understand the causes of these problems and to resolve them. Frogs are valued as food by humans and also have many cultural roles in literature, symbolism and religion.'
    ),
    React.createElement(TabDivider, null),
    React.createElement(
      'p',
      null,
      'The name frog derives from Old English frogga, abbreviated to frox, forsc, and frosc, probably deriving from Proto-Indo-European preu = "to jump".[2] About 88% of amphibian species are classified in the order Anura.[3] These include around 4,810 species in 33 families, of which the Leptodactylidae (1,100 spp.), Hylidae (800 spp.) and Ranidae (750 spp.) are the richest in species.[3]'
    )
  ),
  React.createElement(
    Tab,
    { title: 'Turtles', id: 'turtles' },
    React.createElement(
      'p',
      null,
      'Turtles are reptiles of the order Chelonii[2] or Testudines characterised by a special bony or cartilaginous shell developed from their ribs and acting as a shield.[3] Turtle may refer to the chelonian order as a whole (American English) or to fresh-water and sea-dwelling chelonians (British English).[4]'
    ),
    React.createElement(
      'p',
      null,
      'The order Chelonii or Testudines includes both extant (living) and extinct species. The earliest known turtles date from 220 million years ago,[5] making turtles one of the oldest reptile groups and a more ancient group than lizards, snakes or crocodiles. Of the 327 known species alive today, some are highly endangered.[6][7]'
    ),
    React.createElement(
      'p',
      null,
      'Turtles are ectotherms—their internal temperature varies according to the ambient environment, commonly called cold-blooded. However, because of their high metabolic rate, leatherback sea turtles have a body temperature that is noticeably higher than that of the surrounding water.'
    ),
    React.createElement(
      'p',
      null,
      'Turtles are classified as amniotes, along with other reptiles, birds, and mammals. Like other amniotes, turtles breathe air and do not lay eggs underwater, although many species live in or around water.'
    )
  ),
  React.createElement(
    Tab,
    { title: 'Salamander', id: 'salamander', active: true },
    React.createElement(
      'p',
      null,
      'Salamanders are any of the approximately 655 extant and all the extinct species of amphibians within the order Caudata. The present-day species are often grouped together under the term Urodela. They are typically characterized by a superficially lizard-like appearance, with slender bodies, blunt snouts, short limbs projecting at right angles to the body, and the presence of a tail in both larva and adult. Salamanders are almost entirely restricted to the northern hemisphere and are found in the Holarctic ecozone with a few species present in the Neotropical zone.'
    ),
    React.createElement(
      'p',
      null,
      'Salamanders never have more than four toes on their front legs and five on their rear legs, but some species have fewer digits and others lack hind limbs. Their permeable skin usually makes them reliant on habitats in or near water or other cool, damp places. Some salamander species are fully aquatic throughout their life, some take to the water intermittently, and others are entirely terrestrial as adults. Unique among vertebrates, they are capable of regenerating lost limbs, as well as other damaged parts of the body. Members of the Salamandridae family are mostly known as newts and lack the costal grooves along the sides of their bodies typical of other groups. The skin of some species contains the powerful poison tetrodotoxin and these salamanders tend to be slow-moving and have bright warning coloration to advertise their toxicity. Salamanders typically lay eggs in water and have aquatic larvae but there is great variation in the life cycle. In some species and in some harsh environments, salamanders reproduce while still in the larval state.'
    ),
    React.createElement(
      'p',
      null,
      'In literature and legend, the salamander is associated with fire, being supposedly unharmed by the flames, while clothes made from its skins or \'wool\' were believed to be incombustible. More plausibly, salamanders were said to be intensely poisonous. Despite this, salamander brandy, a drink prepared by dunking live salamanders in fermenting fruit juices, is reputed to have hallucinogenic and aphrodisiac properties. The salamander\'s ability to regenerate lost body parts is being investigated and research is ongoing into any applications this may have for human medicine.'
    )
  )
), document.getElementById('tabExample'));

var ProgramaticallyChangedActiveTab = React.createClass({
  displayName: 'ProgramaticallyChangedActiveTab',

  getInitialState: function getInitialState() {
    return {
      activeId: 'salamander'
    };
  },

  _handleButton: function _handleButton(type, e) {
    e.preventDefault();
    this.setState({ activeId: type });
  },

  render: function render() {
    return React.createElement(
      'div',
      null,
      React.createElement(
        'button',
        { onClick: this._handleButton.bind(this, 'salamander') },
        'Salamander'
      ),
      React.createElement(
        'button',
        { onClick: this._handleButton.bind(this, 'frogs') },
        'Frogs'
      ),
      React.createElement(
        'button',
        { onClick: this._handleButton.bind(this, 'turtles') },
        'Turtles'
      ),
      React.createElement(
        Tabs,
        { activeId: this.state.activeId, onTabActive: logActiveTab },
        React.createElement(
          Tab,
          { title: 'Frogs', id: 'frogs', onTabActive: secretFrogLog },
          React.createElement(
            'p',
            null,
            'Frogs are a diverse and largely carnivorous group of short-bodied, tailless amphibians composing the order Anura (Ancient Greek an-, without + oura, tail). The oldest fossil "proto-frog" appeared in the early Triassic of Madagascar, but molecular clock dating suggests their origins may extend further back to the Permian, 265 million years ago. Frogs are widely distributed, ranging from the tropics to subarctic regions, but the greatest concentration of species diversity is found in tropical rainforests. There are approximately 4,800 recorded species, accounting for over 85% of extant amphibian species. They are also one of the five most diverse vertebrate orders.'
          ),
          React.createElement(
            'p',
            null,
            'The body plan of an adult frog is generally characterized by a stout body, protruding eyes, cleft tongue, limbs folded underneath and the absence of a tail in adults. Besides living in fresh water and on dry land, the adults of some species are adapted for living underground or in trees. The skin of the frog is glandular, with secretions ranging from distasteful to toxic. Warty species of frog tend to be called toads but the distinction between frogs and toads is based on informal naming conventions concentrating on the warts rather than taxonomy or evolutionary history; some toads are more closely related to frogs than to other toads. Frogs\' skins vary in colour from well-camouflaged dappled brown, grey and green to vivid patterns of bright red or yellow and black to advertise toxicity and warn off predators.'
          ),
          React.createElement(
            'p',
            null,
            'Frogs typically lay their eggs in water. The eggs hatch into aquatic larvae called tadpoles that have tails and internal gills. They have highly specialized rasping mouth parts suitable for herbivorous, omnivorous or planktivorous diets. The life cycle is completed when they metamorphose into adults. A few species deposit eggs on land or bypass the tadpole stage. Adult frogs generally have a carnivorous diet consisting of small invertebrates, but omnivorous species exist and a few feed on fruit. Frogs are extremely efficient at converting what they eat into body mass, which makes them an important food source for predators. Frogs are a keystone group in the food web dynamics of many of the world\'s ecosystems. The skin is semi-permeable, making them susceptible to dehydration, so they either live in moist places or have special adaptations to deal with dry habitats. Frogs produce a wide range of vocalizations, particularly in their breeding season, and exhibit many different kinds of complex behaviours to attract mates, to fend off predators and to generally survive.'
          ),
          React.createElement(
            'p',
            null,
            'Frog populations have declined significantly since the 1950s. More than one third of species are considered to be threatened with extinction and over one hundred and twenty are believed to have become extinct since the 1980s.[1] The number of malformations among frogs is on the rise and an emerging fungal disease, chytridiomycosis, has spread around the world. Conservation biologists are working to understand the causes of these problems and to resolve them. Frogs are valued as food by humans and also have many cultural roles in literature, symbolism and religion.'
          ),
          React.createElement(TabDivider, null),
          React.createElement(
            'p',
            null,
            'The name frog derives from Old English frogga, abbreviated to frox, forsc, and frosc, probably deriving from Proto-Indo-European preu = "to jump".[2] About 88% of amphibian species are classified in the order Anura.[3] These include around 4,810 species in 33 families, of which the Leptodactylidae (1,100 spp.), Hylidae (800 spp.) and Ranidae (750 spp.) are the richest in species.[3]'
          )
        ),
        React.createElement(
          Tab,
          { title: 'Turtles', id: 'turtles' },
          React.createElement(
            'p',
            null,
            'Turtles are reptiles of the order Chelonii[2] or Testudines characterised by a special bony or cartilaginous shell developed from their ribs and acting as a shield.[3] Turtle may refer to the chelonian order as a whole (American English) or to fresh-water and sea-dwelling chelonians (British English).[4]'
          ),
          React.createElement(
            'p',
            null,
            'The order Chelonii or Testudines includes both extant (living) and extinct species. The earliest known turtles date from 220 million years ago,[5] making turtles one of the oldest reptile groups and a more ancient group than lizards, snakes or crocodiles. Of the 327 known species alive today, some are highly endangered.[6][7]'
          ),
          React.createElement(
            'p',
            null,
            'Turtles are ectotherms—their internal temperature varies according to the ambient environment, commonly called cold-blooded. However, because of their high metabolic rate, leatherback sea turtles have a body temperature that is noticeably higher than that of the surrounding water.'
          ),
          React.createElement(
            'p',
            null,
            'Turtles are classified as amniotes, along with other reptiles, birds, and mammals. Like other amniotes, turtles breathe air and do not lay eggs underwater, although many species live in or around water.'
          )
        ),
        React.createElement(
          Tab,
          { title: 'Salamander', id: 'salamander' },
          React.createElement(
            'p',
            null,
            'Salamanders are any of the approximately 655 extant and all the extinct species of amphibians within the order Caudata. The present-day species are often grouped together under the term Urodela. They are typically characterized by a superficially lizard-like appearance, with slender bodies, blunt snouts, short limbs projecting at right angles to the body, and the presence of a tail in both larva and adult. Salamanders are almost entirely restricted to the northern hemisphere and are found in the Holarctic ecozone with a few species present in the Neotropical zone.'
          ),
          React.createElement(
            'p',
            null,
            'Salamanders never have more than four toes on their front legs and five on their rear legs, but some species have fewer digits and others lack hind limbs. Their permeable skin usually makes them reliant on habitats in or near water or other cool, damp places. Some salamander species are fully aquatic throughout their life, some take to the water intermittently, and others are entirely terrestrial as adults. Unique among vertebrates, they are capable of regenerating lost limbs, as well as other damaged parts of the body. Members of the Salamandridae family are mostly known as newts and lack the costal grooves along the sides of their bodies typical of other groups. The skin of some species contains the powerful poison tetrodotoxin and these salamanders tend to be slow-moving and have bright warning coloration to advertise their toxicity. Salamanders typically lay eggs in water and have aquatic larvae but there is great variation in the life cycle. In some species and in some harsh environments, salamanders reproduce while still in the larval state.'
          ),
          React.createElement(
            'p',
            null,
            'In literature and legend, the salamander is associated with fire, being supposedly unharmed by the flames, while clothes made from its skins or \'wool\' were believed to be incombustible. More plausibly, salamanders were said to be intensely poisonous. Despite this, salamander brandy, a drink prepared by dunking live salamanders in fermenting fruit juices, is reputed to have hallucinogenic and aphrodisiac properties. The salamander\'s ability to regenerate lost body parts is being investigated and research is ongoing into any applications this may have for human medicine.'
          )
        )
      )
    );
  }

});

ReactDOM.render(React.createElement(ProgramaticallyChangedActiveTab, null), document.getElementById('programaticTabExample'));