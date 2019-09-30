export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('state');
        if (serializedState === null) {
            return undefined;
        }
        console.log('LocalStorage: loadState() succeed. state: '+serializedState);
        return JSON.parse(serializedState);
    } catch (err) {
        console.log(Error('LocalStorage: loadState() Failed. Error: '+err));
        return undefined;
    }
};

export const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        console.log('LocalStorage: saveState() succeed. state: '+serializedState);
        localStorage.setItem('state', serializedState);
    } catch (err) {
        console.log(Error('LocalStorage: saveState() Failed. Error: '+err));
    }
}
