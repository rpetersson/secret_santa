const randomWords = [
    'grime', 'moose', 'flint', 'snail', 'brush', 'prong', 'thump', 'blink', 'swirl', 'blaze',
    'grout', 'spire', 'skulk', 'pluck', 'glint', 'crust', 'blimp', 'frisk', 'skiff', 'plumb',
    'quirk', 'snore', 'glide', 'tramp', 'vexed', 'nymph', 'glaze', 'mirth', 'crumb', 'smirk',
    'brine', 'chive', 'grist', 'plaid', 'smear', 'sleet', 'gruel', 'quill', 'spook', 'shirk',
    'thrum', 'glint', 'snipe', 'truce', 'plush', 'fluke', 'quake', 'crisp', 'frown', 'clamp',
    'snub', 'blare', 'flume', 'bloke', 'wince', 'smite', 'tryst', 'grout', 'snarl', 'quack',
    'skimp', 'prawn', 'chomp', 'flint', 'smirk', 'clasp', 'prism', 'brash', 'skunk', 'crux',
    'crisp', 'plume', 'glaze', 'quirk', 'fluke', 'thrum', 'snip', 'glint', 'blimp', 'frisk',
    'chive', 'plaid', 'smear', 'glide', 'crust', 'snail', 'tramp', 'blaze', 'brush', 'prong',
    'thump', 'blink', 'swirl', 'vexed', 'nymph', 'grist', 'pluck', 'snore', 'skiff', 'quill'
  ];

function randomIndexFunction() {
    return Math.floor(Math.random() * randomWords.length);
}

export function randomWordsFunction() {
//Pick a random word from the randomWords array
const randomWord1 = randomWords[randomIndexFunction()];
const randomWord2 = randomWords[randomIndexFunction()];
const randomWord3 = randomWords[randomIndexFunction()];

return(randomWord1+randomWord2+randomWord3)
}
