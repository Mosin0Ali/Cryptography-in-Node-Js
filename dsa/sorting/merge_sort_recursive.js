/**
 * Divide the array into two halves sort each half and then merge the sorted halves back together.Repeat the process for each half(Recursively) 
 */
// const data = [2, 5, 3, 6, 8, 9, -12, 11];
const data = ["Elephant",
    "Sunshine",
    "Bicycle",
    "Mountain",
    "Rainbow",
    "Symphony",
    "Galaxy",
    "Whiskers",
    "Tornado",
    "Waterfall",
    "Moonlight",
    "Butterflies",
    "Stardust",
    "Adventure",
    "Cappuccino",
    "Fireworks",
    "Chocolate",
    "Serenade",
    "Oasis",
    "Pegasus",
    "Thunderstorm",
    "Harmony",
    "Carousel",
    "Treasure",
    "Midnight",
    "Pineapple",
    "Whisper",
    "Dragonfly",
    "Sunshine",
    "Meadows",
    "Serenity",
    "Lollipop",
    "Blossom",
    "Symphony",
    "Wanderlust",
    "Butterfly",
    "Misty",
    "Jubilee",
    "Sunrise",
    "Seashell",
    "Radiance",
    "Watermelon",
    "Adventure",
    "Giggles",
    "Twilight",
    "Euphoria",
    "Delight",
    "Wildflower",
    "Moonbeam",
    "Tranquility",
    "Raspberry",
    "Enchantment",
    "Dandelion",
    "Serenade",
    "Carousel",
    "Harmony",
    "Whimsical",
    "Laughter",
    "Misty",
    "Jubilee",
    "Bumblebee",
    "Serenity",
    "Delight",
    "Zephyr",
    "Wanderlust",
    "Ethereal",
    "Velvet",
    "Blossom",
    "Cascade",
    "Seashell",
    "Gossamer",
    "Enchanted",
    "Sparkle",
    "Dragonfly",
    "Whisper",
    "Symphony",
    "Reverie",
    "Luminary",
    "Radiant",
    "Moonlit",
    "Elixir",
    "Raindrop",
    "Whispering",
    "Twilight",
    "Melody",
    "Lullaby",
    "Secret",
    "Saffron",
    "Stardust",
    "Serendipity",
    "Moonstone",
    "Serenade",
    "Cascade",
    "Spellbound",
    "Jasmine",
    "Enchanted",
    "Harmonious",
    "Silhouette",
    "Ethereal",
    "Whimsical"];

function merge_sort(arr) {
    if (arr.length < 2) {
        return arr;
    }
    const middle = Math.floor(arr.length / 2);
    const leftArr = arr.slice(0, middle);
    const rightArr = arr.slice(middle);
    return merge(merge_sort(leftArr), merge_sort(rightArr));
}

function merge(leftArray, rightArray) {
    const sortedArr = [];
    while (leftArray.length && rightArray.length) {
        if (leftArray[0] <= rightArray[0]) {
            sortedArr.push(leftArray.shift());
        } else {
            sortedArr.push(rightArray.shift())
        }
    }
    return [...sortedArr, ...leftArray, ...rightArray];
}


console.log(merge_sort(data));

