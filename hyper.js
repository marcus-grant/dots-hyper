// Future versions of Hyper may add additional config options,
// which will not automatically be merged into this file.
// See https://hyper.is#cfg for all currently supported options.

module.exports = {
  config: {
    // default font size in pixels for all tabs
    fontSize: 13,

    // font family with optional fallbacks
    fontFamily: '"Iosevka Medium", "Fira Code", Menlo, "DejaVu Sans Mono", Consolas, "Lucida Console", monospace',

    // terminal cursor background color and opacity (hex, rgb, hsl, hsv, hwb or cmyk)
    cursorColor: 'rgba(248,28,229,0.8)',

    // `BEAM` for |, `UNDERLINE` for _, `BLOCK` for 
    cursorShape: 'BLOCK',

    // set to true for blinking cursor
    cursorBlink: false,

    // color of the text
    foregroundColor: '#fff',

    // terminal background color
    backgroundColor: '#222',

    // border color (window, tabs)
    borderColor: '#333',
    // borderColor: '#ccc',
    // border: '4px',

    // custom css to embed in the main window
    css: '',

    // set to `true` (without backticks) if you're using a Linux setup that doesn't show native menus
    // default: `false` on Linux, `true` on Windows (ignored on macOS)
    showHamburgerMenu: '',

    // set to `false` if you want to hide the minimize, maximize and close buttons
    // additionally, set to `'left'` if you want them on the left, like in Ubuntu
    // default: `true` on windows and Linux (ignored on macOS)
    showWindowControls: '',

    // custom padding (css format, i.e.: `top right bottom left`)
    padding: '8px 8px',

    // the full list. if you're going to provide the full color palette,
    // including the 6 x 6 color cubes and the grayscale map, just provide
    // an array here instead of a color map object
    // base16: {
    //   scheme: 'atelier',
    // },

    base16: {
      scheme: 'atelier',
    },
    // colors: {
    //   black: '#000000',
    //   red: '#C51E14',
    //   green: '#1DC121',
    //   yellow: '#C7C329',
    //   blue: '#0A2FC4',
    //   magenta: '#C839C5',
    //   cyan: '#20C5C6',
    //   white: '#C7C7C7',
    //   lightBlack: '#686868',
    //   lightRed: '#FD6F6B',
    //   lightGreen: '#67F86F',
    //   lightYellow: '#FFFA72',
    //   lightBlue: '#6A76FB',
    //   lightMagenta: '#FD7CFC',
    //   lightCyan: '#68FDFE',
    //   lightWhite: '#FFFFFF',
    // },

    // the shell to run when spawning a new session (i.e. /usr/local/bin/fish)
    // if left empty, your system's login shell will be used by default
    // make sure to use a full path if the binary name doesn't work
    // (e.g `C:\\Windows\\System32\\bash.exe` instead of just `bash.exe`)
    // if you're using powershell, make sure to remove the `--login` below
    // shell: 'bash',
    shell: `C:\\Windows\\System32\\bash.exe`,

    // for setting shell arguments (i.e. for using interactive shellArgs: ['-i'])
    // by default ['--login'] will be used
    shellArgs: ['--login'],

    // for environment variables
    env: {},

    // set to false for no bell
    // bell: 'SOUND',
    bell: false,

    // if true, selected text will automatically be copied to the clipboard
    copyOnSelect: true

    // if true, on right click selected text will be copied or pasted if no
    // selection is present (true by default on Windows)
    // quickEdit: true

    // URL to custom bell
    // bellSoundURL: 'http://example.com/bell.mp3',

    // for advanced config flags please refer to https://hyper.is/#cfg
  },

  // a list of plugins to fetch and install from npm
  // format: [@org/]project[#version]
  // examples:
  //   `hyperpower`
  //   `@company/project`
  //   `project#1.0.1`
  plugins: [
    'hyperlinks',
    'hypersixteen',
    // 'shades-of-purple-hyper',
    // 'hypercwd',
  ],

  // in development, you can create a directory under
  // `~/.hyper_plugins/local/` and include it here
  // to load it and avoid it being `npm install`ed
  localPlugins: []
};
