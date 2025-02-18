// Definiere die Ersetzungen als Array von Objekten
const replacements = [
    {
        // Ersetzt "Gulf of America" (englisch)
        search: /Gulf of America/g,
        replacement: "Golf of Denmark"
    },
    {
        // Ersetzt "Golf von Amerika" (deutsch)
        search: /Golf von Amerika/g,
        replacement: "Golf von Dänemark"
    }
];

/**
 * Funktion, die den Text in einem Knoten anhand der Ersetzungsliste anpasst.
 * @param {Node} node - Der zu überprüfende DOM-Knoten
 */
function replaceTextInNode(node) {
    if (node.nodeType === Node.TEXT_NODE) {
        // Für jeden Eintrag in der Liste, führe das Ersetzen durch
        replacements.forEach(({ search, replacement }) => {
            node.nodeValue = node.nodeValue.replace(search, replacement);
        });
    } else {
        // Wenn kein Textknoten, dann rekursiv in alle Kindknoten gehen
        node.childNodes.forEach(child => replaceTextInNode(child));
    }
}

// Starte den Ersetzungsprozess am Body der Seite
replaceTextInNode(document.body);
