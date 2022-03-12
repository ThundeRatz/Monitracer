/**
 * @file trigonometry.js
 *
 * @brief Propotions for anguled components
 *
 * @author Henrique D`Amaral <henrique.matheus@thunderatz.org>
 *
 * @date 01/2022
 */
const angle = (8.5 * Math.PI) / 180; // 8,5° em radianos

export const PROPOTION = {
    width(screen_width){
        return (screen_width / Math.cos(angle)); // screen_width / cos(8,5°)
    },
    top(screen_width){
        return (-screen_width * Math.sin(angle) / 2); // screen_width * sen(8,5°) / 2
    },
    height(screen_width){
        return (screen_width * Math.sin(angle)); // screen_width * sen(8,5°)
    },
    left(screen_width){
        return (-screen_width * Math.sin(angle) * Math.tan(angle)); // screen_width * sin(8.5°) * tan(8.5°)
    }
};
