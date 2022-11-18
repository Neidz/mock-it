interface MockedDataStructure {
    name: string;
    values: {
        name: string;
        type: string;
    }[];
}

export const createMockFromInterface = (inputInterface: string) => {
    const nameTest = /interface\s([a-zA-Z0-9]+)\s{.+/;
    const name = inputInterface.match(nameTest)?.[1] ?? 'nameNotFound';

    return name;
};
