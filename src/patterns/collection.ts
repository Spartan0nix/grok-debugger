import { TestGrokPattern1 } from './testGrokPattern1';
import { TestGrokPattern2 } from './testGrokPattern2';

export const map = new Map();

class GrokResolver {
    patternCollection: Map<string, string>;
    map: Array<{ pattern: string, expression: string, field: string, resolution: string }>;

    /**
     * Build the default pattern Map
     */
    constructor() {
        this.patternCollection = new Map();
        this.map = [];
        this.setMap(TestGrokPattern1);
        this.setMap(TestGrokPattern2);
    }

    setMap(collection: { name: string, grok: string }[]): void {
        collection.forEach(entrie => {
            this.patternCollection.set(entrie.name, entrie.grok);
        })
    }

    getMap(): Array<{ pattern: string, expression: string, field: string, resolution: string }> {
        return this.map;
    }

    /**
     * Main function
     * @param grok 
     * @param testString 
     */
    extract(grok: string, testString: string) {
        // Reset the map
        this.map = [];
        // Match each occurance of %{PATTERN:field}
        const extracted = grok.match(/%\{[A-Z0-9_]*:[0-9a-z_]*\}/g);

        extracted?.forEach(element => {
            // Remove the %{} and split the pattern and the field name
            const str = element.slice(2, -1).split(':');

            // If the field name is already used, tell the user
            if (this.map.find(pattern => pattern.field === str[1]) === null
                || this.map.find(pattern => pattern.field === str[1]) === undefined) {
                this.map.push({
                    pattern: str[0],
                    expression: "",
                    field: str[1],
                    resolution: ""
                });
                return;
            }
            throw `Champ déjà utilisé : ${str[1]}`;

        })

        this.resolvePattern();

        // const match = testString.match(pattern.expression);
        // if (match) {
        //     pattern.resolution = match[0];
        //     const regex = new RegExp(pattern.expression)
        //     testString = testString.replace(regex, "");
        // }
    }

    /**
     * Resolve each pattern in their corresponding regex : WORD -> \b\w+\b
     */
    resolvePattern() {
        this.map.forEach(pattern => {
            // Check if the pattern is a known pattern
            if (this.patternCollection.get(pattern.pattern)) {
                const expression = this.patternCollection.get(pattern.pattern);
                pattern.expression = expression as string;

                // Check if the pattern expression contain subpattern ; NUMBER -> (?:%{BASE10NUM})
                const match = pattern.expression.match(/%\{[0-9A-Z_-]*\}/g);
                if (match) {
                    // Foreach subpatterns
                    match.forEach(result => {
                        // Get the corresponding expression for the known Patterns
                        const expression = this.patternCollection.get(result.slice(2, -1));
                        if (expression) {
                            // Replace the subpattern with is corresponding regex
                            const regex = new RegExp(result);
                            pattern.expression = pattern.expression.replace(regex, expression);
                            return;
                        }
                        throw `Pattern inconnu : ${result.slice(2, -1)} présent dans l'expression : ${pattern.pattern} => ${pattern.expression}`;
                    })
                }
                return;
            }
            throw `Pattern inconnu : ${pattern.pattern}`;
        })
    }

    execute(testString: string) {
        this.map.forEach(pattern => {
            const match = testString.match(pattern.expression);
            if (match) {
                pattern.resolution = match[0];
                const regex = new RegExp(pattern.expression)
                testString = testString.replace(regex, "");
            }
        })
        console.log(this.map);
    }

    // resolveSubPattern() {
    //     this.map.forEach(pattern => {
    //         const match = pattern.expression.match(/%\{[0-9A-Z_-]*\}/g);
    //         if(match){
    //             match.forEach(result => {
    //                 const expression = this.patternCollection.get(result.slice(2,-1));
    //                 if(expression){
    //                     const regex = new RegExp(result);
    //                     pattern.expression = pattern.expression.replace(regex, expression);
    //                     return;
    //                 }
    //                 throw `Pattern inconnu : ${result.slice(2,-1)} présent dans l'expression : ${pattern.pattern} => ${pattern.expression}`;
    //             })
    //         }
    //     })
    // }
    // resolve(testString: string) {
    //     this.map.forEach(pattern => {
    //         const match = testString.match(pattern.expression);
    //         if(match){
    //             pattern.resolution = match[0];
    //             const regex = new RegExp(pattern.expression)
    //             testString = testString.replace(regex, "");

    //             console.log(testString);
    //         }
    //     })
    // }
    // convert() {
    //     this.map.forEach(element => {
    //         if(this.patternCollection.get(element.pattern)){
    //             const expression = this.patternCollection.get(element.pattern);
    //             element.expression = expression as string;
    //             return;
    //         }
    //         console.log(`Erreur sur la pattern : ${element.pattern}`);
    //     })
    // }
}

export const grokResolver = new GrokResolver();