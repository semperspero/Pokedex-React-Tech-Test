/* eslint-disable no-useless-concat */
/* eslint-disable no-fallthrough */
export const renderGradient = (colorId = 1) => {
    let gradient = ("to right" + "," + "#eee" + "," + "#333");

    switch(colorId) {
        // Add color gradients for each type
        case "bug": // Bug
            gradient = `${"to right" + "," + "#92BC2C" + "," + "#AFC836"}`;

        case "dragon": // Dragon
            gradient = `${"to right" + "," + "#42275a" + "," + "#0180C7"}`;
            
        case "electric": // Electric
            gradient = `${"to right" + "," + "#EDD53E" + "," + "#FBE273"}`;
        
        case "fight": // Fight
            gradient = `${"to right" + "," + "#CE4265" + "," + "#E74347"}`;

        case "fire": // Fire
            gradient = `${"to right" + "," + "#FB9B51" + "," + "#FBAE46"}`;
        
        case "flying": // Flying
            gradient = `${"to right" + "," + "#90A7DA" + "," + "#A6C2F2"}`;

        case "ghost": // Ghost
            gradient = `${"to right" + "," + "#516AAC" + "," + "#7773D4"}`;
        
        case "grass": // Grass
            gradient = `${"to right" + "," + "#5FBC51" + "," + "#5AC178"}`;

        case "ground": // Ground
             gradient = `${"to right" + "," + "#DC7545" + "," + "#D29463"}`;
            
        case "ice": // Ice
            gradient = `${"to right" + "," + "#70CCBD" + "," + "#8CDDD4"}`;
    
        case "normal": // Normal
            gradient = `${"to right" + "," + "#9298A4" + "," + "#A3A49E"}`;
                
        case "poison": // Poison
            gradient = `${"to right" + "," + "#A864C7" + "," + "#C261D4"}`;
    
        case "psychic": // Psychic
            gradient = `${"to right" + "," + "#F66F71" + "," + "#FE9F92"}`;
            
        case "rock": // Rock
            gradient = `${"to right" + "," + "#C5B489" + "," + "#D7CD90"}`;
            
        case "water": // Water
            gradient = `${"to right" + "," + "#4A90DD" + "," + "#6CBDE4"}`;

        default:
            return gradient;
    }
}