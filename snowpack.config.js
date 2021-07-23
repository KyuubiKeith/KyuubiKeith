// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {

  mount: {

    "01_Public": '/',
    "02_Source": { url: '/Source' },

  },

  alias: {

    Fonts: '/Public/Assets/Fonts',
    Images: './Public/Assets/Images',

  },


  plugins: [

    
    ['@snowpack/plugin-react-refresh'],
    ['@snowpack/plugin-webpack'],
    ['@snowpack/plugin-sass'],

  ],

  packageOptions: {
    

  },

  devOptions: {
    /* ... */
  },

  buildOptions: {
    
    out: 'Build'

  }

};
