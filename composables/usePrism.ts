import Prism from 'prismjs';
import 'prismjs/plugins/keep-markup/prism-keep-markup.js';
import 'prismjs/plugins/match-braces/prism-match-braces.js';
import 'prismjs/plugins/normalize-whitespace/prism-normalize-whitespace.js';
import 'prismjs/components/prism-csharp';
import '@/assets/css/prism.less';

Prism.languages.cs = Prism.languages.csharp;

const processBraces = (element: Element) => {
    let match = element.className.match(/brace-level-(\d+)/);
    if (match) {
        let oldNumber = parseInt(match[1], 10);
        let newNumber = oldNumber % 7 || 1;
        let newClass = `brace-level-${newNumber}`;

        element.classList.replace(match[0], newClass);
    }
}

const processTextBraces = (text: string) => {
    const regex = /class="([^"]*?)(brace-level-(\d+))([^"]*?)"/g;
    return text.replace(regex, (match, before, braceClass, level, after) => {
        const oldNumber = parseInt(level, 10);
        const newNumber = oldNumber % 7 || 1;
        const newClass = `brace-level-${newNumber}`;
        return `class="${before}${newClass}${after}"`;
    });
};

export const highlightAll = () => {
    Prism.highlightAll()
    document.querySelectorAll('[class*="brace-level-"]').forEach(processBraces);
}

export const highlightElement = (element: HTMLElement) => {
    Prism.highlightElement(element)
    console.log('highlighting element', element);
    element.querySelectorAll('[class*="brace-level-"]').forEach(processBraces);
}

const canHighlight = (lang: string) => {
    return lang === 'csharp' || lang === 'cs';
}

export const highlightText = (content: string) => {
    if (!content) return null;

    const codeBlockRegex = /```(\w+)\s*([\s\S]*?)```/g;

    const highlightedContent = content.replace(codeBlockRegex, (_, lang, code) => {
        if (!canHighlight(lang)) return `\`\`\`${lang}\n${code}\n\`\`\``;

        

        const grammar = Prism.languages[lang];
        if (!grammar) {
            return `\`\`\`${lang}\n${code}\n\`\`\``;
        }

        const highlighted = Prism.highlight(code, grammar, lang);

        console.log(highlighted);

        const processedBraces = processTextBraces(highlighted);

        return `<pre><code class="language-${lang}">${processedBraces}</code></pre>`;
    });

    return highlightedContent;
}

export const usePrism = () => {
    return {
        highlightElement,
        highlightText,
        highlightAll,
    }
};