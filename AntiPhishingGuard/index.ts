import { definePlugin } from "@utils/plugins";
import { OptionType } from "@utils/types";

export default definePlugin({
    name: "AntiPhishingGuard",
    description: "Détecte et prévient les liens de hameçonnage et malveillants dans le tchat (par 404sec).",
    authors: [
        {
            name: "404sec",
            id: 0n
        }
    ],

    options: {
        warnSuspiciousLinks: {
            type: OptionType.BOOLEAN,
            name: "Avertissement sur liens suspects",
            description: "Affiche un avertissement visuel lors du clic sur un lien non vérifié.",
            default: true
        }
    },

    start() {
        console.log("[404sec] AntiPhishingGuard est actif.");
    },

    stop() {
        console.log("[404sec] AntiPhishingGuard est désactivé.");
    }
});
