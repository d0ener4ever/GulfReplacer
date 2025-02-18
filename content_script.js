// Define the replacement rules as an array of objects.
// Each object represents one replacement rule.
// To add new terms, insert a new object into the array following the same format.
const replacements = [
    {
        // This rule replaces the English phrase "Gulf of America"
        // with "Golf of Denmark".
        search: /Gulf of America/g,    // The regular expression to search for.
        replacement: "Golf of Denmark"  // The text to replace with.
    },
    {
        // This rule replaces the German phrase "Golf von Amerika"
        // with "Golf von Dänemark".
        search: /Golf von Amerika/g,    // The regular expression to search for.
        replacement: "Golf von Dänemark" // The text to replace with.
    }
    // Example of a new rule (uncomment and modify):
    // {
    //     // Replace "Old Phrase" with "New Phrase"
    //     search: /Old Phrase/g,       // The regular expression to search for.
    //     replacement: "New Phrase"      // The text to replace with.
    // }
];

/**
 * Function to recursively replace text in a DOM node based on the replacement rules.
 * @param {Node} node - The DOM node to process.
 *
 * Explanation:
 * - If the node is a text node, it goes through each replacement rule and applies it.
 * - If the node is not a text node (for example, a <div> or <p>), the function
 *   is called recursively on each of its child nodes.
 */
function replaceTextInNode(node) {
    // Check if the current node is a text node
    if (node.nodeType === Node.TEXT_NODE) {
        // Loop over each replacement rule in the array
        replacements.forEach(({ search, replacement }) => {
            // Replace the matched text in the node's value with the new text
            node.nodeValue = node.nodeValue.replace(search, replacement);
        });
    } else {
        // If the node is not a text node, process its child nodes recursively.
        node.childNodes.forEach(child => replaceTextInNode(child));
    }
}

// Start the replacement process at the body of the page.
// This will traverse the entire document body and apply the replacement rules.
replaceTextInNode(document.body);
