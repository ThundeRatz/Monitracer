/**
 * @file trigonometry.js
 *
 * @brief Propotions for anguled components
 *
 * @author Henrique D`Amaral <henrique.matheus@thunderatz.org>
 *
 * @date 01/2022
 */

 export const PROPOTION = {
    width(screen_width){
        return (screen_width / 0.989); // screen_width / cos(8,5°)
    },
    top(screen_width){
        return (- screen_width * 0.148 / 2) // screen_width * sen(8,5°) / 2
    },
    height(screen_width){
        return (screen_width * 0.148) // screen_width * sen(8,5°)
    },
    left(screen_width){
        return (- screen_width * 0.148 * 0.14945) // screen_width * sin(8.5°) * tan(8.5°)
    }
}
