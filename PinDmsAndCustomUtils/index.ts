import { definePlugin } from "@utils/plugins";
import { OptionType } from "@utils/types";

export default definePlugin({
    name: "PinDmsAndCustomUtils",
    description: "Gestion et organisation des MP / utilitaires d'interface par 404sec.",
    authors: [
        {
            name: "404sec",
            id: 0n
        }
    ],

    options: {
        enablePinDms: {
            type: OptionType.BOOLEAN,
            name: "Épingler les MP",
            description: "Permet d'épingler tes discussions privées en haut de la liste de contacts.",
            default: true
        },
        silentTyping: {
            type: OptionType.BOOLEAN,
            name: "Saisie silencieuse (Silent Typing)",
            description: "Empêche l'envoi de l'indicateur 'est en train d'écrire...'.",
            default: false
        }
    },

    start() {
        console.log("[404sec] PinDmsAndCustomUtils est actif.");
    },

    stop() {
        console.log("[404sec] PinDmsAndCustomUtils est désactivé.");
    }
});
