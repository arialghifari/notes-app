import { createContext } from 'react';

const LocaleContext = createContext();
const LocaleProvider = LocaleContext.Provider;

export { LocaleProvider };
export default LocaleContext;
