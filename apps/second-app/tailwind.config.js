const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');


const firstPath = join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    );

console.log('firstPath', firstPath);

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    // TODO: "createGlobPatternsForDependencies" is supposed to figure this out for us, but I had to add it manually
    join(
      '/Users/markthompson/Documents/github/nx-react-vite-stuff/example/libs/shared',
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
