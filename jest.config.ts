import type { Config } from 'jest'
import nextJest from 'next/jest.js'
 
const createJestConfig = nextJest({
  dir: './',
})
 
const config: Config = {
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1'  
  },
  transformIgnorePatterns: [
    '/node_modules/(?!(@clerk/nextjs|@clerk/backend)/)'
  ],
  moduleDirectories: ['node_modules', '<rootDir>']
}
 
export default createJestConfig(config)