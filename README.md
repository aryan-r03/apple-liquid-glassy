# 🎨 Glassify Theme for Spicetify

Glassify is a sleek, glass-like **Spicetify** theme for Spotify with a modern,
translucent interface, smooth animations, and customizable elements for an
immersive music experience. Spotify remains responsible for playback,
navigation, search, playlists, authentication, and library data.

## Features

- Layered translucent surfaces, refined highlights, and rounded panels.
- Artwork-reactive static or animated backgrounds and a solid-color option.
- Customizable background filters and player layout from Glassify settings.
- A Settings button in Spotify's top toolbar for quick access to theme options.

## Install from source

Requirements: Spotify Desktop, [Spicetify CLI](https://spicetify.app/docs/getting-started),
and [Bun](https://bun.sh/).

```bash
git clone https://gitlab.com/sanoojes/spicetify-glassify.git
cd spicetify-glassify
bun install
bun run build
```

Copy the generated theme and apply it on macOS or Linux:

```bash
THEME_DIR="$(spicetify config-dir)/Themes/Glassify"
mkdir -p "$THEME_DIR"
cp -R dist/. "$THEME_DIR/"
spicetify config current_theme Glassify
spicetify config color_scheme dark
spicetify config inject_css 1 replace_colors 1 overwrite_assets 1 inject_theme_js 1
spicetify apply
```

Open Spotify and click **Glassify Settings** in its top toolbar to configure
glass intensity, blur, transparency, ambient brightness, artwork ambience,
animation, corner radius, and contrast. Settings are saved locally by the theme.

## Develop and verify

Run `bun run build:theme` to rebuild the Spicetify theme, or `bun run build` to
also build the documentation. After a source change, copy the new `dist/` files
to the Spicetify theme directory and run `spicetify apply`.

Check home, search, library, album and playlist pages, contextual menus, the
player, and the settings panel at compact and wide Spotify window sizes.

## Contributing

Contributions are welcome. Build the theme before submitting changes, include
screenshots for visual updates, and mention compatibility notes. Project
development and issue reporting are hosted on
[GitLab](https://gitlab.com/sanoojes/spicetify-glassify).

Glassify is an independent community theme and is not affiliated with Spotify
or Apple.

🔗 Explore the full documentation:
[Glassify Docs](https://spicetify-glassify.sanooj.uk/)

📜 Licensed under the [AGPLv3 License](LICENSE).

> **Development & Contributions**
> The main development for this project happens on [GitLab](https://gitlab.com/sanoojes/spicetify-glassify).
> If you encounter any bugs or have feature requests, please [report an issue](https://gitlab.com/sanoojes/spicetify-glassify/-/work_items).
