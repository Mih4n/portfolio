import Prism from 'prismjs';
import 'prismjs/plugins/keep-markup/prism-keep-markup.js';
import 'prismjs/plugins/match-braces/prism-match-braces.js';
import 'prismjs/plugins/normalize-whitespace/prism-normalize-whitespace.js';
import 'prismjs/components/prism-csharp';
import '@/assets/css/prism.less';

const processBraces = (element: Element) => {
    let match = element.className.match(/brace-level-(\d+)/);
    if (match) {
        let oldNumber = parseInt(match[1], 10);
        let newNumber = oldNumber % 7 || 1;
        let newClass = `brace-level-${newNumber}`;

        element.classList.replace(match[0], newClass);
    }
}

export const highlightAll = () => {
    Prism.highlightAll(true)
    document.querySelectorAll('[class*="brace-level-"]').forEach(processBraces);
}

export const highlight = (element: Element) => {
    Prism.highlightElement(element, true)
    element.querySelectorAll('[class*="brace-level-"]').forEach(processBraces);
}

export default highlight;
