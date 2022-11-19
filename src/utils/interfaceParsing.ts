// interface TestInterface {
//     name: string;
//     values: number;
//     type: string;
//     testValue: number;
// }

interface MockedDataStructureType {
    name: string;
    entries: {
        key: string;
        type: string;
    }[];
}

const getInterfaceName = (testString: string): string => {
    const interfaceNameRegex = /(?<=interface\s+)([a-zA-Z0-9]+)(?=\s+{)/;

    return testString.match(interfaceNameRegex)?.[0] ?? 'nameNotFound';
};

const getKeys = (testString: string): string[] => {
    const keysRegex = /(?<=\s)([a-zA-Z0-9]+)(?=\s{0,}:)/g;

    return testString.match(keysRegex) ?? [];
};

const getTypes = (testString: string): string[] => {
    const typesRegex = /(?<=:\s{0,})([a-zA-Z0-9]+)(?=[\s|;])/g;

    return testString.match(typesRegex) ?? [];
};

const buildEntries = (
    keys: string[],
    types: string[]
): { key: string; type: string }[] => {
    return keys.map((key, index) => {
        return { key, type: types[index] ?? 'wrongValue' };
    });
};

export const createMockFromInterface = (inputInterface: string) => {
    const mockedDataStructure: MockedDataStructureType = {
        name: getInterfaceName(inputInterface),
        entries: buildEntries(
            getKeys(inputInterface),
            getTypes(inputInterface)
        ),
    };
    console.log(mockedDataStructure);

    return inputInterface;
};
