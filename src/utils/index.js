/* eslint-disable no-useless-concat */
/* eslint-disable no-fallthrough */
export const renderGradient = (colorId = 1) => {
    let gradient = "";

    switch(colorId) {
        // Add color gradients for each type
        case 1: // Bug
            gradient = `${"to right" + "," + "#92BC2C" + "," + "#AFC836"}`;
        
        case 2: // Dark
            gradient = `${"to right" + "," + "#0C69C8" + "," + "#6E7587"}`;

        case 3: // Dragon
            gradient = `${"to right" + "," + "#42275a" + "," + "#0180C7"}`;
            
        case 4: // Electric
            gradient = `${"to right" + "," + "#EDD53E" + "," + "#FBE273"}`;

        case 5: // Fairy
            gradient = `${"to right" + "," + "#EC8CE5" + "," + "#F3A7E7"}`;
        
        case 6: // Fight
            gradient = `${"to right" + "," + "#CE4265" + "," + "#E74347"}`;

        case 7: // Fire
            gradient = `${"to right" + "," + "#FB9B51" + "," + "#FBAE46"}`;
        
        case 8: // Flying
            gradient = `${"to right" + "," + "#90A7DA" + "," + "#A6C2F2"}`;

        case 9: // Ghost
            gradient = `${"to right" + "," + "#516AAC" + "," + "#7773D4"}`;
        
        case 10: // Grass
            gradient = `${"to right" + "," + "#5FBC51" + "," + "#5AC178"}`;

        case 11: // Ground
             gradient = `${"to right" + "," + "#DC7545" + "," + "#D29463"}`;
            
        case 12: // Ice
            gradient = `${"to right" + "," + "#70CCBD" + "," + "#8CDDD4"}`;
    
        case 13: // Normal
            gradient = `${"to right" + "," + "#9298A4" + "," + "#A3A49E"}`;
                
        case 14: // Poison
            gradient = `${"to right" + "," + "#A864C7" + "," + "#C261D4"}`;
    
        case 15: // Psychic
            gradient = `${"to right" + "," + "#F66F71" + "," + "#FE9F92"}`;
            
        case 16: // Rock
            gradient = `${"to right" + "," + "#C5B489" + "," + "#D7CD90"}`;
    
        case 17: // Steel
            gradient = `${"to right" + "," + "#52869D" + "," + "#58A6AA"}`;
            
        case 18: // Water
            gradient = `${"to right" + "," + "#4A90DD" + "," + "#6CBDE4"}`;

        default:
            return gradient;
    }
}