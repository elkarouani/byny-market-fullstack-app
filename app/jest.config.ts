import type {Config} from '@jest/types';

export default async (): Promise<Config.InitialOptions> => {
  return {
    verbose: true,
    "setupFilesAfterEnv": [
      "<rootDir>/setupTests.ts"
    ],
    "moduleNameMapper": {
      "^components/(.*)": "<rootDir>/components/",
    }
  };
};