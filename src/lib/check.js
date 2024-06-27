/**
 * @param {string} one
 * @param {string} two
 * @param {string} three
 * @param {string} four
 */
export function check(one, two, three, four) {
    const oneLow = one.toLowerCase();
    const twoLow = two.toLowerCase();
    const threeLow = three.toLowerCase();
    const fourLow = four.toLowerCase();
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    const letter = alphabet[Math.floor(Math.random() * 26)];

    let accepts = [];
    let contains = [];
    if (Boolean(Math.round(Math.random()))) {
        accepts.push(true);
    }
    if (Boolean(Math.round(Math.random()))) {
        accepts.push(true);
    }
    if (Boolean(Math.round(Math.random()))) {
        accepts.push(true)
    }
    if (Boolean(Math.round(Math.random()))) {
        accepts.push(true)
    }
    if (oneLow.includes(letter)) {
        contains.push(true);
    }
    if (twoLow.includes(letter)) {
        contains.push(true);
    }
    if (threeLow.includes(letter)) {
        contains.push(true);
    }
    if (fourLow.includes(letter)) {
        contains.push(true);
    }
    if (accepts.length > 3 || contains.length > 2) {
        return true
    } else {
        window.location.assign("/rickroll")
        return false
    }
}