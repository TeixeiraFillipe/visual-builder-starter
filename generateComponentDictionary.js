const fs = require('fs');
const path = require('path');

const componentsDir = path.join(process.cwd(), 'src/components/cms/component');
const dictionaryFilePath = path.join(componentsDir, 'index.ts');

function getAllTsxFiles(dir) {
    const files = fs.readdirSync(dir);
    let tsxFiles = [];

    files.forEach(file => {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            tsxFiles = tsxFiles.concat(getAllTsxFiles(fullPath));
        } else if (fullPath.endsWith('.tsx')) {
            tsxFiles.push(fullPath);
        }
    });

    return tsxFiles;
}

function extractComponentNameIfFragmentExists(filePath) {
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const hasGetDataFragment = fileContent.includes('getDataFragment');
    if (!hasGetDataFragment) return null;
    
    const match = fileContent.match(/export\s+default\s+(\w+)/);
    return match ? match[1] : null;
}

function generateComponentEntries() {
    const componentFiles = getAllTsxFiles(componentsDir);
    return componentFiles.map(file => {
        const componentName = extractComponentNameIfFragmentExists(file);
        if (!componentName) return null;

        const relativePath = `./${path.relative(componentsDir, file).replace(/\\/g, '/')}`.replace(/\/index\.tsx$/, '');
        return `    {\n        type: '${componentName}',\n        component: ${componentName}\n    },`;
    }).filter(Boolean);
}

function updateComponentDictionary() {
    const entries = generateComponentEntries();
    const importStatements = entries.map(entry => {
        const componentName = entry.match(/'(\w+)'/)[1];
        const relativePath = `./${componentName}`;
        return `import ${componentName} from "${relativePath}";`;
    }).join('\n');

    const dictionaryContent = `// Auto generated dictionary
import { ComponentTypeDictionary } from "@remkoj/optimizely-cms-react";
${importStatements}

export const componentDictionary : ComponentTypeDictionary = [
${entries.join('\n')}
]

export default componentDictionary
`;
    fs.writeFileSync(dictionaryFilePath, dictionaryContent, 'utf-8');
    console.log('Component dictionary updated successfully.');
}

// Execute the update
updateComponentDictionary();
