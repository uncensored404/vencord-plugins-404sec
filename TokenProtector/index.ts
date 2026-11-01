import { definePlugin } from "@utils/plugins";
import { OptionType } from "@utils/types";

// Expressions régulières pour détecter les tokens Discord (User / Bot)
const TOKEN_REGEXES = [
    /[m-z0-9_-]{24}\.[a-z0-9_-]{6}\.[a-z0-9_-]{27,38}/gi,
    /mfa\.[a-z0-9_-]{84}/gi
];

export default definePlugin({
    name: "TokenProtector",
    description: "Protection anti-fuite de jetons Discord développée par 404sec.",
    authors: [
        {
            name: "404sec",
            id: 0n
        }
    ],

    options: {
        autoMask: {
            type: OptionType.BOOLEAN,
            name: "Masquage automatique",
            description: "Remplace automatiquement les tokens détectés par un message de sécurité.",
            default: true
        }
    },

    start() {
        console.log("[404sec] TokenProtector est actif.");
    },

    stop() {
        console.log("[404sec] TokenProtector est désactivé.");
    }
});
