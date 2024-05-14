import emojiExtremeHappy from "./../assets/emotion1.png"
import emojiLittleHappy from "./../assets/emotion2.png"
import emojiNormal from "./../assets/emotion3.png"
import emojiLittleBad from "./../assets/emotion4.png"
import emojiExtremeBad from "./../assets/emotion5.png"

export function getEmoji (emojiId) {
    switch (emojiId) {
        case 1: return emojiExtremeHappy;
        case 2: return emojiLittleHappy;
        case 3: return emojiNormal;
        case 4: return emojiLittleBad;
        case 5: return emojiExtremeBad;
        default: return null;
    }
}
